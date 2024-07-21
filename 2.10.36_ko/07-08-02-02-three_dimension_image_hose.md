# 7.8.2.2. 3차원 이미지 호스(A three dimension image hose)
3차원 움직이는 붓(animated brush)의 방향은 칠하는 방향에 따라 바뀝니다. 이번에는 검정색과 파란색이 무작위로 나타나며 좌/우 손 모양이 규칙적으로 나타나는 붓을 만들어봅시다.

3차원 움직이는 붓을 만들기 위해서 몇 장의 이미지가 필요할까요? 첫번째 차원인 x 축에는 붓의 4개 방향을 표현합니다. 두번째 차원인 y 축에는 오른쪽/왼쪽의 손모양을 표현합니다. 그리고 세번째 차원인 z 축에는 색상(검정/파랑)을 표현합니다. 이 붓을 3차원 배열로 표현하면 `myarray(4,2,2)`이 됩니다.

#### 그림 7.8.2.2.a101. 예제의 3차원 움직이는 붓의 3차원 배열
![3_dimension_graph_BW](https://github.com/wonder13662/gimp/assets/15767104/ac3985a9-a47c-425e-9ed1-8e3aaa685ee7)

첫번째 차원 (x) 축에 4개의 횡렬(rank)가 있습니다. 두번째 차원 (y) 축에는 2개의 횡렬(rank) 그리고 세번째 차원 (z) 축에는 2개의 횡렬(rank)가 있습니다. 그러므로 `4 x 2 x 2 = 16`이므로 총 16장의 셀(cell)이 있으므로 16장의 이미지가 필요합니다.

## 1. 첫번째 차원 (x) 축의 이미지 만들기
너비 30 픽셀, 높이 30 픽셀의 새로운 이미지를 엽니다. `색상 공간(Color space)`은 `RGB` 색상으로 맞추고, `채우기(Fill with)`는 `투명(Transparency)`로 설정합니다.

#### 그림 7.8.2.2.a111. `새 이미지 만들기` 대화상자 - 고급옵션 (Windows) (우리말) - 3차원 이미지 호스 만들기
![07-08-02-02-create_a_new_image-advanced_options(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/42986d59-1c9b-4d41-b542-6fdbef151d92)

이번 작업 과정에서 사용할 손 이미지입니다. 검은색 손을 `handL0k.xcf`(검은색 왼쪽 손 0°)로 저장합니다. 이미지 원본은 [Wikipedia - Stop hand.svg](https://upload.wikimedia.org/wikipedia/commons/8/8b/Stop_hand.svg)에서 확인할 수 있습니다.

#### 그림 7.8.2.2.a112. 손 이미지(파란색)
![07-08-02-02-hand_blue](https://github.com/wonder13662/gimp/assets/15767104/a980c3a3-bc99-45a3-bdfa-80600c70d487)

#### 그림 7.8.2.2.a113. 손 이미지(검은색)
![07-08-02-02-hand_black](https://github.com/wonder13662/gimp/assets/15767104/0f043e3b-50e7-41d8-a57e-42f31388510f)

레이어 대화 상자에서 레이어를 더블클릭해서 레이어 속성창을 호출합니다. 레이어의 이름을 `handL0k`로 바꿔줍니다.

레이어를 복사합니다. 복사한 레이어만 보이도록 합니다. 복사한 레이어를 선택한 다음, [이미지 메뉴 바](./03-02-04-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `레이어` → `변형` → `시계 방향으로 90도 회전`을 선택하여 90° 회전을 시켜줍니다. 그리고 레이어의 이름을 "handL90k"로 바꿔줍니다. 

<a id="90-01-06-10-a3"></a>

#### [그림 90.1.6.10.a3. `레이어` → `변형` → `시계 방향으로 90도 회전` (windows) (우리말)](./90-01-06-10-transform.md#90-01-06-10-a3)
![90-01-06-layerx-04-transform(우리말)(windows)-focus-rotate_90_clockwise](https://github.com/wonder13662/gimp/assets/15767104/1b35693a-4884-465c-a73f-f542de620b26)

레이어를 복제해서 90도씩 회전시키는 작업을 반복해서 "handL180k" 그리고 "hand270k"를 만듭니다.

#### 그림 7.8.2.2.a114. 회전시킨 손 이미지 레이어들
![07-08-02-02-layer_dialog-rotated-hands(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/95841260-453f-4320-8a4a-209fe1835163)

## 2. 두번째 차원 (y) 축의 이미지 만들기
두번째 차원은 2개의 횡렬(Rank)가 있습니다. 하나는 왼손이고, 다른 하나는 오른손입니다. 왼손은 이미 있으므로, 수평으로 뒤집어 오른손 이미지를 만들어야 합니다.

"handL0k" 레이어를 복제하고 새로 복제한 레이어만 보이게 합니다. 레이어 이름을 "handR0k"로 바꾸고, [이미지 메뉴 바](./03-02-04-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `레이어` → `변형` → `수평 뒤집기`를 선택하여 적용합니다.

<a id="90-01-06-10-a4"></a>

#### [그림 90.1.6.10.a4. `레이어` → `변형` → `수평 뒤집기` (windows) (우리말)](./90-01-06-10-transform.md#90-01-06-10-a4)
![90-01-06-layerx-04-transform(우리말)(windows)-focus-flip_horizontal](https://github.com/wonder13662/gimp/assets/15767104/0e4cf75c-c78d-48a3-aec8-d12f874e300a)

다른 왼손 레이어에 대해서도 같은 작업을 반복하여 오른손 레이어를 만듭니다.

왼손, 오른손 레이어가 번갈아 위에서 아래로 시계방향으로 회전하는 순서로 정렬해줍니다. 정렬이 완료되면 레이어는 위에서 아래로 "handL0k, handR0k, handL90k, handR90k, ..., handR-90k"의 형태로 아래 이미지처럼 보여져야 합니다.

#### 그림 7.8.2.2.a115. 오른손 이미지가 추가된 레이어 대화상자
![07-08-02-02-hand-left_n_right](https://github.com/wonder13662/gimp/assets/15767104/9426f2c6-8baf-47e6-84e6-4faa5af70aef)

## 3. 세번째 차원 (z) 축의 이미지 만들기
세번째 차원은 검정색과 파랑색의 2개 열을 가지고 있습니다. 검정색은 이미 있으므로, 파란색 원본 이미지로 파랑색 열을 만듭니다.

"handL0k" 레이어를 선택하고 보이도록 설정합니다. [이미지 메뉴 바](./03-02-04-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `이미지` → `캔버스 크기`를 선택해 캔버스 크기를 60x30 픽셀로 변경합니다.

<a id="90-01-05-06-a101"></a>

#### [그림 90.1.5.6.a101. `이미지` → `캔버스 크기`](./90-01-05-06-canvas_size.md#90-01-05-06-a101)
![90-01-05-image(1080)-focus-canvas_size](https://github.com/wonder13662/gimp/assets/15767104/8c5ef4cb-a978-4950-b033-e576e342931f)

이동 도구를 선택합니다. 이동 도구의 도구 옵션(Tool Options)의 대화상자의 `도구 전환(Tool Toggle)`의 `현재 레이어 이동(Move the active layer)`을 선택합니다. 

<a id="90-04-01-01-a121"></a>

#### [그림 90.4.1.1.a121. 이동 도구 대화상자 - 도구 옵션 - 현재 레이어 이동 (windows) (우리말)](./90-04-0001-001-move.md#90-04-01-01-a121)
![90-03-01-move(windows)(ko)-focus-move_the_active_layer](https://github.com/wonder13662/gimp/assets/15767104/38844140-f6fa-4850-b6fe-6004b8195cc0)

파란색 속 이미지를 이미지의 오른쪽으로 옮깁니다.

"hand0k"와 파란색 손 복사본만 보이도록 합니다. 레이어 대화상자에 오른쪽 클릭을 하여서 컨텍스트 메뉴를 엽니다.

<a id="90-04-03-01-a41"></a>

#### [그림 90.4.3.1.a41. 레이어 대화상자의 컨텍스트 메뉴 열기 (windows) (우리말)](./90-04-0003-001-000-context_menu.md#90-04-03-01-a41)
![90-04-03-01-a41](https://github.com/wonder13662/gimp/assets/15767104/faac9099-0657-4cd8-8bc0-b1bce6a098b6)

컨텍스트 메뉴의 `보이는 레이어 합치기`를 선택합니다.

<a id="90-04-03-01-25-a11"></a>

#### [그림 90.4.3.1.25.a11. 레이어 대화상자의 오른쪽 클릭으로 여는 컨텍스트 메뉴 (windows) (우리말) - `보이는 레이어 합치기`](./90-04-0003-001-025-merge_visible_layers.md#90-04-03-01-25-a11)
![90-04-03-layer_dialog-context_menu(windows)(ko)-focus-merge_visible_layers](https://github.com/wonder13662/gimp/assets/15767104/11f7092a-a90f-401f-83ae-dbb1bd5bf149)

`레이어 합치기` 대화상자의 `필요한만큼 넓히기(Expanded as necessasry)`를 선택합니다.

<a id="90-04-56-a105"></a>

#### [그림 90.4.56.a105. `레이어 합치기` 대화상자 (Windows) (우리말) - 필요한만큼 넓히기(Expanded as necessasry)](./90-04-0056-merge_layers.md#90-04-56-a105)
![90-04-56-a105](https://github.com/wonder13662/gimp/assets/15767104/1c7e6ae5-f2a2-413e-a314-dce5d4a8149f)

왼쪽에는 검은색의 손, 오른쪽에는 파란색 손이 있는 60x30 픽셀 크기의 레이어가 되었습니다. "handsL0"으로 이름을 바꿔줍니다.

다른 레이어에 대해서도 같은 작업을 반복합니다. 최종 작업 결과는 아래 레이어 대화상자의 이미지와 같아야 합니다.

#### 그림 7.8.2.2.a116. 파란손 이미지가 추가된 레이어 대화상자
![07-08-02-02-third_dimension-layer_dialog_done](https://github.com/wonder13662/gimp/assets/15767104/83188754-f677-48a3-8574-bdca1843ca93)

## 4. 레이어 정렬하여 칠할 이미지 찾기 과정
레이어는 정렬이 되어 있어야 붓으로 칠할 때, GIMP(김프)에서 필요한 이미지를 찾을 수 있습니다. 작업한 레이어는 이제부터 정렬을 해야 하지만, 어떻게 정렬이 되는지에 대해서는 반드시 이해해야 합니다. 정렬을 하는 과정을 3가지 방법으로 설명해보겠습니다.

### 4-1. `.gih`의 레이어와 이미지 위의 칠한 자국을 연결해 설명하기
아래 이미지처럼 왼쪽에서 오른쪽으로 수평으로 드래그하여 손 모양 이미지가 늘어서 있는 모양을 칠했다고 가정해보겠습니다.

#### 그림 7.8.2.2.a120. 이미지 위의 칠한 자국
![07-08-02-02-gih_painting(windows)(ko)-trimmed-focus-fisrt_mark](https://github.com/wonder13662/gimp/assets/15767104/cc2e4c16-3ad3-4e68-b493-09232ea4a7c7)

[그림 7.8.2.2.a119. `.gih` 형식으로 내보내기의 설정값](./07-08-02-02-three_dimension_image_hose.md#07-08-02-02-a119)에서 모두 3개의 차원을 설정하였습니다.

#### 그림 7.8.2.2.a121. `.gih`의 레이어에서 붓 모양 선택 흐름
![07-08-02-02-animated_brush-cell_select_phase](https://github.com/wonder13662/gimp/assets/15767104/f9be4db2-b738-4743-82a8-042b0a44bbab)

1. 첫번째 차원의 선택 값은 사용자가 드래그한 각도(Angular)입니다. 첫번째 차원의 횡렬(Rank)의 갯수가 4이므로, 선택 대상인 16개의 셀 중에 4개의 선택 가능한 그룹이 있습니다. 각 그룹은 4개의 셀을 가지고 있습니다. 사용자가 드래그한 각도는 90도이므로 두번째 그룹이 선택됩니다. 다음 단계는 선택된 두번째 그룹의 4장을 기준으로 진행합니다.

2. 두번째 차원의 선택 값은 하나씩 증가(Incremental)합니다. 두번째 차원의 횡렬(Rank)의 갯수가 2이므로, 선택 대상인 4개의 셀 중에 2개의 선택 가능한 그룹이 있습니다. 각 그룹은 2개의 셀을 갖습니다. 이전의 선택값이 없으므로 첫번째 그룹을 선택하게 됩니다. 다음 단계는 선택된 첫번째 그룹의 2장을 기준으로 진행합니다.

3. 세번째 차원의 선택 값은 무작위(Random)입니다. 세번째 차원의 횡렬(Rank)의 갯수가 2이므로, 선택 대상인 2개의 셀 중에 2개의 선택 가능한 그룹이 있습니다. 각 그룹은 1개의 셀을 갖습니다. 무작위로 선택한 값은 첫번째 그룹입니다. 움직이는 붓(animated brush)에서 사용될 이미지(90도 회전, 왼손, 검은색)가 결정되었습니다.

### 4-2. 계산과정으로 설명하기
GIMP(김프)는 16개의 레이어를 4로 나눕니다. 4로 나누면 첫번째 차원에 대해 4개의 그룹으로 나뉘며, 각 그룹은 4개의 레이어를 갖습니다. 각 그룹은 붓의 방향을 나타냅니다. 그리고 두번째 차원에 대해 각 그룹을 다시 2로 나눕니다. 나뉘어진 각 그룹은 오른손과 왼손의 번갈아 나타나는 것을 나타냅니다. 그리고 세번째 차원에 대해 2로 나누면 검정색과 파란색이 무작위로 선택되는 것을 나타냅니다.

### 4-3. 시각적으로 설명하기
다른 방법은 배열 표현을 이용한 시각적인 방법입니다. 두 방법의 상관관계는 다음 그림에서 볼 수 있습니다.

|Layer|Stack|Cell No.|Array|Choice|
|---|---|---|---|---|
|handsL0|handsL0k|<span style="background:#e37171;color:black;">1</span>|1,1,1||
||handsL0b|<span style="background:#e37171;color:black;">2</span>|1,1,2||
|handsR0|handsR0k|<span style="background:#e37171;color:black;">3</span>|1,2,1||
||handsR0b|<span style="background:#e37171;color:black;">4</span>|1,2,2||
|handsL270|handsL270k|<span style="background:#f9fb0a;color:black;">5</span>|2,1,1|<span style="background:#f9fb0a;color:black;border: 1px solid black;">5</span> 5|
||handsL270b|<span style="background:#f9fb0a;color:black;">6</span>|2,1,2|<span style="background:#f9fb0a;color:black;border: 1px solid black;">6</span> <span style="background:#f9fb0a;color:black;border: 1px solid black;">6</span>|
|handsR270|handsR270k|<span style="background:#f9fb0a;color:black;">7</span>|2,2,1|<span style="background:white;color:black;border: 1px solid black;">7</span> 7|
||handsR270b|<span style="background:#f9fb0a;color:black;">8</span>|2,2,2|<span style="background:white;color:black;border: 1px solid black;">8</span> 8|
|handsL180|handsL180k|<span style="background:#4de3f1;color:black;">9</span>|3,1,1||
||handsL180b|<span style="background:#4de3f1;color:black;">10</span>|3,1,2||
|handsR180|handsR180k|<span style="background:#4de3f1;color:black;">11</span>|3,2,1||
||handsR180b|<span style="background:#4de3f1;color:black;">12</span>|3,2,2||
|handsL90|handsL90k|<span style="background:#f4adee;color:black;">13</span>|3,1,1||
||handsL90b|<span style="background:#f4adee;color:black;">14</span>|3,1,2||
|handsR90|handsR90k|<span style="background:#f4adee;color:black;">15</span>|3,2,1||
||handsR90b|<span style="background:#f4adee;color:black;">16</span>|3,2,2||

#### 그림 7.8.2.2.a116. 삼차원 배열과 삼차원 축과의 관계
![07-08-02-02-three_dimension_graph](https://github.com/wonder13662/gimp/assets/15767104/fb01df25-e715-4a3a-83d3-475ea3613a2e)

- **x 축**: 첫번째 차원이며 붓의 방향입니다. 각도 선택(angular selection)입니다.
- **y 축**: 두번째 차원이며 왼쪽손과 오른쪽 손의 번갈아 가며 바뀌는 교차입니다. 증분 선택(increment selection)입니다.
- **z 축**: 세번째 차원이며 손의 색상(검정색, 파란색)을 의미합니다. 무작위 선택(random selection)입니다.

GIMP(김프)에서 이 배열을 어떻게 읽을까요? GIMP(김프)는 첫번째 차원부터 시작합니다. 첫번째 차원은 "각도(angular)"로 설정되어 있습니다. 270도를 예를 들어 보겠습니다. 270도인 횡렬(Rank)이면 노란색 영역입니다. 두번째 차원에서는 왼손과 오른손 중에 하나를 선택합니다. "증분(incremental)" 방식입니다(이전에 오른쪽이라면 이번에는 왼쪽을 선택합니다). 그리고 세번째 차원에서는 "무작위(random)" 방식입니다. 무작위로 색상을 선택합니다.

## 5. `.gih` 형식으로 내보내기
`.xcf` 형식으로 로 우선 저장하고, 아래 설정으로 `.gih` 형식으로 내보내기를 합니다.

|항목|값|
|---|---|
|간격(Spacing)|100|
|설명(Description)|손(Hands)|
|셀 크기(Cell size)|30x30|
|셀 개수(Number of cells)|16|
|차원(Dimensions)|3|
|첫번째 차원|4열, 선택: "각도(Angular)"|
|두번째 차원|2열, 선택: "증분(Incremental)"|
|세번째 차원|2열, 선택: "무작위(Random)"|

<a id="07-08-02-02-a119"></a>

#### 그림 7.8.2.2.a119. `.gih` 형식으로 내보내기의 설정값
![07-08-02-02-dialog-export_image_as_brush_pipe-three_dimension(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/af66c68a-0062-4742-b528-7034ac42f60f)

## 6. `.gih` 포맷으로 내보낼 위치 정하기
`.gih` 파일은 GIMP(김프)의 붓 폴더에 저장해야 합니다. `기본 설정` → `폴더` → `붓`의 폴더 위치를 확인하여서 `.gih` 파일을 그곳에 저장합니다. 

<a id="90-02-09-01-a111"></a>

#### [그림 90.2.9.1.a111. `기본 설정` → `폴더` → `붓` (windows) (우리말) - 선택된 붓 폴더](./90-02-09-01-brushes.md#90-02-09-01-a111)
![90-02-09-01-a111](https://github.com/wonder13662/gimp/assets/15767104/a9032345-5c9e-4bf3-b184-34a6de4bc5b9)

## 7. `붓 대화상자` 새로 고침
`붓 대화상자`를 열고, `새로 고침`버튼을 누릅니다. `붓 대화상자`에 새로운 붓이 나타나는 것을 확인할 수 있습니다. 

#### 영상 7.8.2.2.a117. `붓 대화상자` 새로 고침
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/ef2cc773-28c1-4254-a9fa-7f7630541f63"></video>

## 8. 새로운 붓으로 칠하기
새로운 붓으로 이미지를 칠해보면, 세가지 차원을 기준으로 붓의 자국이 남는 것을 확인할 수 있습니다. 

1. 오른손과 왼손이 차례대로 바뀝니다(선택: "증분(Incremental)")
2. 검은색과 파란색은 무작위로 바뀝니다(선택: "무작위(Random)")
2. 손의 방향은 붓의 4개 입력방향에 맞춰 바뀝니다(선택: "각도(Angular)")

#### 영상 7.8.2.2.a118. 새로운 붓으로 칠하기
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/ef3a8c7e-fe12-47ee-9b91-dbe9e6fe3b11"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 7.9. 붓 크기 바꾸기](./07-09-00-changing-brush-size.md)

[⬅️ 이전: 7.8.2.1. 1차원 이미지 파이프(One diemnsion image pipe)](./07-08-02-01-one_dimension_image_pipe.md)

[⬆️ 위: 7.8.2. 예제(Examples)](./07-08-02-00-example.md)

[⬆️ 위: 7.8. GIH 대화상자](./07-08-00-the-gih-dialog-box.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-animated-brushes.html)
