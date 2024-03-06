# 8.2.2.2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식
`휘도가 밝은 색만(Luma/Luminance lighten only)` 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.2.2.a1. RGB 색상값의 0부터 255인 경우의 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식
```
최종 결과 휘도값 = max(아래쪽 레이어의 휘도 값, 위쪽 레이어의 휘도 값)
```

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

## 1. 픽셀의 휘도(Luminance) 값은 어디서 확인할 수 있을까요?
공식 가이드에는 픽셀의 `휘도(Luminance)`값을 확인할 수 있는 방법을 설명하고 있지 않습니다. 그래서 `휘도가 밝은 색만(Luma/Luminance lighten only)` 모드의 예제를 통하여 `휘도(Luminance)`값으로 사용할 가능성이 높은 것을 찾아내보기로 했습니다.

### 1-1. 검사에 사용될 예제
#### 그림 8.2.2.2.a11. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/b54908fb-c564-4924-808b-81568faf4ec7)

### 1-2-1. `전경색 바꾸기` 대화상자의 LCh의 L(Lightness)가 휘도(Luminance)일 가능성
#### 그림 8.2.2.2.a101. 위쪽 레이어 색상, 아래쪽 레이어 색상과 결과 색상의 LCh 비교
![layer_mode-lighten-02-luma-color_examples-01-comparison-lch(w1080)-focus](https://github.com/wonder13662/gimp/assets/15767104/85ba3968-5a14-4c14-8922-7c50ee456ac4)

### 1-2-2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 방정식 계산 - LCh의 L(Lightness) 기준
#### 표 8.2.2.2.a101-1. 레이어별 LCh의 L(Lightness) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|96.1|60.2|96.1|

```
선택된 LCh의 L(Lightness) 값
= max(96.1, 60.2)
= 96.1
```

계산에서 결과값으로 받은 LCh의 L(Lightness) 값(96.1)과 실제 픽셀의 결과 LCh의 L(Lightness) 값(96.1)이 일치합니다.

### 1-3-1. `전경색 바꾸기` 대화상자의 HSV의 V(Value)가 휘도(Luminance)일 가능성
#### 그림 8.2.2.2.a102. 위쪽 레이어 색상, 아래쪽 레이어 색상과 결과 색상의 HSV 비교
![layer_mode-lighten-02-luma-color_examples-01-comparison-hsv(w1080)-focus](https://github.com/wonder13662/gimp/assets/15767104/9dcec7db-fc6b-47ee-9add-14479570d576)

### 1-3-2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 방정식 계산 - HSV의 V(Value) 기준
#### 표 8.2.2.2.a102-1. 레이어별 HSV의 V(Value) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|60.5|300.0|60.5|

```
선택된 HSV의 V(Value) 값
= max(60.5, 300.0)
= 300.0
```

계산에서 결과값으로 받은 HSV의 V(Value) 값(300.0)과 실제 픽셀의 결과 HSV의 V(Value) 값(60.5)이 일치하지 않습니다.

### 1-4. 결론
위 비교과정을 통해 휘도가 밝은 색만(Luma/Luminance lighten only) 모드에서 사용하는 `휘도(Luminance)`값은 LCh의 L(Lightness)이라고 볼 수 있습니다.

***

그럼 실제 사례를 살펴보겠습니다.

## 2. 첫번째 예제

#### 그림 8.2.2.2.a11. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/b54908fb-c564-4924-808b-81568faf4ec7)

#### 그림 8.2.2.2.a12. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-01-comparison-lch(w1080)-focus](https://github.com/wonder13662/gimp/assets/15767104/85ba3968-5a14-4c14-8922-7c50ee456ac4)

#### 표 8.2.2.2.a13. 레이어별 LCh의 L(Lightness) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|96.1|60.2|96.1|

```
선택된 LCh의 L(Lightness) 값
= max(96.1, 60.2)
= 96.1
```

## 3. 두번째 예제
#### 그림 8.2.2.2.a21. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/005ba29a-8b46-44b3-b7f4-baa4c58560b1)

#### 그림 8.2.2.2.a22. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-02-comparison-lch(w1080)-focus-luma](https://github.com/wonder13662/gimp/assets/15767104/57507423-1096-4c37-968d-1917bda19775)

#### 표 8.2.2.2.a13. 레이어별 LCh의 L(Lightness) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|61.6|27.7|61.6|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 27.7)
= 61.6
```

## 4. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.2.a31. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-03-black](https://github.com/wonder13662/gimp/assets/15767104/4b8564b7-0411-40d7-beab-d82eb0e23c8d)

#### 그림 8.2.2.a103. 레이어 모드: 예제 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a105. 레이어 모드: 예제 - 아래쪽 레이어 색상(검은색) 정보
![layer_mode-lighten-color_example-color-black-focus-rgb(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/ad618279-6eb2-4def-a562-4f598fa0821a)

#### 그림 8.2.2.2.a32. 결과 이미지의 색상 정보
![layer_mode-lighten-01-lighten_only-color_example-03-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/b5d1c1a8-ed9d-4c2e-a528-35783637bd53)

### 4-1. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 0
- 최종 결과 RGB Red: 227

```
최종 결과 RGB Red
= max(227, 0)
= 227
```

### 4-2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 0
- 최종 결과 RGB Green: 113

```
최종 결과 RGB Green
= max(113, 0)
= 113
```

### 4-3. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 0
- 최종 결과 RGB Green: 113

```
최종 결과 RGB Blue
= max(113, 0)
= 123
```

## 5. 네번째 예제 - 아래쪽 레이어가 하얀색

#### 그림 8.2.2.2.a41. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-01-lighten_only-color_examples-04-white](https://github.com/wonder13662/gimp/assets/15767104/f5170fa0-5989-4f7b-b8cd-a732e7c66620)

#### 그림 8.2.2.a103. 레이어 모드: 예제 - 위쪽 레이어 색상 정보
![layer_mode-lighten-color_example-02-top_layer-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/cac56536-eb1e-4feb-93d3-7cc86c150196)

#### 그림 8.2.2.a106. 레이어 모드: 예제 - 아래쪽 레이어 색상(하얀색) 정보
![layer_mode-lighten-color_example-color-white(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/f82dc5a2-6784-4647-98b4-6766c1c33d11)

#### 그림 8.2.2.2.a42. 결과 이미지의 색상 정보
![layer_mode-lighten-01-lighten_only-color_example-04-result(50%)-focus-rgb](https://github.com/wonder13662/gimp/assets/15767104/1ec2d3bd-8280-4ec8-a898-2193217a6abb)

### 5-1. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 RGB의 Red 값 구하기
- 위쪽 레이어의 RGB Red: 227
- 아래쪽 레이어의 RGB Red: 255
- 최종 결과 RGB Red: 255

```
최종 결과 RGB Red
= max(227, 255)
= 255
```

### 5-2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 RGB의 Green 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 255
- 최종 결과 RGB Green: 255

```
최종 결과 RGB Green
= max(113, 255)
= 255
```

### 5-3. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드의 RGB의 Blue 값 구하기
- 위쪽 레이어의 RGB Green: 113
- 아래쪽 레이어의 RGB Green: 255
- 최종 결과 RGB Green: 255

```
최종 결과 RGB Blue
= max(113, 255)
= 255
```

위 3가지 방정식 계산을 통해 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식이 올바르게 사용되었음을 확인할 수 있습니다.

