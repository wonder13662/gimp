# 8.3.4. 레이어 모드(Legacy) - 화면(Screen)
## 1. 이미지 예시
#### 그림 8.3.4.a11. 레이어 모드(Legacy) - 화면(Screen)
![08-03-04-layer_mode_legacy-screen](https://github.com/wonder13662/gimp/assets/15767104/f14d8b75-f9a3-4d30-89bf-ffd6645f46fc)

`레이어 모드(Legacy) - 화면(Screen)` 모드를 적용하면 이미지는 밝아집니다. 때때로 "빛바랜" 느낌을 주기도 합니다.

한쪽 레이어가 검정색(0)일 경우에는 아무런 변화가 없습니다.
#### 그림 8.3.4.a12. 레이어 모드(Legacy) - 화면(Screen): 위쪽 레이어가 검은색
![08-03-04-layer_mode_legacy-screen-top_layer_black](https://github.com/wonder13662/gimp/assets/15767104/fe4d32d8-2cc1-40ee-9b84-0c2cc31e45c3)

한쪽 레이어가 하얀색(255)일 경우에는 흰색 이미지가 됩니다.
#### 그림 8.3.4.a13. 레이어 모드(Legacy) - 화면(Screen): 위쪽 레이어가 하얀색
![08-03-04-layer_mode_legacy-screen-top_layer_white](https://github.com/wonder13662/gimp/assets/15767104/c1889e51-3e8d-4134-8892-40671ba9c6e0)

## 2. 방정식과 예시
#### 그림 8.3.4.a21. 레이어 모드(Legacy) - 화면(Screen): 방정식
![08-03-04-layer_mode_legacy-screen-equation](https://github.com/wonder13662/gimp/assets/15767104/5b476948-7ddb-4b3b-a2ed-6ee5349f9783)

아래 예시 이미지의 색상 정보를 확인해보면, 위 방정식이 적용된 것을 확인할 수 있습니다.

#### 그림 8.3.4.a22. 각 레이어별 RGB 값
![08-03-04-layer_mode_legacy-screen-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/1101fb26-18a9-4528-bb55-5087b64bbff8)

#### 표 8.3.4.a23. 레이어별 RGB 값

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|227.0|53.0|**233.0**|
|녹색(Green)|113.0|61.0|**147.0**|
|청색(Blue)|113.0|123.0|**181.0**|

```
결과 값 RGB(Red)
= 255 - ((255 - 227.0) x (255 - 53.0) / 255)
= 255 - (28 x 202 / 255)
= 255 - (22.1803921569)
= 232.8196078431
= 233.0

결과 값 RGB(Green)
= 255 - ((255 - 113.0) x (255 - 61.0) / 255)
= 255 - (142 x 194 / 255)
= 255 - 108.03137254902
= 146.968627451
= 147.0

결과 값 RGB(Blue)
= 255 - ((255 - 113.0) x (255 - 123.0) / 255)
= 255 - (142 x 132 / 255)
= 255 - 73.5058823529
= 181.4941176471
= 181.0
```

## 3. 서로 바꿀 수 있는 레이어(Commutative Layer)
`레이어 모드(Legacy) - 화면(Screen)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `레이어 모드(Legacy) - 화면(Screen)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.3.4.a31. 레이어 모드(Legacy) - 화면(Screen): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/761fb942-53b2-44fb-95c2-240b088b5ed2"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.5. 레이어 모드(Legacy) - 닷지(Dodge)](./08-03-05-lighten_layer_mode-dodge.md)

[⬅️ 이전: 8.3.3. 레이어 모드(Legacy) - 밝은 색만(Lighten only)](./08-03-03-lighten_layer_mode-ligthen_only.md)

[⬆️ 위: 8.3. 레거시 레이어 모드](./08-03-00-legacy-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)