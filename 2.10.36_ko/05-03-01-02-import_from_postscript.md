# 5.3.1.2. 포스트스크립트(PostScript) 불러오기
`이미지 열기` 대화상자에서 포스트스크립트(PostScript) 파일을 열면, 추가적인 대화상자가 뜹니다. 이 대화상자에는 포스트스크립트 파일 유형에 관련된 선택사항들이 있습니다.

<a id="90-04-39-a101"></a>

#### [그림 90.4.39.a101. `포스트스크립트 가져오기` 대화상자 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a101)
![90-04-39-a101](https://github.com/wonder13662/gimp/assets/15767104/b31fc9f9-07e1-4315-a4a2-6c7dcf601c68)

[다른 운영체제와 언어의 `포스트스크립트 가져오기` 대화상자 확인하기](./90-04-39-import_from_postscript.md#90-04-39-a102)

## 랜더링(Rendering)
이미지의 크기를 너비(width), 높이(height) 그리고 해상도(resolution) 설정으로 제어할 수 있습니다. 포스트스크립트 문서는 물리적인 길이의 단위로 너비와 높이에 대한 정보를 갖고 있습니다. 그러므로 1 픽셀당 물리적인 길이의 단위가 너비, 높이, 해상도에 영향을 줍니다. 너비, 높이, 해상도 중 하나라도 바꾼다면, 나머지 값들이 자동으로 바뀐 값에 맞게 조정됩니다.

<a id="90-04-39-a111"></a>

#### [그림 90.4.39.a111. `포스트스크립트 가져오기` 대화상자 - 랜더링 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a111)
![90-04-39-a111](https://github.com/wonder13662/gimp/assets/15767104/398f20d2-5366-456c-9ffe-84280704d9bf)

## 색상화(Coloring)
### 검정/흰색(B/W)
검정과 흰색으로 2가지 색상의 인덱스 이미지로 만듭니다. [5.1. 이미지 타입 - 인덱스(indexed)](./05-01-image-types.md#05-01-s3)에서 상세한 설명을 확인할 수 있습니다.

<a id="90-04-39-a121"></a>

#### [그림 90.4.39.a121. `포스트스크립트 가져오기` 대화상자 - 색상화 - 검정/흰색 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a121)
![90-04-39-a121](https://github.com/wonder13662/gimp/assets/15767104/0f22a599-7bf5-4618-8f10-b22f07d63875)

### 회색(Gray)
`그레이스케일(grayscale)` 이미지의 회색입니다. [5.1. 이미지 타입 - 그레이스케일(grayscale)](./05-01-image-types.md#05-01-s2)에서 상세한 설명을 확인할 수 있습니다.

<a id="90-04-39-a122"></a>

#### [그림 90.4.39.a122. `포스트스크립트 가져오기` 대화상자 - 색상화 - 회색 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a122)
![90-04-39-a122](https://github.com/wonder13662/gimp/assets/15767104/aa033cfe-0363-439c-a8ab-c6537f685e9c)

### 색상(Color)
`색상(Color)`을 선택하면 RGB 이미지를 사용합니다. [5.1. 이미지 타입 - RGB](./05-01-image-types.md#05-01-s1)에서 상세한 설명을 확인할 수 있습니다.

<a id="90-04-39-a123"></a>

#### [그림 90.4.39.a123. `포스트스크립트 가져오기` 대화상자 - 색상화 - 색상 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a123)
![90-04-39-a123](https://github.com/wonder13662/gimp/assets/15767104/ac0ea23f-7c05-4838-901f-046c66286f9e)

### 자동(Automatic)
`자동(Automatic)`을 선택하면, GIMP(김프)에서 가장 적절한 색상 모드를 파일의 컨텐츠를 통해서 결정합니다.

<a id="90-04-39-a124"></a>

#### [그림 90.4.39.a124. `포스트스크립트 가져오기` 대화상자 - 색상화 - 자동 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a124)
![90-04-39-a124](https://github.com/wonder13662/gimp/assets/15767104/b358edbf-e82f-40aa-b060-94358c3423ee)

## 경계 상자 시도(Try Bounding Box)
`경계 상자 시도` 체크박스가 체크되어 있으면, GIMP(김프)는 포스트스크립트의 경계 상자 정보를 사용합니다. 경계 상자 정보는 페이지의 얼마만큼의 영역을 사용할 것인지 결정합니다. 이미지의 경계로부터 여백을 잘라내는 것과 같은 효과가 있습니다. 포스트스크립트에 경계 상자 정보가 없다면, `경계 상자 시도` 체크박스의 역할은 무시됩니다.

<a id="90-04-39-a131"></a>

#### [그림 90.4.39.a131. `포스트스크립트 가져오기` 대화상자 - 경계 상자 시도 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a131)
![90-04-39-a131](https://github.com/wonder13662/gimp/assets/15767104/12023097-dfc8-4b5a-8ad0-899e3323429e)

## 안티-앨리어싱(Anti-Aliasing)
포스트스크립트 이미지의 텍스트와 그래픽에 각각 [안티-앨리어싱(Anti-Aliasing)](./19-glossaryx-Anti-Aliasing.md)을 적용할 수 있습니다. `약함`과 `강함` 둘 중 하나를 선택할 수 있습니다.

<a id="90-04-39-a141"></a>

#### [그림 90.4.39.a141. `포스트스크립트 가져오기` 대화상자 - 안티-앨리어싱 (Windows) (우리말)](./90-04-39-import_from_postscript.md#90-04-39-a141)
![90-04-39-a141](https://github.com/wonder13662/gimp/assets/15767104/67e7bfb0-68a2-4f21-9c68-b7ace8182660)

(TODO 원문의 Page selection, Open pages as 항목이 대화상자에는 없습니다. 관련 내용 제보가 필요합니다.)

## 다른 페이지로 가기

[➡️ 다음: 5.3.2. 위치 열기](./05-03-02-open-location.md)

[⬅️ 이전: 5.3.1.1. PDF 불러오기](./05-03-01-01-import_from_pdf.md)

[⬆️ 위: 5.3.1. 파일 열기](./05-03-01-00-open-file.md)

[⬆️ 위: 5.3. 파열 열기](./05-03-00-opening-files.md)

[⬆️ 위: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-fileformats-opening.html#file-ps-load)