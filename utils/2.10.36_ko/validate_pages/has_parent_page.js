const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

const { getParentPageNumbers } = require('./utils')

module.exports = {
  doAsyncJob: async (pageRootPath, files, i, fileNumberSet) => {

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

    // 1-4. 파일 Set
    if (!fileNumberSet || fileNumberSet.size === 0) {
      throw new Error([
        '\n[에러] 1-4. 파일 Set이 유효하지 않습니다',
      ].join('\n'))            
    }
    
    // 2-1. 개별 페이지 내용 가져오기
    const fileName = files[i];
    const pagePath = `${pageRootPath}/${fileName}`;
    fs.access(pagePath, fs.constants.R_OK, (err) => {
      if (err) {
        throw new Error([
          '\n[에러] 2-1. 페이지의 경로가 유효하지 않습니다',
          `페이지: "${fileName}"`,
          `경로: "${pageRootPath}"`,
        ].join('\n'))
      }
    });

    // 4. 부모 페이지의 갯수가 없는 경우는 종료
    const parentPageNumbers = getParentPageNumbers(fileName)
    if (parentPageNumbers.length === 0) return
    
    const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
    for (let j = 0; j < parentPageNumbers.length; j++) {
      const parentPageNumber = parentPageNumbers[j];

      // 5. 페이지 내의 부모 페이지 링크 표시가 되어 있는지 확인
      if (contents.indexOf(parentPageNumber) === -1) {
        throw new Error([
          '\n[에러] 5. 페이지 내의 부모 페이지 링크 표시가 없습니다.',
          `페이지: "${fileName}"`,
          `부모 페이지 번호: "${parentPageNumber}"`,
        ].join('\n'))
      }

      // 6. 실제 파일로써 부모 페이지가 있는지 여부를 확인합니다.
      if (!fileNumberSet.has(parentPageNumber)) {
        throw new Error([
          '\n[에러] 6. 실제 파일로써 부모 페이지가 없습니다.',
          `페이지: "${fileName}"`,
          `부모 페이지 번호: "${parentPageNumber}"`,
        ].join('\n'))
      }
    }
  },
}