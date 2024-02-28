# 7.8.1. GIH 대화상자 - 설정값

#### [그림 90.4.54.a101. `이미지를 붓 파이프로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-54-export_image_as_brush_pipe.html#%EA%B7%B8%EB%A6%BC-90454a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-54-export_image_as_brush_pipe(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/772cddf7-fec0-4394-8394-99ec12a986e8)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-54-export_image_as_brush_pipe.html#%EA%B7%B8%EB%A6%BC-90454a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EB%B6%93-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

## 1. 설명(Description)
`붓 대화상자`에서 `격자로 보기(View as Grid)`일 경우, 붓 선택시 나오는 붓의 이름입니다.

#### [영상 90.4.15.a191. 붓 대화상자의 붓 설명(description)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a191-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EB%B6%93-%EC%84%A4%EB%AA%85description)
[![90-04-15-view_as_grid(windows)(ko)-focus-brush_description](https://github.com/wonder13662/gimp/assets/15767104/fb4f6097-a9e0-4cc0-aa68-c03d0b462846)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-15-brushes.html#%EC%98%81%EC%83%81-90415a191-%EB%B6%93-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EB%B6%93-%EC%84%A4%EB%AA%85description)

## 2. 간격(Spacing)
단위는 퍼센트(%) 입니다. `간격`은 연속된 붓의 자국의 거리입니다. 어떤 칠하기 도구라도 선택한 붓으로 그릴 때의 간격을 고려해야 합니다. 만약 간격이 좁다면, 자국이 매우 가까워 이어져 보일 수 있습니다. 반대로 간격이 넓다면, 자국은 분리되어 보일 것입니다. [색상 붓](./07-06-brushesx-02-color_brush.md)의 경우에는 유용할 수 있습니다. 값의 입력 범위는 1부터 200까지 입니다. 그리고 이 입력 범위는 붓의 지름(diameter)을 기준으로 삼습니다. 예를 들어 100%는 붓의 지름 1개의 거리입니다.

## 3. 셀 크기(Cell size)
GIMP(김프)에서의 셀은 움직이는 붓(animated brush)에서 사용하는 여러 개의 이미지 중 한 이미지를 가리키는 말입니다. 연속된 이미지를 보는 애니메이션을 멈추었을 때 볼 수 있는 낱개의 이미지 한장과 같은 개념입니다. 셀 크기는 레이어에서 잘라낸 셀의 크기입니다. 기본값은 레이어당 1 셀이며, 크기는 레이어의 크기입니다. 이 경우, 레이어당 한 개의 모양의 붓만 가지게 됩니다.

큰 레이어에서 레이어보다 작은 셀들을 잘라내 움직이는 붓(animated brush)의 각각의 모양으로 사용할 수도 있습니다.

예를 들어 8개의 셀을 가진 100x100 픽셀 크기 붓을 만든다고 할 경우, 400x200 픽셀의 레이어에서 8개의 모양을 만들 수도 있고, 300x300 픽셀의 레이어에서 만들 수도 있습니다. 하지만 300x300의 경우 8개의 셀을 쓰기 때문에 하나는 사용하지 않게 됩니다.

GIMP(김프)는 셀을 각 레이어에서 셀 크기를 기준으로 가져옵니다. 그리고 가져온 셀들을 가져온 순서대로 쌓습니다. 쌓은 층을 스택(stack)이라고 합니다. 그리고 스택의 첫번째 셀을 제일 먼저 처리합니다. 이 방식을 [선입선출(FIFO)](https://ko.wikipedia.org/wiki/%EC%84%A0%EC%9E%85_%EC%84%A0%EC%B6%9C)이라고 합니다. 

#### [그림 90.99.a144. 선입선출(FIFO - first in, first out)](https://wonder13662.github.io/gimp/2.10.36_ko/90-99-etc.html#%EA%B7%B8%EB%A6%BC-9099a144-%EC%84%A0%EC%9E%85%EC%84%A0%EC%B6%9Cfifo---first-in-first-out)
[![Fifo_queue](https://github.com/wonder13662/gimp/assets/15767104/6e7cd780-e5cb-4347-911e-1ce4fa3ceade)](https://wonder13662.github.io/gimp/2.10.36_ko/90-99-etc.html#%EA%B7%B8%EB%A6%BC-9099a144-%EC%84%A0%EC%9E%85%EC%84%A0%EC%B6%9Cfifo---first-in-first-out)

## 4. 셀의 수(Number of cells)
모든 레이어에서 잘라내는 셀의 모든 갯수입니다. 셀의 모든 갯수가 1개일 경우는 붓 모양이 1개가 됩니다. 기본값은 레이어의 갯수로 붓 모양 한개에 하나의 레이어가 사용됩니다.

## 5. 표시(Display as)
레이어에서 셀이 어떻게 정렬되는지 표시합니다. 예를 들어, 레이어마다 2개의 셀을 가지고 모두 4개의 레이어를 가진다면, "1행 2각 레이어의 열"이라고 표시됩니다.

## 6. 차원(Dimension)
차원은 각 셀을 나눠 그룹으로 묶는 기준을 의미합니다. 이는 그래프의 축(axis)과 같습니다.

1차원 배열에서는 1개의 차원을 가집니다.

#### [그림 90.99.a147. 1차원 배열(array)]()
[![gih-array1D](https://github.com/wonder13662/gimp/assets/15767104/75d078d4-d4bb-4106-adb1-15df4a1fd485)]()

2차원 배열에서는 2개의 차원을 가집니다.

#### [그림 90.99.a145. 2차원 배열(array)]()
[![gih-array2D](https://github.com/wonder13662/gimp/assets/15767104/a7c1b608-6ad5-4d66-b035-2286ce82115d)]()

3차원 배열에서는 3개의 차원을 가집니다.

#### [그림 90.99.a146. 3차원 배열(array)]()
[![gih-array3D](https://github.com/wonder13662/gimp/assets/15767104/9e144c26-051e-4617-9331-28c2cc2968ef)]()

GIMP(김프)에서는 최대 4개의 차원까지 가질 수 있습니다. 차원(Dimension)을 바꿀때마다 차원 아래의 횡렬(Rank) 입력 목록의 활성화 갯수가 달라집니다.

#### 그림 90.4.54.a105. `이미지를 붓 파이프로 내보내기` 대화상자 (Windows) (우리말) - 차원을 바꾸면 횡렬도 영향을 받습니다
![90-04-54-dimension_animated(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/9a713938-38c1-4b5b-b1d9-613bce3b07ad)

## 7. 횡렬(Ranks)
움직이는 붓(animated brush)이 쓸 셀을 선택하는 조건으로 쓰일 차원의 횡렬을 설정합니다. 횡렬은 차원 축에서 가질 수 있는 0부터 최대 값 사이의 어떤 값을 가리키는 용어로도 쓰입니다. 

### 7-1. 횡렬 최대값
횡렬 최대값은 차원 축에서 가질 수 있는 최대값을 의미합니다. 

#### 그림 90.4.54.a106. `이미지를 붓 파이프로 내보내기` 대화상자 (Windows) (우리말) - 횡렬(Rank)
![90-04-54-rank_selection(windows)(ko)-focus-rank](https://github.com/wonder13662/gimp/assets/15767104/c417dd31-8a16-4b05-8c30-52b00d3f05e4)

## 7-2. 차원의 횡렬의 선택(Selection)
#### 그림 90.4.54.a107. `이미지를 붓 파이프로 내보내기` 대화상자 (Windows) (우리말) - 횡렬의 선택(selection)
![90-04-54-rank_selection(windows)(ko)-focus-rank_selection](https://github.com/wonder13662/gimp/assets/15767104/f87bf33c-8ac1-46ba-950f-46ddc4f2c6c4)

각 `차원(Dimension)`에 설정하는 `횡렬(Ranks)`에 `선택(Selection)` 모드를 설정할 수 있습니다. 실제로 이미지에 붓을 칠할 때, 붓의 모양을 고르는 기준은 `선택(Selection)` 모드의 영향을 받습니다. 각 모드는 아래와 같습니다.

### 7-1. 증분(Incremental)
선택한 `차원(Dimension)`에서의 `횡렬(Ranks)`은 이전에 차원에서 사용했던 횡렬 순서(rank order)에서 1이 증가한 값으로 결정됩니다. 결정된 값이 횡렬의 셀의 갯수(Ranks of cell)를 넘으면 맨 처음 값을 가지게 됩니다.

### 7-2. 무작위(Random)
선택한 `차원(Dimension)`에서의 `횡렬(Ranks)`은 횡렬의 셀(Ranks of cell)의 갯수 중에 무작위로 결정됩니다.

### 7-3. 각도(Angular)
선택한 `차원(Dimension)`에서의 `횡렬(Ranks)`은 붓의 움직이는 각도에 따라 결정됩니다.

첫번째 횡렬은 위쪽인 0°입니다. 첫번째 외의 다른 횡렬은 횡렬의 셀의 갯수에서 360°를 나눈 각도(`360/횡렬의 셀의 갯수`)만큼씩 시계방향으로 영향을 받습니다. 선택된 차원에서 4개의 횡렬가 있다고 한다면, 각 횡렬에 90°씩 시계방향으로 바뀌게 됩니다. 두번째 횡렬은 90°도이며 오른쪽 방향입니다. 세번째 횡렬은 180°이며 아래쪽 방향입니다. 마지막 네번째 횡렬은 270°(-90°)이며 왼쪽 방향입니다.

아래 영상을 확인해보시면, 마우스 포인터를 드래그하는 각도에 따라 손 이미지의 회전이 달라지는 것을 확인할 수 있습니다.

#### 영상 7.8.2.2.a118. 새로운 붓으로 칠하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ef3a8c7e-fe12-47ee-9b91-dbe9e6fe3b11"></video>

관련 내용은 [7.8.2.2. 3차원 이미지 호스(A three dimension image hose)](./07-08-the-gih-dialog-boxx-02-examplex-02-three_dimension_image_hose.md)을 확인해주세요.

### 8-4. Speed, Pressure, x tilt, y tilt
이 설정들은 정교한 펜 타블렛을 위한 설정입니다.

***

## 다른 페이지로 가기
[➡️ 다음: 7.8.2.1. 1차원 이미지 파이프(One diemnsion image pipe)](./07-08-the-gih-dialog-boxx-02-examplex-01-one_dimension_image_pipe.md)

[⬅️ 이전: 7.8. GIH 대화상자](./07-08-the-gih-dialog-box.md)

[⬆️ 위: 7.8. GIH 대화상자](./07-08-the-gih-dialog-box.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-animated-brushes.html)
