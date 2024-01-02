// NOTE: 지정한 시작 및 종료 인덱스 사이의 페이지들에 순차적으로 Prev, Next를 지정합니다. 많은 페이지가 연결되어 있을 때 사용합니다.
const { readdir } = require('node:fs/promises')
const fs = require('node:fs/promises');
const { exit } = require('node:process')
const { en2023 } = require('./fileMap')

const searchFileIdx = (files, searchKeyword) => files.findIndex((v) => `${v}`.indexOf(searchKeyword) === 0)

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

  // 2. 시작 인덱스와 종료 인덱스
  const parent = '12-01'
  const parentIdx = searchFileIdx(files, `${parent}-00`)
  const firstPrevIdx = searchFileIdx(files, '11-01')
  const startIdx = searchFileIdx(files, `${parent}-01`)
  const endIdx = searchFileIdx(files, `${parent}-25`)
  const lastNextIdx = searchFileIdx(files, '12-02-01')
  if (startIdx < 0 || endIdx < 0) {
    console.log(`시작 인덱스(${startIdx}) 또는 종료 인덱스(${endIdx})가 유효하지 않습니다.`)
    exit(1)
    return
  }
  const targets = files.slice(startIdx, endIdx + 1)
  const targetMap = targets.reduce((acc, v, idx) => {
    acc[v] = idx
    return acc
  }, {})

  // 3. 시작 인덱스와 종료 인덱스의 페이지 이름 보여주기
  const parentFileName = files[parentIdx]
  const fistPrevFileName = files[firstPrevIdx]
  const startFileName = files[startIdx]
  const endFileName = files[endIdx]
  const lastNextFileName = files[lastNextIdx]
  if (!startFileName || !endFileName) {
    console.log(`시작 파일(${startFileName}) 또는 종료 파일(${endFileName})이 유효하지 않습니다.`)
    exit(1)
    return
  }
  

  // 4. 파일 내용을 수정합니다.
  for (let idx = 0; idx < targets.length; idx++) {
    const current = targets[idx]
    const prev = idx > 0 ? targets[idx - 1] : fistPrevFileName
    const next = idx < targets.length - 1 ? targets[idx + 1] : lastNextFileName

    const content = [
      `# ${en2023.get(current)}\n`,
      '\n',
      '### [Home](./00-home.md)\n',
      `### [Parent: ${en2023.get(parentFileName)}](./${parentFileName})\n`,
      `### [Prev: ${en2023.get(prev)}](./${prev})\n`,
      `### [Next: ${en2023.get(next)}](./${next})\n`
    ].join('')
    const targetPath = `${path}/${current}`

    try {
      await fs.writeFile(targetPath, content);
    } catch (err) {
      console.error(err);
    }
  }
  exit()
}

doAsyncJob()
