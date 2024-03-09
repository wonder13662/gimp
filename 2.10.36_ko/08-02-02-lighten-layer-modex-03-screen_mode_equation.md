# 8.2.2.3. 화면(Screen) 모드 방정식
화면(Screen) 모드는 아래와 같은 방정식을 갖습니다.

#### 그림 8.2.2.3.a21. 화면(Screen) 모드 방정식
![layer_mode-lighten-03-screen-equation](https://github.com/wonder13662/gimp/assets/15767104/981c61cb-c9c4-4f8c-9215-9d87c82f9778)

위 방정식을 쉽게 풀어쓰면 아래와 같습니다.

#### 8.2.2.3.a1. RGB 색상값의 0부터 255인 경우의 화면(Screen) 모드 방정식
```
픽셀의 `화면(Screen)` 모드의 RGB 색상값 = 255 - ((255 - 위쪽 레이어의 픽셀의 RGB 색상값) x (255 - 아래쪽 레이어의 픽셀의 RGB 색상값) / 255)
```

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제

#### 8.2.2.3.a101. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen_color_example-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/9eaef991-3f5e-4230-b194-40a0c0de8fc8)

### 1-1. 화면(Screen) 모드의 RGB 값 구하기
#### 그림 8.2.2.3.a111. 각 레이어별 RGB 값
![layer_mode-lighten-03-screen_color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/b686dcf1-1b3e-4208-807b-4e2c81561114)

#### 표 8.2.2.3.a112. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|249.0|255.0|**255.0**|
|RGB(Green)|251.0|0.0|**251.0**|
|RGB(Blue)|10.0|255.0|**255.0**|

```
레이어 모드 적용 결과: RGB(Red)
= 255 - ((255 - 249.0) x (255 - 255.0) / 255)
= 255 - (6 x 0 / 255)
= 255 - (0 / 255)
= 255 - 0
= 255

레이어 모드 적용 결과: RGB(Green)
= 255 - ((255 - 251.0) x (255 - 0.0) / 255)
= 255 - (4 x 255 / 255)
= 255 - (4 x 1)
= 255 - 4
= 251

레이어 모드 적용 결과: RGB(Blue)
= 255 - ((255 - 10.0) x (255 - 255.0) / 255)
= 255 - (245 x 0 / 255)
= 255 - (0 / 255)
= 255 - 0
= 255
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 8.2.2.3.a201. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen_color_example-02(50%)](https://github.com/wonder13662/gimp/assets/15767104/1b4dcddd-70d7-4572-bf1b-5d41e0d79687)

### 2-1. 화면(Screen) 모드의 RGB 값 구하기
#### 그림 8.2.2.3.a211. 각 레이어별 RGB 값
![layer_mode-lighten-03-screen_color_example-02-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/183c2288-3cb7-4859-b517-20c4ebf05bfe)

#### 표 8.2.2.3.a212. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|227.0|53.0|**233.0**|
|RGB(Green)|113.0|61.0|**147.0**|
|RGB(Blue)|113.0|123.0|**181.0**|

```
레이어 모드 적용 결과: RGB(Red)
= 255 - ((255 - 227.0) x (255 - 53.0) / 255)
= 255 - (28 x 202 / 255)
= 255 - 22.1803921569
= 232.8196078431
= 233.0

레이어 모드 적용 결과: RGB(Green)
= 255 - ((255 - 113.0) x (255 - 61.0) / 255)
= 255 - (142 x 194 / 255)
= 255 - 108.03137254902
= 146.968627451
= 147.0

레이어 모드 적용 결과: RGB(Blue)
= 255 - ((255 - 113.0) x (255 - 123.0) / 255)
= 255 - (142 x 132 / 255)
= 255 - 73.5058823529
= 181.4941176471
= 181.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.3.a301. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen-color_example-03-black(50%)](https://github.com/wonder13662/gimp/assets/15767104/7b40c0d7-d540-4f16-afc9-505d722eeba8)

### 3-1. 화면(Screen) 모드의 RGB 값 구하기
#### 그림 8.2.2.3.a311. 각 레이어별 RGB 값
![layer_mode-lighten-03-screen-color_example-03-black-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/a72f18f8-cbda-4921-8465-8306069c857e)

#### 표 8.2.2.3.a312. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|227.0|0.0|**227.0**|
|RGB(Green)|113.0|0.0|**113.0**|
|RGB(Blue)|113.0|0.0|**113.0**|

```
레이어 모드 적용 결과: RGB(Red)
= 255 - ((255 - 227.0) x (255 - 0.0) / 255)
= 255 - (28 x 255 / 255)
= 255 - 28
= 227.0

레이어 모드 적용 결과: RGB(Green)
= 255 - ((255 - 113.0) x (255 - 0.0) / 255)
= 255 - (142 x 255 / 255)
= 255 - 142
= 113.0

레이어 모드 적용 결과: RGB(Blue)
= 255 - ((255 - 113.0) x (255 - 0.0) / 255)
= 255 - (142 x 255 / 255)
= 255 - 142
= 113.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.2.3.a41. 화면(Screen) 모드 예제
![layer_mode-lighten-03-screen-color_example-04-white](https://github.com/wonder13662/gimp/assets/15767104/4f086369-6ddf-4da4-9611-bf2eda6b8817)

### 4-1. 화면(Screen) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.3.a411. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-03-screen-color_example-04-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/6dd0f9b0-cf08-471c-8fce-1def639b3c67)

#### 표 8.2.2.3.a412. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|255.0|255.0|

```
최종 결과 RGB(Red)
= 255 - ((255 - 227.0) x (255 - 255.0) / 255)
= 255 - (28 x 0 / 255)
= 255 - 0
= 255
```

위 계산 결과를 통하여 얻은 RGB의 Red 값인 255.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `R` 값과 같은 것을 확인할 수 있습니다.

### 4-2. 화면(Screen) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.3.a421. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-03-screen-color_example-04-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/0ee5bbe4-28a9-4533-b8e5-90b33d1dd257)

#### 표 8.2.2.3.a422. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|255.0|255.0|

```
최종 결과 RGB(Green)
= 255 - ((255 - 113.0) x (255 - 255.0) / 255)
= 255 - (142 x 0 / 255)
= 255 - 0
= 255
```

위 계산 결과를 통하여 얻은 RGB의 Green 값인 255.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `G` 값과 같은 것을 확인할 수 있습니다.

### 4-3. 화면(Screen) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.3.a431. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-03-screen-color_example-04-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/47ecfc8f-4acd-4838-93ab-2e8604f8585d)

#### 표 8.2.2.3.a432. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|255.0|255.0|

```
최종 결과 RGB(Blue)
= 255 - ((255 - 113.0) x (255 - 255.0) / 255)
= 255 - (142 x 0 / 255)
= 255 - 0
= 255
```

위 계산 결과를 통하여 얻은 RGB의 Blue 값인 255.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `B` 값과 같은 것을 확인할 수 있습니다.

### 4-4. 최종 결과 RGB
#### 그림 8.2.2.3.a441. GIMP(김프)에서 `화면(Screen)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-03-screen-color_example-04-white-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/94aec35a-7b2e-4cca-9178-f073109cb0fe)

#### 표 8.2.2.3.a342. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|255.0|
|Green|255.0|
|Blue|255.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 RGB 값과 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
