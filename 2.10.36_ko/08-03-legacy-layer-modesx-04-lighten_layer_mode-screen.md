# 8.3.4. 레이어 모드(Legacy) - 화면(Screen)
#### 그림 8.3.4.a1. 레이어 모드(Legacy) - 화면(Screen)
![08-03-04-layer_mode_legacy-screen](https://github.com/wonder13662/gimp/assets/15767104/f14d8b75-f9a3-4d30-89bf-ffd6645f46fc)

`레이어 모드(Legacy) - 화면(Screen)` 모드를 적용하면 이미지는 밝아집니다. 때때로 "빛바랜" 느낌을 주기도 합니다.

한쪽 레이어가 검정색(0)일 경우에는 아무런 변화가 없습니다.
#### 그림 8.3.4.a2. 레이어 모드(Legacy) - 화면(Screen): 위쪽 레이어가 검은색
![08-03-04-layer_mode_legacy-screen-top_layer_black](https://github.com/wonder13662/gimp/assets/15767104/fe4d32d8-2cc1-40ee-9b84-0c2cc31e45c3)

한쪽 레이어가 하얀색(255)일 경우에는 흰색 이미지가 됩니다.
#### 그림 8.3.4.a3. 레이어 모드(Legacy) - 화면(Screen): 위쪽 레이어가 하얀색
![08-03-04-layer_mode_legacy-screen-top_layer_white](https://github.com/wonder13662/gimp/assets/15767104/c1889e51-3e8d-4134-8892-40671ba9c6e0)

#### 그림 8.3.4.a4. 레이어 모드(Legacy) - 화면(Screen): 방정식
![08-03-04-layer_mode_legacy-screen-equation](https://github.com/wonder13662/gimp/assets/15767104/5b476948-7ddb-4b3b-a2ed-6ee5349f9783)

`레이어 모드(Legacy) - 화면(Screen)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 화면(Screen)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.4.a5. 레이어 모드(Legacy) - 화면(Screen): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/761fb942-53b2-44fb-95c2-240b088b5ed2"></video>

***

## 다른 페이지로 가기
[➡️ 다음: ?]()

[⬅️ 이전: 8.3.3. 레이어 모드(Legacy) - 밝은 색만(Lighten only)](./08-03-legacy-layer-modesx-03-lighten_layer_mode-ligthen_only.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)