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
    
    // 2. 파일 목록 가져오기
    const files = await fsPromises.readdir(pageFileListPath);    
    // const files = ['04-02-11-eraser-and-brushes-no-longer-work.md']; // NOTE: 개별 파일 검사시 사용
    console.log(`모두 ${files.length} 개의 파일을 검사합니다.`)

    for (let i = 0; i < files.length; i++) {
      const fileName = files[i];

      // 2-1. 개별 페이지 내용 가져오기
      const pagePath = `${pageFileListPath}/${fileName}`;
      fs.access(pagePath, fs.constants.R_OK, (err) => {
        if (err) {
          console.error(`\n[에러]\n개별 페이지("${fileName}")의 경로 "${pageFileListPath}"가 유효하지 않습니다.`)
          throw new Error('2-1. 개별 페이지 내용 가져오기')
        }
      });

      const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
      
      if (i > 0 && hasPrevPageLine(contents)) {
        // 3-1. 현재 페이지의 이전 페이지가 있는 경우
        const line = extractPrevPageLine(contents)
        const link = extractPageLink(line)

        if (!link) {
          console.error([
            '\n[에러]',
            `페이지: "${fileName}"`,
            `행: "${line}"`,
          ].join('\n'))
          throw new Error('3-1. 현재 페이지의 이전 페이지가 있는 경우')
        }

        // 3-2. 이전 페이지의 이름이 파일 목록 이름과 일치하는지 확인
        const prevFileName = files[i-1]
        if (link !== prevFileName) {
          console.error([
            '\n[에러]',
            `페이지: "${fileName}"`,
            `이전 페이지: "${link}"`,
            `실제 파일 이름: "${prevFileName}"\n`,
          ].join('\n'))
          throw new Error('3-2. 이전 페이지의 이름이 파일 목록 이름과 일치하는지 확인')
        }

        // 3-3. 제목 비교하기
        const title = extractPrevPageTitle(line);
        const prevPagePath = `${pageFileListPath}/${prevFileName}`;
        const prevPageContents = await fsPromises.readFile(prevPagePath, { encoding: 'utf8' });

        if (prevPageContents.indexOf(title) < 0) {
          console.error(`\n[에러]\n이전 페이지("${prevFileName}")의 제목("${title}")이 일치하지 않습니다.`)
          throw new Error('3-3. 제목 비교하기')
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
}
doAsyncJob();