# 16.6.10.2. `색상 프로파일 할당` 사용방법(Use Notes for Assign Color Profile)
디스크에서 이미지를 불러왔을 때, 때로는 새로운 ICC 프로파일을 이미지에 할당하고 싶은 경우가 있습니다.

<a id="16-06-10-02-s1"></a>

## 1. 이미지에 임베딩된 ICC 프로파일이 없는 경우
이미지가 임베딩된 ICC 프로파일이 없다면, GIMP(김프)는 자동으로 [GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md) 중 하나를 할당합니다.

이미지가 sRGB 이미지라면, 추가적인 작업은 없습니다.

하지만 이미지가 sRGB 이미지가 아니라면, `색상 프로파일 할당` 명령으로 적절한 ICC 프로파일을 이미지에 할당할 수 있습니다.

<a id="16-06-10-02-s2"></a>

## 2. 이미지에 임베딩된 ICC 프로파일이 있는 경우
이미지가 임베딩된 ICC 프로파일을 가지고 있지만, 이미지에 맞는 프로파일이 아니거나, 할당하고 싶은 프로파일이 아닐 수 있습니다.

이런 경우에 `색상 프로파일 할당` 명령으로 다른 ICC 프로파일을 이미지에 할당할 수 있습니다.

<a id="16-06-10-02-s3"></a>

## 3. 이미지에 임베딩된 ICC 프로파일이 있지만 GIMP(김프)의 자체 sRGB 프로파일을 쓰고 싶은 경우
이미지가 임베딩된 ICC 프로파일을 가지고 있지만, [GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md) 중 하나를 할당하고 싶을 수 있습니다.

이런 경우에 `색상 프로파일 할당` 명령으로 [GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md) 중 하나를 이미지에 할당할 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.10.3. 예제(An example with screenshots showing how to use Assign Color Profile)](./16-06-10-03-example.md)

[⬅️ 이전: 16.6.10.1. 명령 활성화하기(Activating the command)](./16-06-10-01-activating_the_command.md)

[⬆️ 위: 16.6.10. 색상 프로파일 할당(Assign color profile)](./16-06-10-00-assign-color-profile.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-color-profile-assign.html#idm26888)