const { readdir } = require('node:fs/promises')
const fs = require('node:fs/promises');
const { exit } = require('node:process')
const { en2023 } = require('./fileMap')

const searchFileIdx = (files, searchKeyword) => files.findIndex((v) => `${v}`.indexOf(searchKeyword) === 0)

const searchFiles = (files, searchKeyword) => files.filter((v) => `${v}`.indexOf(searchKeyword) === 0)

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
  const path = __dirname + '/../../2023-en'
  const files = await readFileList(path)

  // 2. 부모 파일 찾기(사용자 입력 필요)
  const parentIdx = searchFileIdx(files, '12-01-00')

  // 3. 자식 파일 찾기
  const parentFileName = files[parentIdx]
  const words = parentFileName.split('-')
  const breakingIdx = words.findIndex((v) => v === '00')
  const searchKeyword = words.slice(0, breakingIdx).join('-')
  const targetFiles = searchFiles(files, searchKeyword).filter((v) => v !== parentFileName)

  // 4. 부모 파일에 자식 목록 추가하기
  const targetFileNames = targetFiles.map((v) => `## [${en2023.get(v)}](./${v})\n`)
  const content = [
    `# ${en2023.get(parentFileName)}\n`,
    '\n',
    ...targetFileNames,
    '\n',
    '### [Home](./00-home.md)\n',
  ]
  const targetPath = `${path}/${parentFileName}`
  try {
    await fs.writeFile(targetPath, content);
  } catch (err) {
    console.error(err);
  }  

  exit()
}

doAsyncJob()