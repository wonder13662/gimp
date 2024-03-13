# 8.3.3. 레이어 모드(Legacy) - 밝은 색만(Lighten only)
#### 그림 8.3.3.a1. 레이어 모드(Legacy) - 밝은 색만(Lighten only)
![08-03-03-layer_mode_legacy-lighten_only](https://github.com/wonder13662/gimp/assets/15767104/5b6ec47d-2128-45fe-9cb3-137f08caea12)

`레이어 모드(Legacy) - 밝은 색만(Lighten only)` 모드는 위쪽 레이어(마스크)와 아래쪽 레이어(배경 이미지)의 각 픽셀 값을 비교해서 큰 값을 가져갑니다. 따라서 한 레이어가 검정색 이미지이면 최종 이미지에는 변화가 없고, 하얀색 이미지이면 최종 이미지는 하얀색 이미지가 됩니다.

#### 그림 8.3.3.a2. 레이어 모드(Legacy) - 밝은 색만(Lighten only): 방정식
![08-03-03-layer_mode_legacy-lighten_only-equation](https://github.com/wonder13662/gimp/assets/15767104/60f227b4-db7a-46e5-8b06-1bcf91e26e34)

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

`레이어 모드(Legacy) - 밝은 색만(Lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 밝은 색만(Lighten only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.3.a3. 레이어 모드(Legacy) - 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/53ff3837-274b-43b1-969a-12837585eabf"></video>

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.1. 레이어 모드(Legacy) - 일반(Normal)](./08-03-legacy-layer-modesx-01-normal_layer_mode-normal.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)