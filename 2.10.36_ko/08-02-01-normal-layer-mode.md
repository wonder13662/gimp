# 8.2.1. 레이어 모드-Normal
"Normal" 그룹은 다소 잘못된 이름입니다. `일반(Normal)` 모드를 제외한 나머지 모드는 [취소 레이어 모드(Cancellation Layer Mode)](./19-glossaryx-cancellation_layer_mode.md) 타입입니다.

## 1. 일반(Normal)
`일반(Normal)` 모드는 레이어 모드의 기본값입니다. 위쪽 레이어는 아래쪽 레이어를 전부 덮습니다. 이 모드에서 아래쪽 레이어에 어떠한 것이 있는지 보려면, 위쪽 레이어에 투명한 부분이 있어야 합니다.

#### 그림 8.2.1.a1. 일반(Normal): 위쪽 레이어(마스크)의 불투명도(Opacity)가 50%
![08-02-01-normal_layer_mode-normal-top_layer_opacity_50](https://github.com/wonder13662/gimp/assets/15767104/c591124f-8f23-431e-b1cb-626751280b70)

아래 이미지에서는 불투명도가 100%일 경우, 위쪽 레이어의 투명한 영역을 제외한 나머지 부분이 보입니다.

#### 그림 8.2.1.a2. 일반(Normal): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![08-02-01-normal_layer_mode-normal-top_layer_opacity_100](https://github.com/wonder13662/gimp/assets/15767104/5cf09d48-c7bc-46f7-b00c-0fd082986e34)

## 2. 분해(Dissolve)
`분해(Dissolve)` 모드는 위쪽 레이어의 투명도가 0보다 크고 100보다 작은 "반투명 상태(partial transparency)"의 영역들의 픽셀에 무작위 패턴을 그려서 분해합니다. 분해된 픽셀 패턴은 결과 이미지에서 투명한 영역이 되어 아래쪽 이미지의 픽셀의 색상을 보여줍니다. 특히 이미지의 경계 부분에서 잘 볼 수 있습니다. 레이어 모드에서도 유용하지만, 칠하기 모드에서도 자주 쓰입니다. 완전히 투명(불투명도 0)이거나 완전히 불투명(불투명도 100)인 경우에는 `분해(Dissolve)` 모드의 결과는 볼 수 없습니다.

아래 이미지는 불투명도가 100인 경우의 `분해(Dissolve)` 모드입니다. 레이어의 경계 부분 중 "반투명 상태"인 것만 `분해(Dissolve)` 모드에 영향을 받는 것을 확인할 수 있습니다.

#### 그림 8.2.1.a11. 분해(Dissolve): 위쪽 레이어(마스크)의 불투명도(Opacity)가 50%
![08-02-01-normal_layer_mode-dissolve-top_layer_opacity_50](https://github.com/wonder13662/gimp/assets/15767104/a049a33d-35d6-4569-9605-a1029206e352)

아래 이미지는 불투명도가 50인 경우의 `분해(Dissolve)` 모드입니다. `분해(Dissolve)` 모드의 영향이 투명 영역을 제외한 거의 모든 부분에서 확인할 수 있습니다.

#### 그림 8.2.1.a12. 분해(Dissolve): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![08-02-01-normal_layer_mode-dissolve-top_layer_opacity_100](https://github.com/wonder13662/gimp/assets/15767104/b24a4c0b-4c97-4da4-adfd-df7b378eac00)

아래 이미지는 위에서 설명한 픽셀을 무작위 분해한 모습을 확대한 것입니다.

#### 그림 8.2.1.a13. 분해(Dissolve): 분해한 픽셀 패턴을 확대해서 본 모습
![08-02-01-normal_layer_mode-dissolve-pixel_pattern](https://github.com/wonder13662/gimp/assets/15767104/1616fee9-7868-49c8-8b4b-1229fa202555)

## 3. 색상 지우기(Color Erase)
`색상 지우기(Color Erase)` 모드는 아래쪽 레이어에서 보이는 색상을 제거합니다. 같은 위치의 위쪽 레이어의 픽셀과 아래쪽 레이어의 픽셀이 같은 색이라면 최종 픽셀은 완전히 투명하게 만듭니다. 위쪽 레이어의 픽셀이 하얀색이라면 아래쪽 레이어의 픽셀을 그대로 보여줍니다. 만약 위쪽 레이어의 픽셀이 하얀색이 아니면서, 픽셀이 서로 다른 색이라면 최종 픽셀의 투명도와 색상이 달라질 수 있습니다. (이 부분은 GIMP 내부적인 조건으로 결정됩니다.)

#### 그림 8.2.1.a21. 색상 지우기(Color Erase): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![08-02-01-normal_layer_color_erase-top_layer_opacity_100](https://github.com/wonder13662/gimp/assets/15767104/6a1902c3-844a-4630-bdb0-73c5d5d6d4df)

`색상 지우기(Color Erase)`는 [취소 레이어 모드(Cancellation Layer Mode)](./19-glossaryx-cancellation_layer_mode.md) 타입이므로, 조건에 맞는 경우, 최종 결과의 이미지에서 픽셀이 제거되어 투명으로 보여집니다.

아래 영상을 보면, 아래쪽 레이어와 동일한 색상으로 칠하는 경우에는 완전히 투명하게 삭제되며, 그렇지 않은 경우에는 색상이 변하거나 일부만 투명하게 되는 것을 확인할 수 있습니다.

#### 영상 8.2.1.a22. 색상 지우기(Color Erase): 아래쪽 레이어의 색상으로 칠하기 도구로 칠하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/add42efd-ea31-40bd-8851-e4a3c25e4730"></video>

## 4. 지우기(Erase)
`지우기(Erase)` 모드는 위쪽 레이어의 불투명한 영역을 모두 지웁니다. 지운 영역은 아래쪽 레이어를 투명하게 만듭니다. 아래 이미지에서 하얀색은 투명한 부분입니다.

#### 그림 8.2.1.a31. 지우기(Erase): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![08-02-01-normal_layer_erase-top_layer_opacity_100](https://github.com/wonder13662/gimp/assets/15767104/512e7bba-f075-4640-88ef-8d58e891aa37)

`지우기(Erase)`는 [취소 레이어 모드(Cancellation Layer Mode)](./19-glossaryx-cancellation_layer_mode.md) 타입이므로, 조건에 맞는 경우, 최종 결과의 이미지에서 픽셀이 제거되어 투명으로 보여집니다.

아래 영상을 보시면 위쪽 레이어에 픽셀이 불투명하게 칠하는 곳은 아래쪽 레이어의 픽셀이 제거되어 투명으로 보여집니다.

#### 영상 8.2.1.a32. 지우기(Erase): 칠하기 도구로 칠하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/65ef31de-6826-4435-93bc-1c18eecb81ba"></video>

`지우기(Erase)` 모드에서 위쪽 레이어에 레이어 마스크를 쓰고 있다면, 레이어 마스크의 효과가 반대로 나타납니다. 아래 영상에서 레이어 마스크에 검은색으로 칠할 때, 결과 이미지가 투명에서 원래의 이미지로 돌아오는 것을 확인할 수 있습니다.

#### 영상 8.2.1.a33. 지우기(Erase): 위쪽 레이어의 레이어 마스크에 칠하기 도구로 칠하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/670357a4-972d-4b3d-ac75-561393070f23"></video>

## 5. 합치기(Merge)
`합치기(Merge)` 모드는 두 개의 분리된 레이어가 각각 반투명한 부분을 가지고 있을 때, 반투명한 부분을 합쳐 하나의 이미지처럼 합쳐줍니다. 하지만 결과물은 여전히 반투명한 부분을 가질 수 있습니다.

#### 그림 8.2.1.a41. 합치기(Merge): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![08-02-01-normal_layer_mode-merge-top_layer_opacity_100](https://github.com/wonder13662/gimp/assets/15767104/9908a1b1-f231-425e-9436-ea7456d85e53)

아래 영상을 보면, `합치기(Merge)` 모드로 변경했을 때, 위쪽 레이어와 아래쪽 레이어의 반투명 픽셀들을 합쳐 최종 결과 이미지가 다르게 나오는 것을 확인할 수 있습니다.

#### 영상 8.2.1.a42. 합치기(Merge): 위쪽 레이어와 아래쪽 레이어를 합치기 모드로 보기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7b50a581-e988-404c-a037-1f2219575014"></video>

## 6. 분할(Split)
`분할(Split)` 모드는 위쪽 레이어(Source Layer)를 아래쪽 레이어(Destination Layer)에서 뺍니다. `지우기(Erase)` 모드와 동일한 동작을 합니다.

#### 그림 8.2.1.a51. 분할(Split): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![08-02-01-normal_layer_mode-split-top_layer_opacity_100](https://github.com/wonder13662/gimp/assets/15767104/33dae3cb-1715-40f3-8e09-341f6dc7611c)

#### 영상 8.2.1.a42. 분할(Split): 위쪽 레이어와 아래쪽 레이어를 분할 모드로 보기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1d7285bb-69c8-4a28-b205-25fbd209992d"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬅️ 이전: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes.html#layer-mode-group-normal)
