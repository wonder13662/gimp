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

#### 8.2.3.1.a101. 어두운 색만(Darken only) 모드 예제
![layer_mode-lighten-01-darken_only-color_example-01](https://github.com/wonder13662/gimp/assets/15767104/60828095-c55c-4e18-8d20-b3b6142a16cb)

### 1-1. 어두운 색만(Darken only) 모드의 RGB의 Red 값 구하기
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
#### 그림 8.2.3.1.a141. GIMP(김프)에서 `화면(Screen)` 모드를 적용하여 얻은 RGB 값
![layer_mode-lighten-01-darken_only-color_example-01-result(50%)-focus-RGB](https://github.com/wonder13662/gimp/assets/15767104/0d037814-84e2-4028-a4fe-e18df2caf536)

#### 표 8.2.3.1.a142. 방정식 계산으로 얻은 최종 결과 RGB 값

|RGB 채널|색상값|
|---|---|
|Red|249.0|
|Green|0.0|
|Blue|10.0|

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기
[⬆️ 위: 8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-darken-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
