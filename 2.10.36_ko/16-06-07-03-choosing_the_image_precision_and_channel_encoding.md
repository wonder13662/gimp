# 16.6.7.3. 이미지 정밀도와 채널 인코딩 선택하기(Choosing the image precision and channel encoding)

<a id="16-06-07-03-s1"></a>

## 1. GIMP(김프) 내부에서 사용하는 정밀도와 채널 인코딩
[정밀도 옵션](./16-06-07-02-00-the_contents_of_the_precision_submenu.md)에서 선택한 값과 상관없이, GIMP(김프)의 내부에서는 이미지를 32비트 [실수(부동소수점)](./19-glossaryx-floating_point.md) 정밀도로 처리합니다.

그리고 이미지 수정 작업은 `선형 조명 채널 인코딩(Linear Light Channel Encoding)`을 사용합니다.

<a id="16-06-07-03-s2"></a>

## 2. 어떤 정밀도 옵션을 선택해야 할까요?

<a id="16-06-07-03-s2-01"></a>

### 2-1. 32비트 실수(부동소수점)
GIMP(김프)의 내부의 32비트 실수(부동소수점) 처리의 최대 이점을 얻고자 한다면, `32비트 실수(부동소수점)` 옵션과 `선형 조명 채널 인코딩(Linear Light Channel Encoding)`을 선택해주세요.

<a id="16-06-07-03-s2-02"></a>

### 2-2. 16비트 실수(부동소수점) 또는 16비트 정수
제한된 램(RAM)을 갖고 있는 장비로 작업하거나, 레이어가 많은 매우 큰 이미지를 편집한다면, `16비트 실수(부동소수점)` 또는 `16비트 정수` 옵션을 사용해보세요.

<a id="16-06-07-03-s2-03"></a>

### 2-3. 16비트 정수
높은 [비트 깊이(bit depth)](./19-glossaryx-bit_depth.md)의 이미지 편집을 하고 싶지만, 실수(부동소수점) 채널 값을 다루고 싶지 않다면, `16비트 정수` 옵션을 사용해보세요.

<a id="16-06-07-03-s2-04"></a>

### 2-4. 지각 범위 감마(sRGB)
이미지에 [색상 교정(Soft Proofing)](./19-glossaryx-soft_proofing.md) 작업을 할 때, `지각 범위 감마(sRGB)(Perceptual gamma (sRGB))` 채널 인코딩으로 바꾸어서 선형 감마 이미지의 색상 교정 문제를 피할 수 있습니다.

<a id="16-06-07-03-s2-05"></a>

### 2-5. 8비트 정수
램(RAM)이 충분하지 않은 매우 저사양의 장비로 작업하는 경우에는 `8비트 정수` 옵션을 사용해보세요.

또한 `지각 범위 감마(sRGB)(Perceptual gamma (sRGB))` 채널 인코딩 옵션을 선택해서, `8비트 정수` 정밀도에서 `선형 조명 채널 인코딩(Linear Light Channel Encoding)` 채널 인코딩을 사용할 경우, 그림자가 보기 좋지 않게 [포스터라이즈](./16-08-57-posterize.md)되는 문제를 방지할 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.7.4. 정밀도 옵션의 추가적인 설명(More information about the Precision options)](./16-06-07-04-00-more_information_about_the_precision_options.md)

[⬅️ 이전: 16.6.7.2.2. 채널 인코딩 옵션(Channel Encoding Options)](./16-06-07-02-02-channel_encoding_options.md)

[⬆️ 위: 16.6.7. 정밀도(Precision)](./16-06-07-00-precision.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-precision.html#gimp-image-choosing-precision-encoding)