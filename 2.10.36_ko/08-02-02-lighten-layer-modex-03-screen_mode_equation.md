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

#### 8.2.2.3.a101. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen_color_examples](https://github.com/wonder13662/gimp/assets/15767104/e1d30b5f-65bf-48f7-bcc5-abdd54fabd42)

### 1-1. 화면(Screen) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.3.a111. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-03-screen-color_example-01-comparison-rgb(w1080)-focus-RGB-Red](https://github.com/wonder13662/gimp/assets/15767104/7312f5a7-9b1d-4764-ba2f-a921146c49d0)

#### 표 8.2.2.3.a112. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|249.0|255.0|255.0|

```
최종 결과 RGB Red
= 255 - ((255 - 249.0) x (255 - 255.0) / 255)
= 255 - (6 x 0 / 255)
= 255 - (0 / 255)
= 255 - 0
= 255
```

위 계산 결과를 통하여 RGB의 Red 값이 255로 계산된 것을 "결과 값"에서 확인할 수 있습니다.

### 1-2. 화면(Screen) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.3.a121. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-03-screen-color_example-01-comparison-rgb(w1080)-focus-RGB-Green](https://github.com/wonder13662/gimp/assets/15767104/b750d4d9-2718-42ce-b845-43220027cc6e)

#### 표 8.2.2.3.a122. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|251.0|0.0|251.0|

```
최종 결과 RGB Green
= 255 - ((255 - 251.0) x (255 - 0.0) / 255)
= 255 - (4 x 255 / 255)
= 255 - (4 x 1)
= 255 - 4
= 251
```

위 계산 결과를 통하여 RGB의 Green 값이 251.0으로 계산된 것을 "결과 값"에서 확인할 수 있습니다.

### 1-3. 화면(Screen) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.3.a131. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-03-screen-color_example-01-comparison-rgb(w1080)-focus-RGB-Blue](https://github.com/wonder13662/gimp/assets/15767104/b8a41f69-be58-4e76-a66e-bebcf32475c3)

#### 표 8.2.2.3.a132. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|10.0|255.0|255.0|

```
최종 결과 RGB Red
= 255 - ((255 - 10.0) x (255 - 255.0) / 255)
= 255 - (245 x 0 / 255)
= 255 - (0 / 255)
= 255 - 0
= 255
```

위 계산 결과를 통하여 RGB의 Blue 값이 255.0으로 계산된 것을 "결과 값"에서 확인할 수 있습니다.

### 1-4. 최종 결과 RGB
#### 그림 8.2.2.3.a141. GIMP(김프)에서 `화면(Screen)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-03-screen-color_example-01-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/d9685d6e-e13c-4280-8f4a-3923e0f546d8)

#### 표 8.2.2.3.a142. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|255.0|
|Green|251.0|
|Blue|255.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 8.2.2.3.a21. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen_color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/efdace33-8571-4586-9f18-3b4eba9dd8d1)

### 2-1. 화면(Screen) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.3.a211. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-03-screen-color_example-02-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/08d4e2c7-3700-4573-b525-3dc51e639c7d)

#### 표 8.2.2.3.a212. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|53.0|233.0|

```
최종 결과 RGB Red
= 255 - ((255 - 227.0) x (255 - 53.0) / 255)
= 255 - (28 x 202 / 255)
= 255 - 22.1803921569
= 232.8196078431
= 233.0
```

위 계산 결과를 통하여 RGB의 Red 값이 233.0으로 계산된 것을 "결과 값"에서 확인할 수 있습니다.

### 2-2. 화면(Screen) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.3.a221. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-03-screen-color_example-02-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/86197c67-c0ff-4732-9f0a-02d5d4873556)

#### 표 8.2.2.3.a212. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|61.0|147.0|

```
최종 결과 RGB Green
= 255 - ((255 - 113.0) x (255 - 61.0) / 255)
= 255 - (142 x 194 / 255)
= 255 - 108.03137254902
= 146.968627451
= 147.0
```

위 계산 결과를 통하여 RGB의 Green 값이 147.0으로 계산된 것을 "결과 값"에서 확인할 수 있습니다.

### 2-3. 화면(Screen) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.3.a231. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-03-screen-color_example-02-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/f9937a7f-63fd-4314-842e-49d360ee8184)

#### 표 8.2.2.3.a232. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|123.0|181.0|

```
최종 결과 RGB Blue
= 255 - ((255 - 113.0) x (255 - 123.0) / 255)
= 255 - (142 x 132 / 255)
= 255 - 73.5058823529
= 181.4941176471
= 181.0
```

위 계산 결과를 통하여 RGB의 Blue 값이 181.0으로 계산된 것을 "결과 값"에서 확인할 수 있습니다.

### 2-4. 최종 결과 RGB
#### 그림 8.2.2.3.a241. GIMP(김프)에서 `화면(Screen)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-03-screen-color_example-02-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/fa137daa-25e2-4e5e-bb79-20eb66582ab8)

#### 표 8.2.2.3.a242. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|233.0|
|Green|147.0|
|Blue|181.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.3.a31. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen-color_example-03-black](https://github.com/wonder13662/gimp/assets/15767104/57f05785-da67-4a50-a58f-20e23e0a9253)

### 3-1. 화면(Screen) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.3.a311. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-03-screen-color_example-03-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/4239e3f5-1c94-4440-847e-259b1c4aac1e)

#### 표 8.2.2.3.a312. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|0.0|227.0|

```
최종 결과 RGB Red
= 255 - ((255 - 227.0) x (255 - 0.0) / 255)
= 255 - (28 x 255 / 255)
= 255 - 28
= 227.0
```

위 계산 결과를 통하여 얻은 RGB의 Red 값인 227.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `R` 값과 같은 것을 확인할 수 있습니다.

### 3-2. 화면(Screen) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.3.a321. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-03-screen-color_example-03-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/9a6c3f8f-3ec6-4fb0-9c57-33d071af1c20)

#### 표 8.2.2.3.a322. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|0.0|113.0|

```
최종 결과 RGB Green
= 255 - ((255 - 113.0) x (255 - 0.0) / 255)
= 255 - (142 x 255 / 255)
= 255 - 142
= 113.0
```

위 계산 결과를 통하여 얻은 RGB의 Green 값인 113.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `G` 값과 같은 것을 확인할 수 있습니다.

### 3-3. 화면(Screen) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.3.a331. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-03-screen-color_example-03-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/4e6f76a6-4003-4c25-96b6-c68a39e491bc)

#### 표 8.2.2.3.a332. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|0.0|113.0|

```
최종 결과 RGB Blue
= 255 - ((255 - 113.0) x (255 - 0.0) / 255)
= 255 - (142 x 255 / 255)
= 255 - 142
= 113.0
```

### 3-4. 최종 결과 RGB
#### 그림 8.2.2.3.a341. GIMP(김프)에서 `화면(Screen)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-03-screen-color_example-03-black-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/8af49aa4-ec32-402c-ae9f-9eae44e36a0b)

#### 표 8.2.2.3.a342. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|227.0|
|Green|113.0|
|Blue|113.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
