# 16.6.9.4. 색상 관리 활성화 옵션 비활성화시 이미지에 미치는 영향(When Enable Color Management is unchecked, what happens to the image and the image appearance?)

<a id="16-06-09-04-s1"></a>

## 1. 새로운 색상 프로파일이 바꾸는 것
새로운 색상 프로파일을 이미지에 할당하면 이미지의 실제 채널 값은 바뀌지 않습니다.

하지만 채널 값의 의미를 바꿔서 이미지의 모습이 바뀌게 됩니다.

만약 원본 색상 프로파일과 새로운 프로파일이 기능적으로 동일하다면, 이미지의 모습은 바뀌지 않습니다.

<a id="16-06-09-04-s2"></a>

## 2. 이미지에 GIMP(김프)의 자체적인 sRGB 프로파일 할당
`색상 관리 활성화(Enable color management)` 옵션이 비활성화되어 있으면, GIMP(김프)는 자체적인 sRGB 프로파일 두개 중 하나를 이미지에 할당합니다.

- `GIMP built-in sRGB`
- `GIMP built-in Linear sRGB`

새로운 ICC 프로파일을 이미지에 할당하는 것은 이미지의 채널 값을 바꾸지 않습니다.

하지만 이미지의 모습을 바꿀수도 있습니다.

<a id="16-06-09-04-s2-01"></a>

### 2-1. GIMP(김프)의 자체적인 sRGB 프로파일 할당 이후에도 이미지의 모습이 바뀌지 않는 경우
이미지가 이미 GIMP(김프)의 자체적인 색상 공간 중 하나를 할당받았다면, 이미지의 모습은 바뀌지 않습니다.

또는 이전에 할당된 ICC 프로파일이 GIMP(김프)의 자체적인 색상 공간과 동일한 기능인 경우에도 이미지의 모습은 바뀌지 않습니다.

<a id="16-06-09-04-s2-02"></a>

### 2-2. 이미지의 모습을 바꾸는 요소들
이미지의 색상 프로필이 GIMP(김프)의 자체 색상 공간과 다를 때, 이미지의 모습은 3가지 요인에 따라 많이 달라질 수도 있고 그렇지 않을 수도 있습니다.

1. GIMP(김프)의 정밀도 채널 인코딩

2. 이미지의 원래 할당된 ICC 프로파일의 채널 인코딩과 GIMP(김프)의 정밀도 채널 인코딩의 차이

3. 이미지의 원래 할당된 ICC 프로파일의 빨강, 초록, 파랑의 색도(Chromaticity)와 GIMP(김프)의 자체 sRGB 색도(Chromaticity)의 차이

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.9.5. 색상 관리 활성화 옵션 비활성화 뒤의 보정된 이미지와 보정되지 않은 이미지 비교(Two screenshots showing examples of correct and incorrect image appearances after unchecking Enable Color Management)](./16-06-09-05-example.md)

[⬅️ 이전: 16.6.9.3. 색상 관리 활성화 옵션 비활성화시의 GIMP의 동작(What does GIMP do when Enable Color Management is unchecked?)](./16-06-09-03-what_does_gimp_do_when_enable_color_management_is_unchecked.md)

[⬆️ 위: 16.6.9. 색상 관리 활성화(Enable color management)](./16-06-09-00-enable-color-management.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-color-management-enabled.html#idm26824)