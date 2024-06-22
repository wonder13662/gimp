// TODO 규칙에 맞는 파일 이름을 가지고 있는지 검사합니다.

const isCorrectNameFormat = (line) => {
  const result = line.match(/(?<=\(\.\/)[0-9a-z\-_]+\.md(?=\))/g);

  return result && result[0]
}