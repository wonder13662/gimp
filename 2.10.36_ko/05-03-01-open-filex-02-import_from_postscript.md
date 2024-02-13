# 5.3.1.2. 포스트스크립트(PostScript) 불러오기
`이미지 열기` 대화상자에서 포스트스크립트(PostScript) 파일을 열면, 추가적인 대화상자가 뜹니다. 이 대화상자에는 포스트스크립트 파일 유형에 관련된 선택사항들이 있습니다.

#### [그림 90.4.39.a101. `포스트스크립트 가져오기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a101-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-postscript](https://github.com/wonder13662/gimp/assets/15767104/b31fc9f9-07e1-4315-a4a2-6c7dcf601c68)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a101-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `포스트스크립트 가져오기` 대화상자 확인하기](./90-04-39-import_from_postscript.md)

## 랜더링(Rendering)
이미지의 크기를 너비(width), 높이(height) 그리고 해상도(resolution) 설정으로 제어할 수 있습니다. 포스트스크립트 문서는 물리적인 길이의 단위로 너비와 높이에 대한 정보를 갖고 있습니다. 그러므로 1 픽셀당 물리적인 길이의 단위가 너비, 높이, 해상도에 영향을 줍니다. 너비, 높이, 해상도 중 하나라도 바꾼다면, 나머지 값들이 자동으로 바뀐 값에 맞게 조정됩니다.

#### 그림 90.4.39.a111. `포스트스크립트 가져오기` 대화상자 - 랜더링 (Windows) (우리말)
![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-rendering](https://github.com/wonder13662/gimp/assets/15767104/398f20d2-5366-456c-9ffe-84280704d9bf)

## 색상화(Coloring)
### 검정/흰색(B/W)
검정과 흰색으로 2가지 색상의 인덱스 이미지로 만듭니다. [5.1. 이미지 타입 - 인덱스(indexed)](https://wonder13662.github.io/gimp/2.10.36_ko/05-01-image-types.html#%EC%9D%B8%EB%8D%B1%EC%8A%A4indexed)에서 상세한 설명을 확인할 수 있습니다.

#### [그림 90.4.39.a121. `포스트스크립트 가져오기` 대화상자 - 색상화 - 검정/흰색 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a121-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%EA%B2%80%EC%A0%95%ED%9D%B0%EC%83%89-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-coloring_bw](https://github.com/wonder13662/gimp/assets/15767104/0f22a599-7bf5-4618-8f10-b22f07d63875)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a121-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%EA%B2%80%EC%A0%95%ED%9D%B0%EC%83%89-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 회색(Gray)
`그레이스케일(grayscale)` 이미지의 회색입니다. [5.1. 이미지 타입 - 그레이스케일(grayscale)](https://wonder13662.github.io/gimp/2.10.36_ko/05-01-image-types.html#%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%BCgrayscale)에서 상세한 설명을 확인할 수 있습니다.

#### [그림 90.4.39.a122. `포스트스크립트 가져오기` 대화상자 - 색상화 - 회색 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a122-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%ED%9A%8C%EC%83%89-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-coloring_gray](https://github.com/wonder13662/gimp/assets/15767104/aa033cfe-0363-439c-a8ab-c6537f685e9c)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a122-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%ED%9A%8C%EC%83%89-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 색상(Color)
`색상(Color)`을 선택하면 RGB 이미지를 사용합니다. [5.1. 이미지 타입 - RGB](https://wonder13662.github.io/gimp/2.10.36_ko/05-01-image-types.html#rgb)에서 상세한 설명을 확인할 수 있습니다.

#### [그림 90.4.39.a123. `포스트스크립트 가져오기` 대화상자 - 색상화 - 색상 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a123-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%EC%83%89%EC%83%81-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-coloring_color](https://github.com/wonder13662/gimp/assets/15767104/ac0ea23f-7c05-4838-901f-046c66286f9e)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a123-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%EC%83%89%EC%83%81-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 자동(Automatic)
`자동(Automatic)`을 선택하면, GIMP(김프)에서 가장 적절한 색상 모드를 파일의 컨텐츠를 통해서 결정합니다.

#### [그림 90.4.39.a124. `포스트스크립트 가져오기` 대화상자 - 색상화 - 자동 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a124-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%EC%9E%90%EB%8F%99-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-coloring_automatic](https://github.com/wonder13662/gimp/assets/15767104/b358edbf-e82f-40aa-b060-94358c3423ee)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a124-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81%ED%99%94---%EC%9E%90%EB%8F%99-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

## 경계 상자 시도(Try Bounding Box)
`경계 상자 시도` 체크박스가 체크되어 있으면, GIMP(김프)는 포스트스크립트의 경계 상자 정보를 사용합니다. 경계 상자 정보는 페이지의 얼마만큼의 영역을 사용할 것인지 결정합니다. 이미지의 경계로부터 여백을 잘라내는 것과 같은 효과가 있습니다. 포스트스크립트에 경계 상자 정보가 없다면, `경계 상자 시도` 체크박스의 역할은 무시됩니다.

#### [그림 90.4.39.a131. `포스트스크립트 가져오기` 대화상자 - 경계 상자 시도 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a131-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B2%BD%EA%B3%84-%EC%83%81%EC%9E%90-%EC%8B%9C%EB%8F%84-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-try_bounding_box](https://github.com/wonder13662/gimp/assets/15767104/12023097-dfc8-4b5a-8ad0-899e3323429e)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-39-import_from_postscript.html#%EA%B7%B8%EB%A6%BC-90439a131-%ED%8F%AC%EC%8A%A4%ED%8A%B8%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B2%BD%EA%B3%84-%EC%83%81%EC%9E%90-%EC%8B%9C%EB%8F%84-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

## 안티-앨리어싱(Anti-Aliasing)
포스트스크립트 이미지의 텍스트와 그래픽에 각각 [안티-앨리어싱(Anti-Aliasing)](./19-glossaryx-Anti-Aliasing.md)을 적용할 수 있습니다. `약함`과 `강함` 둘 중 하나를 선택할 수 있습니다.

#### 그림 90.4.39.a141. `포스트스크립트 가져오기` 대화상자 - 안티-앨리어싱 (Windows) (우리말)
![90-04-38-open_image(windows)(ko)-extra_dialog-postscript-focus-anti_aliasing](https://github.com/wonder13662/gimp/assets/15767104/67e7bfb0-68a2-4f21-9c68-b7ace8182660)

(TODO 원문의 Page selection, Open pages as 항목이 대화상자에는 없습니다. 관련 내용 제보가 필요합니다.)

## 다른 페이지로 가기

[➡️ 다음: 5.3.2. 위치 열기](./05-03-02-open-location.md)

[⬅️ 이전: 5.3.1.1. PDF 불러오기](./05-03-01-open-filex-01-import_from_pdf.md)

[⬆️ 위: 5.3.1. 파일 열기](./05-03-01-open-file.md)

[⬆️ 위: 5.3. 파열 열기](./05-03-00-opening-files.md)

[⬆️ 위: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-fileformats-opening.html#file-ps-load)