# 16.6.7.4.2. 정수와 부동소수점 정밀도 선택하기(Choosing between integer and floating point precision)

<a id="16-06-07-04-02-s1"></a>

## 1. 실수(부동소수점) 정밀도
GIMP(김프)의 내부적인 32비트 실수(부동소수점) 처리의 이점을 얻기 위해서는 [실수(부동소수점)](./19-glossaryx-floating_point.md) 정밀도의 설정이 필요합니다. 

실수(부동소수점) 정밀도는 [0.0](./19-glossaryx-display_referred_black.md)부터 [1.0](./19-glossaryx-display_referred_white.md)까지의 [디스플레이 참조 범위](./19-glossaryx-display_referred.md) 바깥의 채널 값들을 생성하고 사용할 수 있게 해줍니다.

그리하여 다음과 같은 상당히 유용한 작업을 할 수 있게 됩니다.

- 제한없는 ICC 프로필 변환
- [높은 동적 범위(High Dynamic Range, HDR)](./19-glossaryx-high_dynamic_range.md) 수정
- [장면 참조(Scene-referred)](./19-glossaryx-scene_referred.md) 수정

<a id="16-06-07-04-02-s2"></a>

## 2. 정수 정밀도
실수(부동소수점) 정밀도와 다르게, 정수 정밀도는 디스플레이 범위의 바깥의 채널값은 저장할 수 없습니다.

그러므로 정수 정밀도를 선택하는 것은 이미지 처리에서 만들어진 모든 실수(부동소수점)의 채널 값이 0.0부터 1.0사이의 값으로 잘려서 맞춰지게 됩니다.

- 8비트 정수 값은 0부터 255까지로 제한됩니다.
- 16비트 정수 값은 0부터 65535까지로 제한됩니다.
- 32비트 정수 값은 0부터 4294967295까지로 제한됩니다.

<a id="16-06-07-04-02-s3"></a>

## 3. 정수 정밀도가 실수(부동소수점) 정밀도보다 정확합니다
어떤 [비트 깊이](./19-glossaryx-bit_depth.md)를 선택하더라도, 같은 정수 정밀도가 실수(부동소수점) 정밀도보다 정확합니다.

그러므로 16비트 정수 정밀도가 16비트 실수(부동소수점) 정밀도보다 정확합니다.

또한 32비트 정수 정밀도가 32비트 실수(부동소수점) 정밀도보다 정확합니다.

하지만, GIMP(김프)에서는 32비트 정수 정밀도보다 더 정확할 수는 없습니다.

또한 사용자가 32비트 정수 정밀도를 선택하였더라도, GIMP(김프)의 내부에서는 여전히 32비트 실수(부동소수점) 정밀도로 이미지를 처리합니다.

정밀도 옵션은 오직 램(RAM)에 저장되는 이미지 저장 방식을 결정할 뿐입니다.

<a id="16-06-07-04-02-s4"></a>

## 4. 정수 정밀도와 실수(부동소수점) 정밀도의 램(RAM)과 디스크 사용량
어떤 [비트 깊이](./19-glossaryx-bit_depth.md)를 선택하더라도, 정수와 실수(부동소수점) 정밀도는 이미지 처리를 할 때, 내부적으로 대략 같은 크기의 램을 사용합니다.

그리고 또한 이미지 파일을 디스크에 저장할 때 비슷한 크기의 디스크 용량이 필요합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.7.4.3. 선형 조명과 지각 범위 감마(sRGB) 채널 인코딩(Choosing between Linear light and Perceptual gamma (sRGB) channel encoding)](./16-06-07-04-03-choosing_between_linear_light_n_perceptual_gamma_channel_encoding.md)

[⬅️ 이전: 16.6.7.4.1. 비트 깊이 선택하기(8비트, 16비트, 32비트)](./16-06-07-04-01-choosing_the_bit_depth.md)

[⬆️ 위: 16.6.7.4. 정밀도 옵션의 추가적인 설명(More information about the Precision options)](./16-06-07-04-00-more_information_about_the_precision_options.md)

[⬆️ 위: 16.6.7. 정밀도(Precision)](./16-06-07-00-precision.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-precision.html#idm26656)