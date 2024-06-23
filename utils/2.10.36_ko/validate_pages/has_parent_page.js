const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

const isPageNumberStr = (src) => Number(src) > 0

// TODO 모든 부모 페이지 링크를 가지고 있는지 검사합니다.

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

    const tokens = fileName.split('-')
    const parents = []

    const lastIdx = tokens.length - 1
    for (let j = 0; j <= lastIdx; j++) {
      const token = tokens[j];

      // 1. 마지막 토큰은 검사하지 않습니다.
      if (j === lastIdx) {
        break
      }
      
      // 2. 현재 토큰이 숫자여야 합니다.
      if (!isPageNumberStr(tokens[j])) {
        break
      }

      // 2. 다음 토큰이 숫자여야 합니다.
      if (!isPageNumberStr(tokens[j + 1])) {
        break
      }

      // 3. 위 두 조건을 만족하면 parents 배열에 토큰을 추가합니다.
      if (parents.length === 0) {
        // 3-1. 이전에 등록된 토큰이 없다면 현재 토큰만 추가합니다.
        parents.push(token)
      } else {
        // 3-2. 이전에 등록된 토큰이 있다면 이전 토큰과 현재 토큰을 조합하여 추가합니다.
        parents.push(`${parents[parents.length - 1]}-${token}`)
      }
    }

    // 4. 부모 페이지의 갯수가 없는 경우는 종료
    if (parents.length === 0) return
    
    const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
    for (let j = 0; j < parents.length; j++) {
      const parentNumber = parents[j];
      const parentFileNumber = `${parentNumber}-00`

      // 5. 페이지 내의 부모 페이지 링크 표시가 되어 있는지 확인
      if (contents.indexOf(parentFileNumber) === -1) {
        throw new Error([
          '\n[에러] 5. 페이지 내의 부모 페이지 링크 표시가 없습니다.',
          `페이지: "${fileName}"`,
          `부모 페이지 번호: "${parentFileNumber}"`,
        ].join('\n'))
      }

      // 6. 실제 파일로써 부모 페이지가 있는지 여부를 확인합니다.
      if (!fileNumberSet.has(parentFileNumber)) {
        throw new Error([
          '\n[에러] 6. 실제 파일로써 부모 페이지가 없습니다.',
          `페이지: "${fileName}"`,
          `부모 페이지 번호: "${parentFileNumber}"`,
        ].join('\n'))
      }
    }

    // 7. 페이지 내의 모든 페이지 링크를 수집, 현재 페이지와 관련이 없는 부모 페이지라면 에러!
  },
}