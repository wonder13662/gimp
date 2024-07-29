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
    // 1. 이미지 맵 페이지와 이 페이지의 하위 페이지가 작업 대상입니다.
    const head = '90-00-image-map.md'
    const tail = '90-99-etc.md'

    // 2. 모든 페이지 파일의 목록을 가져온다.
    const pageRootPath = getPageRootPath()
    
    // 3. 파일 경로 검사
    await isValidPath(pageRootPath)
    
    // 4. 파일 목록 가져오기
    const files = await readAllFileNames(pageRootPath)

    // 4-1. 이미지 맵 페이지가 시작되는 부분과 종료되는 부분 사이의 파일 목록만을 가져옵니다.
    const headIdx = files.indexOf(head)
    if (headIdx === -1) {
      throw new Error(
        [
          '\n',
          '[에러] 시작(head) 페이지가 없습니다.',
          `head: ${head}`,
        ].join('\n')
      )      
    }
    const tailIdx = files.indexOf(tail)
    if (tailIdx === -1) {
      throw new Error(
        [
          '\n',
          '[에러] 마지막(tail) 페이지가 없습니다.',
          `tail: ${tail}`,
        ].join('\n')
      )      
    }
    if (headIdx >= tailIdx) {
      throw new Error(
        [
          '\n',
          '[에러] 시작 페이지(headIdx)가 마지막 페이지(tailIdx)보다 뒤에 있습니다.',
          `headIdx: ${headIdx}`,
          `tailIdx: ${tailIdx}`,
        ].join('\n')
      )
    } 

    const targetFiles = files.slice(headIdx, tailIdx + 1)
    if (head !== targetFiles[0]) {
      throw new Error(
        [
          '\n',
          '[에러] 시작 페이지의 이름이 일치하지 않습니다.',
          `head: ${head}`,
          `targetFiles[0]: ${targetFiles[0]}`,
        ].join('\n')
      )
    }
    if (tail !== targetFiles[targetFiles.length - 1]) {
      throw new Error(
        [
          '\n',
          '[에러] 마지막 페이지의 이름이 일치하지 않습니다.',
          `tail: ${tail}`,
          `targetFiles[targetFiles.length - 1]: ${targetFiles[targetFiles.length - 1]}`,
        ].join('\n')
      )
    }

    // 5. 소제목과 연결된 파일이 목록에 있는지 검사
    const fileChainNumberMap = convertFileNamesToFileChainNumberMap(targetFiles)
    const subTitles = [
      {
        title: [
          '<a id="90-s1"></a>',
          '',
          '## [90.1. 이미지 메뉴 바(Image Menu Bar)](./90-01-00-image-menu-bar.md)',
          '',
          '#### 그림 90.1.a101. 이미지 메뉴 바 (Windows) (우리말)',
          '<img width="776" height="35" alt="90-01-a101" src="https://github.com/user-attachments/assets/4eca808a-d589-4e25-ba10-519019492752" />',
        ].join('\n'),
        file: '90-01-00-image-menu-bar.md',
      },
      {
        title: [
          '<a id="90-s2"></a>',
          '',
          '## [90.2. 기본 설정(Preference)](./90-02-00-preference.md)',
          '',
          '#### 그림 90.2.1.a101. 시스템 리소스 (Windows) (우리말)',
          '<img width="962" height="760" alt="90-02-01-a101" src="https://github.com/wonder13662/gimp/assets/15767104/2752c284-09dc-4bf0-9adc-58ea2bc58b21" />',
        ].join('\n'),
        file: '90-02-00-preference.md',        
      },
      {
        title: [
          '<a id="90-s3"></a>',
          '',
          '## [90.3. 도구상자(Toolbox)](./90-03-00-toolbox.md)',
          '',
          '#### 그림 90.3.a131. 도구상자의 모습',
          '<img width="450" height="314" alt="90-03-a131" src="https://github.com/wonder13662/gimp/assets/15767104/c38380c7-a72b-42cd-9848-78f431c329f5" />',
        ].join('\n'),
        file: '90-03-00-toolbox.md',
      },
      {
        title: [
          '<a id="90-s4"></a>',
          '',
          '## [90.4. 대화상자(Dialogs)](./90-04-0000-dialogs.md)',
        ].join('\n'),
        file: '90-04-0000-dialogs.md',
      },
      {
        title: [
          '<a id="90-s5"></a>',
          '',
          '## [90.5. 이미지 창(Image Window)](./90-05-00-image_window.md)',
        ].join('\n'),
        file: '90-05-00-image_window.md',
      },
      {
        title: [
          '<a id="90-s10"></a>',
          '',
          '## [90.10. 키보드 단축키(Keyboard Shortcut)](./90-10-00-keyboard_shortcut.md)',
        ].join('\n'),
        file: '90-10-00-keyboard_shortcut.md',
      },
      {
        title: [
          '<a id="90-s90"></a>',
          '',
          '## [90.90. 개념(Concept)](./90-90-00-concept.md)',
        ].join('\n'),
        file: '90-90-00-concept.md',
      },
      {
        title: [
          '<a id="90-s97"></a>',
          '',
          '## [90.97. 표기법](./90-97-notations.md)',
        ].join('\n'),
        file: '90-97-notations.md',
      },
      {
        title: [
          '<a id="90-s98"></a>',
          '',
          '## [90.98. 문제 해결](./90-98-trouble_shooting.md)',
        ].join('\n'),
        file: '90-98-trouble_shooting.md',
      },
      {
        title: [
          '<a id="90-s99"></a>',
          '',
          '## [90.99. 기타](./90-99-etc.md)',
        ].join('\n'),
        file: '90-99-etc.md',
      },      
    ]
    
    const subTitleMap = subTitles.reduce((acc, v) => {
      const { title, file } = v
      return {
        ...acc,
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
    const pageLinks = [
      '\n\n',
      '## 바로가기',
      '[90.1. 이미지 메뉴 바(Image Menu Bar)](./90-00-image-map.md#90-s1)',
      '[90.2. 기본 설정(Preference)](./90-00-image-map.md#90-s2)',
      '[90.3. 도구상자(Toolbox)](./90-00-image-map.md#90-s3)',
      '[90.4. 대화상자(Dialogs)](./90-00-image-map.md#90-s4)',
      '[90.5. 이미지 창(Image Window)](./90-00-image-map.md#90-s5)',
      '[90.10. 키보드 단축키(Keyboard Shortcut)](./90-10-00-keyboard_shortcut.md)',
      '[90.90. 개념(Concept)](./90-00-image-map.md#90-s90)',
      '[90.97. 표기법](./90-00-image-map.md#90-s97)',
      '[90.98. 문제 해결](./90-00-image-map.md#90-s98)',
      '[90.99. 기타](./90-00-image-map.md#90-s99)',
    ]
    for (let i = 1; i < targetFiles.length; i++) {
      const file = targetFiles[i];
      
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

      if (subTitleMap[file]) {
        // 6-2-1. 소제목이 있다면 넣어줍니다.
        pageLinks.push(subTitleMap[file])
      } else {
        // 6-2-2. 소제목이 없다면 일반 링크로 넣어줍니다.
        const pageLink = `[${title}](./${file})`
        pageLinks.push(pageLink)
      }
    }

    pageLinks.push([
      '## 다른 페이지로 가기',
      '',
      '[🏠 홈](./00-home.md)',
    ].join('\n'))

    const text = pageLinks.join('\n\n')
    const targetPagePath = `${pageRootPath}/${head}`

    await appendText(targetPagePath, text)

  } catch (err) {
    console.error(err);
  }      
}
doAsyncJob()