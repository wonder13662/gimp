const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

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
    fs.access(pagePath, fs.constants.R_OK, (err) => {
      if (err) {
        console.error(`\n[에러]\n개별 페이지("${files[i]}")의 경로 "${pageRootPath}"가 유효하지 않습니다.`)
        throw err
      }
    });

    const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });

    // 1-2-2. 페이지 내의 다른 페이지 링크 추출하기
    const pageWithAnchorList = contents.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md#[0-9a-z\-_]+(?=\))/g);
    if (pageWithAnchorList) {
      for (let j = 0; j < pageWithAnchorList.length; j++) {
        const pageWithAnchor = pageWithAnchorList[j];
        const location = `${pagePath}\n${pageWithAnchor}`;

        const page = pageWithAnchor.match(/^.+(?=\#.+)/g);
        if (!page) {
          const msg = '페이지 정보가 유효하지 않습니다.'
          throw new Error(`\n[에러]\n${location}\n${msg}`)
        }
        const anchor = pageWithAnchor.match(/(?<=\#).+/g);
        if (!anchor) {
          const msg = '앵커 정보가 유효하지 않습니다.'
          throw new Error(`\n[에러]\n${location}\n${msg}`)
        }

        // 페이지 내의 다른 페이지 링크가 유효한지 확인합니다.
        fs.access(`${pageRootPath}/${page}`, fs.constants.R_OK, (err) => {
          if (err) {
            const msg = '페이지 정보가 유효하지 않습니다.';
            console.log(`${location}\n${msg}`);
            throw err;
          }
        });

        // 페이지 링크가 유효하므로, 페이지 내에 앵커 태그가 있는지 확인합니다.
        const pageWithAnchorPath = `${pageRootPath}/${page}`;
        const pageContents = await fsPromises.readFile(pageWithAnchorPath, { encoding: 'utf8' });
        const anchorTag = `<a id="${anchor}"></a>`
        if (pageContents.indexOf(anchorTag) === -1) {
          const msg = `페이지 내에 앵커 태그(${anchorTag})가 없습니다.`;

          throw new Error(`\n[에러]\n${location}\n${msg}`)
        }
      }
    }

    const pageList = contents.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md(?=\))/g)
    if (pageList) {
      for (let j = 0; j < pageList.length; j++) {
        const page = pageList[j];
        const location = `${pagePath}\n${page}`;

        // 페이지 내의 다른 페이지 링크가 유효한지 확인합니다.
        fs.access(`${pageRootPath}/${page}`, fs.constants.R_OK, (err) => {
          if (err) {
            const msg = '페이지 정보가 유효하지 않습니다.';
            console.log(`\n[에러]\n${location}\n${msg}`);
            throw err;
          }
        });        
      }
    }

    // TODO 페이지 링크와 페이지 제목의 숫자가 일치하는지 확인!
    // [⬆️ 위: 14.3.11. 잉크(Ink)](./14-03-11-00-ink.md)
  },
}