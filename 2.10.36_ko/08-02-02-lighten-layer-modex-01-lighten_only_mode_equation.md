# 8.2.2.1. 밝은 색만(Lighten only) 모드 방정식
밝은 색만(Lighten only) 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.2.1.a1. RGB 색상값의 0부터 255인 경우의 밝은 색만(Lighten only) 모드 방정식
```
픽셀의 `밝은 색만(Lighten only)` 모드의 RGB 색상값 = max(아래쪽 레이어의 RGB 값, 위쪽 레이어의 RGB 값)
```

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제

#### 그림 8.2.2.1.a11. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/980d4b55-7a1d-47ce-8555-a118f9680daa)

#### 그림 8.2.2.a101. 레이어 모드: 예제1 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-01-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/0b3c8936-39be-48f0-8bda-30c266deec0c)

#### 그림 8.2.2.a102. 레이어 모드: 예제1 - 아래쪽 레이어 색상 정보
![layer_mode-lighten-color_example-01-bottom_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/11159a29-09e1-4ed3-96ed-a57b0ba715d6)

#### 그림 8.2.2.1.a12. 결과 이미지의 색상 정보
![layer_mode-lighten-01-lighten_only-color_example-01-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/d4bbffc9-549a-4754-ab79-c436407b3730)

### 1-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 249
- 아래쪽 레이어의 RGB Red: 255
- 최종 결과 RGB Red: 255

```
최종 결과 RGB Red
= max(249, 255)
= 255
```

### 1-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 251
- 아래쪽 레이어의 RGB Green: 0
- 최종 결과 RGB Green: 251

```
최종 결과 RGB Green
= max(251, 0)
= 251
```

### 1-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 10
- 아래쪽 레이어의 RGB Green: 255
- 최종 결과 RGB Green: 255

```
최종 결과 RGB Blue
= max(10, 255)
= 255
```

위 3가지 방정식 계산을 통해 밝은 색만(Lighten only) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.2.1.a21. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/3755a45c-11a5-4dc2-a904-10ac45c64ffa)

#### 그림 8.2.2.a103. 레이어 모드: 예제2 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a104. 레이어 모드: 예제2 - 아래쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-bottom_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/8aa80214-9dd0-4af6-8edb-cdfd7f3c1be9)

#### 그림 8.2.2.1.a22. 결과 이미지의 색상 정보
![layer_mode-lighten-01-lighten_only-color_example-02-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/1534ef27-a607-474e-a64d-4a26dce85a82)

### 2-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 53
- 최종 결과 RGB Red: 227

```
최종 결과 RGB Red
= max(227, 53)
= 227
```

### 2-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 61
- 최종 결과 RGB Green: 113

```
최종 결과 RGB Green
= max(113, 61)
= 113
```

### 2-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 123
- 최종 결과 RGB Green: 123

```
최종 결과 RGB Blue
= max(113, 123)
= 123
```

## 3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.1.a31. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-03-black](https://github.com/wonder13662/gimp/assets/15767104/4b8564b7-0411-40d7-beab-d82eb0e23c8d)

#### 그림 8.2.2.a103. 레이어 모드: 예제 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a105. 레이어 모드: 예제 - 아래쪽 레이어 색상(검은색) 정보
![layer_mode-lighten-color_example-color-black-focus-rgb(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/ad618279-6eb2-4def-a562-4f598fa0821a)

#### 그림 8.2.2.1.a32. 결과 이미지의 색상 정보
![layer_mode-lighten-01-lighten_only-color_example-03-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/b5d1c1a8-ed9d-4c2e-a528-35783637bd53)

### 3-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 53
- 최종 결과 RGB Red: 227

```
최종 결과 RGB Red
= max(227, 53)
= 227
```

### 3-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 61
- 최종 결과 RGB Green: 113

```
최종 결과 RGB Green
= max(113, 61)
= 113
```

### 3-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 123
- 최종 결과 RGB Green: 123

```
최종 결과 RGB Blue
= max(113, 123)
= 123
```

## 4. 네번째 예제 - 아래쪽 레이어가 하얀색

#### 그림 8.2.2.1.a41. 밝은 색만(Lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-04-white](https://github.com/wonder13662/gimp/assets/15767104/f5170fa0-5989-4f7b-b8cd-a732e7c66620)

#### 그림 8.2.2.a103. 레이어 모드: 예제 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a106. 레이어 모드: 예제 - 아래쪽 레이어 색상(하얀색) 정보
![layer_mode-lighten-color_example-color-white(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/f82dc5a2-6784-4647-98b4-6766c1c33d11)

#### 그림 8.2.2.1.a42. 결과 이미지의 색상 정보
![layer_mode-lighten-01-lighten_only-color_example-04-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/1ec2d3bd-8280-4ec8-a898-2193217a6abb)

### 4-1. 밝은 색만(Lighten only) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 53
- 최종 결과 RGB Red: 227

```
최종 결과 RGB Red
= max(227, 53)
= 227
```

### 4-2. 밝은 색만(Lighten only) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 61
- 최종 결과 RGB Green: 113

```
최종 결과 RGB Green
= max(113, 61)
= 113
```

### 4-3. 밝은 색만(Lighten only) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 123
- 최종 결과 RGB Green: 123

```
최종 결과 RGB Blue
= max(113, 123)
= 123
```

위 3가지 방정식 계산을 통해 밝은 색만(Lighten only) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

