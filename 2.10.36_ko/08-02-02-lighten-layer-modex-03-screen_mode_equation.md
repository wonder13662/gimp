# 8.2.2.3. 화면(Screen) 모드 방정식
화면(Screen) 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.2.3.a21. 화면(Screen) 모드 방정식
![layer_mode-lighten-03-screen-equation](https://github.com/wonder13662/gimp/assets/15767104/981c61cb-c9c4-4f8c-9215-9d87c82f9778)

위 방정식을 쉽게 풀어쓰면 아래와 같습니다.

#### 8.2.2.3.a1. RGB 색상값의 0부터 255인 경우의 화면(Screen) 모드 방정식
```
픽셀의 `화면(Screen)` 모드의 RGB 색상값 = 255 - ((255 - 위쪽 레이어의 픽셀의 RGB 색상값) x (255 - 아래쪽 레이어의 픽셀의 RGB 색상값) / 255)
```

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제

#### 8.2.2.3.a11. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen_color_examples](https://github.com/wonder13662/gimp/assets/15767104/e1d30b5f-65bf-48f7-bcc5-abdd54fabd42)

#### 8.2.2.3.a12. 위쪽 레이어의 색상 정보
![layer_mode-lighten-03-screen-color_example-01-top_layer(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/37635056-3751-4995-a23a-d872c99e0bb1)

#### 8.2.2.3.a13. 아래쪽 레이어의 색상 정보
![layer_mode-lighten-03-screen-color_example-01-bottom_layer(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/b0d3413f-4505-4617-a1f8-ea50f469d7de)

#### 8.2.2.3.a14. 결과 이미지의 색상 정보
![layer_mode-lighten-03-screen-color_example-01-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/20e2f92c-f197-473c-871a-1d342c91e9ee)

### 1-1. 화면(Screen) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 249
- 아래쪽 레이어의 RGB Red: 255
- 최종 결과 RGB Red: 255

```
최종 결과 RGB Red
= 255 - ((255 - 249) x (255 - 255) / 255)
= 255 - (6 x 0 / 255)
= 255
```

### 1-2. 화면(Screen) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 251
- 아래쪽 레이어의 RGB Green: 0
- 최종 결과 RGB Green: 251

```
최종 결과 RGB Green
= 255 - ((255 - 251) x (255 - 0) / 255)
= 255 - (4 x 255 / 255)
= 255 - 4
= 251
```

### 1-3. 화면(Screen) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 10
- 아래쪽 레이어의 RGB Green: 255
- 최종 결과 RGB Green: 255

```
최종 결과 RGB Blue
= 255 - ((255 - 10) x (255 - 255) / 255)
= 255 - (245 x 0 / 255)
= 255
```

위 3가지 방정식 계산을 통해 화면(Screen) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

## 2. 두번째 예제
#### 8.2.2.3.a21. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen_color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/efdace33-8571-4586-9f18-3b4eba9dd8d1)

#### 8.2.2.3.a22. 위쪽 레이어의 색상 정보
![layer_mode-lighten-03-screen-color_example-02-top_layer(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/334b2465-7d3b-40bd-a0bf-92aa556ed3c2)

#### 8.2.2.3.a23. 아래쪽 레이어의 색상 정보
![layer_mode-lighten-03-screen-color_example-02-bottom_layer(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/89bb7a15-f9a0-490e-91b9-1f67f848a6a7)

#### 8.2.2.3.a24. 결과 이미지의 색상 정보
![layer_mode-lighten-03-screen-color_example-02-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/24568290-cd2b-44f1-88e1-6812243a8271)

### 2-1. 화면(Screen) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 53
- 최종 결과 RGB Red: 233

```
최종 결과 RGB Red
= 255 - ((255 - 227) x (255 - 53) / 255)
= 255 - (28 x 202 / 255)
= 255 - 22.1803921569
= 255 - 22
= 233
```

### 2-2. 화면(Screen) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 61
- 최종 결과 RGB Green: 147

```
최종 결과 RGB Green
= 255 - ((255 - 113) x (255 - 61) / 255)
= 255 - (142 x 194 / 255)
= 255 - 108.03137254902
= 255 - 108
= 147
```

### 2-3. 화면(Screen) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 123
- 최종 결과 RGB Green: 181

```
최종 결과 RGB Blue
= 255 - ((255 - 113) x (255 - 123) / 255)
= 255 - (142 x 132 / 255)
= 255 - 73.5058823529
= 255 - 73
= 182
```

위 3가지 방정식 계산을 통해 화면(Screen) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.
