let title = '20.4. Conclusion'

// 1. 모두 소문자로 바꾸기
title = title.toLocaleLowerCase()
// 2. 파일명 변경
const id = title.slice(0, title.indexOf('. ')).split('.').map((v) => v.padStart(2, '0')).join('-')
const content = title.slice(title.indexOf('. ') + 2, title.length).replaceAll('’', '-').replaceAll(',', '').replaceAll(' ', '-').replaceAll('/', '-').replaceAll('(', '').replaceAll(')', '').replaceAll('"', '').replaceAll('“', '').replaceAll('”', '').replaceAll('…', '').replaceAll(';', '')
const fileName = `${id}-${content}.md`
console.log(fileName)

// 3. 바꾼 이름으로 파일 만들기
const fs = require('fs');
fs.writeFile(`./2023-en/${fileName}`, '', () => {})