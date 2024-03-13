# 8.3.6. 레이어 모드(Legacy) - 더하기(Addition)
#### 그림 8.3.6.a1. 레이어 모드(Legacy) - 더하기(Addition)
![08-03-06-layer_mode_legacy-addition](https://github.com/wonder13662/gimp/assets/15767104/e2c77dd3-7d1e-481d-bfb4-1752e3fde7ce)

`레이어 모드(Legacy) - 더하기(Addition)` 모드를 적용하면 이미지는 밝아집니다.

#### 그림 8.3.6.a2. 레이어 모드(Legacy) - 더하기(Addition): 방정식
![08-03-06-layer_mode_legacy-addition-equation](https://github.com/wonder13662/gimp/assets/15767104/78934c43-efd6-424e-a501-2a860413f105)

모든 픽셀은 255를 최대값으로 갖습니다. 255보다 큰 값은 255로 조정됩니다.

⚠️ 주의: 위 방정식의 `min`은 두개의 값중 더 작은 값을 돌려줍니다.

`레이어 모드(Legacy) - 더하기(Addition)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 더하기(Addition)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.6.a5. 레이어 모드(Legacy) - 더하기(Addition): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/b6b692ad-69d7-4a2c-acc9-6583dfaa7b28"></video>

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.4. 레이어 모드(Legacy) - 더하기(Addition)](./08-03-legacy-layer-modesx-04-lighten_layer_mode-screen.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)