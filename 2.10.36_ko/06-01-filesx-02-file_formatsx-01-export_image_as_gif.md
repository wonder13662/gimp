# 6.1.2.1. GIF로 이미지 내보내기

#### [그림 90.4.43.a101. `이미지를 GIF로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-43-export_image_as_gif.html#%EA%B7%B8%EB%A6%BC-90443a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gif%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-43-export_image_as_gif(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/8fed8899-7e30-4e49-b170-9f263fdc4843)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-43-export_image_as_gif.html#%EA%B7%B8%EB%A6%BC-90443a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gif%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지를 GIF로 내보내기` 대화상자 확인하기](./90-04-43-export_image_as_gif.md)

> ⚠️ 주의
>
> `GIF` 파일 유형은 "인쇄 해상도" 같은 기본적인 이미지 속성을 가지고 있지 않습니다. 만약 이런 속성이 필요하다면 `PNG`와 같은 다른 이미지 파일 유형을 사용해보세요.

## GIF 저장 옵션(GIF Options)
### 인터레이스(Interlace)
인터레이스(Interlace) 체크박스를 체크하면 웹페이지 위의 이미지가 다운로드되면서 보여지게 됩니다. 여기서 보여지는 이미지는 원본 이미지의 저해상도 이미지입니다. 이 기능은 네트워크 속도가 느린 경우에 중요하지 않은 이미지를 다운로드하는 것을 멈출 수 있어서 유용합니다. 오늘날은 훨씬 빠른 네트워크를 사용할 수 있으므로 인터레이스는 많이 쓰이고 있지 않습니다.

### GIF 설명(GIF Comment)
GIF 설명은 [7비트 ASCII 문자](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)만 쓸 수 있습니다. 만약 [7비트 ASCII 문자](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)외의 다른 문자를 입력하면, GIF로 이미지를 내보낼 때, GIF 설명은 제외합니다. 그리고 GIF 설명이 저장되지 않았다고 알려줍니다. 

⚠️ 주의: 한글의 경우에는 위 문자 그룹에 포함되지 않으므로 GIF 설명에 한글을 입력하더라도 내보내는 GIF 이미지 정보에서 제외됩니다. 아래 영상에서 한글 입력시 경고 메시지를 확인할 수 있습니다.

#### [영상 90.4.43.a111. GIF 설명 입력제한 - 7비트 ASCII 문자만 가능 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-43-export_image_as_gif.html#%EC%98%81%EC%83%81-90443a111-gif-%EC%84%A4%EB%AA%85-%EC%9E%85%EB%A0%A5%EC%A0%9C%ED%95%9C---7%EB%B9%84%ED%8A%B8-ascii-%EB%AC%B8%EC%9E%90%EB%A7%8C-%EA%B0%80%EB%8A%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/aa25ead1-29e9-46ff-8427-e9b5f4bbb779"></video>

## 움직이는 GIF 옵션(Animated GIF Options)
### 무한 반복(Loop forever)
무한 반복(Loop forever) 체크박스가 체크되어 있으면, 멈출때까지 애니메이션이 반복 재생됩니다.

### 프레임의 기본 지연 시간(Delay between frames where unspecified)
프레임 간의 지연시간이 설정되지 않았다면 여기서 설정한 지연시간(밀리초(1/1000 초) 단위)을 기본값으로 사용합니다. 프레임 간의 지연시간은 레이어 대화상자에서 수정할 수 있습니다.

### 프레임의 기본 처리(Frame disposal where unspecified)
동작이 설정되지 않은 프레임의 동작을 설정합니다. 세가지 옵션 중에 하나를 선택할 수 있습니다.

#### [그림 90.4.43.a121. `이미지를 GIF로 내보내기` 대화상자 - 프레임의 기본 처리 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-43-export_image_as_gif.html#%EA%B7%B8%EB%A6%BC-90443a121-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gif%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%94%84%EB%A0%88%EC%9E%84%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%B2%98%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-43-export_image_as_gif(windows)(ko)-focus-frame_disposal_when_unspecified](https://github.com/wonder13662/gimp/assets/15767104/96d97235-0b46-4cff-81a3-09687a85d88c)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-43-export_image_as_gif.html#%EA%B7%B8%EB%A6%BC-90443a121-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gif%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%94%84%EB%A0%88%EC%9E%84%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%B2%98%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지를 GIF로 내보내기` 대화상자 - 프레임의 기본 처리 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-43-export_image_as_gif.html#%EA%B7%B8%EB%A6%BC-90443a122-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gif%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%94%84%EB%A0%88%EC%9E%84%EC%9D%98-%EA%B8%B0%EB%B3%B8-%EC%B2%98%EB%A6%AC-windows-%EC%98%81%EC%96%B4)

1. 보호하지 않습니다(I don't care)
   - 모든 레이어가 불투명하다면 이 옵션을 사용할 수 있습니다. 아래의 레이어에 윗 레이어가 덮여쓰여집니다.
2. 레이어 누적 (합치기)(Cumulative Layers (combine))
   - 다음 프레임의 레이어가 보여질 때, 이전 프레임의 레이어가 삭제되지 않고 함께 보여집니다.
3. 레이어당 프레임 하나 (바꾸기)(One frame per layer (replace))
   - 다음 프레임의 레이어가 보여질 때, 이전 프레임의 레이어가 삭제됩니다.

### 모든 프레임에 입력된 지연시간 사용(Use delay entered above for all frames)
"프레임의 기본 지연 시간"의 입력창에 입력한 지연시간을 모든 프레임에 적용합니다.

### 모든 프레임에 적용(Use disposal entered above for all frames)
"프레임의 기본 처리"의 옵션을 모든 프레임에 적용합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-filesx-02-file_formatsx-02-export_image_as_heif.md)

[⬅️ 이전: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html)
