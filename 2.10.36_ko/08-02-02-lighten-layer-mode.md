# 8.2.2. 레이어 모드-Lighten
`밝은 색(Lighten)` 그룹은 레이어를 더 밝게 만들어 줍니다.

## 1. 밝은 색만(Lighten only)
`밝은 색만(Lighten only)` 모드는 위쪽 레이어와 아래쪽 레이어의 각 픽셀값을 비교하여 더 밝은 색을 선택합니다.

⚠️ 주의: 밝은 색의 단위는 검은색을 0, 하얀색을 255의 범위로 그레이스케일의 밝기를 말합니다.

#### 그림 8.2.2.a1. 밝은 색만(Lighten only): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![layer_mode-lighten-01-lighten_only](https://github.com/wonder13662/gimp/assets/15767104/b3feb4cb-af62-4ab3-bb31-0393fa70baf1)

따라서 한 레이어가 검정색 이미지이면 최종 이미지에는 변화가 없고, 하얀색 이미지이면 최종 이미지는 하얀색 이미지가 됩니다. 

#### 영상 8.2.2.a2. 밝은 색만(Lighten only): 위쪽 레이어가 검정색 또는 하얀색
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8ab044b7-7fb3-4a81-8996-51f698d5fa6a"></video>

`밝은 색만(Lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `밝은 색만(Lighten only)` 모드이면 레이어의 순서를 바꾸면, 두 레이어가 겹치는 이미지에 대해서는 결과가 같습니다. 다만, 두 레이어의 크기가 다른 경우에는 크기가 더 큰 레이어가 위쪽일 경우, 크기가 작은 레이어의 영역까지만 보이도록 바뀌므로 주의하세요.

#### 영상 8.2.2.a3. 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ba0c1475-7112-4a0b-a595-5feeac2eb4e1"></video>

## 2. 휘도 밝기만(Luma/Luminance lighten only)

## 3. 화면(Screen)

## 4. 닷지(Dodge)

## 5. 더하기(Addition)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.3. 레이어 모드-Darken](./08-02-03-darken-layer-modes.md)

[⬅️ 이전: 8.2.1. 레이어 모드-Normal](./08-02-01-normal-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
