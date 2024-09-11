# 16.6.12.2. `색상 프로파일 버리기` 사용방법(Use Notes for `Discard Color Profile`)
이미지의 ICC 프로파일 파일을 버리면 아래와 같은 결과를 얻습니다.

1. 이미지의 모습이 바뀝니다. 하지만 버린 ICC 프로파일과 [GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md)이 같은 기능을 할 경우에는 이미지의 모습이 바뀌지 않습니다.

2. 이미지의 채널 값은 바뀌지 않습니다.

이미지의 임베딩된 ICC 프로파일이 없는 이미지로 내보내기를 하고 싶을 때 이미지의 현재 할당된 ICC 프로파일을 버리면 됩니다.

`색상 프로파일 버리기` 명령은 [GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md)이 할당되지 않은 이미지에만 사용할 수 있습니다.

[GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md)은 내보내기한 이미지의 ICC 프로파일로 임베딩되지 않습니다.

⚠️ 주의: 원문에서는 ICC 프로파일이 없는 이미지로 내보내기가 가능한 것으로 나와있으나, 실제로는 내보내기를 했을 경우에는 [GIMP(김프)의 자체 sRGB 프로파일](./19-glossaryx-gimp_built_in_srgb_profile.md)이 임베딩되어 내보내기가 됩니다.

<a comment="위 주의 문구에 해당하는 버그 리포트 필요"></a>

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.13. 색상 프로파일 파일로 저장하기(Save color profile to file)](./16-06-13-save-color-profile-to-file.md)

[⬅️ 이전: 16.6.12.1. 명령 활성화하기(Activating the command)](./16-06-12-01-activating_the_command.md)

[⬆️ 위: 16.6.12. 색상 프로파일 버리기(Discard color profile)](./16-06-12-00-discard-color-profile.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-color-profile-discard.html#idm27131)