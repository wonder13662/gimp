// NOTE: 모든 파일들을 검색해서, 파일명으로 된 타이틀을 실제 타이틀로 바꿔줍니다.
const { readdir } = require('node:fs/promises')
const fs = require('node:fs/promises');
const { en2023 } = require('./fileMap')

// console.log(en2023.get('00-home.md'))

const readFileList =  async (path) => {
  try {
    const files = await readdir(path);
    return [...files]
  } catch (err) {
    console.error(err);
  } 
}

const doAsyncJob = async () => {
  // 1. 파일 목록 가져오기
  const path = __dirname + '/../2023-en'
  const files = await readFileList(path)

  // 2. 작업 파일 읽어오기
  const file = files[599];
  try {
    // 2-1. 파일 읽어오기
    let data = await fs.readFile(`${path}/${file}`, 'utf8')
    console.log(data)
    // 2-2. 패턴 분석
    // 2-2-1. 'Prev: 17-08-06-sobel.md' -> 'Prev: 17.8.6. Sobel'
    let result = data.match(/Prev: [0-9a-z\-]+.md/g)
    if (result.length === 1) {
      const prevPageFile = result[0].replace('Prev: ', '')
      const prevPageTitle = en2023.get(prevPageFile)
      const textToReplace = `Prev: ${prevPageTitle}`
      data = data.replace(result[0], textToReplace)
    }
  } catch (err) {
    console.error(err);
  }

  // for (let idx = 0; idx < files.length; idx++) {

  //   break;
  // }

  console.log(files.length)
}
doAsyncJob()

// 검색 패턴들
// 'parent-17-14-19-checkerboard-legacy.md' -> '17-14-19-checkerboard-legacy.md'

// ' 17-14-18-spiral.md' -> '17-14-18-spiral.md'
// '# 17-16-00-animation-filters.md' -> '17-16-00-animation-filters.md'
// '[17-16-01-introduction.md]' -> '17-16-01-introduction.md'
