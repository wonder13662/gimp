# 4.2.13. 붓 또는 지우개를 사용하면 이상한 색이 나옵니다

## 4.2.13.1. 문제
붓과 지우개로 작업할 때, 결과로 나온 색깔이 이상합니다.

## 4.2.13.2. 해결방법
### 4.2.13.2.1. 레이어 마스크
작업중인 레이어의 [레이어 마스크](./15-02-01-layers-dialog.md)에 칠하고 있는 것은 아닌지 확인해보세요. 그렇다면, 레이어가 아닌 레이어 마스크를 대상으로 칠하고 있는 것입니다. 이 경우, 레이어의 레이어 마스크가 아닌 활성 채색 영역을 클릭해서 레이어에 칠할 수 있도록 해줍니다.

<a id="90-04-03-13-a11"></a>

#### [영상 90.4.3.13.a11. 레이어 마스크에 붓 또는 지우개를 사용](./90-04-03-13-layer_mask.md#90-04-03-13-a11)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f1463207-278b-49b4-8b84-9ebf053253d1"></video>

### 4.2.13.2.2. 채널
레이어 대신 채널에 칠하고 있을 수도 있습니다. 이 경우에는 레이어 대화상자에서 레이어를 클릭해서 활성화해줍니다.

#### [영상 90.4.4.a101. 채널에 붓 또는 지우개를 사용](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-04-channels.html#%EC%98%81%EC%83%81-9044a101-%EC%B1%84%EB%84%90%EC%97%90-%EB%B6%93-%EB%98%90%EB%8A%94-%EC%A7%80%EC%9A%B0%EA%B0%9C%EB%A5%BC-%EC%82%AC%EC%9A%A9)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3c33f116-7eed-4e3c-9efa-35bf3b511ab5"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.14. 잘라내기 도구로 잘라낸 뒤에 빈 공간이 생깁니다](./04-02-14-the-crop-tool-leaves-an-empty-area-after-cropping.md)

[⬅️ 이전: 4.2.12. 지우개로 지운 곳이 투명하지 않습니다](./04-02-12-eraser-does-not-make-area-transparent.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-layer-mask.html)
