const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

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
    const files = await fsPromises.readdir(pageFileListPath);
    console.log(`모두 ${files.length} 개의 파일을 검사합니다.`)

    for (let i = 0; i < files.length; i++) {
      // 1-2-1. 개별 페이지 내용 가져오기
      const pagePath = `${pageFileListPath}/${files[i]}`;
      fs.access(pagePath, fs.constants.R_OK, (err) => {
        if (err) {
          console.error(`\n[에러]\n개별 페이지("${files[i]}")의 경로 "${pageFileListPath}"가 유효하지 않습니다.`)
          throw err
        }
      });

      console.log(`\n[검사 시작] 페이지: "${pagePath}"`)
  
      const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
  
      // 1-2-2. 페이지 내의 다른 페이지 링크 추출하기
      const pageWithAnchorList = contents.match(/(?<=\(\.\/)[0-9a-z\-]+\.md#[0-9a-z\-]+(?=\))/g);
      if (pageWithAnchorList) {
        console.log(`[정보] 페이지 링크(앵커 태그): ${pageWithAnchorList.length}개`)

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
          fs.access(`${pageFileListPath}/${page}`, fs.constants.R_OK, (err) => {
            if (err) {
              const msg = '페이지 정보가 유효하지 않습니다.';
              console.log(`${location}\n${msg}`);
              throw err;
            }
          });

          // 페이지 링크가 유효하므로, 페이지 내에 앵커 태그가 있는지 확인합니다.
          const pageWithAnchorPath = `${pageFileListPath}/${page}`;
          const pageContents = await fsPromises.readFile(pageWithAnchorPath, { encoding: 'utf8' });
          const anchorTag = `<a id="${anchor}"></a>`
          if (pageContents.indexOf(anchorTag) === -1) {
            const msg = `페이지 내에 앵커 태그(${anchorTag})가 없습니다.`;

            throw new Error(`\n[에러]\n${location}\n${msg}`)
          }
        }
      } else {
        console.log(`[정보] 페이지 링크(앵커 태그): 없음`)
      }

      const pageList = contents.match(/(?<=\(\.\/)[0-9a-z\-]+\.md(?=\))/g)
      if (pageList) {
        console.log(`[정보] 페이지 링크: ${pageList.length}개`)
        for (let j = 0; j < pageList.length; j++) {
          const page = pageList[j];
          const location = `${pagePath}\n${page}`;

          // 페이지 내의 다른 페이지 링크가 유효한지 확인합니다.
          fs.access(`${pageFileListPath}/${page}`, fs.constants.R_OK, (err) => {
            if (err) {
              const msg = '페이지 정보가 유효하지 않습니다.';
              console.log(`\n[에러]\n${location}\n${msg}`);
              throw err;
            }
          });        
        }
      } else {
        console.log(`[정보] 페이지 링크: 없음`)
      }
    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();