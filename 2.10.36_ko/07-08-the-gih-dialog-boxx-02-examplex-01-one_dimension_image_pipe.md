# 7.8.2.1. 1차원 이미지 파이프(One diemnsion image pipe)
선택 모드를 알아보기 위해 1차원 배열부터 시작해보겠습니다. 아래와 같은 모양을 상상해보겠습니다.

#### [그림 90.99.a147. 1차원 배열(array)](https://wonder13662.github.io/gimp/2.10.36_ko/90-99-etc.html#%EA%B7%B8%EB%A6%BC-9099a147-1%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4array)
[![gih-array1D](https://github.com/wonder13662/gimp/assets/15767104/75d078d4-d4bb-4106-adb1-15df4a1fd485)](https://wonder13662.github.io/gimp/2.10.36_ko/90-99-etc.html#%EA%B7%B8%EB%A6%BC-9099a147-1%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4array)

## 1. 새 이미지 만들기
너비 30 픽셀, 높이 30 픽셀의 새로운 이미지를 엽니다. `색상 공간(Color space)`은 `RGB` 색상으로 맞추고, `채우기(Fill with)`는 `투명(Transparency)`로 설정합니다.

#### [그림 90.4.37.a125. `새 이미지 만들기` 대화상자 - 고급옵션 (Windows) (우리말) - 1차원 이미지 파이프 만들기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-37-create_a_new_image.html#%EA%B7%B8%EB%A6%BC-90437a125-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89%EC%98%B5%EC%85%98-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---1%EC%B0%A8%EC%9B%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%B4%ED%94%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)
[![90-04-37-create_a_new_image-advanced_options(windows)(ko)-07-08-02-01-one_dimension](https://github.com/wonder13662/gimp/assets/15767104/1af96891-f5e0-4a4e-8503-62c64e760165)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-37-create_a_new_image.html#%EA%B7%B8%EB%A6%BC-90437a125-%EC%83%88-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89%EC%98%B5%EC%85%98-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---1%EC%B0%A8%EC%9B%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%B4%ED%94%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)

## 2. 레이어 만들기
`텍스트` 도구로 4개의 레이어에 각각 "1", "2", "3", "4"을 만듭니다. 기본적으로 추가된 `배경(background)` 레이어를 삭제합니다. 아래 이미지의 레이어 순서에 주의하세요. 레이어 순서가 붓을 칠할때 그려질 순서가 됩니다.

#### 그림 7.8.2.1.a101. 4개의 레이어 만들기
![07-08-02-01-one_dimension-02-create_layers_with_number(asc)](https://github.com/wonder13662/gimp/assets/15767104/a3d6b6a8-9506-4cbd-8746-1bf615c97dc8)

## 3. `.gih` 포맷으로 내보내기 설정
`.xcf`으로 저장합니다. 그 다음에 `이미지 내보내기(Export As...)`로 `.gih` 포맷으로 내보냅니다.

`이미지 내보내기(Export As...)` 대화상자에서 이미지가 저장될 위치를 선택합니다. `내보내기(Export)` 버튼을 클릭합니다. `Export Image as 붓 파이프(Export image as brush pipe)` 대화상자가 열립니다. 각 항목에 아래처럼 입력합니다.

|항목|값|
|---|---|
|간격(Spacing)|100|
|설명(Description)|이름을 입력|
|셀 크기(Cell size)|30x30|
|셀 개수(Number of cells)|4|
|차원(Dimensions)|1|
|첫번째 차원|4열, 선택: "증분(Incremental)"|

#### 그림 7.8.2.1.a111. `.gih` 포맷으로 `이미지 내보내기(Export As...)`의 설정
![07-08-02-01-one_dimension-02-export_gih_dialog](https://github.com/wonder13662/gimp/assets/15767104/621794bc-d27f-4b38-b7b4-2a3f86c84729)

## 4. `.gih` 포맷으로 내보낼 위치 정하기
`.gih` 파일은 GIMP(김프)의 붓 폴더에 저장해야 합니다. `기본 설정` → `폴더` → `붓`의 폴더 위치를 확인하여서 `.gih` 파일을 그곳에 저장합니다. 

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)
[![90-02-09-foldersx-01-brushes(windows)(ko)-focus-selected_folder](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-02-09-foldersx-01-brushes.html#%EA%B7%B8%EB%A6%BC-90291a111-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95--%ED%8F%B4%EB%8D%94--%EB%B6%93-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90---%EC%84%A0%ED%83%9D%EB%90%9C-%EB%B6%93-%ED%8F%B4%EB%8D%94)

## 5. `붓 대화상자` 새로고침
`붓 대화상자`를 열고, `새로고침`버튼을 누릅니다. `붓 대화상자`에 새로운 붓이 나타나는 것을 확인할 수 있습니다. 

#### 영상 7.8.2.1.a121. `붓 대화상자` 새로고침
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2587a50c-5607-440d-9318-022d0abb0001"></video>

## 6. 새로운 붓(`Selection`: "Incremental")으로 칠하기
새로운 붓을 선택하고 연필 도구를 선택하여 이미지에 칠을 해봅시다. 1,2,3,4의 숫자가 차례대로 찍히는 것을 확인할 수 있습니다.

#### 영상 7.8.2.1.a131. 새로운 붓으로 칠하기(`Selection`: "Incremental")
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/36357a25-957c-4e15-a3dc-49faec79b5e6"></video>

## 7. 새로운 붓(`Selection`: "Random")으로 칠하기
이전에 저장했던 `.xcf` 파일을 다시 열어서 `.gih`의 설정을 `Selection`: "Random"으로 바꿉니다.

#### 그림 7.8.2.1.a141. `.gih` 포맷으로 `이미지 내보내기(Export As...)`의 설정(`Selection`: "Random")
![07-08-02-01-dialog-export_image_as_gih(windows)(ko)-focus-selection_random](https://github.com/wonder13662/gimp/assets/15767104/35a7f24a-6eb4-448c-a6ac-5e74098ed851)

수정한 붓으로 이미지에 칠해보면 숫자가 무작위(Random)으로 나오는 것을 확인할 수 있습니다.
#### 영상 7.8.2.1.a142. 새로운 붓으로 칠하기(`Selection`: "Random")
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0c8a1a62-c655-4d4b-8071-c9ee2565966f"></video>

## 8. 새로운 붓(`Selection`: "Angular")으로 칠하기
이전에 저장했던 `.xcf` 파일을 다시 열어서 `.gih`의 설정을 `Selection`: "Angular"로 바꿉니다.
#### 그림 7.8.2.1.a151. `.gih` 포맷으로 `이미지 내보내기(Export As...)`의 설정(`Selection`: "Angular")
![07-08-02-01-dialog-export_image_as_gih(windows)(ko)-selection_angular-focus](https://github.com/wonder13662/gimp/assets/15767104/bf7ca8c3-5104-4c0d-bb44-103f32b9e857)

수정한 붓으로 이미지에 칠해보면 숫자가 드래그하는 각도(Angular)에 따라 나오는 것을 확인할 수 있습니다.
#### 영상 7.8.2.1.a152. 새로운 붓으로 칠하기(`Selection`: "Angular")
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/4a862735-c3bb-4c03-ac90-d604c6e1fc8b"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 7.8.2.2. 3차원 이미지 호스(A three dimension image hose)](./07-08-the-gih-dialog-boxx-02-examplex-02-three_dimension_image_hose.md)

[⬅️ 이전: 7.8.1. GIH 대화상자 - 설정값](./07-08-the-gih-dialog-boxx-01-dialog_options_of_export_image_as_brush_pipe.md)

[⬆️ 위: 7.8. GIH 대화상자](./07-08-the-gih-dialog-box.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-animated-brushes.html)
