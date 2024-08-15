# 8.2.1.3. 색상 지우기(Color Erase)
`색상 지우기(Color Erase)` 모드는 아래쪽 레이어에서 보이는 색상을 제거합니다. 같은 위치의 위쪽 레이어의 픽셀과 아래쪽 레이어의 픽셀이 같은 색이라면 최종 픽셀은 완전히 투명하게 만듭니다. 위쪽 레이어의 픽셀이 하얀색이라면 아래쪽 레이어의 픽셀을 그대로 보여줍니다. 만약 위쪽 레이어의 픽셀이 하얀색이 아니면서, 픽셀이 서로 다른 색이라면 최종 픽셀의 투명도와 색상이 달라질 수 있습니다. (이 부분은 GIMP 내부적인 조건으로 결정됩니다.)

#### 그림 8.2.1.3.a1. 색상 지우기(Color Erase): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![layer_mode-normal-03-color_erase-opacity_100](https://github.com/wonder13662/gimp/assets/15767104/74688b85-61fc-4b54-a1ad-71601de3ab4e)

`색상 지우기(Color Erase)`는 [취소 레이어 모드(Cancellation Layer Mode)](./19-glossaryx-cancellation_layer_mode.md) 타입이므로, 조건에 맞는 경우, 최종 결과의 이미지에서 픽셀이 제거되어 투명으로 보여집니다.

아래 영상을 보면, 아래쪽 레이어와 동일한 색상으로 칠하는 경우에는 완전히 투명하게 삭제되며, 그렇지 않은 경우에는 색상이 변하거나 일부만 투명하게 되는 것을 확인할 수 있습니다.

#### 영상 8.2.1.3.a2. 색상 지우기(Color Erase): 아래쪽 레이어의 색상으로 칠하기 도구로 칠하기
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/add42efd-ea31-40bd-8851-e4a3c25e4730"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.1.4. 지우기(Erase)](./08-02-01-04-erase.md)

[⬅️ 이전: 8.2.1.2. 분해(Dissolve)](./08-02-01-02-dissolve.md)

[⬆️ 위: 8.2.1. 레이어 모드-Normal](./08-02-01-00-normal-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer_modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes.html#layer-mode-color-erase)
