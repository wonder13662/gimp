# 4.2.12. 지우개로 지운 곳이 투명하지 않습니다

## 4.2.12.1. 문제
지우개로 투명하게 지우려고 했으나, 지우고 난 뒤에 배경색(background color)가 보입니다. 보통 하얀색으로 보입니다.

#### 4.2.12.1.a1. 지우개로 지웠을 때, 배경색이 보입니다
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/7fb6a549-876d-4ef0-8508-214c418da6bd"></video>

## 4.2.12.2. 해결방법
[레이어 대화상자](./15-02-01-layers-dialog.md)에서 활성화된 레이어를 확인하세요. 우클릭을 해서 메뉴를 열고, `알파 채널 추가(Add Alpha Channel)`이 활성화되어 있는지 확안하세요. 메뉴의 `알파 채널 추가(Add Alpha Channel)`이 활성화 되어 있다면, 지금은 알파 채널이 없다는 의미입니다. 메뉴의 `알파 채널 추가(Add Alpha Channel)`를 클릭해서 알파 채널을 추가합니다. 추가한 뒤에 지우개로 지우면 지운 부분이 투명하게 된 것을 확인할 수 있습니다.

#### 4.2.12.2.a1. 지우개로 지웠을 때, 투명하게 지워집니다(이미지 메뉴 바에서 알파채널 추가)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/501d4580-63b1-467c-8690-f38802030a4a"></video>

#### 4.2.12.2.a2. 지우개로 지웠을 때, 투명하게 지워집니다(레이어 대화상자에서 우클릭으로 메뉴에서 알파채널 추가)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b8e473df-9a9c-42ad-a39e-74257fd1d1db"></video>

***

## 다른 페이지로 가기

[➡️ 다음:4.2.13. 붓 또는 지우개를 사용하면 이상한 색이 나옵니다](./04-02-13-unexpected-colors-when-trying-to-use-a-brush-or-eraser.md)

[⬅️ 이전: 4.2.11. 지우개와 붓이 작동하지 않습니다](./04-02-11-eraser-and-brushes-no-longer-work.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-no-alpha-channel.html)
