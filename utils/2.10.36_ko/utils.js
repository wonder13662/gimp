const fsPromises = require('node:fs/promises');
const fs = require('node:fs');
const path = require('node:path')

const isPageNumberStr = (src) => Number(src) > 0

const isValidPath = async (path) => {
  if (!path) {
    throw new Error(
      [
        '\n',
        '[에러] isValidPath: 파라미터 path가 유효하지 않습니다.',
      ].join('\n')    
    )
  }

  await fsPromises.access(path, fs.constants.R_OK | fs.constants.W_OK);
}

/*
* 페이지 파일의 이름에서 숫자 부분만 추출해 냅니다.
*
* 입력: "14-03-11-00-ink.md"
* 출력: "14-03-11-00"
* 
*/
const extractPageNumberChain = (pageName) => pageName.split('-').reduce((pv, token) => {
  if (pv === '') {
    return Number(token) > -1 ? token : pv
  }
  return Number(token) > -1 ? `${pv}-${token}` : pv
}, '')

/*
* 페이지 내용 안의 페이지 링크가 앵커 태그(<a>)를 가지고 있는 행을 골라냅니다.
*
* 입력: "#### [그림 90.4.3.12.a1. 활성화된 레이어 (Windows) (우리말)](./90-04-0003-012-active_layer.md#90-04-03-12-a1)"
* 출력: "90-04-0003-012-active_layer.md#90-04-03-12-a1"
* 
*/
const extractPageLinkWithAnchor = (v) => {
  const list = v.match(/#### \[.+\)/g)

  if (!list) return []

  return list.map((v) => {
    const found = v.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md#[0-9a-z\-_]+(?=\))/g)
    if (!found) {
      throw new Error(
        [
          '\n',
          '[에러] extractPageLinkWithAnchor: 페이지 앵커 링크를 찾지 못했습니다.',
          `값: ${v}`,
        ].join('\n')    
      )      
    }

    return found[0]
  })
}
/*
* 페이지 링크 + 앵커 태그(<a>)에서 페이지 링크 주소만 골라냅니다.
*
* 입력: "90-04-0003-012-active_layer.md#90-04-03-12-a1"
* 출력: "90-04-0003-012-active_layer.md"
* 
*/
const extractPageLinkFromPageLinkWithAnchor = (v) => v.match(/^.+(?=\#.+)/g)
/*
* 페이지 링크 + 앵커 태그(<a>)에서 앵커 태그(<a>)만 골라냅니다.
*
* 입력: "90-04-0003-012-active_layer.md#90-04-03-12-a1"
* 출력: "90-04-03-12-a1"
* 
*/
const extractAnchorFromPageLinkWithAnchor = (v) => v.match(/(?<=\#).+/g)

module.exports = {
  /*
  * 페이지 내용 안의 페이지 링크가 앵커 태그(<a>)를 가지고 있는 행을 골라내 페이지 링크, 태그 속성을 가진 객체의 배열로 돌려줍니다.
  * 
  * 입력: "90-04-0003-012-active_layer.md#90-04-03-12-a1"
  * 출력: [ { link: "90-04-0003-012-active_layer.md", anchor: "90-04-03-12-a1" } ]
  * 
  */  
  extractPageAnchorLinks: (contents, fileName = '') => {
    const list = extractPageLinkWithAnchor(contents)
    if (!list) return []

    return list.map((v) => {
      const page = extractPageLinkFromPageLinkWithAnchor(v)
      if (!page) {
        console.log(list)

        throw new Error(
          [
            '\n',
            '[에러] extractPageAnchorLinks: 페이지 링크를 찾지 못했습니다.',
            `대상 파일: ${fileName}`,
            `링크: ${v}`,
          ].join('\n')    
        )
      }
      const anchor = extractAnchorFromPageLinkWithAnchor(v)
      if (!anchor) {
        throw new Error(
          [
            '\n',
            '[에러] extractPageAnchorLinks: 앵커 태그를 찾지 못했습니다.',
            `대상 파일: ${fileName}`,
            `링크: ${v}`,
          ].join('\n')    
        )
      }

      return {
        link: v,
        page: page[0],
        anchor: anchor[0],
      }
    })
  },
  /*
  * 파일이름 배열을 키(파일 체인 번호), 값(파일이름)을 가지는 맵으로 바꿉니다. 
  *
  */
  convertFileNamesToFileChainNumberMap: (files) => {
    if (!files) {
      throw new Error(
        [
          '\n',
          '[에러] convertFileNamesToFileChainNumberMap: 파라미터 files 유효하지 않습니다.',
        ].join('\n')    
      )
    }

    return files.reduce((acc, v, idx) => {
      const fileNumbers = extractPageNumberChain(v)

      acc.set(fileNumbers, idx)

      return acc
    }, new Map())
  },
  /*
  * 파일에 텍스트를 추가합니다.
  *
  */  
  appendText: async (path, text) => {
    await fsPromises.appendFile(path, text)
  },
  /*
  * 해당 문서의 제목을 가져옵니다.
  *
  * 입력: "# 15.2.2. 채널 대화상자(Channel dialog)"
  * 출력: "15.2.2. 채널 대화상자(Channel dialog)"
  */
  getPageTitle: (pageContent) => {
    if (!pageContent) {
      throw new Error(
        [
          '\n',
          '[에러] getPageTitle: 파라미터 pageContent가 유효하지 않습니다.',
        ].join('\n')    
      )
    }

    const result = pageContent.match(/(?<=^#\s).+/g);

    if (result && result[0]) {
      return result[0];
    }
  
    return '';    
  },
  /*
  * 해당 문서 디렉토리의 최상위 절대 경로를 가져옵니다.
  *
  */
  getPageRootPath: () => `${path.normalize(`${__dirname}/../..`)}/2.10.36_ko`,
  /*
  * 디렉토리의 모든 파일 목록을 가져옵니다.
  *
  */
  readAllFileNames: async (path) => {
    if (!path) {
      throw new Error(
        [
          '\n',
          '[에러] readAllFileNames: 파라미터 path가 유효하지 않습니다.',
        ].join('\n')    
      )
    }

    const result = await fsPromises.readdir(path)

    return result
  },
  /*
  * 디렉토리 또는 파일이 유효한지 검사합니다.
  *
  */
  isValidPath: async (path) => await isValidPath(path),
  /*
  * 텍스트 파일을 읽어옵니다.
  *
  */
  readFile: async (path) => {
    if (!path) {
      throw new Error(
        [
          '\n',
          '[에러] readFile: 파라미터 path가 유효하지 않습니다.',
        ].join('\n')    
      )
    }

    await isValidPath(path)

    const contents = await fsPromises.readFile(path, { encoding: 'utf8' });

    return contents
  },
  /*
  * 페이지 파일의 이름에서 숫자 부분만 추출해 냅니다.
  *
  * 입력: "14-03-11-00-ink.md"
  * 출력: "14-03-11-00"
  * 
  */
  extractPageNumberChain: (pageName) => extractPageNumberChain(pageName),
  /*
  * 문자열이 페이지 링크 형식을 가지고 있다면, 문자열을 돌려줍니다. 그렇지 않다면 빈 문자열을 돌려줍니다.
  *
  * 입력: "14-03-11-00-ink.md"
  * 출력: "14-03-11-00-ink.md"
  * 
  * 입력: "14.3.11. 잉크(Ink)"
  * 출력: ""
  * 
  */
  extractPageLink: (line) => {
    const result = line.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md(?=\))/g);
  
    if (result && result[0]) {
      return result[0];
    }
  
    return '';
  },
  /*
  * 현재 파일 이름의 숫자들로 가져야할 부모 페이지의 이름을 배열로 만들어 돌려줍니다.
  *
  * 입력: "14-03-11-00-ink.md"
  * 출력: ["14", "14-03"]
  * 
  */
  getParentPageNumberChains: (fileName) => {
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

    return parents.map((v) => `${v}-00`)
  },
}