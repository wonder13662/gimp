# 10.1.4.2. 거친 정도 줄이기(Reducing Graininess)
빛이 적은 조건이거나 매우 빠른 노출시간으로 사진을 찍으면, 카메라는 각 픽셀의 색상값을 계산할 데이터가 부족하게 됩니다. 그 결과, 이미지의 입자가 거칠게 보입니다.이미지를 흐리게 해서 거친 입자들을 감출 수 있습니다. 하지만 이미지의 선명함을 잃게 됩니다. 이 문제를 해결하는 방법은 아래와 같습니다.

## 1. 일부 가우시안 흐림처리(Selective Gaussian Blur)
이미지의 거친 입자가 너무 나쁘지 않다면, [일부 가우시안 흐림처리(Selective Gaussian Blur)](./17-03-08-selective-gaussian-blur.md)를 흐림 반경(blurring radius)을 1 또는 2 픽셀로 설정해서 적용하면 좋은 결과를 얻을 수 있습니다.

<a id="90-01-09-01-07-a1"></a>

#### [그림 90.1.9.1.7.a1. `필터` → `흐림처리` → `일부 가우시안 흐림처리...` (Windows)](./90-01-09-filtersx-01-blurx-07-selective_gaussian_blur.md#90-01-09-01-07-a1)
![90-01-09-filtersx-01-blur-focus-selective_gaussian_blur(windows)](https://github.com/wonder13662/gimp/assets/15767104/1d26326a-237c-45c5-b1cc-0eb3656d1e51)

[다른 운영체제와 언어의 `필터` → `흐림처리` → `일부 가우시안 흐림처리...` 확인하기](./90-01-09-filtersx-01-blurx-07-selective_gaussian_blur.md#90-01-09-01-07-a2)

<a id="90-04-80-a101"></a>

#### [그림 90.4.80.a101. `일부 가우시안 흐림처리` 대화상자 (Windows) (우리말)](./90-04-80-selective_gaussian_blur.md#90-04-80-a101)
![그림 90 4 80 a101  `일부 가우시안 흐림처리` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/c8f24a85-5d48-4f78-898c-027973bc3c30)

[다른 운영체제와 언어의 `일부 가우시안 흐림처리` 대화상자 확인하기](./90-04-80-selective_gaussian_blur.md#90-04-80-a102)

<a id="90-04-80-a105"></a>

#### [영상 90.4.80.a105. `일부 가우시안 흐림처리` 대화상자 (Windows) (우리말)](./90-04-80-selective_gaussian_blur.md#90-04-80-a105)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/a1015b6e-565e-4e69-ad4a-1e461a34776c"></video>

## 2. 잡티 없애기 필터(Despeckle filter)
다른 방법은 [잡티 없애기](./17-04-09-despeckle.md) 필터를 사용하는 것입니다. [잡티 없애기](./17-04-09-despeckle.md)는 미리보기 기능으로 설정을 조정해서 좋은 결과를 만들어 낼 수 있습니다.

<a id="90-01-09-02-08-a1"></a>

#### [그림 90.1.9.2.8.a1. `필터` → `보강` → `잡티 없애기...` (Windows)](./90-01-09-filtersx-02-enhancex-08-despeckle.md#90-01-09-02-08-a1)
![90-01-09-filtersx-02-enhance(w1080)-focus-despeckle(windows)](https://github.com/wonder13662/gimp/assets/15767104/12f92e0b-47e4-4620-aee8-7efa050f1829)

[다른 운영체제와 언어의 `필터` → `보강` → `잡티 없애기...` 확인하기](./90-01-09-filtersx-02-enhancex-08-despeckle.md#90-01-09-02-08-a2)

<a id="90-04-81-a101"></a>

#### [그림 90.4.81.a101. `잡티 없애기` 대화상자 (Windows) (우리말)](./90-04-81-despeckle.md#90-04-81-a101)
![그림 90 4 81 a101  `잡티 없애기` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/18fe823c-197d-4c19-b900-bac592aad42d)

[다른 운영체제와 언어의 `잡티 없애기` 대화상자 확인하기](./90-04-81-despeckle.md#90-04-81-a102)

<a id="90-04-81-a105"></a>

#### [영상 90.4.81.a105. `잡티 없애기` 대화상자 - 거친 입자 부드럽게 하기 (Windows) (우리말)](./90-04-81-despeckle.md#90-04-81-a105)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/9ca58211-df8e-476b-8930-bfc0d781027d"></video>

이미지의 거친 입자가 너무 나쁘다면, 수정하기 불가능할 수도 있습니다. 예외적으로 칠하기 도구 등으로 리터칭을 하는 방법을 사용할 수도 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.4.3. 부드럽게 하기(Softening)](./10-01-04-03-softening.md)

[⬅️ 이전: 10.1.4.1. 선명하게 하기(Unblurring)](./10-01-04-01-unblurring.md)

[⬆️ 위: 10.1.4. 선명도 조절하기(Adjust Sharpness)](./10-01-04-00-adjusting_sharpness.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-unblurring)
