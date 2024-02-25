# 7.6.2. 색상 붓(Color brushes)
`색상 붓`은 붓 도구 대화상자에 색상 이미지로 표현됩니다. 이러한 붓으로 칠하면, 전경색이 아닌 붓 도구 대화상자에 나타낸 색으로 칠해집니다. 그 외의 동작은 일반 붓과 같습니다.

[comment]: <> (TODO 색상 붓 채색 영상 추가하기)

## 색상 붓 만들기
`색상 붓`을 만들기 위해서 우선 작은 RGBA 이미지를 준비합니다. 새 이미지를 열고, 고급 설정의 색상 모드(Color space)를 `RGB`로 합니다. 그리고 Fill with를 투명(Transparent)로 설정합니다.

#### [그림 90.4.37.a111. `새 이미지 만들기` 대화상자 (Windows) (우리말) - 색상붓을 만들기 위한 설정](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-37-create_a_new_image.html#%EA%B7%B8%EB%A6%BC-90437a111-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%83%89%EC%83%81%EB%B6%93%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%84%A4%EC%A0%95)
[![90-04-37-create_a_new_image(windows)(ko)-color_brush_setting-focus](https://github.com/wonder13662/gimp/assets/15767104/17dfd4b8-7373-4a92-838a-a853c07f1b44)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-37-create_a_new_image.html#%EA%B7%B8%EB%A6%BC-90437a111-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%83%89%EC%83%81%EB%B6%93%EC%9D%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EC%9C%84%ED%95%9C-%EC%84%A4%EC%A0%95)

이미지를 그리고, 작업한 이미지의 모든 속성을 `.xcf` 파일로 저장합니다.

#### [그림 90.4.15.a161. 색상붓 만들기 - RGBA 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a161-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---rgba-%EC%9D%B4%EB%AF%B8%EC%A7%80)
[![color_brush](https://github.com/wonder13662/gimp/assets/15767104/31d1859a-794e-4674-9142-0c331d2f9de0)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a161-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---rgba-%EC%9D%B4%EB%AF%B8%EC%A7%80)

그리고 그 다음에 `.gbr` 파일로 내보냅니다.

#### [영상 90.4.15.a162. 색상붓 만들기 - RGBA 이미지를 `.gbr` 파일로 내보내기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a162-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---rgba-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gbr-%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/dc1297a0-7e4b-47a3-b60a-21f90d9da2fe"></video>

`.gbr` 파일을 옮길 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로를 파일 탐색기로 엽니다.

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)
[![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)

[다른 운영체제와 언어의 `기본 설정` → `폴더` → `붓` 확인하기](./90-02-09-foldersx-01-brushes.md)

#### [영상 90.2.9.1.a112. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더를 파일탐색기로 열기](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EC%98%81%EC%83%81-90291a112-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94%EB%A5%BC-%ED%8C%8C%EC%9D%BC%ED%83%90%EC%83%89%EA%B8%B0%EB%A1%9C-%EC%97%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e16a09ae-d1fe-46a9-915c-4eb28bc95558"></video>

`.gbr` 파일을 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로로 옮깁니다. 새로 저장한 파일은 `Refresh brushes` 버튼을 눌러서 새로 추가한 `색상 붓`을 붓 대화상자에 띄웁니다.

#### [영상 90.4.15.a163. 색상붓 만들기 - `.gbr` 파일을 불러오기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a163-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---gbr-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/012bc61a-d955-42d3-99fa-d4b9297cfefa"></video>

이제 새로 만든 붓으로 칠해보겠습니다. 전경색과는 상관없이 색상 붓의 자국이 가지고 있는 색상만이 표시됩니다.

#### [영상 90.4.15.a164. 색상붓 만들기 - 색상붓으로 칠하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a164-%EC%83%89%EC%83%81%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%EC%83%89%EC%83%81%EB%B6%93%EC%9C%BC%EB%A1%9C-%EC%B9%A0%ED%95%98%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7162b436-f9c5-4b27-a706-9a7d8e59f383"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.6.3. 클립보드 붓(Clipboard Brush)](./07-06-brushesx-03-clipboard_brush.md)

[⬅️ 이전: 7.6.1. 일반 붓(Ordinary brushes)](./07-06-brushesx-01-ordinary_brush.md)

[⬆️ 위: 7.7. 새 붓 추가하기](./07-07-adding-new-brushes.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-brushes.html)
