# 4.2.11. 지우개와 붓이 작동하지 않습니다
## 4.2.11.1. 문제
붓 대화상자(Brush Dialog)에서 클립보드 이미지(Clipboard Image) 또는 클립보드 마스크(Clipboard Mask)를 선택한 뒤에 작업을 하였으나 변화가 없습니다. 

#### 그림 4.2.11.a1. 클립보드 이미지(Clipboard Image) 브러시
<img width="480" alt="그림 4.2.11.a1. 클립보드 이미지(Clipboard Image) 브러시" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d6006222-0abe-44b4-a1e4-b902583a0c4c">

#### 그림 4.2.11.a2. 클립보드 마스크(Clipboard Mask) 브러시
<img width="480" alt="그림 4.2.11.a2. 클립보드 마스크(Clipboard Mask) 브러시" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/2c493933-b057-4ad5-b227-0b8061a2b9c9">

#### 그림 4.2.11.a3. 클립보드 마스크(Clipboard Mask), 클립보드 이미지(Clipboard Image) 브러시로 붓으로 작업시 효과가 없습니다
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8baa56c2-31a5-49b6-8323-4c4f08d3d752"></video>

#### 그림 4.2.11.a4. 클립보드 마스크(Clipboard Mask), 클립보드 이미지(Clipboard Image) 브러시로 지우개로 작업시 효과가 없습니다
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/2b01f225-480d-4e65-9c2e-6d1b35deee24"></video>

## 4.2.11.2. 해결방법
[붓 대화상자](./15-03-02-brushes-dialog.md)에서 현재 사용하고 있는 브러시를 확인해주세요. 클립보드 이미지(Clipboard Image) 또는 클립보드 마스크(Clipboard Mask)가 선택되어 있다면, 다른 브러시를 선택해주세요.

#### 4.2.11.2.a1. 일반 브러시와 빈 브러시의 작업을 비교해봅시다
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8baa56c2-31a5-49b6-8323-4c4f08d3d752"></video>

## 4.2.11.3. 빈 브러시는 왜 있는 걸까요?
(TODO 내용 작성하기)

***

## 다른 페이지로 가기

[➡️ 다음:4.2.12. 지우개로 지운 곳이 투명하지 않습니다](./04-02-12-eraser-does-not-make-area-transparent.md)

[⬅️ 이전: 4.2.10. 이동, 회전 또는 다른 변형 도구로 작업한 효과가 보이지 않는 경우](./04-02-10-no-visible-effect-when-trying-to-use-the-move-tool-rotate-or-other-transform–tool.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-tool-transform.html)
