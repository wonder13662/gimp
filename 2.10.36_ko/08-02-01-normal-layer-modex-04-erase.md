# 8.2.1.4. 지우기(Erase)
`지우기(Erase)` 모드는 위쪽 레이어의 불투명한 영역을 모두 지웁니다. 지운 영역은 아래쪽 레이어를 투명하게 만듭니다. 아래 이미지에서 하얀색은 투명한 부분입니다.

#### 그림 8.2.1.4.a1. 지우기(Erase): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![layer_mode-normal-04-erase-opacity_100](https://github.com/wonder13662/gimp/assets/15767104/3e3fc315-4e2c-476a-9036-7b4733a28bc9)

`지우기(Erase)`는 [취소 레이어 모드(Cancellation Layer Mode)](./19-glossaryx-cancellation_layer_mode.md) 타입이므로, 조건에 맞는 경우, 최종 결과의 이미지에서 픽셀이 제거되어 투명으로 보여집니다.

아래 영상을 보시면 위쪽 레이어에 픽셀이 불투명하게 칠하는 곳은 아래쪽 레이어의 픽셀이 제거되어 투명으로 보여집니다.

#### 영상 8.2.1.4.a2. 지우기(Erase): 칠하기 도구로 칠하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/65ef31de-6826-4435-93bc-1c18eecb81ba"></video>

`지우기(Erase)` 모드에서 위쪽 레이어에 레이어 마스크를 쓰고 있다면, 레이어 마스크의 효과가 반대로 나타납니다. 아래 영상에서 레이어 마스크에 검은색으로 칠할 때, 결과 이미지가 투명에서 원래의 이미지로 돌아오는 것을 확인할 수 있습니다.

#### 영상 8.2.1.4.a3. 지우기(Erase): 위쪽 레이어의 레이어 마스크에 칠하기 도구로 칠하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/670357a4-972d-4b3d-ac75-561393070f23"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.1.5. 합치기(Merge)](./08-02-01-normal-layer-modex-05-merge.md)

[⬅️ 이전: 8.2.1.3. 색상 지우기(Color Erase)](./08-02-01-normal-layer-modex-03-color_erase.md)

[⬆️ 위: 8.2.1. 레이어 모드-Normal](./08-02-01-normal-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes.html#layer-mode-erase)
