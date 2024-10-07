const path = require('node:path')

const sizeOf = require('image-size');

const { 
  readAllFileNames, 
} = require('../utils')

const doAsyncJob = async (targetPage) => {
  // 1. 처리할 이미지가 있는 디렉토리 경로 가져오기
  const imageDirPath = `${path.normalize(`${__dirname}/images`)}`

  // 2. 파일 목록 가져오기
  const files = await readAllFileNames(imageDirPath)

  // 3. 파일 목록 순회
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // 3-1. 'jpg', 'png' 확장자 외에는 무시
    if (file.toLowerCase().lastIndexOf('.jpg') === -1 && file.toLowerCase().lastIndexOf('.png') === -1) {
      continue
    }

    const fileNameWithoutExtension = file.toLowerCase().replace('.jpg', '').replace('.png', '')

    sizeOf(`./images/${file}`, function (err, dimensions) {
      console.log(`<img width="${dimensions.width}" height="${dimensions.height}" alt="${fileNameWithoutExtension}" src="" />`)
    });
  }
}

doAsyncJob();
