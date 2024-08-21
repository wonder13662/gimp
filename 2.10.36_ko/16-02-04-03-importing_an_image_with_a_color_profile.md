# 16.2.4.3. 이미지와 색상 프로파일을 불러오기(Importing an image with a color profile)

<a id="90-04-86-a101"></a>

#### [그림 90.4.86.a101. `RGB 작업 공간 바꾸기` 대화상자 (Windows) (우리말)](./90-04-0086-convert_to_rgb_working_space.md#90-04-86-a101)
<img width="455" height="328" alt="90-04-86-a101" src="https://github.com/wonder13662/gimp/assets/15767104/aafd69a7-9b1f-4fed-b378-0e0eeeed444d" />

[`*.XCF`](./19-glossaryx-xcf.md)가 아닌 이미지 파일을 열 때, 이미지가 [색상 프로필](./19-glossaryx-color_profile.md)을 가지고 있다면 GIMP(김프)는 대화상자를 열어서 이미지의 색상 프로필을 유지할 것인지 아니면 GIMP(김프)의 기본 sRGB 색상 프로필로 바꿀 것인지 물어봅니다.

GIMP(김프)는 색상 프로필 변환이 필요하다면 내부적으로 진행하기 때문에 두가지 선택 모두 문제없이 사용할 수 있습니다.

GIMP(김프)에서 매번 색상 프로필을 확인하는 것이 귀찮게 생각된다면 `다시 묻지 않기(Don't ask me again)` 옵션을 켜서 이 과정을 생략할 수 있습니다.

만약 색상 프로필을 확인하는 과정을 되살려야 한다면, [`기본설정` → `색상관리` → `정책` → `파일 열기 동작`](./12-01-04-05-policies.md#12-01-04-05-s1-01)을 다시 켜주면 됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.2.5. 레이어로 열기(Open as layers)](./16-02-05-00-open-as-layers.md)

[⬅️ 이전: 16.2.4.2.10. 파일 유형 선택(Select File Type)](./16-02-04-02-10-select_file_type.md)

[⬆️ 위: 16.2.4. 열기(File open)](./16-02-04-00-file-open.md)

[⬆️ 위: 16.2. 파일 메뉴(The File Menu)](./16-02-00-the-file-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-file-open.html#gimp-image-color-profile-import)