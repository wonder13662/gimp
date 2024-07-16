const { 
  readFile, 
  extractPageAnchorLinks,
  isValidPath,
} = require('../utils')

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

    // 1-2-1. 개별 페이지 내용 가져오기
    const pagePath = `${pageRootPath}/${files[i]}`;
    const contents = await readFile(pagePath)

    // 1-2-2. 페이지 내의 다른 페이지 링크 추출하기
    const pageWithAnchorList = extractPageAnchorLinks(contents);
    for (let j = 0; j < pageWithAnchorList.length; j++) {
      const {
        link,
        page,
        anchor,
      } = pageWithAnchorList[j];

      // 페이지 내의 다른 페이지 링크가 유효한지 확인합니다.
      await isValidPath(`${pageRootPath}/${page}`)

      // 페이지 링크가 유효하므로, 페이지 내에 앵커 태그가 있는지 확인합니다.
      const pageWithAnchorPath = `${pageRootPath}/${page}`;
      const pageContents = await readFile(pageWithAnchorPath);
      const anchorTag = `<a id="${anchor}"></a>`
      const location = `${pagePath}\n${page}`;
      if (pageContents.indexOf(anchorTag) === -1) {
        const msg = `페이지 내에 앵커 태그(${anchorTag})가 없습니다.`;

        throw new Error(`\n[에러]\n${location}\n${msg}`)
      }
    }

    const pageList = contents.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md(?=\))/g)
    if (pageList) {
      for (let j = 0; j < pageList.length; j++) {
        const page = pageList[j];
        const location = `${pagePath}\n${page}`;

        // 페이지 내의 다른 페이지 링크가 유효한지 확인합니다.
        await isValidPath(`${pageRootPath}/${page}`)
      }
    }
  },
}