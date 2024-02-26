# 7.7. 새 붓 추가하기
## 1. GIMP(김프)의 붓의 파일 형식
### 1-1. GBR
`.gbr` 확장자는 "gimp brush"를 의미합니다. `.gbr` 확장자는 [일반 붓](./07-06-brushesx-01-ordinary_brush.md)과 [색상 붓](./07-06-brushesx-02-color_brush.md)에 사용됩니다. 여러 타입의 이미지나 다른 프로그램에서 사용되는 붓들을 GIMP(김프)로 연 다음에 `.gbr`로 내보냄으로써 GIMP(김프)의 붓으로 바꿀 수 있습니다. `.gbr`로 내보내기 할 때 붓의 기본 간격을 설정허는 대화상자가 뜹니다.

#### [그림 90.4.52.a101. `이미지를 붓으로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-52-export_image_as_brush(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/7f5a1766-b93a-438a-9092-0f99e5e169f6)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-52-export_image_as_brush.html#%EA%B7%B8%EB%A6%BC-90452a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93%EC%9C%BC%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지를 붓으로 내보내기` 대화상자 확인하기](./90-04-52-export_image_as_brush.md)

[comment]: <> (TODO 원문에 파일 타입관련 상세 내용 있음. 확인 필요.)

### 1-2. GIH
`.gih` 확장자는 "gimp image hose"를 의미합니다.`.gih` 확장자는 움직이는 붓(animated brush)에 사용됩니다. 움직이는 붓은 많은 레이어를 포함한 이미지로 구성되어 있고, 각 레이어에는 어려 모양의 붓이 층층이 쌓여 있습니다. 이미지를 `.gih` 포맷으로 저장하면, 붓의 형태에 대해 주석을 달 수 있는 대화상자가 열립니다. 

#### 그림 90.4.54.a101. `이미지를 붓 파이프로 내보내기` 대화상자 (Windows) (우리말)
![90-04-54-export_image_as_brush_pipe(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/772cddf7-fec0-4394-8394-99ec12a986e8)

더 자세한 내용은 [GIH 대화상자](./07-08-the-gih-dialog-box.md)을 참고해주세요.

[comment]: <> (TODO 원문에 파일 타입관련 상세 내용 있음. 확인 필요.)

### 1-3. VBR
`.vbr` 확장자는 `붓 편집기`로 만드는 [파라매트릭 붓](./07-06-brushesx-05-paramatric_brush.md)의 확장자입니다.

[comment]: <> (TODO 원문에 파일 타입관련 상세 내용 있음. 확인 필요.)

### 1-4. MYB
`.myb` 확장자는 `MyPaint 붓`의 확장자입니다. 더 자세한 내용은 [MyPaint 붓](./14-03-08-mypaint-brush.md)을 참고해주세요.

[comment]: <> (TODO 원문에 파일 타입관련 상세 내용 있음. 확인 필요.)

## 2. 새 붓 추가하고 불러오기
새로운 붓을 추가하기 위해서는, 붓을 만들거나 다운로드 받은 뒤에, GIMP(김프)에서 사용 가능한 포맷으로 저장해야 합니다. 새로운 붓 파일은 `기본 설정` → `폴더` → `붓`에 포함된 폴더 안에 있어야 GIMP(김프)가 인식하고 `붓 대화상자`에 표시할 수 있습니다. 

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)
[![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)

[다른 운영체제와 언어의 `기본 설정` → `폴더` → `붓` 확인하기](./90-02-09-foldersx-01-brushes.md)

> 🗒️ 참고
>
> `붓 편집기`로 새로운 `파라매트릭 붓`을 만들면, 자동으로 사용자 붓 폴더에 저장됩니다.

[comment]: <> (TODO 김프 전용 붓 다운로드 링크 추가필요)

`기본 설정` → `폴더` → `붓`에 포함된 폴더에 있는 새로 추가된 모든 `.gbr`, `.gih`, `.vrb`, `.myb` 파일은 `붓 대화상자`의 새로고침 버튼으로 업데이트하거나, GIMP(김프)를 재시작하면 사용할 수 있습니다.

#### [영상 90.4.15.a153. 일반붓 만들기 - `.gbr` 파일을 불러오기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a153-%EC%9D%BC%EB%B0%98%EB%B6%93-%EB%A7%8C%EB%93%A4%EA%B8%B0---gbr-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/40fdc204-f9d5-4cce-b7dd-289c00a9cbf3"></video>

> 🗒️ 참고
>
> 새 붓을 빨리 추가하는 방법은 [9.2. 새 붓 빨리 만들기](./07-09-02-creating-a-brush-quickly.md)을 참고해주세요.

***

## 다른 페이지로 가기
[➡️ 다음: 7.8. GIH 대화상자](./07-08-the-gih-dialog-box.md)

[⬅️ 이전: 7.6. 붓](./07-06-brushes.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-brushes.html)