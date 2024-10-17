# 16.8.23.4. 채널 혼합은 어떻게 동작하나요?(How does Channel Mixer work?)
⚠️ 주의: 원문의 설명이 실제 동작과 달라 예제는 첨부하지 않았습니다. 간단히 이해를 위해 설명만 참고해주세요.

<a comment="TODO 원문의 설명처럼 동작하지 않음. 리포트 작성 및 수정 요청이 필요함."></a>

<a id="16-08-23-04-s1"></a>

## 1. 출력 채널과 입력 채널
각 출력 채널은 RGB 입력 채널에 설정한 값을 기준으로 합니다.

기본값으로 각 출력 채널은 대응하는 입력 채널의 100%(슬라이더의 1.0)를 받습니다.

예를 들어, 빨강 출력 채널(Red Channel)의 대응 채널인 빨강 입력 채널(Red in Red Channel)은 1.0이 기본값입니다.

빨강 출력 채널(Red Channel)의 녹색 입력 채널(Green in Red Channel)은 0.0이 기본값입니다.

빨강 출력 채널(Red Channel)의 파랑 입력 채널(Green in Red Channel)은 0.0이 기본값입니다.

각 입력 채널의 슬라이더의 값의 범위는 -2에서부터 2까지 입니다. 

<a id="16-08-23-04-s2"></a>

## 2. 입력 채널 슬라이더
세 개의 RGB 입력 슬라이더는 모든 채널의 백분율을 설정합니다.

이미지의 모든 픽셀에 슬라이더에서 설정한 백분율로부터 모든 채널에 대한 값이 계산되어 출력 채널에 주어집니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.24. 요소 추출…(Extract Component…)](./16-08-24-extract-component.md)

[⬅️ 이전: 16.8.23.3.7. 보기 영역 분할(Split view)](./16-08-23-03-07-split_view.md)

[⬆️ 위: 16.8.23. 채널 혼합(Channel Mixer)](./16-08-23-00-channel-mixer.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-channel-mixer.html#idm32086)