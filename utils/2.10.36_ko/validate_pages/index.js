const fsPromises = require('node:fs/promises')
const fs = require('node:fs')
const path = require('node:path')

const hasPrevPage = require('./has_prev_page')
const hasNextPage = require('./has_next_page')

const doAsyncJob = async () => {
  try {
    // 1. 모든 페이지 파일의 목록을 가져온다.
    const pageFileListPath = `${path.normalize(`${__dirname}/../../..`)}/2.10.36_ko`
    
    // 1-1. 파일 경로 검사
    fs.access(pageFileListPath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error(`\n[에러]\n파일 경로 "${pageFileListPath}"가 유효하지 않습니다.`)
        throw err
      }
    });
    
    // 1-2. 파일 목록 가져오기
    const files = await fsPromises.readdir(pageFileListPath)
    // const files = ['03-02-05-01-organizing-dialogs.md']; // NOTE: 개별 파일 검사시 사용
    console.log(`모두 ${files.length} 개의 파일을 검사합니다.`)

    for (let i = 0; i < files.length; i++) {
      // 개별 검사 함수 호출
      // 1. 이전 페이지 검사
      // hasPrevPage.doAsyncJob(pageFileListPath, files, i)

      // 2. 다음 페이지 검사
      hasNextPage.doAsyncJob(pageFileListPath, files, i)

    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();