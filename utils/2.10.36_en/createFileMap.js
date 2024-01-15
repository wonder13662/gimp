// NOTE: 파일 목록을 맵을 만들기 위한 배열로 만들어 줍니다.
const { readdir } = require('node:fs/promises')
const fs = require('node:fs/promises');
const { exit } = require('node:process')

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
  const path = './2023-en'
  const files = await readFileList(path)

  // 2. 파일맵 만들기
  const content = [
    '[\n',
    ...files.map((v, idx) => {
      // 2-1. '16-04-19-to-path.md' to '16.4.19. To path'
      const words = v.split('-')
      const numbers = words.filter((v) => Number.isInteger(Number(v)))
      const numbersStr = numbers.map((v) => Number(v)).join('.').replace('.0', '')
      const title = words.slice(numbers.length).map((v, idx) => {
        if (idx === 0) {
          // 첫번째 단어의 첫글자만 대문자로 바꿔준다.
          return `${v.slice(0, 1).toUpperCase()}${v.slice(1)}`.replace('.md', '')
        }
        
        return v.replace('.md', '')
      }).join(' ')
      const titleWithNumber = `${numbersStr}. ${title}`
      
      return `[\n  '${v}', \n  '${titleWithNumber}'\n],\n`
    }),
    ']\n'
  ].join('')

  const targetPath = './output.js'
  try {
    await fs.writeFile(targetPath, content);
  } catch (err) {
    console.error(err);
  }  
}
doAsyncJob()
