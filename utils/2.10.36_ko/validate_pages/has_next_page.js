const { extractPageLink, readFile } = require('../utils')

const extractNextPageLine = (line) => {
  const result = line.match(/\[➡️ 다음:.+/g);

  if (result && result[0]) {
    return result[0]
  }

  return ''
}
const hasNextPageLine = (line) => !!extractNextPageLine(line)

const extractNextPageTitle = (line) => {
  const result = line.match(/(?<=\[➡️ 다음: ).+(?=\])/g);

  if (result && result[0]) {
    return result[0];
  }

  return '';
}

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

    // 2-1. 개별 페이지 내용 가져오기
    const fileName = files[i];
    const pagePath = `${pageRootPath}/${fileName}`;
    const contents = await readFile(pagePath)

    const lastPageIdx = files.length - 1
    if (i < lastPageIdx && hasNextPageLine(contents)) {
      // 3-1. 현재 페이지의 다음 페이지가 있는 경우
      const line = extractNextPageLine(contents)
      const link = extractPageLink(line)

      if (!link) {
        throw new Error([
          '\n[에러] 3-1. 다음 페이지의 링크가 유효하지 않습니다.',
          `페이지: "${fileName}"`,
          `행: "${line}"`,
        ].join('\n'))
      }        

      // 3-2. 다음 페이지의 이름이 파일 목록 이름과 일치하는지 확인
      const nextFileName = files[i + 1]
      if (link !== nextFileName) {
        throw new Error([
          '\n[에러] 3-2. 다음 페이지 파일의 이름이 일치하지 않습니다.',
          `페이지: "${fileName}"`,
          `다음 페이지: "${link}"`,
          `실제 파일 이름: "${nextFileName}"\n`,
        ].join('\n'))
      }

      // 3-3. 제목 비교하기
      const title = extractNextPageTitle(line);
      const nextPagePath = `${pageRootPath}/${nextFileName}`;
      const nextPageContents = await readFile(nextPagePath);

      if (nextPageContents.indexOf(title) < 0) {
        throw new Error([
          '\n[에러] 3-3. 다음 페이지의 제목이 일치하지 않습니다.',
          `페이지: "${fileName}"`,
          `다음 페이지: "${nextFileName}"`,
          `제목: "${title}"\n`,
        ].join('\n'))
      }
    }    
  },
}