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
        console.error(`파일 경로 "${pageFileListPath}"가 유효하지 않습니다.`)
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
          console.error(`개별 페이지("${files[i]}")의 경로 "${pageFileListPath}"가 유효하지 않습니다.`)
          throw err
        }
      });
  
      const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
  
      // 1-2-2. 페이지 내의 다른 페이지 링크 추출하기
      const regex = /(?<=\(\.\/).+(?=\))/g;
      const found = contents.match(regex);    
  
      // 1-2-3. 페이지 내의 다른 페이지 링크가 실제 페이지 파일을 가리키고 있는지 검사
      for (let j = 0; j < found.length; j++) {
        const pageLink = `${pageFileListPath}/${found[j]}`;
        fs.access(pageLink, fs.constants.R_OK, (err) => {
          if (err) {
            console.error(`개별 페이지("${files[i]}")의 페이지 링크 "${found[j]}"가 유효하지 않습니다.`)
            throw err
          }
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();