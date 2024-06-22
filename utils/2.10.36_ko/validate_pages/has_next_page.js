const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

const extractNextPageLine = (line) => {
  const result = line.match(/\[➡️ 다음:.+/g);

  if (result && result[0]) {
    return result[0]
  }

  return ''
}
const hasNextPageLine = (line) => !!extractNextPageLine(line)

const extractPageLink = (line) => {
  const result = line.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md(?=\))/g);

  if (result && result[0]) {
    return result[0];
  }

  return '';
}

const extractNextPageTitle = (line) => {
  const result = line.match(/(?<=\[➡️ 다음: ).+(?=\])/g);

  if (result && result[0]) {
    return result[0];
  }

  return '';
}

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
    // const files = ['03-02-05-01-organizing-dialogs.md']; // NOTE: 개별 파일 검사시 사용
    console.log(`모두 ${files.length} 개의 파일을 검사합니다.`)

    for (let i = 0; i < files.length; i++) {
      const fileName = files[i];

      // 1. 개별 페이지 내용 가져오기
      const pagePath = `${pageFileListPath}/${fileName}`;
      fs.access(pagePath, fs.constants.R_OK, (err) => {
        if (err) {
          console.error(`\n[에러]\n개별 페이지("${fileName}")의 경로 "${pageFileListPath}"가 유효하지 않습니다.`)
          throw new Error('1. 개별 페이지 내용 가져오기')
        }
      });

      const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
      
      if (i < files.length - 1 && hasNextPageLine(contents)) {
        // 2-1. 현재 페이지의 다음 페이지가 있는 경우
        const line = extractNextPageLine(contents)
        const link = extractPageLink(line)
        const nextFileName = files[i + 1]

        if (!link) {
          console.error(`\n[에러]\n페이지("${fileName}")의 다음 페이지 주소가 유효하지 않습니다.`)
          throw err
        }        

        // 2-2. 다음 페이지의 이름이 파일 목록 이름과 일치하는지 확인
        if (link !== nextFileName) {
          console.error(`\n[에러]\n페이지("${fileName}")의 다음 페이지의 이름("${link}")과 실제 파일 이름("${nextFileName}")이 일치하지 않습니다.`)
          throw err
        }

        // 2-3. 제목 비교하기
        const title = extractNextPageTitle(line);
        const nextPagePath = `${pageFileListPath}/${nextFileName}`;
        const nextPageContents = await fsPromises.readFile(nextPagePath, { encoding: 'utf8' });

        if (nextPageContents.indexOf(title) < 0) {
          console.error(`\n[에러]\n다음 페이지("${nextFileName}")의 제목("${title}")이 일치하지 않습니다.`)
          throw err
        }        
      }
    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();