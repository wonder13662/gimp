# 14.4.1.1.3. 보간법(Interpolation)

<a id="90-03-02-12-a101-03"></a>

#### [영상 90.3.2.12.a101.3. `도구 옵션` → `회전` → `보간법`](./90-03-02-12-rotate.md#90-03-02-12-a101-03)
![90-03-02-12-a101-03](https://github.com/wonder13662/gimp/assets/15767104/27412512-34b1-4dd3-9f88-f43218b54329)

<a id="90-03-02-12-a101-03-01"></a>

#### [영상 90.3.2.12.a101.3.1. `도구 옵션` → `회전` → `보간법`: 드롭다운 목록 (Mac)](./90-03-02-12-rotate.md#90-03-02-12-a101-03-01)
![90-03-02-12-a101-03-01](https://github.com/wonder13662/gimp/assets/15767104/db7e87fc-638e-48b4-96a6-b8f235a1c593)

<a id="14-04-01-01-03-s1"></a>

## 1. 보간법 - 드롭다운 목록
`보간법(Interpolation)`의 드롭다운 목록은 변형의 품질에 관여하는 방식을 설정합니다.

<a id="14-04-01-01-03-s1-01"></a>

### 1-1. 없음(None)
각 픽셀의 색상을 원본 이미지의 가장 가까이 이웃한 픽셀의 색상을 복사해옵니다. 하지만 가장 처리 속도가 빠릅니다. 이 방식은 "가장 가까운 이웃"이라고 부르기도 합니다.
하지만 결과물이 상당히 조악합니다. 계단 현상 혹은 거친 입자 이미지로 결과가 나오기도 합니다. 사용자의 컴퓨터가 심각하게 속도가 느리거나, 의도적으로 저해상도의 픽셀 느낌을 내려고 할 때 사용합니다.

<a id="14-04-01-01-03-s1-02"></a>

### 1-2. 선형(Linear)
각 픽셀의 색상을 원본 이미지의 가장 가까운 4개의 픽셀의 평균값을 계산해 구합니다. 대부분의 이미지에서 만족할만한 결과를 얻을 수 있습니다. 그리고 속도와 품질에서도 좋은 타협점이 될 수 있습니다. 때로는 이 방식을 `쌍선형(Bilinear)`이라고도 부릅니다.

<a id="14-04-01-01-03-s1-03"></a>

### 1-3. 큐빅(Cubic)
각 픽셀의 색상은 원본 이미지의 가장 가까운 8개의 픽셀의 평균값을 계산해 구합니다. 대체로 좋은 결과를 얻을 수 있지만, 처리 시간이 좀 더 걸립니다. 때로는 이 방식을 `쌍큐빅(Bicubic)`이라고도 부릅니다.

<a id="14-04-01-01-03-s1-04"></a>

### 1-4. NoHalo
`NoHalo`는 높은 품질의 보간법이며, 아래 경우에 사용합니다.

- [`헤일로(Halo)`](./19-glossaryx-halo.md)를 최소로 줄이고 싶을 때
- 이미지를 크게 만들거나, 회전하거나, 원근 변형을 해서 같은 해상도나 더 큰 해상도로 만들 때
- 이미지 위의 선과 그 경계면이 두세개 픽셀 정도로 표현되어서 이미지가 깨끗하고 아주 살짝 흐려진 것이고, 보존되어야할 미묘한 색상 톤이 있는 경우
- 이미지를 줄인 경우에 [`LoHalo`](./14-04-01-01-03-interpolation.md#14-04-01-01-03-s1-05)를 사용해서 변형한 뒤에 색상이 온전히 보존되지 않았때

⚠️주의: 원문에서의 이 페이지와 [12.1.7.2. 비율 조정(Scaling)](./12-01-07-02-scaling.md)의 `NoHalo`의 설명이 다릅니다. 이 페이지의 설명을 기준으로 맞추었습니다.

<a id="14-04-01-01-03-s1-05"></a>

### 1-5. LoHalo
`LoHalo`는 높은 품질의 보간법이며, 아래 경우에 사용합니다.

- 이미지를 작게 줄이기
- 이미지가 글자나 글자 비슷한 객체 또는 명확하게 구분되는 적은 갯수의 단색 이미지이거나 옛날의 픽셀 아트의 이미지
- 웹 위의 JPEG 이미지처럼 이미지가 압축의 부산물로 지저분하거나 훼손된 것

⚠️주의: 원문에서의 이 페이지와 [12.1.7.2. 비율 조정(Scaling)](./12-01-07-02-scaling.md)의 `LoHalo`의 설명이 다릅니다. 이 페이지의 설명을 기준으로 맞추었습니다.

<a id="19-interpolation-01"></a>

#### [그림 19.interpolation.1. 회전](./19-glossaryx-interpolation.md#19-interpolation-01)
![19-interpolation-01](https://github.com/wonder13662/gimp/assets/15767104/727496f6-6661-4e97-853a-bc6228ebbeb4)

<a id="19-interpolation-02"></a>

#### [그림 19.interpolation.2. 크기 조정(축소)](./19-glossaryx-interpolation.md#19-interpolation-02)
![19-interpolation-02](https://github.com/wonder13662/gimp/assets/15767104/52617f0f-f12c-4898-90fe-544c9d386636)

<a id="19-interpolation-03"></a>

#### [그림 19.interpolation.3. 크기 조정(확대)](./19-glossaryx-interpolation.md#19-interpolation-03)
![19-interpolation-03](https://github.com/wonder13662/gimp/assets/15767104/62300f2e-4c4f-4aae-9644-b4c8218bebfd)

<a id="14-04-01-01-03-s2"></a>

## 2. 추가 정보

<a id="14-04-01-01-03-s2-01"></a>

## 2-1. 추가 정보 - 헤일로(Halo)
[`헤일로(Halo)`](./19-glossaryx-halo.md)는 보간법으로 생기는 부산물입니다. `헤일로(Halo)`는 [17.4.8. 선명하게 - Sharpen (unsharp mask)](./17-04-08-sharpen-unsharp-mask.md)을 사용하면 발생합니다.

<a id="90-04-77-a121"></a>

#### [그림 90.4.77.a121. `선명하게 하기` 대화상자: 헤일로 현상 (Windows) (우리말)](./90-04-0077-sharpen_unsharp_mask.md#90-04-77-a121)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/29bac2be-8098-4044-9f6e-75dd2c27080d"></video>

<a id="14-04-01-01-03-s2-02"></a>

## 2-2. 보간법(Interpolation) 기본값 설정하기
[12.1.7.2. 비율 조정(Scaling)](./12-01-07-02-scaling.md)을 참고해주세요.

***

## 관련 정보

[12.1.7.2. 비율 조정(Scaling)](./12-01-07-02-scaling.md)

[19.용어집 - 보간법(Interpolation)](./19-glossaryx-interpolation.md)

[19.용어집 - 헤일로(Halo)](./19-glossaryx-halo.md)

***

## 다른 페이지로 가기

[➡️ 다음: 14.4.1.1.4. 잘라내기(Clipping)](./14-04-01-01-04-clipping.md)

[⬅️ 이전: 14.4.1.1.2. 방향(Direction)](./14-04-01-01-02-direction.md)

[⬆️ 위: 14.4.1.1. 도구 옵션(Tool Options)](./14-04-01-01-00-tool_options.md)

[⬆️ 위: 14.4.1. 일반적인 특징(Common features)](./14-04-01-00-common-features.md)

[⬆️ 위: 14.4. 변형 도구(Transform tools)](./14-04-00-transform-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tools-transform.html#gimp-tool-interpolation-methods)