# 7.6.2. 색상 붓(Color brushes)
`색상 붓`은 붓 도구 대화상자에 색상 이미지로 표현됩니다. 이러한 붓으로 칠하면, 전경색이 아닌 붓 도구 대화상자에 나타낸 색으로 칠해집니다. 그 외의 동작은 일반 붓과 같습니다.

## 색상 붓 만들기
### 1. 새 이미지 열기
새 이미지를 열고, 고급 설정의 색상 모드(Color space)를 `RGB`로 합니다. 그리고 `채우기(Fill with)`를 `투명(Transparent)`로 설정합니다.

<a id="90-04-37-a111"></a>

#### [그림 90.4.37.a111. `새 이미지 만들기` 대화상자 (Windows) (우리말) - 색상붓을 만들기 위한 설정](./90-04-0037-create_a_new_image.md#90-04-37-a111)
![90-04-37-a111](https://github.com/wonder13662/gimp/assets/15767104/17dfd4b8-7373-4a92-838a-a853c07f1b44)

### 2. 색상 붓 이미지 만들기
`색상 붓`을 만들기 위해서 작은 RGBA 이미지를 준비합니다. 이미지를 그리고, 작업한 이미지의 모든 속성을 `.xcf` 파일로 저장합니다.

<a id="90-04-15-a161"></a>

#### [그림 90.4.15.a161. 색상붓 만들기 - RGBA 이미지](./90-04-0015-brushes.md#90-04-15-a161)
![90-04-15-a161](https://github.com/wonder13662/gimp/assets/15767104/31d1859a-794e-4674-9142-0c331d2f9de0)

### 3. 색상 붓 이미지를 `.gbr`로 내보내기
그 다음에 `.gbr` 파일로 내보냅니다.

<a id="90-04-15-a162"></a>

#### [영상 90.4.15.a162. 색상붓 만들기 - RGBA 이미지를 `.gbr` 파일로 내보내기](./90-04-0015-brushes.md#90-04-15-a162)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/dc1297a0-7e4b-47a3-b60a-21f90d9da2fe"></video>

### 4. 저장한 `.gbr` 파일을 GIMP(김프)의 브러시 폴더로 옮기기
`.gbr` 파일을 옮길 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로를 파일 탐색기로 엽니다.

<a id="90-02-09-01-a111"></a>

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](./90-02-09-01-brushes.md#90-02-09-01-a111)
![90-02-09-01-a111](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)

[다른 운영체제와 언어의 `기본 설정` → `폴더` → `붓` 확인하기](./90-02-09-01-brushes.md)

<a id="90-02-09-01-a112"></a>

#### [영상 90.2.9.1.a112. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더를 파일탐색기로 열기](./90-02-09-01-brushes.md#90-02-09-01-a112)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/e16a09ae-d1fe-46a9-915c-4eb28bc95558"></video>

`.gbr` 파일을 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로로 옮깁니다. 

### 5. `붓 대화상자`에 새로운 색상 붓 불러오기
`붓 대화상자`의 `Refresh brushes` 버튼을 눌러서 새로 추가한 `색상 붓`을 붓 대화상자에 띄웁니다.

<a id="90-04-15-a163"></a>

#### [영상 90.4.15.a163. 색상붓 만들기 - `.gbr` 파일을 불러오기](./90-04-0015-brushes.md#90-04-15-a163)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/012bc61a-d955-42d3-99fa-d4b9297cfefa"></video>

### 6. 새로운 색상 붓으로 칠하기
이제 새로 만든 붓으로 칠해보겠습니다. 전경색과는 상관없이 색상 붓의 자국이 가지고 있는 색상만이 표시됩니다.

<a id="90-04-15-a164"></a>

#### [영상 90.4.15.a164. 색상붓 만들기 - 색상붓으로 칠하기](./90-04-0015-brushes.md#90-04-15-a164)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/7162b436-f9c5-4b27-a706-9a7d8e59f383"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.6.3. 클립보드 붓(Clipboard Brush)](./07-06-03-clipboard_brush.md)

[⬅️ 이전: 7.6.1. 일반 붓(Ordinary brushes)](./07-06-01-ordinary_brush.md)

[⬆️ 위: 7.6. 붓](./07-06-00-brushes.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-brushes.html)
