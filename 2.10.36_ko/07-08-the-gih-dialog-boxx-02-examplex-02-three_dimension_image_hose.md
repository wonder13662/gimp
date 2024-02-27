# 7.8.2.2. 3차원 이미지 호스(A three dimension image hose)
3차원 움직이는 붓(animated brush)의 방향은 칠하는 방향에 따라 바뀝니다. 이번에는 검정색과 파란색이 무작위로 나타나며 좌/우 손 모양이 규칙적으로 나타나는 붓을 만들어봅시다.

3차원 움직이는 붓을 만들기 위해서 몇 장의 이미지가 필요할까요? 첫번째 차원인 x 축에는 붓의 4개 방향을 표현합니다. 두번째 차원인 y 축에는 오른쪽/왼쪽의 손모양을 표현합니다. 그리고 세번째 차원인 z 축에는 색상(검정/파랑)을 표현합니다. 이 붓을 3차원 배열로 표현하면 `myarray(4,2,2)`이 됩니다.

#### 그림 7.8.2.2.a101. 예제의 3차원 움직이는 붓의 3차원 배열
![gih-3Dnum](https://github.com/wonder13662/gimp/assets/15767104/b2826fb2-eb40-4f75-9f26-fea0569d3e39)

첫번째 차원 (x) 축에 4개의 순위(rank)가 있습니다. 두번째 차원 (y) 축에는 2개의 순위(rank) 그리고 세번째 차원 (z) 축에는 2개의 순위(rank)가 있습니다. 그러므로 `4 x 2 x 2 = 16`이므로 총 16장의 셀(cell)이 있으므로 16장의 이미지가 필요합니다.

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

레이어를 복사합니다. 복사한 레이어만 보이도록 합니다. 복사한 레이어를 선택한 다음, [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `레이어` → `변형` → `시계 방향으로 90도 회전`을 선택하여 90° 회전을 시켜줍니다. 그리고 레이어의 이름을 "handL90k"로 바꿔줍니다. 

#### 그림 90.1.6.10.a3. `레이어` → `변형` → `시계 방향으로 90도 회전` (windows) (우리말)
![90-01-06-layerx-04-transform(우리말)(windows)-focus-rotate_90_clockwise](https://github.com/wonder13662/gimp/assets/15767104/1b35693a-4884-465c-a73f-f542de620b26)

레이어를 복제해서 90도씩 회전시키는 작업을 반복해서 "handL180k" 그리고 "hand270k"를 만듭니다.

#### 그림 7.8.2.2.a114. 회전시킨 손 이미지 레이어들
![07-08-02-02-layer_dialog-rotated-hands(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/95841260-453f-4320-8a4a-209fe1835163)

## 2. 두번째 차원 (y) 축의 이미지 만들기
두번째 차원은 2개의 순위(Rank)가 있습니다. 하나는 왼손이고, 다른 하나는 오른손입니다. 왼손은 이미 있으므로, 수평으로 뒤집어 오른손 이미지를 만들어야 합니다.

"handL0k" 레이어를 복제하고 새로 복제한 레이어만 보이게 합니다. 레이어 이름을 "handR0k"로 바꾸고, [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `레이어` → `변형` → `수평 뒤집기`를 선택하여 적용합니다.

#### 그림 90.1.6.10.a4. `레이어` → `변형` → `수평 뒤집기` (windows) (우리말)
![90-01-06-layerx-04-transform(우리말)(windows)-focus-flip_horizontal](https://github.com/wonder13662/gimp/assets/15767104/0e4cf75c-c78d-48a3-aec8-d12f874e300a)

다른 왼손 레이어에 대해서도 같은 작업을 반복하여 오른손 레이어를 만듭니다.

왼손, 오른손 레이어가 번갈아 위에서 아래로 시계방향으로 회전하는 순서로 정렬해줍니다. 정렬이 완료되면 레이어는 위에서 아래로 "handL0k, handR0k, handL90k, handR90k, ..., handR-90k"의 형태로 아래 이미지처럼 보여져야 합니다.

#### 그림 7.8.2.2.a115. 오른손 이미지가 추가된 레이어 대화상자
![07-08-02-02-hand-left_n_right](https://github.com/wonder13662/gimp/assets/15767104/9426f2c6-8baf-47e6-84e6-4faa5af70aef)

## 3. 세번째 차원 (z) 축의 이미지 만들기
세번째 차원은 검정색과 파랑색의 2개 열을 가지고 있습니다. 검정색은 이미 있으므로, 파란색 원본 이미지로 파랑색 열을 만듭니다.

"handL0k" 레이어를 선택하고 보이도록 설정합니다. [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `이미지` → `캔버스 크기`를 선택해 캔버스 크기를 60x30 픽셀로 변경합니다.

#### 그림 90.1.5.6.a101. `이미지` → `캔버스 크기`
![90-01-05-image(1080)-focus-canvas_size](https://github.com/wonder13662/gimp/assets/15767104/8c5ef4cb-a978-4950-b033-e576e342931f)

이동 도구를 선택합니다. 이동 도구의 도구 옵션(Tool Options)의 대화상자의 `도구 전환(Tool Toggle)`의 `현재 레이어 이동(Move the active layer)`을 선택합니다. 

#### 그림 90.4.1.1.a121. 이동 도구 대화상자 - 도구 옵션 - 현재 레이어 이동 (windows) (우리말)
![90-03-01-move(windows)(ko)-focus-move_the_active_layer](https://github.com/wonder13662/gimp/assets/15767104/38844140-f6fa-4850-b6fe-6004b8195cc0)

파란색 속 이미지를 이미지의 오른쪽으로 옮깁니다.

"hand0k"와 파란색 손 복사본만 보이도록 합니다. 레이어 대화상자에 오른쪽 클릭을 하여서 컨텍스트 메뉴를 엽니다.

#### 그림 90.4.3.a202. 레이어 대화상자의 컨텍스트 메뉴 열기 (windows) (우리말)
![90-04-03-layer_dialog-toggle_context_menu(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/faac9099-0657-4cd8-8bc0-b1bce6a098b6)

컨텍스트 메뉴의 `보이는 레이어 합치기`를 선택합니다.

#### 그림 90.4.3.a203. 레이어 대화상자의 오른쪽 클릭으로 여는 컨텍스트 메뉴 (windows) (우리말) - `보이는 레이어 합치기`
![90-04-03-layer_dialog-context_menu(windows)(ko)-focus-merge_visible_layers](https://github.com/wonder13662/gimp/assets/15767104/11f7092a-a90f-401f-83ae-dbb1bd5bf149)

`레이어 합치기` 대화상자의 `필요한만큼 넓히기(Expanded as necessasry)`를 선택합니다.

#### 그림 90.4.56.a105. `레이어 합치기` 대화상자 (Windows) (우리말) - 필요한만큼 넓히기(Expanded as necessasry)
![90-04-56-merge_layers(windows)(ko)-focus-expanded_as_necesssary](https://github.com/wonder13662/gimp/assets/15767104/1c7e6ae5-f2a2-413e-a314-dce5d4a8149f)

왼쪽에는 검은색의 손, 오른쪽에는 파란색 손이 있는 60x30 픽셀 크기의 레이어가 되었습니다. "handsL0"으로 이름을 바꿔줍니다.

다른 레이어에 대해서도 같은 작업을 반복합니다. 최종 작업 결과는 아래 레이어 대화상자의 이미지와 같아야 합니다.

#### 그림 7.8.2.2.a116. 파란손 이미지가 추가된 레이어 대화상자
![07-08-02-02-third_dimension-layer_dialog_done](https://github.com/wonder13662/gimp/assets/15767104/83188754-f677-48a3-8574-bdca1843ca93)

***

## 다른 페이지로 가기
[➡️ 다음: 7.9. 붓 크기 바꾸기](./07-09-00-changing-brush-size.md)

[⬅️ 이전: 7.8.2.1. 1차원 이미지 파이프(One diemnsion image pipe)](./07-08-the-gih-dialog-boxx-02-examplex-01-one_dimension_image_pipe.md)

[⬆️ 위: 7.8. GIH 대화상자](./07-08-the-gih-dialog-box.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-animated-brushes.html)
