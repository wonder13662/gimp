# 7.6.1. 일반 붓(Ordinary brushes)
GIMP(김프)에서의 붓은 대부분 `일반 붓`입니다. `일반 붓`은 그레이스케일(grayscale) [픽스맵](./19-glossaryx-pixmap.md)입니다. 붓으로 이미지 위에 그려진 곳에 픽스맵의 자국이 보입니다.

[comment]: <> (TODO 다음 문장을 재현하지 못함. 추가 조사 필요!)
[comment]: <> (When you paint using them, the current foreground color \(as shown in the Color Area of the Toolbox\) is substituted for black)

## 일반 붓 만들기
`일반 붓`을 만들려면, 작은 크기의 흑백 이미지를 준비합니다. 

#### [그림 90.4.15.a151. 일반붓 만들기 - 흑백 이미지](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a151-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%ED%9D%91%EB%B0%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80)
[![ordinary_brush-pixmap](https://github.com/wonder13662/gimp/assets/15767104/4c9eb9f3-b404-4804-8d58-07a490da11ac)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EA%B7%B8%EB%A6%BC-90415a151-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%ED%9D%91%EB%B0%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80)

이 이미지를 `.gbr` 확장자로 저장합니다. 

#### [영상 90.4.15.a152. 일반붓 만들기 - 흑백 이미지를 `.gbr` 파일로 내보내기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a152-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%ED%9D%91%EB%B0%B1-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-gbr-%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/88fa3ae4-6970-4ed4-a1ed-32aa26eb56db"></video>

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-52-export_image_as_brush(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지를 붓으로 내보내기` 대화상자 확인하기](./90-04-52-export_image_as_brush.md)

`.gbr` 파일을 `기본 설정` → `폴더` → `붓`에 선택된 "붓 폴더" 경로로 옮깁니다. 저장한 파일은 `Refresh brushes` 버튼을 눌러서 새로 추가한 `일반 붓`을 붓 대화상자에 띄웁니다.

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)
[![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)

[다른 운영체제와 언어의 `기본 설정` → `폴더` → `붓` 확인하기](./90-02-09-foldersx-01-brushes.md)

#### [영상 90.2.9.1.a112. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더를 파일탐색기로 열기](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EC%98%81%EC%83%81-90291a112-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94%EB%A5%BC-%ED%8C%8C%EC%9D%BC%ED%83%90%EC%83%89%EA%B8%B0%EB%A1%9C-%EC%97%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e16a09ae-d1fe-46a9-915c-4eb28bc95558"></video>

#### [영상 90.4.15.a153. 일반붓 만들기 - `.gbr` 파일을 불러오기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a153-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---gbr-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/40fdc204-f9d5-4cce-b7dd-289c00a9cbf3"></video>

이제 새로 만든 붓으로 칠해보겠습니다. 여러가지 색상을 바꿔가며 칠할 수도 있습니다.

#### [영상 90.4.15.a154. 일반붓 만들기 - 새로운 일반붓으로 칠해보기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a154-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%9D%BC%EB%B0%98%EB%B6%93%EC%9C%BC%EB%A1%9C-%EC%B9%A0%ED%95%B4%EB%B3%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/c4e5e43b-c351-43d1-9e24-a61d786a6e55"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.6.2. 색상 붓(Color brushes)](./07-06-brushesx-02-color_brush.md)

[⬅️ 이전: 7.7. 새 붓 추가하기](./07-07-adding-new-brushes.md)

[⬆️ 위: 7.7. 새 붓 추가하기](./07-07-adding-new-brushes.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-brushes.html#idm4315)
