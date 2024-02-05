# 4.2.3. 선택영역 바깥쪽에서 작업을 하려는 경우
## 4.2.3.1. 문제
사전에 이미지의 일부분을 선택했을 수도 있지만, 지금은 작업하고 있는 부분이 선택 영역의 안쪽이 아닙니다. 선택 영역의 테두리를 찾아 작업하려던 곳이 맞는지 확인해야 합니다.

## 4.2.3.2. 해결방안
### 4.2.3.2.1. 해결방안 - 선택영역을 지우기
선택영역이 보이지 않는 경우라면, 선택영역이 매우 작거나, 화면에서 보이는 영역의 바깥에 선택영역이 있을 수 있습니다. 또는 선택영역이 픽셀을 가지지 않을수도 있습니다. 이런 경우라면, 선택 영역을 지우면 됩니다. 이미지 메뉴 바의 `선택(Select)` → `없음(None)` 또는 단축키 Shift + Ctrl + A (Windows) 또는 ⇧ + ⌘ + A (Mac)를 누릅니다.

#### 그림 90.1.3.2.a101. `선택` → `없음`
![그림 90.1.3.2.a101. `선택` → `없음`](https://github.com/wonder13662/gimp/assets/15767104/bf711fb1-5309-4a8d-bdb0-a698aea8c0d7)

#### 영상 90.1.3.2.a111. 이미지 메뉴 바의 `선택(Select)` → `없음(None)`로 선택 영역 없애기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ef2e45f7-53d1-4a7a-b576-2a0e91fcdae8"></video>

#### 영상 90.1.3.2.a112. 단축키 Shift + Ctrl + A (Windows) 또는 ⇧ + ⌘ + A (Mac)로 선택 영역 없애기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/2ab9dd30-30a4-4563-a938-31b94219327b"></video>

### 4.2.3.2.2. 해결방안 - 선택영역을 퀵마스크로 확인하기
선택영역이 보이더라도, 기대하는 것과는 정반대의 선택영역일 수도 있습니다. 가장 쉽게 확인하는 방법은 [퀵마스크](./07-03-00-the-quickmask.md) 버튼을 눌러보는 것입니다. 선택 영역인 곳은 사라지고, 선택 영역이 아닌 곳은 가려집니다. 확인된 선택영역이 올바르지 않다면, 퀵마스크를 끈 뒤에 이미지 메뉴 바의 `선택(Select)` → `반전(Invert)` 또는 단축키 Ctrl + I (Windows) 또는 ⌘ + I (Mac)를 눌러 선택영역을 반대로 바꿀 수 있습니다.

#### 영상 4.2.3.2.2.a1 퀵마스크 적용으로 선택영역 확인하기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ecb7111d-e19d-4959-bd35-65dd55af06a0"></video>

#### 영상 4.2.3.2.2.a2 이미지 메뉴 바의 `선택(Select)` → `반전(Invert)`로 선택영역 반전(Invert) 시키기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6a9c1486-e342-4b0f-955d-c4f058f834ff"></video>

#### 영상 4.2.3.2.2.a3 단축키 Ctrl + I (Windows) 또는 ⌘ + I (Mac)로 선택영역 반전(Invert) 시키기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ce0dd549-3101-4ca7-84f1-1ca53a3dc54b"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.4. 활성화된 drawable이 보이지 않는 경우](./04-02-04-the-active-drawable-is-not-visible.md)

[⬅️ 이전: 4.2.2. 숨겨진 선택](./04-02-02-the-selection-is-hidden.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[🏠 홈](./00-home.md)
