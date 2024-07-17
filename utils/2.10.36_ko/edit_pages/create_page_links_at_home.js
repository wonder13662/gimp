const { 
  getPageRootPath,
  readFile,
  readAllFileNames, 
  isValidPath,
  appendText,
} = require('../utils')


const doAsyncJob = async () => {
  try {
    // 1. 홈을 제외한 나머지 모든 페이지가 대상이 된다.
    const home = '00-home.md'

    // 1. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = getPageRootPath()
    
    // 1-1. 파일 경로 검사
    await isValidPath(pageRootPath)
    
    // 1-2. 파일 목록 가져오기
    const files = await readAllFileNames(pageRootPath)
    const pageLinks = []
    for (let i = 1; i < files.length; i++) {
      const file = files[i];
      
      const pageContent = await readFile(`${pageRootPath}/${file}`)
      const contents = pageContent.split('\n')
      const title = contents[0].replace('# ', '')

      // 1. 타이틀 검사
      // 1-1. 숫자로 시작해야 합니다. ex) 19. 용어집 - 색상 교정(Soft Proofing)
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
doAsyncJob('15-03-03-02-05-04-refresh_mypaint_brush.md')