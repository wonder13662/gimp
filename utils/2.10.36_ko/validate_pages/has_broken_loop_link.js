const { readFile, extractPageAnchorLinks } = require('../utils')

module.exports = {
  doAsyncJob: async (pageRootPath, files, i) => {
    // 1. 파라미터 검사
    // 1-1. 페이지 경로
    if (!pageRootPath) {
      throw new Error([
        '\n[에러] 1-1. 페이지의 경로가 유효하지 않습니다',
        `경로: "${pageRootPath}"`,
      ].join('\n'))
    }

    // 1-2. 파일 목록
    if (!files || files.length === 0) {
      throw new Error([
        '\n[에러] 1-2. 파일 목록이 유효하지 않습니다',
      ].join('\n'))
    }

    // 1-3. 파일 목록의 현재 인덱스
    if (i < 0) {
      throw new Error([
        '\n[에러] 1-3. 파일 목록의 현재 인덱스가 유효하지 않습니다',
        `인덱스: "${i}"`,
      ].join('\n'))
    }

    // 2. 대상 페이지의 "앵커 태그"를 가진 모든 링크 가져오기
    const 검사대상_파일이름 = files[i]
    const 검사대상_파일내용 = await readFile(`${pageRootPath}/${검사대상_파일이름}`)
    const 검사대상_파일의_앵커링크목록 = extractPageAnchorLinks(검사대상_파일내용, 검사대상_파일이름)

    // 3. 모든 링크가 가리키는 페이지에 대상 페이지 + "앵커 태그" 내용이 있는지 확인하기
    for (let i = 0; i < 검사대상_파일의_앵커링크목록.length; i++) {
      const {
        link,
        page,
        anchor,
      } = 검사대상_파일의_앵커링크목록[i];
      
      const 링크가_가리키는_페이지_내용 = await readFile(`${pageRootPath}/${page}`)
      const 되돌아오는_링크 = `${검사대상_파일이름}#${anchor}`
      const 되돌아오는_링크가_있나요 = 링크가_가리키는_페이지_내용.indexOf(되돌아오는_링크) > -1

      if(!되돌아오는_링크가_있나요) {
        throw new Error([
          '\n[에러] 3. 되돌아오는 링크가 링크가 가리키는 페이지 안에 없습니다.',
          `검사대상 파일: ${검사대상_파일이름}`,
          `앵커링크: ${link}`,
        ].join('\n'))
      }
    }
  },
}