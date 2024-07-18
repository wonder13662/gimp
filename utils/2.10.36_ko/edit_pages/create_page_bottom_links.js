const { 
  extractPageNumberChain, 
  readFile, 
  getPageRootPath, 
  readAllFileNames, 
  getPageTitle, 
  getParentPageNumberChains,
  isValidPath,
  appendText,
  convertFileNamesToFileChainNumberMap,
} = require('../utils')

const getPageTitleNFileName = async (pageRootPath, files, fileNumberChainMap, pageChainNumber) => {
  const pageIdx = fileNumberChainMap.get(pageChainNumber)
  const pageFileName = files[pageIdx]
  const pageContent = await readFile(`${pageRootPath}/${pageFileName}`)
  const pageTitle = getPageTitle(pageContent)

  return {
    pageFileName,
    pageTitle,
  }
}

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

    // 2. 대상 페이지
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

    // 3. 대상 페이지의 이전 페이지 링크 만들기
    let prevPageLink = '[⬅️ 이전: ?]()'
    if (targetPageIdx > 0) {
      const prevPageIdx = targetPageIdx - 1
      const prevPageFileName = files[prevPageIdx]
      const prevPageChainNumber = extractPageNumberChain(prevPageFileName)
      const { pageTitle } = await getPageTitleNFileName(pageRootPath, files, fileNumberChainMap, prevPageChainNumber)
      prevPageLink = `[⬅️ 이전: ${pageTitle}](./${prevPageFileName})`
    }

    // 4. 대상 페이지의 다음 페이지 링크 만들기
    let nextPageLink = '[➡️ 다음: ?]()'
    if (targetPageIdx < files.length - 1) {
      const nextPageIdx = targetPageIdx + 1
      const nextPageFileName = files[nextPageIdx]
      const nextPageChainNumber = extractPageNumberChain(nextPageFileName)
      const { pageTitle } = await getPageTitleNFileName(pageRootPath, files, fileNumberChainMap, nextPageChainNumber)
      nextPageLink = `[➡️ 다음: ${pageTitle}](./${nextPageFileName})`
    }

    // 5. 부모 페이지 링크 만들기
    const parentPageChainNumbers = getParentPageNumberChains(targetPage)
    console.log('parentPageChainNumbers:', parentPageChainNumbers)
    const parentPageLinks = []

    for (let i = 0; i < parentPageChainNumbers.length; i++) {
      const parentPageChainNumber = parentPageChainNumbers[i]
      const { pageFileName, pageTitle } = await getPageTitleNFileName(pageRootPath, files, fileNumberChainMap, parentPageChainNumber)
      parentPageLinks.unshift(`[⬆️ 위: ${pageTitle}](./${pageFileName})`)
    }

    // 6. 홈 링크 추가하기
    const homeLink = '[🏠 홈](./00-home.md)'

    // 7. 비어있는 원문 링크 추가하기
    const sourceLinkEmpty = '[원문]()'

    // 8. 이 내용을 해당 파일의 마지막 부분에 덧붙이기
    const targetPageName = files[targetPageIdx]
    const targetPagePath = `${pageRootPath}/${targetPageName}`
    const pageBottomLinks = [
      '\n',
      '***',
      '',
      '## 다른 페이지로 가기',
      '',
      nextPageLink,
      '',
      prevPageLink,
      '',
      parentPageLinks.join('\n\n'),
      '',
      homeLink,
      '',
      sourceLinkEmpty,
    ].join('\n')

    console.log([
      '\n',
      '[정보] 대상 페이지 경로',
      targetPagePath,
      '[정보] 하단 페이지 링크 내용',
      pageBottomLinks,
    ].join('\n'))

    await appendText(targetPagePath, pageBottomLinks)

  } catch (err) {
    console.error(err);
  }  
}
doAsyncJob('90-10-48-01-01-shift_ctrl_p.md')