# 16.6.7.5. 이미지 정밀도 변환 대화상자(The Image Precision Conversion Dialog)

<a id="90-04-178-a101"></a>

#### [그림 90.4.178.a101. `이미지 정밀도 바꾸기` 대화상자 (Windows) (우리말)](./90-04-0178-precision_conversion.md#90-04-178-a101)
<img width="339" height="333" alt="90-04-178-a101" src="https://github.com/user-attachments/assets/e4ba21b5-1efa-46a2-b5a1-5a04f6f42a5e" />

대부분의 정밀도 전환에서 대화상자는 `감마`를 어떻게 설정할 것인지 사용자에게 물어봅니다.

그러나 32비트 실수(부동소수점) 정밀도에서 8비트 정수 정밀도로 바꿀 때에는 [디더링](./19-glossaryx-dithering.md) 처리 방식에 대해서도 물어봅니다.

<a id="16-06-07-05-s1"></a>

## 1. 감마(Gamma)
[16.6.7.3. 이미지 정밀도와 채널 인코딩 선택하기(Choosing the image precision and channel encoding)](./16-06-07-03-choosing_the_image_precision_and_channel_encoding.md)을 참고해주세요.

<a id="16-06-07-05-s2"></a>

## 2. 디더링(Dithering)

<a id="16-06-07-05-s2-01"></a>

### 2-1. 컬러 밴딩 현상 완화하기
32비트 실수(부동소수점) 정밀도에서 8비트 정수 정밀도로 바꿀 때, 세밀한 색상 정보를 잃어버리게 됩니다.

이 과정에서 [컬러 밴딩(Color Banding)](./19-glossaryx-color_banding.md) 현상이 발생할 수 있습니다.

[컬러 밴딩(Color Banding)](./19-glossaryx-color_banding.md)은 색상히 급격하게 계단식으로 변합니다.

[디더링](./19-glossaryx-dithering.md)으로 이 문제를 완화할 수 있습니다.

[디더링](./19-glossaryx-dithering.md)은 이미지에 노이즈를 추가해서 [컬러 밴딩(Color Banding)](./19-glossaryx-color_banding.md) 현상을 줄여줍니다.

다른 [디더링](./19-glossaryx-dithering.md) 방식은 다른 방식을 사용해서 노이즈를 추가합니다.

<a id="16-06-07-05-s2-02"></a>

### 2-2. 디더링 옵션 설명
세가지 [디더링](./19-glossaryx-dithering.md) 세팅이 있습니다.

1. 레이어(Layers)
2. 텍스트 레이어(Text Layers)
3. 채널 및 마스크(Channels and Masks)

각각의 세팅에 [디더링](./19-glossaryx-dithering.md)의 타입을 설정할 수 있습니다.

사용 가능한 [디더링](./19-glossaryx-dithering.md)의 타입은 [16.8.59. 디더링(Dither)](./16-08-59-dither.md)에서 확인해주세요.

<a id="16-06-07-05-s2-03"></a>

### 2-3. 텍스트 레이어의 디더링 처리
보통은 [텍스트 레이어](./90-01-02-00-edit.md)에 [디더링](./19-glossaryx-dithering.md)을 사용하지 않습니다.

디더링을 사용하면 텍스트 레이어는 보통의 레이어로 변하고, 텍스트 정보를 잃어버리기 때문입니다.

디더링이 없는 정밀도 변환을 먼저 시도해복, 눈에 띄는 부작용이 없다면, 보통 레이어에도 디더링을 적용할 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.8. 색상 관리(Color management)](./16-06-08-color-management.md)

[⬅️ 이전: 16.6.7.4.3. 선형 조명과 지각 범위 감마(sRGB) 채널 인코딩(Choosing between Linear light and Perceptual gamma (sRGB) channel encoding)](./16-06-07-04-03-choosing_between_linear_light_n_perceptual_gamma_channel_encoding.md)

[⬆️ 위: 16.6.7. 정밀도(Precision)](./16-06-07-00-precision.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-precision.html#gimp-image-convert-precision)