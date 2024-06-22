const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

const extractPrevPageLine = (line) => {
  const result = line.match(/\[⬅️ 이전:.+/g);

  if (result && result[0]) {
    return result[0]
  }

  return ''
}
const hasPrevPageLine = (line) => !!extractPrevPageLine(line)

const extractPageLink = (line) => {
  const result = line.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md(?=\))/g);

  if (result && result[0]) {
    return result[0];
  }

  return '';
}

const extractPrevPageTitle = (line) => {
  const result = line.match(/(?<=\[⬅️ 이전: ).+(?=\])/g);

  if (result && result[0]) {
    return result[0];
  }

  return '';
}

module.exports = {
  doAsyncJob: async (pageFileListPath, files, i) => {
    // 1. 파라미터 검사
    // 1-1. 페이지 경로
    if (!pageFileListPath) {
      throw new Error([
        '\n[에러] 1-1. 페이지의 경로가 유효하지 않습니다',
        `경로: "${pageFileListPath}"`,
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
    const pagePath = `${pageFileListPath}/${fileName}`;
    fs.access(pagePath, fs.constants.R_OK, (err) => {
      if (err) {
        throw new Error([
          '\n[에러] 2-1. 페이지의 경로가 유효하지 않습니다',
          `페이지: "${fileName}"`,
          `경로: "${pageFileListPath}"`,
        ].join('\n'))
      }
    });

    const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
    
    if (i > 0 && hasPrevPageLine(contents)) {
      // 3-1. 현재 페이지의 이전 페이지가 있는 경우
      const line = extractPrevPageLine(contents)
      const link = extractPageLink(line)

      if (!link) {
        throw new Error([
          '\n[에러] 3-1. 이전 페이지의 링크가 유효하지 않습니다.',
          `페이지: "${fileName}"`,
          `행: "${line}"`,
        ].join('\n'))
      }

      // 3-2. 이전 페이지의 이름이 파일 목록 이름과 일치하는지 확인
      const prevFileName = files[i-1]
      if (link !== prevFileName) {
        console.error()
        throw new Error([
          '\n[에러] 3-2. 이전 페이지 파일의 이름이 일치하지 않습니다.',
          `페이지: "${fileName}"`,
          `이전 페이지: "${link}"`,
          `실제 파일 이름: "${prevFileName}"\n`,
        ].join('\n'))
      }

      // 3-3. 제목 비교하기
      const title = extractPrevPageTitle(line);
      const prevPagePath = `${pageFileListPath}/${prevFileName}`;
      const prevPageContents = await fsPromises.readFile(prevPagePath, { encoding: 'utf8' });

      if (prevPageContents.indexOf(title) < 0) {
        throw new Error([
          '\n[에러] 3-3. 이전 페이지의 제목이 일치하지 않습니다.',
          `페이지: "${fileName}"`,
          `이전 페이지: "${prevFileName}"`,
          `제목: "${title}"\n`,
        ].join('\n'))
      }
    }
  },
}