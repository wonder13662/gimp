const fs = require('node:fs/promises');
// 1. 새로 만들 페이지 목록 정의
const { pageBaseNo, pageFileNameTemplate, pages } = require('./pages')

const getPageNo = (idx) => `${pageBaseNo}${idx + 1}.`
const getPageNo2Digits = (idx) => `${idx + 1}`.padStart(2, '0')
const getPageFileName = (idx) => idx > -1 ? pageFileNameTemplate.replace('${page_no_two_digits}', getPageNo2Digits(idx)).replace('${page_name_in_file}', pages[idx].page_file_name) : ''
const getPageFullName = (idx) => `${getPageNo(idx)} ${pages[idx].page_name_ko}(${pages[idx].page_name_en})`

const doAsyncJob = async () => {
  // 2. 샘플 페이지 정보 읽어오기
  const path = __dirname + '/output'

  try {
    // 2-1. 샘플 페이지 파일 정보 읽어오기
    let data = await fs.readFile('./page_template.md', 'utf8')
    
    // 2-2. 목록 아이템 별 페이지 작성하기
    for (let idx = 0; idx < pages.length; idx++) {
      // 2-2-1. 파일 이름 만들기
      const pageFileName = getPageFileName(idx)
      // (예시) page_name: 90.1.10.2.1. 도구 옵션
      const page_name = getPageFullName(idx)
      // (예시) page: ./90-01-10-windowsx-02-dockable_dialogsx-01-tool_options.md
      const page = `./${getPageFileName(idx)}`

      const pageLink = `[${page_name}](${page})`
      console.log(`${pageLink}\n`)
    }    

  } catch (err) {
    console.error(err);
  }
}
doAsyncJob()

