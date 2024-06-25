const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path');

const { extractPageLink, getParentPageNumbers } = require('./utils')

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
    fs.access(pagePath, fs.constants.R_OK, (err) => {
      if (err) {
        throw new Error([
          '\n[에러] 2-1. 페이지의 경로가 유효하지 않습니다',
          `페이지: "${fileName}"`,
          `경로: "${pageRootPath}"`,
        ].join('\n'))
      }
    });

    // 3. 부모 페이지의 갯수가 없는 경우는 종료
    const parents = getParentPageNumbers(fileName)
    if (parents.length === 0) return

    // 4. 페이지 내의 모든 페이지 링크를 수집, 현재 페이지와 관련이 없는 부모 페이지라면 에러!
    const parentSet = parents.reduce((acc, v) => {
      acc.add(v)

      return acc
    }, new Set())
    const contents = await fsPromises.readFile(pagePath, { encoding: 'utf8' });
    const parentTitleLinks = contents.match(/\[⬆️\s위:\s.+/g)

    if (!parentTitleLinks) {
      throw new Error([
        '\n[에러] 4-1. parentTitleLinks가 유효하지 않습니다.',
        `페이지: "${fileName}"`,
        `예상된 부모 페이지의 갯수: "${parents.length}"`,
      ].join('\n'))
    }

    for (let j = 0; j < parentTitleLinks.length; j++) {
      // 입력: "[⬆️ 위: 14.3.11. 잉크(Ink)](./14-03-11-00-ink.md)"
      // 출력: "14-03-11-00-ink.md"
      const parentTitleLink = parentTitleLinks[j]

      const parentLink = extractPageLink(parentTitleLink)
      if(!parentLink) {
        throw new Error([
          '\n[에러] 4-2. 페이지 링크가 유효하지 않습니다.',
          `페이지: "${fileName}"`,
          `부모 페이지의 제목과 링크: "${parentTitleLink}"`,
          `부모 페이지의 링크: "${parentLink}"`,
        ].join('\n'))                
      }

      // 입력: "14-03-11-00-ink.md"
      // 출력: "14-03-11-00"
      const parentLinkTokens = parentLink.split('-')
      const parentNumber = parentLinkTokens.reduce((acc, v) => {
        if (acc === '') {
          return v
        }
        return (Number(v) > -1) ? `${acc}-${v}` : acc
      }, '')

      // parentNumber가 이 페이지가 가져야 하는 부모 페이지가 맞는지 확인한다.
      if (!parentSet.has(parentNumber)) {
        throw new Error([
          '\n[에러] 4-2. 페이지와 상관없는 부모 페이지 링크가 발견되었습니다.',
          `페이지: "${fileName}"`,
          `부모 페이지 번호: "${parentNumber}"`,
        ].join('\n'))        
      }
    }
  },
}