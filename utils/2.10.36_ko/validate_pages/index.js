const fsPromises = require('node:fs/promises')
const fs = require('node:fs')
const path = require('node:path')

const hasPrevPage = require('./has_prev_page')
const hasNextPage = require('./has_next_page')
const hasParentPage = require('./has_parent_page')
const hasUnrelatedParentPage = require('./has_unrelated_parent_page')
const validateLinksInPage = require('./validate_links_in_page')

const doAsyncJob = async () => {
  try {
    // 1. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = `${path.normalize(`${__dirname}/../../..`)}/2.10.36_ko`
    
    // 1-1. 파일 경로 검사
    fs.access(pageRootPath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error(`\n[에러]\n파일 경로 "${pageRootPath}"가 유효하지 않습니다.`)
        throw err
      }
    });
    
    // 1-2. 파일 목록 가져오기
    const files = await fsPromises.readdir(pageRootPath)
    // const files = ['03-02-05-01-organizing-dialogs.md']; // NOTE: 개별 파일 검사시 사용
    // const files = ['14-03-05-03-01-mode.md']; // NOTE: 개별 파일 검사시 사용
    console.log(`모두 ${files.length} 개의 파일을 검사합니다.`)

    // 1-3. 파일 맵(숫자로만 구성)을 만들어 검색에 활용하기
    const fileNumberSet = files.reduce((acc, v) => {
      const tokens = v.split('-')
      const fileNumbers = tokens.reduce((pv, token) => {
        if (pv === '') {
          return Number(token) > -1 ? token : pv
        }
        return Number(token) > -1 ? `${pv}-${token}` : pv
      }, '')

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
      validateLinksInPage.doAsyncJob(pageRootPath, files, i)

    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();