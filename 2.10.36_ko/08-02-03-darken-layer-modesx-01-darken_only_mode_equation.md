# 8.2.3.1. 어두운 색만(Darken only) 모드 방정식
어두운 색만(Darken only) 모드는 아래와 같은 방정식을 갖습니다.

#### 그림 8.2.3.1.a1. 어두운 색만(Darken only) 모드 방정식
![layer_mode-darken-01-darken_only-equation](https://github.com/wonder13662/gimp/assets/15767104/89116205-49c1-444b-942d-afc891c45ba9)

#### 8.2.3.1.a2. 어두운 색만(Darken only) 모드 방정식 해석
```
픽셀의 `어두운 색만(Darken only)` 모드의 RGB 색상값 = min(위쪽 레이어의 RGB 값, 아래쪽 레이어의 RGB 값)
```

⚠️ 주의: 위 방정식의 `min`은 두개의 값 중 더 작은 값을 돌려줍니다.

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제

#### 그림 8.2.3.1.a101. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_example-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/87c56e73-b94d-4303-94e1-870619e5c079)

### 1-1. 어두운 색만(Darken only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.3.1.a111. 각 레이어별 RGB  값
![layer_mode-darken-01-darken_only-color_example-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/29f37554-28ac-4c7b-b367-6cdadbce3c3f)

#### 표 8.2.3.1.a112. 레이어별 RGB의 Red 값 방정식 계산

||위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|---|
|RGB Red|249.0|255.0|249.0|
|RGB Green|251.0|0.0|0.0|
|RGB Blue|10.0|255.0|10.0|

```
결과 값 RGB Red
= min(249.0, 255.0)
= 249.0

결과 값 RGB Green
= min(251.0, 0.0)
= 0.0

결과 값 RGB Blue
= min(10.0, 255.0)
= 10.0
```

#### 그림 8.2.3.1.a111. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-01-darken_only-color_example-01-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/c13f261e-207b-4ed4-a262-5d59cada0663)

#### 표 8.2.3.1.a112. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|249.0|255.0|249.0|

```
최종 결과 RGB Red
= min(249.0, 255.0)
= 249.0
```

위 계산 결과를 통하여 얻은 RGB의 Blue 값인 249.0가 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `R` 값과 같은 것을 확인할 수 있습니다.

### 1-2. 어두운 색만(Darken only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.3.1.a121. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-01-darken_only-color_example-01-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/f3f0edfd-36e7-4410-9a0a-b20d10ff43fa)

#### 표 8.2.3.1.a122. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|251.0|0.0|0.0|

```
최종 결과 RGB Green
= min(251.0, 0.0)
= 0.0
```

위 계산 결과를 통하여 얻은 RGB의 Green 값인 0.0가 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `G` 값과 같은 것을 확인할 수 있습니다.

### 1-3. 어두운 색만(Darken only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.3.1.a131. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-01-darken_only-color_example-01-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/3a0b9d48-5370-4908-893f-b2004f0dc2ad)

#### 표 8.2.3.1.a132. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|10.0|255.0|10.0|

```
최종 결과 RGB Red
= min(10.0, 255.0)
= 10.0
```

위 계산 결과를 통하여 얻은 RGB의 Blue 값인 10.0가 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `B` 값과 같은 것을 확인할 수 있습니다.

### 1-4. 최종 결과 RGB
#### 그림 8.2.3.1.a141. GIMP(김프)에서 `어두운 색만(Darken only)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-01-darken_only-color_example-01-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/0d037814-84e2-4028-a4fe-e18df2caf536)

#### 표 8.2.3.1.a142. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|249.0|
|Green|0.0|
|Blue|10.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.3.1.a201. 어두운 색만(Darken only) 모드 예제
![layer_mode-lighten-01-darken_only-color_example-02](https://github.com/wonder13662/gimp/assets/15767104/1c72c7f6-fa38-45de-840c-7e89f8c41299)

### 2-1. 어두운 색만(Darken only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.3.1.a211. 각 레이어별 RGB의 Red 값
![layer_mode-lighten-01-darken_only-color_example-02-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/9ae94dbb-7da1-4048-9182-10c917b04905)

#### 표 8.2.3.1.a212. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|53.0|53.0|

```
최종 결과 RGB Red
= min(227.0, 53.0)
= 53.0
```

위 계산 결과를 통하여 얻은 RGB의 Red 값인 53.0가 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `R` 값과 같은 것을 확인할 수 있습니다.

### 2-2. 어두운 색만(Darken only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.3.1.a221. 각 레이어별 RGB의 Green 값
![layer_mode-lighten-01-darken_only-color_example-02-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/1ec2a764-e985-4351-be54-3eade0990814)

#### 표 8.2.3.1.a212. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|61.0|61.0|

```
최종 결과 RGB Green
= min(113.0, 61.0)
= 61.0
```

위 계산 결과를 통하여 얻은 RGB의 Green 값인 61.0가 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `G` 값과 같은 것을 확인할 수 있습니다.

### 2-3. 어두운 색만(Darken only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.3.1.a231. 각 레이어별 RGB의 Blue 값
![layer_mode-lighten-01-darken_only-color_example-02-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/a4d8661b-eb68-4e30-a9e3-a8c2f3fcbde1)

#### 표 8.2.3.1.a232. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|123.0|113.0|

```
최종 결과 RGB Blue
= min(113.0, 123.0)
= 113.0
```

위 계산 결과를 통하여 얻은 RGB의 Blue 값인 113.0가 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `B` 값과 같은 것을 확인할 수 있습니다.

### 2-4. 최종 결과 RGB
#### 그림 8.2.3.1.a241. GIMP(김프)에서 `어두운 색만(Darken only)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-01-darken_only-color_example-02-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/321fa4cd-62e2-450c-8469-854d87423159)

#### 표 8.2.3.1.a242. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|53.0|
|Green|61.0|
|Blue|113.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.3.1.a301. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_examples-03-black](https://github.com/wonder13662/gimp/assets/15767104/5bb11feb-57a1-4597-bbbc-7221a351d50c)

### 3-1. 어두운 색만(Darken only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.3.1.a311. 각 레이어별 RGB의 Red 값
![layer_mode-darken-01-darken_only-color_example-03-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/79b3ed04-9fde-4c35-89e7-6428298e2a84)

#### 표 8.2.3.1.a312. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|0.0|0.0|

```
최종 결과 RGB Red
= min(227.0, 0.0)
= 0.0
```

위 계산 결과를 통하여 얻은 RGB의 Red 값인 0.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `R` 값과 같은 것을 확인할 수 있습니다.

### 3-2. 어두운 색만(Darken only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.3.1.a321. 각 레이어별 RGB의 Green 값
![layer_mode-darken-01-darken_only-color_example-03-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/6ded6c83-ce9e-4b01-b01b-4936f88e4604)

#### 표 8.2.3.1.a322. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|0.0|0.0|

```
최종 결과 RGB Green
= min(113.0, 0.0)
= 0.0
```

위 계산 결과를 통하여 얻은 RGB의 Green 값인 0.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `G` 값과 같은 것을 확인할 수 있습니다.

### 3-3. 어두운 색만(Darken only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.3.1.a331. 각 레이어별 RGB의 Blue 값
![layer_mode-darken-01-darken_only-color_example-03-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/e32f4c4d-3db3-4ec3-89bd-9f22e0f6d9c9)

#### 표 8.2.3.1.a332. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|0.0|0.0|

```
최종 결과 RGB Blue
= min(113.0, 0.0)
= 0.0
```

위 계산 결과를 통하여 얻은 RGB의 Blue 값인 0.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `B` 값과 같은 것을 확인할 수 있습니다.

### 3-4. 최종 결과 RGB
#### 그림 8.2.3.1.a341. GIMP(김프)에서 `어두운 색만(Darken only)` 모드를 적용하여 얻은 RGB 값
![layer_mode-darken-01-darken_only-color_examples-03-black-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/ef9108b2-013c-452c-9565-54474de16c2b)

#### 표 8.2.3.1.a342. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|0.0|
|Green|0.0|
|Blue|0.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.3.1.a401. 어두운 색만(Darken only) 모드 예제
![layer_mode-darken-01-darken_only-color_example-04-white](https://github.com/wonder13662/gimp/assets/15767104/e858b477-d9a3-4668-a504-8108d87fa888)

### 4-1. 어두운 색만(Darken only) 모드의 RGB의 Red 값 구하기
#### 그림 8.2.3.1.a411. 각 레이어별 RGB의 Red 값
![layer_mode-darken-01-darken_only-color_example-04-comparison-rgb(w1080)-focus-RGB_Red](https://github.com/wonder13662/gimp/assets/15767104/d899749d-ccda-41d8-86c4-10f453415e82)

#### 표 8.2.3.1.a412. 레이어별 RGB의 Red 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|227.0|255.0|227.0|

```
최종 결과 RGB Red
= min(227.0, 255.0)
= 227.0
```

위 계산 결과를 통하여 얻은 RGB의 Red 값인 227.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `R` 값과 같은 것을 확인할 수 있습니다.

### 4-2. 어두운 색만(Darken only) 모드의 RGB의 Green 값 구하기
#### 그림 8.2.3.1.a421. 각 레이어별 RGB의 Green 값
![layer_mode-darken-01-darken_only-color_example-04-comparison-rgb(w1080)-focus-RGB_Green](https://github.com/wonder13662/gimp/assets/15767104/0a1bc9c9-62bf-43cb-b922-a2a4cc19a02b)

#### 표 8.2.3.1.a422. 레이어별 RGB의 Green 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|255.0|113.0|

```
최종 결과 RGB Green
= min(113.0, 255.0)
= 113.0
```

위 계산 결과를 통하여 얻은 RGB의 Green 값인 113.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `G` 값과 같은 것을 확인할 수 있습니다.

### 4-3. 어두운 색만(Darken only) 모드의 RGB의 Blue 값 구하기
#### 그림 8.2.3.1.a431. 각 레이어별 RGB의 Blue 값
![layer_mode-darken-01-darken_only-color_example-04-comparison-rgb(w1080)-focus-RGB_Blue](https://github.com/wonder13662/gimp/assets/15767104/916bf722-cbc9-47ba-b6ad-351def10bfac)

#### 표 8.2.3.1.a432. 레이어별 RGB의 Blue 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|113.0|255.0|113.0|

```
최종 결과 RGB Blue
= min(113.0, 255.0)
= 113.0
```

위 계산 결과를 통하여 얻은 RGB의 Blue 값인 113.0이 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 `B` 값과 같은 것을 확인할 수 있습니다.

### 4-4. 최종 결과 RGB
#### 그림 8.2.3.1.a441. GIMP(김프)에서 어두운 색만(Darken only) 모드를 적용하여 얻은 RGB 값
![layer_mode-darken-01-darken_only-color_example-04-white-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/71d7ac99-8a38-4990-ae8c-0ee969149b8c)

#### 표 8.2.3.1.a342. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|227.0|
|Green|113.0|
|Blue|113.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 "레이어 모드 적용 결과"의 "전경색 바꾸기" 대화상자의 RGB 값과 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기
[⬆️ 위: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
