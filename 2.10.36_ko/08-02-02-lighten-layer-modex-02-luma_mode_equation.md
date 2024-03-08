# 8.2.2.2. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식
`휘도가 밝은 색만(Luma/Luminance lighten only)` 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.2.2.a1. RGB 색상값의 0부터 255인 경우의 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 방정식
```
최종 결과 휘도값 = max(아래쪽 레이어의 휘도 값, 위쪽 레이어의 휘도 값)
```

⚠️ 주의: 위 방정식의 `max`은 두개의 값 중 더 큰 값을 돌려줍니다.

## 1. 픽셀의 휘도(Luminance) 값은 어디서 확인할 수 있을까요?
공식 가이드에는 픽셀의 `휘도(Luminance)`값을 확인할 수 있는 방법을 설명하고 있지 않습니다. 하지만 무채화 기능을 사용하여 `휘도(Luminance)`값을 확인할 수 있습니다.

### 1-1. 검사에 사용될 예제
#### 그림 8.2.2.2.a11. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/b54908fb-c564-4924-808b-81568faf4ec7)

### 1-2. 무채화(Desaturate)를 사용하여 휘도(Luminance) 값 구하기
[이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `색` → `무채화` → `무채화`를 선택하여 `무채화` 대화상자를 엽니다.

#### 그림 90.1.7.16.a1. `색` → `무채화` (Windows)
![그림 90.1.7.16.a1. `색` → `무채화` (Windows)](https://github.com/wonder13662/gimp/assets/15767104/a35c267e-bebe-406d-9d05-2301280d1ae8)

[다른 운영체제와 언어의 `색` → `무채화` 확인하기](./90-01-07-colorsx-16-desaturate.md)

`무채화` 대화상자의 모드 드롭다운에서 `휘도(Luminance)`를 선택합니다. 그리고 `확인` 버튼을 눌러줍니다.

#### 그림 90.4.63.a115. `무채화` 대화상자 (Windows) (우리말) - 모드 드롭다운 - Luminance
![90-04-63-dialog-desaturate(windows)(ko)-mode_dropdown-focus-mode_luminance](https://github.com/wonder13662/gimp/assets/15767104/b704e87a-99b3-4ba3-8a87-73e795a9bf61)

[다른 운영체제와 언어의 `무채화` 대화상자 확인하기](./90-04-63-desaturate.md)

그 결과, 이미지는 흑백이미지로 바뀌면서, RGB 채널에 동일한 휘도(Luminance) 값이 적용됩니다. 이제 `휘도가 밝은 색만(Luma/Luminance lighten only) 모드`에서 선택될 색상을 판단할 수 있습니다. 이 예제에서는 휘도값이 244인 위쪽 레이어의 색상이 선택됩니다.

#### 그림 8.2.2.2.a12. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-01-BW_luminance(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/a7347b5d-cdc0-4b09-a14e-d66821bbef46)

||위쪽 레이어|아래쪽 레이어|
|---|---|---|
|적색(Red)|244.0|145.0|
|녹색(Green)|244.0|145.0|
|청색(Blue)|244.0|145.0|

```
선택된 휘도(Luminance) 값
= max(244.0, 145.0)
= 244.0
```

### 1-3. 결론
계산에서 결과값으로 받은 휘도(Luminance) 값(244.0)의 무채화 이전의 "위쪽 레이어"의 RGB 색상값과 "레이어 모드 적용 결과"의 RGB 색상값이 일치합니다. 그러므로 휘도(Luminance)을 기준으로 `휘도가 밝은 색만(Luma/Luminance lighten only) 모드`가 동작하는 것을 확인할 수 있습니다.

#### 그림 8.2.2.2.a13. 레이어 모드: 각 레이어별 RGB 정보
![layer_mode-lighten-02-luma-color_examples-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/d5305f19-9abd-43ed-9729-b7163c7f3b9e)

||위쪽 레이어|아래쪽 레이어|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|249.0|255.0|249.0|
|녹색(Green)|251.0|0.0|251.0|
|청색(Blue)|10.0|255.0|10.0|

## 2. 예제들

그럼 실제 사례를 살펴보겠습니다.

## 2-1. 첫번째 예제
#### 그림 8.2.2.2.a11. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-01](https://github.com/wonder13662/gimp/assets/15767104/b54908fb-c564-4924-808b-81568faf4ec7)

#### 그림 8.2.2.2.a12. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-01-BW_luminance(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/a7347b5d-cdc0-4b09-a14e-d66821bbef46)

||위쪽 레이어|아래쪽 레이어|
|---|---|---|
|적색(Red)|244.0|145.0|
|녹색(Green)|244.0|145.0|
|청색(Blue)|244.0|145.0|

```
선택된 휘도(Luminance) 값
= max(244.0, 145.0)
= 244.0
```

#### 그림 8.2.2.2.a13. 레이어 모드: 각 레이어별 RGB 정보
![layer_mode-lighten-02-luma-color_examples-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/d5305f19-9abd-43ed-9729-b7163c7f3b9e)

||위쪽 레이어|아래쪽 레이어|레이어 모드 적용 결과|
|---|---|---|---|
|적색(Red)|249.0|255.0|249.0|
|녹색(Green)|251.0|0.0|251.0|
|청색(Blue)|10.0|255.0|10.0|

위 계산 결과를 통하여 휘도가 96.1로 더 밝은 위쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

## 2-2. 두번째 예제
#### 그림 8.2.2.2.a21. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-02](https://github.com/wonder13662/gimp/assets/15767104/005ba29a-8b46-44b3-b7f4-baa4c58560b1)

#### 그림 8.2.2.2.a22. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-01-BW_luminance(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/a7347b5d-cdc0-4b09-a14e-d66821bbef46)

#### 표 8.2.2.2.a25. 레이어별 LCh의 L(Lightness) 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|61.6|27.7|61.6|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 27.7)
= 61.6
```

위 계산 결과를 통하여 휘도가 61.6으로 더 밝은 위쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

### 2-3. 세번째 예제 - 아래쪽 레이어가 검은색
#### 그림 8.2.2.2.a31. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-03-black](https://github.com/wonder13662/gimp/assets/15767104/e4daee08-40e0-455f-83dd-377ce9b2e111)

#### 그림 8.2.2.2.a32. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-03-comparison-lch(w1080)-focus-luma](https://github.com/wonder13662/gimp/assets/15767104/20a1dead-5ef7-49b7-addf-0406bace23f5)

#### 표 8.2.2.2.a33. 레이어별 LCh의 L(Lightness) 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|61.6|0|61.6|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 0)
= 61.6
```

위 계산 결과를 통하여 휘도가 61.6로 더 밝은 위쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

### 2-4. 네번째 예제 - 아래쪽 레이어가 하얀색
#### 그림 8.2.2.2.a41. 휘도가 밝은 색만(Luma/Luminance lighten only) 모드 예제
![layer_mode-lighten-02-luma-color_examples-04-white](https://github.com/wonder13662/gimp/assets/15767104/f51a6c1d-9b4b-4a50-9d82-bc22ebf8e058)

#### 그림 8.2.2.2.a42. 레이어 모드: 각 레이어별 휘도 정보
![layer_mode-lighten-02-luma-color_examples-04-comparison-lch(w1080)-focus-lch](https://github.com/wonder13662/gimp/assets/15767104/00380343-adef-4d84-90d6-386228925898)

#### 표 8.2.2.2.a43. 레이어별 LCh의 L(Lightness) 값 방정식 계산

|위쪽 레이어|아래쪽 레이어|결과 값|
|---|---|---|
|61.6|100|100|

```
선택된 LCh의 L(Lightness) 값
= max(61.6, 100)
= 100
```

위 계산 결과를 통하여 휘도가 100으로 더 밝은 아래쪽 레이어의 색상이 선택된 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
