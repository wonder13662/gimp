const { 
  getPageRootPath,
  readFile,
  readAllFileNames, 
  isValidPath,
  appendText,
  convertFileNamesToFileChainNumberMap,
  extractPageNumberChain,
} = require('../utils')


const doAsyncJob = async () => {
  try {
    // 1. 홈을 제외한 나머지 모든 페이지가 대상이 된다.
    const home = '00-home.md'

    // 2. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = getPageRootPath()
    
    // 3. 파일 경로 검사
    await isValidPath(pageRootPath)
    
    // 4. 파일 목록 가져오기
    const files = await readAllFileNames(pageRootPath)
    
    // 5. 소제목과 연결된 파일이 목록에 있는지 검사
    const fileChainNumberMap = convertFileNamesToFileChainNumberMap(files)
    const subTitles = [
      {
        title: '## Part I. 시작하기',
        file: '01-00-introduction.md',
      },
      {
        title: '## Part II. GIMP(김프) 마법사가 되려면?',
        file: '05-00-getting-images-into-gimp.md',
      },
      {
        title: '## Part III. 기능 설명(Function Reference)',
        file: '14-00-tools.md',
      },
      {
        title: '## ETC',
        file: '18-00-keys-and-mouse-reference.md',
      },
      {
        title: '## 이미지 맵',
        file: '90-00-image-map.md',
      },
      {
        title: '## 키보드 단축키',
        file: '90-10-00-keyboard_shortcut.md',
      },      
    ]
    const subTitleMap = subTitles.reduce((acc, v) => {
      const { title, file } = v
      return {
        …acc,
        [file]: title,
      }
    }, {})
    for (let i = 0; i < subTitles.length; i++) {
      const { title, file } = subTitles[i];
      const targetPageNumberChain = extractPageNumberChain(file)
      if (!fileChainNumberMap.has(targetPageNumberChain)) {
        throw new Error(
          [
            '\n',
            '[에러] 소제목과 연결된 페이지가 없습니다.',
            `title: ${title}`,
            `file: ${file}`,
          ].join('\n')
        )
      }
    }

    // 6. 페이지 링크 목록을 작성
    const pageLinks = ['\n\n']
    for (let i = 1; i < files.length; i++) {
      const file = files[i];
      
      const pageContent = await readFile(`${pageRootPath}/${file}`)
      const contents = pageContent.split('\n')
      const title = contents[0].replace('# ', '')

      // 6-1. 타이틀 검사
      // 6-1-1. 숫자로 시작해야 합니다. ex) 19. 용어집 - 색상 교정(Soft Proofing)
      const found = title.match(/^[0-9]+\./g)
      if (!found) {
        throw new Error(
          [
            '\n',
            '[에러] 제목 번호가 없습니다.',
            `file: ${file}`,
            `title: ${title}`,
          ].join('\n')    
        )      
      }

      // 6-2. 소제목 넣어주기
      if (subTitleMap[file]) {
        pageLinks.push(subTitleMap[file])
      }

      const pageLink = `[${title}](./${file})`
      pageLinks.push(pageLink)
    }

    const text = pageLinks.join('\n\n')
    const targetPagePath = `${pageRootPath}/${home}`
    await appendText(targetPagePath, text)

  } catch (err) {
    console.error(err);
  }      
}
doAsyncJob()