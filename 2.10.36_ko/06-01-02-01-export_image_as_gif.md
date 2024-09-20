# 6.1.2.1. GIF로 이미지 내보내기

<a id="90-04-43-a101"></a>

#### [그림 90.4.43.a101. `이미지를 GIF로 내보내기` 대화상자 (Windows) (우리말)](./90-04-0043-export_image_as_gif.md#90-04-43-a101)
![90-04-43-a101](https://github.com/wonder13662/gimp/assets/15767104/8fed8899-7e30-4e49-b170-9f263fdc4843)

[다른 운영체제와 언어의 `이미지를 GIF로 내보내기` 대화상자 확인하기](./90-04-0043-export_image_as_gif.md#90-04-43-a102)

> ⚠️ 주의
>
> `GIF` 파일 유형은 "인쇄 해상도" 같은 기본적인 이미지 속성을 가지고 있지 않습니다. 만약 이런 속성이 필요하다면 `PNG`와 같은 다른 이미지 파일 유형을 사용해보세요.

<a id="06-01-02-01-s1"></a>

## 1. GIF 저장 옵션(GIF Options)

<a id="06-01-02-01-s1-01"></a>

### 1-1. 인터레이스(Interlace)
이 체크박스를 체크하면 웹페이지 이미지가 다운로드되는 동시에 점진적(progressively)으로 보여지게 됩니다. 

여기서 보여지는 이미지는 원본 이미지의 픽셀의 일부만 보여지는 이미지입니다. 

이 기능은 네트워크 속도가 느린 경우에 중요하지 않은 이미지를 다운로드하는 것을 멈출 수 있어서 유용합니다. 

오늘날은 훨씬 빠른 네트워크를 사용할 수 있으므로 인터레이스(Interlace)는 많이 쓰이고 있지 않습니다.

인터레이스에 대한 자세한 내용은 [19. 용어집 - 인터레이스](./19-glossaryx-interlace.md)을 참고해주세요.

<a id="06-01-02-01-s1-02"></a>

### 1-2. GIF 설명(GIF Comment)
GIF 설명은 [7비트 ASCII 문자](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)만 쓸 수 있습니다. 

만약 [7비트 ASCII 문자](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)외의 다른 문자를 입력하면, GIF로 이미지를 내보낼 때, GIF 설명은 제외합니다. 

그리고 GIF 설명이 저장되지 않았다고 알려줍니다. 

⚠️ 주의: 한글의 경우에는 위 문자 그룹에 포함되지 않으므로 GIF 설명에 한글을 입력하더라도 내보내는 GIF 이미지 정보에서 제외됩니다. 아래 영상에서 한글 입력시 경고 메시지를 확인할 수 있습니다.

<a id="90-04-43-a111"></a>

#### [영상 90.4.43.a111. GIF 설명 입력제한 - 7비트 ASCII 문자만 가능 (Windows) (우리말)](./90-04-0043-export_image_as_gif.md#90-04-43-a111)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/aa25ead1-29e9-46ff-8427-e9b5f4bbb779"></video>

<a id="06-01-02-01-s2"></a>

## 2. 움직이는 GIF 옵션(Animated GIF Options)

<a id="06-01-02-01-s2-01"></a>

### 2-1. 무한 반복(Loop forever)
무한 반복(Loop forever) 체크박스가 체크되어 있으면, 멈출때까지 애니메이션이 반복 재생됩니다.

<a id="06-01-02-01-s2-02"></a>

### 2-2. 프레임의 기본 지연 시간(Delay between frames where unspecified)
프레임 간의 지연시간이 설정되지 않았다면 여기서 설정한 지연시간(밀리초(1/1000 초) 단위)을 기본값으로 사용합니다. 

프레임 간의 지연시간은 레이어 대화상자에서 수정할 수 있습니다.

<a id="06-01-02-01-s2-03"></a>

### 2-3. 프레임의 기본 처리(Frame disposal where unspecified)
동작이 설정되지 않은 프레임의 동작을 설정합니다. 

세가지 옵션 중에 하나를 선택할 수 있습니다.

<a id="90-04-43-a121"></a>

#### [그림 90.4.43.a121. `이미지를 GIF로 내보내기` 대화상자 - 프레임의 기본 처리 (Windows) (우리말)](./90-04-0043-export_image_as_gif.md#90-04-43-a121)
![90-04-43-a121](https://github.com/wonder13662/gimp/assets/15767104/96d97235-0b46-4cff-81a3-09687a85d88c)

[다른 운영체제와 언어의 `이미지를 GIF로 내보내기` 대화상자 - 프레임의 기본 처리 확인하기](./90-04-0043-export_image_as_gif.md#90-04-43-a122)

1. 보호하지 않습니다(I don't care)
   - 모든 레이어가 불투명하다면 이 옵션을 사용할 수 있습니다. 아래의 레이어에 윗 레이어가 덮여쓰여집니다.
2. 레이어 누적 (합치기)(Cumulative Layers (combine))
   - 다음 프레임의 레이어가 보여질 때, 이전 프레임의 레이어가 삭제되지 않고 함께 보여집니다.
3. 레이어당 프레임 하나 (바꾸기)(One frame per layer (replace))
   - 다음 프레임의 레이어가 보여질 때, 이전 프레임의 레이어가 삭제됩니다.

<a id="06-01-02-01-s2-04"></a>

### 2-4. 모든 프레임에 입력된 지연시간 사용(Use delay entered above for all frames)
"프레임의 기본 지연 시간"의 입력창에 입력한 지연시간을 모든 프레임에 적용합니다.

<a id="06-01-02-01-s2-05"></a>

### 2-5. 모든 프레임에 적용(Use disposal entered above for all frames)
"프레임의 기본 처리"의 옵션을 모든 프레임에 적용합니다.

***

## 관련 정보

[8.1.1.1. 이름(Name) - 3. 애니메이션을 지원하는 파일 포맷(GIF, MNG)에서의 레이어 이름 파라미터](./08-01-01-01-name.md#08-01-01-01-s3)

[14.4.14.2.8. 움직임 재생(Animate)](./14-04-14-02-08-animate.md)

***

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-02-02-export_image_as_heif.md)

[⬅️ 이전: 6.1.2. 파일 형식](./06-01-02-00-file_formats.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-02-00-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-00-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html#file-gif-save)
