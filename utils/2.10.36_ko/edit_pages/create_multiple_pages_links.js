const { 
  getPageRootPath,
  readFile,
  readAllFileNames, 
  isValidPath,
  appendText,
  convertFileNamesToFileChainNumberMap,
  extractPageNumberChain,
} = require('../utils')

const {
  doAsyncJob: createChildrenPageLinks,
} = require('./create_children_page_links')

const {
  doAsyncJob: createPageNavigationLinks,
} = require('./create_page_navigation_links')


const doAsyncJob = async () => {
  try {
    // 1-1. 시작 페이지 이름
    const head = '16-00-menus.md'
    // 1-2. 종료 페이지 이름
    // const tail = '16-05-01-introduction-to-the-view-menu.md'
    const tail = head

    // 2. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = getPageRootPath()
    
    // 3. 파일 경로 검사
    await isValidPath(pageRootPath)
    
    // 4. 파일 목록 가져오기
    const files = await readAllFileNames(pageRootPath)

    // 5. 파일 맵 만들기
    const fileChainNumberMap = convertFileNamesToFileChainNumberMap(files)

    // 6. 파라미터 유효성 검사
    // 6-1. 사용자가 입력한 시작 페이지와 종료 페이지가 유효한지 확인하기
    const headNumber = extractPageNumberChain(head)
    if (!fileChainNumberMap.has(headNumber)) {
      throw new Error(
        [
          '\n',
          '[에러] 시작 페이지가 파일 목록에 없습니다.',
          `시작페이지: ${head}`,
        ].join('\n')
      )
    }
    const tailNumber = extractPageNumberChain(tail)
    if (!fileChainNumberMap.has(tailNumber)) {
      throw new Error(
        [
          '\n',
          '[에러] 종료 페이지가 파일 목록에 없습니다.',
          `종료 페이지: ${tail}`,
        ].join('\n')
      )
    }

    // 6-2. 시작 페이지는 종료 페이지와 같거나 더 이전의 페이지이어야 합니다.
    const headIdx = fileChainNumberMap.get(headNumber)
    const tailIdx = fileChainNumberMap.get(tailNumber)
    if (!(headIdx <= tailIdx)) {
      throw new Error(
        [
          '\n',
          '[에러] 시작 페이지는 종료 페이지와 같거나 더 이전의 페이지이어야 합니다.',
          `시작 페이지: ${head}`,
          `시작 페이지 인덱스: ${headIdx}`,
          `종료 페이지: ${tail}`,
          `종료 페이지 인덱스: ${tailIdx}`,
        ].join('\n')
      )
    }

    // 7. 페이지 목록을 순회하면서 페이지 링크를 추가합니다.
    for (let i = headIdx; i <= tailIdx; i++) {
      const file = files[i]      
      const fileNumberChain = extractPageNumberChain(file)
      const fileNumbers = fileNumberChain.split('-')
      const lastNumber = fileNumbers[fileNumbers.length - 1]
      if (Number(lastNumber) === 0) {
        // 7-1. 페이지가 하위 페이지를 가진다면, 하위 페이지를 추가합니다.
        await createChildrenPageLinks(file)
      }

      // 7-2. 페이지의 내비게이션 링크를 추가합니다.
      await createPageNavigationLinks(file)
    }

  } catch (err) {
    console.error(err);
  }      
}
doAsyncJob()