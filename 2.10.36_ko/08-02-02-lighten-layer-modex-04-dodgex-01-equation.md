# 8.2.2.4.1. 닷지(Dodge) 모드 방정식
닷지(Dodge) 모드는 아래와 같은 방정식을 갖습니다.

#### 8.2.2.4.1.a1. 닷지(Dodge) 모드 방정식
![layer_mode-lighten-04-dodge-equation](https://github.com/wonder13662/gimp/assets/15767104/0aa732a5-1d58-4211-993f-6f87a6d90ba0)

위 방정식을 쉽게 풀어쓰면 아래와 같습니다. 방정식에서 `M`은 "아래쪽 레이어의 RGB 값", `I`는 "위쪽 레이어의 RGB 값"입니다.

#### 8.2.2.4.1.a2. RGB 색상값의 0부터 255인 경우의 닷지(Dodge) 모드 방정식
```
픽셀의 `닷지(Dodge)` 모드의 RGB 색상값 = (256 x 아래쪽 레이어의 RGB 값) / ((255 - 위쪽 레이어의 RGB 값) + 1)
```

그럼 실제 사례를 살펴보겠습니다.

## 1. 첫번째 예제
#### 그림 8.2.2.4.1.a101. 닷지(Dodge) 모드 예제
![layer_mode-lighten-04-dodge_color_examples-01(50%)](https://github.com/wonder13662/gimp/assets/15767104/d12384fa-315a-4f81-ae62-2d3dc242950c)

### 1-1. 닷지(Dodge) 모드의 RGB 값 구하기
#### 그림 8.2.2.4.1.a111. 각 레이어별 RGB 값
![layer_mode-lighten-04-dodge_color_examples-01-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/2cd9b7c0-af84-469d-b174-f558ac543344)

#### 표 8.2.2.4.1.a112. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|249.0|255.0|**255.0**|
|RGB(Green)|251.0|0.0|**0.0**|
|RGB(Blue)|10.0|255.0|**255.0**|


```
레이어 모드 적용 결과: RGB(Red)
= (256 x 255.0) / ((255 - 249.0) + 1)
= 65280 / 7
= 9325.7142857143
= 255.0

레이어 모드 적용 결과: RGB(Green)
= (256 x 0.0) / ((255 - 251.0) + 1)
= 0 / 5
= 0.0

레이어 모드 적용 결과: RGB(Red)
= (256 x 255.0) / ((255 - 10.0) + 1)
= 65280 / 246
= 265.3658536585
= 255.0
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

## 2. 두번째 예제
#### 그림 8.2.2.4.1.a201. 닷지(Dodge) 모드 예제
![layer_mode-lighten-04-dodge_color_examples-02(50%)](https://github.com/wonder13662/gimp/assets/15767104/680d2931-d66f-4cd8-8cf9-5dd5de031060)

### 2-1. 닷지(Dodge) 모드의 RGB 값 구하기
#### 그림 8.2.2.4.1.a211. 각 레이어별 RGB 값
![layer_mode-lighten-04-dodge_color_examples-02-sample_points(50%)-focus](https://github.com/wonder13662/gimp/assets/15767104/5e15f978-8776-4ff3-8c46-d0975df02af7)

#### 표 8.2.2.4.1.a212. 레이어별 RGB 값 방정식 계산

||마스크(위쪽 레이어)|배경 이미지(아래쪽 레이어)|레이어 모드 적용 결과|
|---|---|---|---|
|RGB(Red)|227.0|53.0|**255.0**|
|RGB(Green)|113.0|61.0|**110.0**|
|RGB(Blue)|113.0|123.0|**221.0**|

```
레이어 모드 적용 결과: RGB(Red)
= (256 x 53.0) / ((255 - 227.0) + 1)
= 13,568 / 29
= 13,568 / 29
= 467.8620689655
= 255.0

레이어 모드 적용 결과: RGB(Green)
= (256 x 61.0) / ((255 - 113.0) + 1)
= 15616 / 143
= 109.2027972028
= 110.0 (올림처리)

레이어 모드 적용 결과: RGB(Blue)
= (256 x 123.0) / ((255 - 113.0) + 1)
= 31488 / 143
= 220.1958041958
= 221.0 (올림처리)
```

GIMP(김프)에서 실제로 레이어 모드를 적용한 RGB 값과 방정식 계산으로 얻은 최종 결과 RGB값이 같은 것을 확인할 수 있습니다.

***

## 다른 페이지로 가기

[⬆️ 위: 8.2.2.4. 닷지(Dodge)](./08-02-02-lighten-layer-modex-04-dodge.md)

[⬆️ 위: 8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
