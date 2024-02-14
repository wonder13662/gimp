# 6.1.2.1. GIF로 이미지 내보내기

#### 그림 90.4.43.a101. `이미지를 GIF로 내보내기` 대화상자 (Windows) (우리말)
![90-04-43-export_image_as_gif(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/8fed8899-7e30-4e49-b170-9f263fdc4843)

[다른 운영체제와 언어의 `이미지를 GIF로 내보내기` 대화상자 확인하기](./90-04-43-export_image_as_gif.md)

> ⚠️ 주의
>
> `GIF` 파일 유형은 "인쇄 해상도" 같은 기본적인 이미지 속성을 가지고 있지 않습니다. 만약 이런 속성이 필요하다면 `PNG`와 같은 다른 이미지 파일 유형을 사용해보세요.

## GIF 저장 옵션
### 인터레이스(Interlace)
인터레이스(Interlace) 체크박스를 체크하면 웹페이지 위의 이미지가 다운로드되면서 보여지게 됩니다. 여기서 보여지는 이미지는 원본 이미지의 저해상도 이미지입니다. 이 기능은 네트워크 속도가 느린 경우에 중요하지 않은 이미지를 다운로드하는 것을 멈출 수 있어서 유용합니다. 오늘날은 훨씬 빠른 네트워크를 사용할 수 있으므로 인터레이스는 많이 쓰이고 있지 않습니다.

### GIF 설명(GIF Comment)
GIF 설명은 [7비트 ASCII 문자](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)만 쓸 수 있습니다. 만약 [7비트 ASCII 문자](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)외의 다른 문자를 입력하면, GIF로 이미지를 내보낼 때, GIF 설명은 제외합니다. 그리고 GIF 설명이 저장되지 않았다고 알려줍니다. 

⚠️ 주의: 한글의 경우에는 위 문자 그룹에 포함되지 않으므로 GIF 설명에 한글을 입력하더라도 내보내는 GIF 이미지 정보에서 제외됩니다. 아래 영상에서 한글 입력시 경고 메시지를 확인할 수 있습니다.

#### 영상 90.4.43.a111. GIF 설명 입력제한 - 7비트 ASCII 문자만 가능 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/aa25ead1-29e9-46ff-8427-e9b5f4bbb779"></video>

## 움직이는 GIF 옵션
### 무한 반복(Loop forever)

### 프레임의 기본 지연 시간(Delay between frames where unspecified)

### 프레임의 기본 처리(Frame disposal where unspecified)

### 모든 프레임에 입력된 지연시간 사용(Use delay entered above for all frames)

### 모든 프레임에 적용(Use disposal entered above for all frames)

***

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-filesx-02-file_formatsx-02-export_image_as_heif.md)

[⬅️ 이전: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html)
