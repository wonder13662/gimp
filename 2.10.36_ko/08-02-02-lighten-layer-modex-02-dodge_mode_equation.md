# 8.2.2.2. 닷지(Dodge) 모드 방정식
닷지(Dodge) 모드는 아래와 같은 방정식을 갖습니다.

#### 그림 8.2.2.a31. 닷지(Dodge)
![layer_mode-lighten-04-dodge](https://github.com/wonder13662/gimp/assets/15767104/6f0872ea-c3e8-48bf-8aa9-818cf24d10d2)

위 방정식을 쉽게 풀어쓰면 아래와 같습니다. 방정식에서 `M`은 "아래쪽 레이어의 RGB 값", `I`는 "위쪽 레이어의 RGB 값"입니다.

#### 8.2.2.2.a1. RGB 색상값의 0부터 255인 경우의 닷지(Dodge) 모드 방정식
```
픽셀의 `닷지(Dodge)` 모드의 RGB 색상값 = (256 x 아래쪽 레이어의 RGB 값) / ((255 - 위쪽 레이어의 RGB 값) + 1)
```

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제

#### 8.2.2.2.a11. 닷지(Dodge) 모드 예제
![layer_mode-lighten-04-dodge_color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/6fba97d9-f63a-46fc-8950-0280023e37b4)

#### 그림 8.2.2.a101. 레이어 모드: 예제1 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-01-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/0b3c8936-39be-48f0-8bda-30c266deec0c)

#### 그림 8.2.2.a102. 레이어 모드: 예제1 - 아래쪽 레이어 색상 정보
![layer_mode-lighten-color_example-01-bottom_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/11159a29-09e1-4ed3-96ed-a57b0ba715d6)

#### 8.2.2.2.a12. 결과 이미지의 색상 정보
![layer_mode-lighten-04-dodge-color_example-01-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/868baf06-d053-41c8-841c-cf1cbd50c799)

### 1-1. 닷지(Dodge) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 249
- 아래쪽 레이어의 RGB Red: 255
- 최종 결과 RGB Red: 255

```
최종 결과 RGB Red
= (256 x 255) / ((255 - 249) + 1)
= 65280 / 7
= 9325.7142857143
= 255 (최대값: 255)
```

### 1-2. 닷지(Dodge) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 251
- 아래쪽 레이어의 RGB Green: 0
- 최종 결과 RGB Green: 0

```
최종 결과 RGB Green
= (256 x 0) / ((255 - 251) + 1)
= 0 / (4 + 1)
= 0 / 5
= 0
```

### 1-3. 닷지(Dodge) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 10
- 아래쪽 레이어의 RGB Green: 255
- 최종 결과 RGB Green: 255

```
최종 결과 RGB Blue
= (256 x 255) / ((255 - 10) + 1)
= 65280 / 246
= 265.3658536585
= 255 (최대값: 255)
```

위 3가지 방정식 계산을 통해 닷지(Dodge) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

## 2. 두번째 예제
#### 8.2.2.2.a21. 닷지(Dodge) 모드 예제
![layer_mode-lighten-04-dodge_color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/b32a7b78-df5a-492a-bd67-90657236a287)

#### 그림 8.2.2.a103. 레이어 모드: 예제2 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a104. 레이어 모드: 예제2 - 아래쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-bottom_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/8aa80214-9dd0-4af6-8edb-cdfd7f3c1be9)

#### 8.2.2.2.a22. 결과 이미지의 색상 정보
![layer_mode-lighten-04-dodge-color_example-02-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/0747d60c-8117-4d4d-a2ae-317b91c6b581)

### 2-1. 닷지(Dodge) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 53
- 최종 결과 RGB Red: 255

```
최종 결과 RGB Red
= (256 x 53) / ((255 - 227) + 1)
= 13568 / 29
= 467.8620689655
= 255 (최대값: 255)
```

### 2-2. 닷지(Dodge) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 61
- 최종 결과 RGB Green: 110

```
최종 결과 RGB Green
= (256 x 61) / ((255 - 113) + 1)
= 15616 / 143
= 109.2027972028
= 110 (올림처리)
```

### 2-3. 닷지(Dodge) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 123
- 최종 결과 RGB Green: 221

```
최종 결과 RGB Blue
= (256 x 123) / ((255 - 113) + 1)
= 31488 / 143
= 220.1958041958
= 221 (올림처리)
```

위 3가지 방정식 계산을 통해 닷지(Dodge) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.
