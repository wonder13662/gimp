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

      // 2-2-2. 파일 내용 바꾸기
      let content = data.replaceAll('${page_no}', getPageNo(idx)).replaceAll('${page_name_ko}', pages[idx].page_name_ko).replaceAll('${page_name_en}', pages[idx].page_name_en)

      // 2-2-3. 이전 페이지 추가하기
      const hasPrev = idx > 0
      const prevIdx = idx - 1
      // (예시) page_name_prev: 90.1.10.2.1. 도구 옵션
      const page_name_prev = hasPrev ? getPageFullName(prevIdx) : ''
      content = content.replace('${page_name_prev}', page_name_prev)
      // (예시) page_prev: ./90-01-10-windowsx-02-dockable_dialogsx-01-tool_options.md
      const page_prev = hasPrev ? `./${getPageFileName(prevIdx)}` : ''
      content = content.replace('${page_prev}', page_prev)

      // 2-2-4. 다음 페이지 추가하기
      const hasNext = idx < pages.length - 1
      const nextIdx = idx + 1
      // (예시) page_name_next: 90.1.10.2.3. 레이어
      const page_name_next = hasNext ? getPageFullName(nextIdx) : ''
      content = content.replace('${page_name_next}', page_name_next)
      // (예시) page_next: ./90-01-10-windowsx-02-dockable_dialogsx-03-layers.md
      const page_next = hasNext ? `./${getPageFileName(nextIdx)}` : ''
      content = content.replace('${page_next}', page_next)

      // 2-2-5. 새로운 페이지 파일 추가하기
      const targetPath = pageFileName
      await fs.writeFile(targetPath, content);
    }    

  } catch (err) {
    console.error(err);
  }
}
doAsyncJob()

