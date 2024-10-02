# 19. 용어집 - 보간법(Interpolation)

<a id="19-interpolation-s1"></a>

## 1. 정의
이미지나 레이어의 크기를 크게 만들었을 때의 빈공간을 채울 새로운 픽셀을 계산하는 과정

<a id="19-interpolation-s2"></a>

## 2. 방식

<a id="19-interpolation-s2-01"></a>

### 2-1. 없음(None)
각 픽셀의 색상을 원본 이미지의 가장 가까이 이웃한 픽셀의 색상을 복사해옵니다.

하지만 가장 처리 속도가 빠릅니다.

이 방식은 "가장 가까운 이웃"이라고 부르기도 합니다.

하지만 결과물이 상당히 조악합니다.

계단 현상 혹은 거친 입자 이미지로 결과가 나오기도 합니다.

사용자의 컴퓨터가 심각하게 속도가 느리거나, 의도적으로 저해상도의 픽셀 느낌을 내려고 할 때 사용합니다.

<a id="19-interpolation-s2-02"></a>

### 2-2. 선형(Linear)
각 픽셀의 색상을 원본 이미지의 가장 가까운 4개의 픽셀의 평균값을 계산해 구합니다.

대부분의 이미지에서 만족할만한 결과를 얻을 수 있습니다.

그리고 속도와 품질에서도 좋은 타협점이 될 수 있습니다.

때로는 이 방식을 `쌍선형(Bilinear)`이라고도 부릅니다.

<a id="19-interpolation-s2-03"></a>

### 2-3. 큐빅(Cubic)
각 픽셀의 색상은 원본 이미지의 가장 가까운 8개의 픽셀의 평균값을 계산해 구합니다.

대체로 좋은 결과를 얻을 수 있지만, 처리 시간이 좀 더 걸립니다.

때로는 이 방식을 `쌍큐빅(Bicubic)`이라고도 부릅니다.

<a id="19-interpolation-s2-04"></a>

### 2-4. NoHalo
`NoHalo`는 높은 품질의 보간법이며, 아래 경우에 사용합니다.

- [`헤일로(Halo)`](./19-glossaryx-halo.md)를 최소로 줄이고 싶을 때
- 이미지를 크게 만들거나, 회전하거나, 원근 변형을 해서 같은 [해상도](./19-glossaryx-resolution.md)나 더 큰 해상도로 만들 때
- 이미지 위의 선과 그 경계면이 두세개 픽셀 정도로 표현되어서 이미지가 깨끗하고 아주 살짝 흐려진 것이고, 보존되어야할 미묘한 색상 톤이 있는 경우
- 이미지를 줄인 경우에 [`LoHalo`](./14-04-01-01-03-interpolation.md#14-04-01-01-03-s1-05)를 사용해서 변형한 뒤에 색상이 온전히 보존되지 않았을 때

<a id="19-interpolation-s2-05"></a>

### 2-5. LoHalo
`LoHalo`는 높은 품질의 보간법이며, 아래 경우에 사용합니다.

- 이미지를 작게 줄이기
- 이미지가 글자나 글자 비슷한 객체 또는 명확하게 구분되는 적은 갯수의 단색 이미지이거나 옛날의 픽셀 아트의 이미지
- 웹 위의 JPEG 이미지처럼 이미지가 압축의 부산물로 지저분하거나 훼손된 것

<a id="19-interpolation-s3"></a>

## 3. 예시

<a id="19-interpolation-01"></a>

#### 그림 19.interpolation.1. 회전
![19-interpolation-01](https://github.com/wonder13662/gimp/assets/15767104/727496f6-6661-4e97-853a-bc6228ebbeb4)

[14.4.1.1.3. 보간법(Interpolation) - 그림 19.interpolation.1](./14-04-01-01-03-interpolation.md#19-interpolation-01)

<a id="19-interpolation-02"></a>

#### 그림 19.interpolation.2. 크기 조정(축소)
![19-interpolation-02](https://github.com/wonder13662/gimp/assets/15767104/52617f0f-f12c-4898-90fe-544c9d386636)

[14.4.1.1.3. 보간법(Interpolation) - 그림 19.interpolation.2](./14-04-01-01-03-interpolation.md#19-interpolation-02)

<a id="19-interpolation-03"></a>

#### 그림 19.interpolation.3. 크기 조정(확대)
![19-interpolation-03](https://github.com/wonder13662/gimp/assets/15767104/62300f2e-4c4f-4aae-9644-b4c8218bebfd)

[14.4.1.1.3. 보간법(Interpolation) - 그림 19.interpolation.3](./14-04-01-01-03-interpolation.md#19-interpolation-03)

***

## 관련 정보

[원문](https://docs.gimp.org/2.10/ko/glossary.html#glossary-interpolation)

[Cambridge in Colour - DIGITAL IMAGE INTERPOLATION](https://www.cambridgeincolour.com/tutorials/image-interpolation.htm)

[14.4.1.1.3. 보간법(Interpolation)](./14-04-01-01-03-interpolation.md)

[16.7.53.2.1. 레이어 크기(Layer Size)](./16-07-53-02-01-layer_size.md)