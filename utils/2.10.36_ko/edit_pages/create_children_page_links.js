const { 
  getPageRootPath, 
  readAllFileNames, 
  isValidPath,
  convertFileNamesToFileChainNumberMap,
  extractPageNumberChain,
  getParentPageNumberChains,
  readFile,
  getPageTitle,
  appendText,
} = require('../utils')

const doAsyncJob = async (targetPage) => {
  try {
    // 0. 대상 페이지 이름 검사
    if (!targetPage) {
      throw new Error([
        '\n[에러] 0. 대상 페이지가 설정되지 않았습니다.',
      ].join('\n'))
    }

    console.log([
      '\n',
      `[정보] 대상 페이지 파일 이름: ${targetPage}`,
    ].join('\n'))
    
    // 1. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = getPageRootPath()
    
    // 1-1. 파일 경로 검사
    await isValidPath(pageRootPath)
    
    // 1-2. 파일 목록 가져오기
    const files = await readAllFileNames(pageRootPath)

    // 1-3. 파일 맵(숫자로만 구성)을 만들어 검색에 활용하기
    const fileNumberChainMap = convertFileNamesToFileChainNumberMap(files)
    
    // 2-1. 대상 페이지의 페이지 번호 체인 만들기
    const targetPageNumberChain = extractPageNumberChain(targetPage)
    if (!targetPageNumberChain) {
      throw new Error([
        '\n[에러] 2-1. 대상 페이지의 페이지 번호 체인이 유효하지 않습니다.',
      ].join('\n'))
    }
    // 2-2. 대상 페이지의 인덱스 얻기
    if (!fileNumberChainMap.has(targetPageNumberChain)) {
      throw new Error([
        '\n',
        '[에러] 2-2. 파일 번호 맵에 대상 페이지가 없습니다.',
        `대상 페이지 번호 체인: ${targetPageNumberChain}`,
      ].join('\n'))
    }

    const targetPageIdx = fileNumberChainMap.get(targetPageNumberChain)
    console.log([
      '\n',
      `[정보] 대상 페이지 번호 체인: ${targetPageNumberChain}`,
      `[정보] 대상 페이지 인덱스: ${targetPageIdx}`,
    ].join('\n'))

    // 3. 하위(자식) 페이지 찾기
    // 3-1. 대상 페이지의 다음 페이지부터 최대 100 페이지까지 자식 페이지 여부 검사
    const range = 50
    const max = targetPageIdx + range > files.length ? files.length : targetPageIdx + range
    const childrenPageIndexList = []
    for (let i = targetPageIdx + 1; i < max; i++) {
      const candidatePageName = files[i]

      // 3-1-1. 부모 페이지가 없는 페이지라면 중단
      const parentsPageNumberChains = getParentPageNumberChains(candidatePageName)
      if (!parentsPageNumberChains || parentsPageNumberChains.length === 0) break

      // 3-1-2. 단 하나의 부모 페이지 체인 번호도 갖고 있지 않다면 자식 페이지의 범위 바깥이므로 중단
      const foundIdx = parentsPageNumberChains.findIndex((v) => v === targetPageNumberChain)
      if (foundIdx === -1) {
        break
      }

      childrenPageIndexList.push(i)
    }

    if (!childrenPageIndexList || childrenPageIndexList.length === 0) {
      throw new Error([
        '\n',
        '[에러] 3. 자식 페이지가 없습니다.',
        `대상 페이지: ${targetPage}`,
      ].join('\n'))      
    }

    const childrenPageLinks = []
    for (let i = 0; i < childrenPageIndexList.length; i++) {
      const pageIdx = childrenPageIndexList[i];
      const pageName = files[pageIdx]
      const pageContent = await readFile(`${pageRootPath}/${pageName}`)
      const pageTitle = getPageTitle(pageContent)
      childrenPageLinks.push(`[${pageTitle}](./${pageName})`)
    }

    const childrenPageLinkText = [
      '',
      '',
      '***',
      '',
      '## 하위 페이지',
      '',
      childrenPageLinks.join('\n\n'),
    ].join('\n')

    // console.log(childrenPageLinkText)
    await appendText(`${pageRootPath}/${targetPage}`, childrenPageLinkText)
  } catch (err) {
    console.error(err);
  }      
}
doAsyncJob('15-02-06-02-03-00-buttons.md');