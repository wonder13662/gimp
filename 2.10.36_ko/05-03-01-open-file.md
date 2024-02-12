# 5.3.1. 파일 열기

[이미지 메뉴 바](./90-01-00-image-menu-bar.md)를 통해 이미지 파일을 열 수 있습니다. [이미지 메뉴 바](./90-01-00-image-menu-bar.md)의 `파일` → `열기`를 눌러 `이미지 열기` 대화상자를 엽니다.

#### [그림 90.1.1.3.a101. `파일` → `열기`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-03-open.html#%EA%B7%B8%EB%A6%BC-90113a101-%ED%8C%8C%EC%9D%BC--%EC%97%B4%EA%B8%B0)
[![90-01-01-file-export_as(w1080)-focus-open](https://github.com/wonder13662/gimp/assets/15767104/2c3f68e7-4733-4bcb-82ec-2b732860a4e7)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-03-open.html#%EA%B7%B8%EB%A6%BC-90113a101-%ED%8C%8C%EC%9D%BC--%EC%97%B4%EA%B8%B0)

`이미지 열기` 대화상자에서 파일을 탐색할 수 있습니다. 그리고 파일 이름을 클릭해서 파일을 GIMP(김프)에서 엽니다. `이미지 열기` 대화상자에서 미리보기(Preview) 영역이 있기는 하지만, 찾는 이미지를 확인하기에는 편리하지 않습니다.

#### [그림 90.4.38.a101. `이미지 열기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a101-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/208d13e1-6dd5-482a-be16-3288a358895d)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a101-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지 열기` 대화상자 확인하기](./90-04-38-open_image.md)

> 🗒️ 참고
>
> GIMP(김프)에서 파일을 열 때, 파일 타입을 반드시 결정해야 합니다. 하지만, `.jpg`같은 파일 확장자는 신뢰하기 어렵습니다. 파일 확장자는 시스템마다 다를 수 있습니다. 그리고 어떤 파일이라도 이름을 바꿔 임의의 확장자로 수정할 수 있습니다. 또한 여러가지 이유로 파일 이름에 확장자가 없을 수도 있습니다. GIMP(김프)에서는 가장 먼저 파일의 타입을 알아내기 위해 파일의 내용을 확인합니다. 대부분 파일 형식은 파일 형식을 파악하도록 도와주는 `마법 헤더(magic header)`를 가지고 있습니다. 만약 `마법 헤더(magic header)`를 통해 아무런 결과를 얻지 못하는 경우에는, GIMP(김프)는 파일의 확장자를 사용합니다.

## 위치(Places)

GIMP(김프) 2.2부터 `이미지 열기` 대화상자에서 파일을 빠르게 검색할 수 있는 여러 기능들이 추가되었습니다. 가장 중요한 기능은 `위치(Places)`를 등록하는 것입니다. 자주 사용하는 폴더를 `이미지 열기` 대화상자의 `위치(Places)` 목록에 추가할 수 있습니다.

### 위치(Places) 목록
사용자의 `위치(Places)` 목록은 `이미지 열기` 대화상자의 왼쪽에 표시됩니다.

#### [그림 90.4.38.a111. `이미지 열기` 대화상자 - 위치(Places) 목록 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a111-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-place_list](https://github.com/wonder13662/gimp/assets/15767104/9395a68d-1c2a-4fc2-a690-9952a690f276)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a111-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 위치(Places) 목록의 기본 폴더
이 목록의 가장 위쪽에 표시된 폴더들(`바탕 화면` 등)은 시스템에서 기본적으로 제공되는 값입니다. 

#### [그림 90.4.38.a112. `이미지 열기` 대화상자 - 위치(Places) 목록의 기본 폴더 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a112-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98-%EA%B8%B0%EB%B3%B8-%ED%8F%B4%EB%8D%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-place_list_default_folders](https://github.com/wonder13662/gimp/assets/15767104/e2b038c2-8142-42c0-86a6-392fe5daf53a)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a112-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98-%EA%B8%B0%EB%B3%B8-%ED%8F%B4%EB%8D%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 위치(Places) 목록의 `+` 버튼
`위치(Places)` 목록의 아래쪽의 `+` 버튼은 파일 목록에서 선택한 폴더를 `위치(Places)` 목록에 추가합니다.

#### [그림 90.4.38.a113. `이미지 열기` 대화상자 - 위치(Places) 목록의 `+` 버튼 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a113-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98--%EB%B2%84%ED%8A%BC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-place_list-btn_add](https://github.com/wonder13662/gimp/assets/15767104/bada7425-8039-46d7-ace5-e85d466dccc4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a113-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98--%EB%B2%84%ED%8A%BC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

#### [영상 90.4.38.a116. `이미지 열기` 대화상자 - 폴더 추가하기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EC%98%81%EC%83%81-90438a116-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8F%B4%EB%8D%94-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8c68793e-8495-406d-86f0-71860f5a8741"></video>

### 위치(Places) 목록의 `-` 버튼
`위치(Places)` 목록의 아래쪽의 `-` 버튼은 `위치(Places)` 목록에서 선택된 폴더를 지웁니다.

#### [그림 90.4.38.a114. `이미지 열기` 대화상자 - 위치(Places) 목록의 `-` 버튼 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a114-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98---%EB%B2%84%ED%8A%BC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-place_list-btn_remove](https://github.com/wonder13662/gimp/assets/15767104/2c0fea1e-4006-42b0-9faa-0f12c7594ce2)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a114-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98---%EB%B2%84%ED%8A%BC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

#### [영상 90.4.38.a117. `이미지 열기` 대화상자 - 폴더 제거하기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EC%98%81%EC%83%81-90438a117-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8F%B4%EB%8D%94-%EC%A0%9C%EA%B1%B0%ED%95%98%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/336620da-9ae1-4d7e-a102-5199c0449001"></video>

### 위치(Places) 목록의 폴더 클릭
`위치(Places)` 목록의 폴더를 클릭하면 파일 목록이 해당 폴더로 바로 이동합니다.

#### [영상 90.4.38.a115. `이미지 열기` 대화상자 - 위치(Places) 목록의 폴더를 클릭 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EC%98%81%EC%83%81-90438a115-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9C%84%EC%B9%98places-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%8F%B4%EB%8D%94%EB%A5%BC-%ED%81%B4%EB%A6%AD-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/c792bbc8-26cc-49a7-b2de-6c66008ec909"></video>

> 🗒️ 참고
>
> [원문](https://docs.gimp.org/2.10/ko/gimp-using-fileformats-opening.html)에서는 폴더를 더블 클릭해야 이동하는 것으로 설명하고 있습니다. 하지만 가이드에서 설명하는 `Windows`와 `Mac` 환경에서는 클릭만으로 이동합니다.

## 콘텐츠 목록
`이미지 열기` 대화상자의 가운데에는 선택된 폴더(디렉토리)의 콘텐츠 목록이 있습니다.

#### [그림 90.4.38.a121. `이미지 열기` 대화상자 - 콘텐츠 목록 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a121-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-content_list](https://github.com/wonder13662/gimp/assets/15767104/d2fa06b0-52b7-4b39-a993-ffa4232b5ba9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a121-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 콘텐츠 목록의 하위 폴더(디렉토리)
하위 폴더(디렉토리)는 목록의 위쪽에 보여줍니다.

#### [그림 90.4.38.a122. `이미지 열기` 대화상자 - 콘텐츠 목록의 하위 폴더(디렉토리) (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a122-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%95%98%EC%9C%84-%ED%8F%B4%EB%8D%94%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-content_list-subdirectory](https://github.com/wonder13662/gimp/assets/15767104/da0dcebb-81fc-4668-ab6a-05ee7ab4d4ba)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a122-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%95%98%EC%9C%84-%ED%8F%B4%EB%8D%94%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 콘텐츠 목록의 파일
파일은 하위 폴더(디렉토리)의 아래쪽에 있습니다.

#### [그림 90.4.38.a123. `이미지 열기` 대화상자 - 콘텐츠 목록의 파일 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a123-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%8C%8C%EC%9D%BC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-content_list-image_file](https://github.com/wonder13662/gimp/assets/15767104/36aa5cf7-6627-48d7-b49f-c383298b7261)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a123-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%8C%8C%EC%9D%BC-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 콘텐츠 목록의 파일 유형 제한
기본값으로 폴더(디렉토리)의 모든 파일을 보여줍니다. 하지만 특정 유형의 이미지 파일만 보여지도록 제한할 수 있습니다. 보여지는 파일 유형을 제한하려면, 대화상자의 콘텐츠 목록의 아래의 `파일 유형 선택`에서 보여질 파일 유형을 선택할 수 있습니다.

#### [그림 90.4.38.a124. `이미지 열기` 대화상자 - 콘텐츠 목록의 파일 유형 제한 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a124-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%8C%8C%EC%9D%BC-%EC%9C%A0%ED%98%95-%EC%A0%9C%ED%95%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-focus-file_type](https://github.com/wonder13662/gimp/assets/15767104/c58708b1-dbd0-4647-b849-5308410438b2)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EA%B7%B8%EB%A6%BC-90438a124-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%8C%8C%EC%9D%BC-%EC%9C%A0%ED%98%95-%EC%A0%9C%ED%95%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

아래 예시 영상에서는 `파일 유형 선택`에서 파일 유형을 `jpg`로 제한해서, `xcf` 유형 파일이 목록에서 사라지는 모습을 볼 수 있습니다.

#### [영상 90.4.38.a125. `이미지 열기` 대화상자 - 콘텐츠 목록의 파일 유형 제한 설정하기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-38-open_image.html#%EC%98%81%EC%83%81-90438a125-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%BD%98%ED%85%90%EC%B8%A0-%EB%AA%A9%EB%A1%9D%EC%9D%98-%ED%8C%8C%EC%9D%BC-%EC%9C%A0%ED%98%95-%EC%A0%9C%ED%95%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1ef4bc6f-c171-40ee-b358-4843701cf87a"></video>

## 미리보기(Preview)
콘텐츠 목록의 이미지 파일을 선택하면, 이미지의 기본 정보와 함께 미리보기가 `이미지 열기` 대화상자의 오른쪽에 나타납니다.

#### 그림 90.4.38.a131. `이미지 열기` 대화상자 - 미리보기(Preview) (Windows) (우리말)
![90-04-38-open_image(windows)(ko)-focus-preview](https://github.com/wonder13662/gimp/assets/15767104/d92741cb-065f-47b0-b18a-e67b3ee01192)

### 미리보기 캐시 해제
미리보기는 만들어지면서 캐싱되는 점에 주의하세요. 미리보기는 캐싱되었기 때문에 이미지의 최신 상태를 보여주지 못할 수도 있습니다. 미리보기가 이미지의 최신 상태를 보여주지 않는다고 생각된다면, `Ctrl` 키를 누른 상태로 미리보기 영역을 클릭하세요. 미리보기의 캐시가 해제되고 새로운 미리보기 이미지를 강제로 만들수 있습니다.

## 하위 페이지
[5.3.1.1. PDF 불러오기](./05-03-01-open-filex-01-import_from_pdf.md)

[5.3.1.2. PostScript 불러오기](./05-03-01-open-filex-02-import_from_postscript.md)

## 다른 페이지로 가기

[➡️ 다음: 5.3.1.1. PDF 불러오기](./05-03-01-open-filex-01-import_from_pdf.md)

[⬅️ 이전: 5.3. 파열 열기](./05-03-00-opening-files.md)

[⬆️ 위: 5.3. 파열 열기](./05-03-00-opening-files.md)

[⬆️ 위: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-fileformats-opening.html)
