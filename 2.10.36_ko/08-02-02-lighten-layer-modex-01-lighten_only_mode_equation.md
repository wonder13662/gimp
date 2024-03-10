# 8.2.2.1. 밝은 색만(Lighten only) 모드 방정식
밝은 색만(Lighten only) 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.2.1.a1. RGB 색상값의 0부터 255인 경우의 밝은 색만(Lighten only) 모드 방정식
```
픽셀의 `밝은 색만(Lighten only)` 모드의 RGB 색상값 = max(아래쪽 레이어의 RGB 값, 위쪽 레이어의 RGB 값)
```

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제
#### 그림 8.2.2.1.a101. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/3ac83696-9391-4868-834e-6605bf1b7d3d)

### 1-1. 밝은 색만(Lighten only) 모드의 RGB 값 구하기
#### 그림 8.2.2.1.a111. 각 레이어별 RGB 값
![layer_mode-lighten-01-lighten_only-color_examples-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/ddc225e9-71e5-4796-949b-92989ffb68c5)

#### 표 8.2.2.1.a112. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|249.0|255.0|**255.0**|
|RGB(Green)|251.0|0.0|**251.0**|
|RGB(Blue)|10.0|255.0|**255.0**|

```
레이어 모드 적용 결과: RGB(Red)
= max(249.0, 255.0)
= 255.0

레이어 모드 적용 결과: RGB(Green)
= max(251.0, 0.0)
= 251.0

레이어 모드 적용 결과: RGB(Red)
= max(10.0, 255.0)
= 255.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.2.1.a21. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/3755a45c-11a5-4dc2-a904-10ac45c64ffa)

### 2-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.1.a211. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-01-lighten_only-color_examples-02-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/ebdf5a0f-c0b6-4044-b9db-cdf33e247237)

#### 표 8.2.2.1.a212. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|53.0|227.0|

```
최종 결과 RGB(Red)
= max(227.0, 53.0)
= 227.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Red 값이 227로 위쪽 레이어의 RGB(Red) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 2-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.1.a221. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-01-lighten_only-color_examples-02-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/edc00f39-27b3-421c-8732-05080a557f64)

#### 표 8.2.2.1.a212. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|61.0|113.0|

```
최종 결과 RGB(Green)
= max(113.0, 61.0)
= 113.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Green 값이 113로 위쪽 레이어의 RGB(Green) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 2-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.1.a231. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-01-lighten_only-color_examples-02-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/3a22bf10-53a0-4c78-9aff-c1d16ee66755)

#### 표 8.2.2.1.a232. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|123.0|123.0|

```
최종 결과 RGB(Blue)
= max(113.0, 123.0)
= 123.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Blue 값이 123으로 아래쪽 레이어의 RGB(Blue) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 2-4. 최종 결과 RGB
#### 그림 8.2.2.1.a241. GIMP(김프)에서 `밝은 색만(Lighten only)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-01-lighten_only-color_examples-02-result-rgb(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/283c0b2b-0765-479d-aec1-d97aa14d3f5f)

#### 표 8.2.2.1.a242. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|227.0|
|Green|113.0|
|Blue|123.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.1.a31. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-03-black](https://github.com/wonder13662/gimp/assets/15767104/4b8564b7-0411-40d7-beab-d82eb0e23c8d)

### 3-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.1.a311. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-01-lighten_only-color_examples-03-comparison-rgb(w1080)-focus-rgb-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/d76847f0-222e-40dc-8f14-9555f2e97cf6)

#### 표 8.2.2.1.a312. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|0.0|227.0|

```
최종 결과 RGB(Red)
= max(227.0, 0.0)
= 227.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Red 값이 227로 위쪽 레이어의 RGB(Red) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 3-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.1.a321. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-01-lighten_only-color_examples-03-comparison-rgb(w1080)-focus-rgb-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/3fa10bf1-7b26-4cba-bfa6-9d5039a08d3a)

#### 표 8.2.2.1.a322. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|0.0|113.0|

```
최종 결과 RGB(Green)
= max(113.0, 0.0)
= 113.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Green 값이 113.0로 위쪽 레이어의 RGB(Green) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 3-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.1.a331. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-01-lighten_only-color_examples-03-comparison-rgb(w1080)-focus-rgb-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/6126760a-d534-49c9-a3d5-12c1dfeeff3a)

#### 표 8.2.2.1.a332. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|0.0|113.0|

```
최종 결과 RGB(Blue)
= max(113.0, 0.0)
= 113.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Blue 값이 113.0로 위쪽 레이어의 RGB(Blue) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 3-4. 최종 결과 RGB
#### 그림 8.2.2.1.a341. GIMP(김프)에서 `밝은 색만(Lighten only)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-01-lighten_only-color_examples-03-result-rgb(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/188b8e1f-2645-4e10-8cc6-4a2a13ab2c10)

#### 표 8.2.2.1.a342. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|227.0|
|Green|113.0|
|Blue|113.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.2.1.a41. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-04-white](https://github.com/wonder13662/gimp/assets/15767104/f5170fa0-5989-4f7b-b8cd-a732e7c66620)

### 4-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.2.1.a411. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-01-lighten_only-color_examples-04-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/b0c52df8-8c76-4acf-807f-bb55d81055bf)

#### 표 8.2.2.1.a412. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|255.0|255.0|

```
최종 결과 RGB(Red)
= max(227.0, 255.0)
= 255.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Red 값이 255.0으로 아래쪽 레이어의 RGB(Red) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 4-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.2.1.a421. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-01-lighten_only-color_examples-04-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/3019e648-711f-4b02-a4ca-f2e6c97b3a62)

#### 표 8.2.2.1.a422. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|255.0|255.0|

```
최종 결과 RGB(Green)
= max(113.0, 255.0)
= 255.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Green 값이 255.0으로 아래쪽 레이어의 RGB(Green) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 4-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.2.1.a431. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-01-lighten_only-color_examples-04-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/d1f01260-d015-4aea-b4cd-ddbb65af9e43)

#### 표 8.2.2.1.a432. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|255.0|255.0|

```
최종 결과 RGB(Blue)
= max(113.0, 255.0)
= 255.0
```

위 계산 결과를 통하여 두 값중 더 큰 RGB의 Blue 값이 255.0로 아래쪽 레이어의 RGB(Blue) 값이 선택된 것을 "결과 값"에서 확인할 수 있습니다.

### 4-4. 최종 결과 RGB
#### 그림 8.2.2.1.a441. GIMP(김프)에서 `밝은 색만(Lighten only)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-01-lighten_only-color_examples-04-result-rgb(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/bbdfbbe1-95c0-4292-90eb-4c1efbf78887)

#### 표 8.2.2.1.a342. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|255.0|
|Green|255.0|
|Blue|255.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
