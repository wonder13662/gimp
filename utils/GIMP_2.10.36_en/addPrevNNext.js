const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process')
const { readdir } = require('node:fs/promises')
const fs = require('node:fs')
const { exit } = require('node:process')
const { en2023 } = require('./fileMap')

const askQuestion = async (title) => {
  const rl = readline.createInterface({ input, output })
  const answer = await rl.question(title)

  return answer
}

const searchFile = (files, searchKeyword) => files.filter((v) => `${v}`.indexOf(searchKeyword) === 0)

const getSearchTargetQuestion = (searchTargets) => searchTargets.map((v, idx) => `${idx + 1}. ${v}`).join(`\n`)

const askPage = async (searchTargets, files) => {
  const searchTargetQuestion = getSearchTargetQuestion(searchTargets)
  console.log(`\n선택할 수 있는 페이지 목록입니다.\n${searchTargetQuestion}`)

  // 5-2. 이전 페이지 선택하기
  response = await askQuestion('\n페이지 파일을 선택해주세요:')

  if (searchTargets.length < response || response < 0) {
    console.log(`\n입력한 파일의 번호(${response})는 없습니다. 작업을 중단합니다.`)
    return {
      name: null,
      idx: -1,
    }
  }

  const targetIdx = response - 1
  const name = searchTargets[targetIdx]
  const idx = files.indexOf(name)
  console.log(`선택한 파일은 '${name}'입니다. ${idx + 1}번째 파일입니다.`)

  return {
    name,
    idx,
  }
}

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

  // 2. 검색 키워드 입력 받기
  let response = await askQuestion('#1 검색할 파일의 키워드를 입력해주세요:')

  // 3. 파일 검색하기
  let result = searchFile(files, response)
  console.log(`총 ${result.length}개의 파일이 검색되었습니다.`)

  // 3-1. 검색 결과가 없다면 중단합니다.
  if (result.length < 1) {
    console.log('검색 결과가 없습니다. 작업을 중단합니다.')
    exit(1)
    return
  }

  // 3-2. 검색 결과가 있다면 그 중에 하나를 선택합니다. 검색 결과는 최대 5개까지만 보여줍니다.
  console.log('#2 작업을 할 페이지 파일을 선택해주세요')
  let searchTargets = result.slice(0, 5)
  const {
    name: targetPageName,
    idx: targetPageIdx,
  } = await askPage(searchTargets, files)
  if (targetPageIdx < 0) {
    exit(1)
    return
  }

  // 5. 선택한 파일의 이전 파일을 선택합니다.
  // 5-1. targetIdx에서 5개 이전 파일의 목록을 보여주고 사용자가 선택합니다.
  console.log('#3 이전 페이지 파일을 선택해주세요')
  searchTargets = files.slice(targetPageIdx - 5, targetPageIdx).reverse()
  const {
    name: prevPageName,
    idx: prevPageIdx,
  } = await askPage(searchTargets, files)
  if (prevPageIdx < 0) {
    exit(1)
    return
  }

  // 6. 선택한 파일의 다음 파일을 선택합니다.
  console.log('#4 다음 페이지 파일을 선택해주세요')
  searchTargets = files.slice(targetPageIdx + 1, targetPageIdx + 6)
  const {
    name: nextPageName,
    idx: nextPageIdx,
  } = await askPage(searchTargets, files)
  if (nextPageIdx < 0) {
    exit(1)
    return
  }

  // 7. 지금까지 사용자가 선택한 내용을 모두 합쳐 선택한 파일에 추가합니다.
  const content = [
    `# ${en2023.get(targetPageName)}\n`,
    '## ? [?]()\n',
    '\n',
    '### [Home](./00-home.md)\n',
    `### [Parent: parent-${targetPageName}](path-parent-${targetPageName})\n`,
    `### [Prev: ${en2023.get(prevPageName)}](./${prevPageName})\n`,
    `### [Next: ${en2023.get(nextPageName)}](./${nextPageName})\n`
  ].join('')
  const targetPath = `${path}/${targetPageName}`

  try {
    fs.writeFileSync(targetPath, content);
    exit()
  } catch (err) {
    console.error(err);
    exit(1)
  }
}

doAsyncJob()
