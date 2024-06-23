const isPageNumberStr = (src) => Number(src) > 0

module.exports = {
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
  getParentPageNumbers: (fileName) => {
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