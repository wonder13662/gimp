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

위 계산 결과를 통하여 휘도가 96.1로 더 밝은 위쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

## 3. 두번째 예제
#### 그림 8.2.2.2.a21. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/005ba29a-8b46-44b3-b7f4-baa4c58560b1)

#### 그림 8.2.2.2.a22. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-02-comparison-lch(w1080)-focus-luma](https://github.com/wonder13662/gimp/assets/15767104/57507423-1096-4c37-968d-1917bda19775)

#### 표 8.2.2.2.a23. 레이어별 LCh의 L(Lightness) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|61.6|27.7|61.6|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 27.7)
= 61.6
```

위 계산 결과를 통하여 휘도가 61.6으로 더 밝은 위쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

## 4. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.2.a31. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-03-black](https://github.com/wonder13662/gimp/assets/15767104/e4daee08-40e0-455f-83dd-377ce9b2e111)

#### 그림 8.2.2.2.a32. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-03-comparison-lch(w1080)-focus-luma](https://github.com/wonder13662/gimp/assets/15767104/20a1dead-5ef7-49b7-addf-0406bace23f5)

#### 표 8.2.2.2.a33. 레이어별 LCh의 L(Lightness) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|61.6|0|61.6|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 0)
= 61.6
```

위 계산 결과를 통하여 휘도가 61.6로 더 밝은 위쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

## 5. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.2.2.a41. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-04-white](https://github.com/wonder13662/gimp/assets/15767104/f51a6c1d-9b4b-4a50-9d82-bc22ebf8e058)

#### 그림 8.2.2.2.a42. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-04-comparison-lch(w1080)-focus-lch](https://github.com/wonder13662/gimp/assets/15767104/00380343-adef-4d84-90d6-386228925898)

#### 표 8.2.2.2.a43. 레이어별 LCh의 L(Lightness) 값

|위쪽 레이어|아래쪽 레이어|결과 색상|
|---|---|---|
|61.6|100|100|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 100)
= 100
```

위 계산 결과를 통하여 휘도가 100으로 더 밝은 아래쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.
