# 16.8.18. 대비 증가…(Stretch Contrast…)

<a id="90-01-07-14-03-a101"></a>

#### [그림 90.1.7.14.3.a101. `이미지 메뉴 바` → `색` → `자동` → `대비 증가…` (Windows)](./90-01-07-14-03-stretch_contrast.md#90-01-07-14-03-a101)
<img width="556" height="299" alt="90-01-07-14-03-a101" src="https://github.com/user-attachments/assets/e2af2ec9-c686-4b39-aef0-66b8a38c4ccd" />

<a id="16-08-18-s1"></a>

## 1. 명령 설명
`대비 증가…(Stretch Contrast…)` 명령은 자동으로 [활성화 레이어](./19-glossaryx-active_layer.md)의 히스토그램의 채널별 값을 확장시켜줍니다.

[활성화 레이어](./19-glossaryx-active_layer.md)의 각 채널에서 최소값인 픽셀과 최대값인 픽셀을 찾습니다.

그리고 최소값, 최대값 픽셀을 사용해서 히스토그램의 빨강, 녹색, 파랑 채널의 최대 대비 범위까지 확대합니다.

밝은 색은 더 밝아지고, 어두운 색은 더 어두워지므로 대비가 강해집니다.

<a id="16-08-18-s2"></a>

## 2. `대비 증가…(Stretch Contrast…)` 명령을 사용할 수 있는 색상 모드
`대비 증가…(Stretch Contrast…)` 명령은 [RGB](./19-glossaryx-color_mode_rgb.md), [그레이스케일](./19-glossaryx-color_mode_grayscale.md) 그리고 [인덱스](./19-glossaryx-color_mode_indexed.md) 이미지에 사용할 수 있습니다.

<a id="16-08-18-s3"></a>

## 3. 사용 사례
이미지에 원하지 않는 연한 색을 지우고 싶을 때 `대비 증가…(Stretch Contrast…)` 명령을 사용하세요.

<a id="16-08-18-s4"></a>

## 4. `대비 증가…(Stretch Contrast…)` 명령과 화이트 밸런스(White Balance) 명령의 차이점
`대비 증가…(Stretch Contrast…)` 명령은 [화이트 밸런스(White Balance)](./16-08-17-white-balance.md) 명령과 비슷합니다.

하지만, `대비 증가…(Stretch Contrast…)` 명령은 가장 밝거나 어두운 픽셀을 버리지 않습니다.

그러므로 가장 밝은 하얀색이 완전한 하얀색이 아닐 수 있습니다.

***

## 관련 정보

[10.1.3.1. 자동화 도구 - 3. 대비 증가(Stretch Contrast)](./10-01-03-01-automated_tools.md#10-01-03-01-s3)

***

## 하위 페이지

[16.8.18.1. 명령 활성화하기(Activate the Command)](./16-08-18-01-activate_the_command.md)

[16.8.18.2. 옵션(Options)](./16-08-18-02-00-options.md)

[16.8.18.2.1. 프리셋(Presets)](./16-08-18-02-01-presets.md)

[16.8.18.2.2. 색상 유지(Keep Colors)](./16-08-18-02-02-keep_colors.md)

[16.8.18.2.3. 비선형 구성 요소(Non-Linear Components)](./16-08-18-02-03-non_linear_components.md)

[16.8.18.2.4. 혼합 옵션(Blending Options)](./16-08-18-02-04-blending_options.md)

[16.8.18.2.5. 고급 색상 옵션(Advanced Color Options)](./16-08-18-02-05-advanced_color_options.md)

[16.8.18.2.6. 미리보기(Preview)](./16-08-18-02-06-preview.md)

[16.8.18.2.7. 보기 영역 분할(Split view)](./16-08-18-02-07-split_view.md)

[16.8.18.3. 예제(Example)](./16-08-18-03-example.md)

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.18.1. 명령 활성화하기(Activate the Command)](./16-08-18-01-activate_the_command.md)

[⬅️ 이전: 16.8.17. 화이트 밸런스(White Balance)](./16-08-17-white-balance.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-stretch-contrast.html)