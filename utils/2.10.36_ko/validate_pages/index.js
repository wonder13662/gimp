const hasPrevPage = require('./has_prev_page')
const hasNextPage = require('./has_next_page')
const hasParentPage = require('./has_parent_page')
const hasUnrelatedParentPage = require('./has_unrelated_parent_page')
const validateLinksInPage = require('./validate_links_in_page')
const hasBrokenLoopLink = require('./has_broken_loop_link')

const { 
  extractPageNumberChain, 
  getPageRootPath, 
  readAllFileNames, 
  isValidPath 
} = require('../utils')

const doAsyncJob = async () => {
  try {
    // 1. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = getPageRootPath()
    
    // 1-1. 파일 경로 검사
    await isValidPath(pageRootPath)
    
    // 1-2. 파일 목록 가져오기
    const files = await readAllFileNames(pageRootPath)
    // const files = ['15-02-01-02-02-03-layer_thumbnail.md']; // NOTE: 개별 파일 검사시 사용
    console.log(`모두 ${files.length} 개의 파일을 검사합니다.`)

    // 1-3. 파일 맵(숫자로만 구성)을 만들어 검색에 활용하기
    const fileNumberSet = files.reduce((acc, v) => {
      const fileNumbers = extractPageNumberChain(v)

      acc.add(fileNumbers)

      return acc
    }, new Set())

    for (let i = 0; i < files.length; i++) {
      // 개별 검사 함수 호출
      // 1. 이전 페이지 검사
      // hasPrevPage.doAsyncJob(pageRootPath, files, i)

      // 2. 다음 페이지 검사
      // hasNextPage.doAsyncJob(pageRootPath, files, i)
      
      // 3. 부모 페이지 검사
      // hasParentPage.doAsyncJob(pageRootPath, files, i, fileNumberSet)

      // 4. 페이지 내의 관련없는 부모 페이지 링크 여부 검사
      // hasUnrelatedParentPage.doAsyncJob(pageRootPath, files, i)

      // 5. 페이지 내의 모든 링크 유효성 검사
      // validateLinksInPage.doAsyncJob(pageRootPath, files, i)

      // 6. 페이지 내의 콘텐츠와 콘텐츠 페이지 간의 링크 연결고리(Loop Link) 검사
      // hasBrokenLoopLink.doAsyncJob(pageRootPath, files, i)
    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();