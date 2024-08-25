# 4.2.1. 떠있는 선택(floating selection)

<a id="90-04-03-03-a11"></a>

#### [그림 90.4.3.3.a11. 레이어 대화상자 - 떠있는 선택 (Windows)](./90-04-0003-003-floating_selection.md#90-04-03-03-a11)
![90-04-03-layers(windows)-floating_layer-focus-floating_layer(50%)](https://github.com/wonder13662/gimp/assets/15767104/833cda8e-50c1-4176-a614-6f6be559a5f3)

[다른 운영체제와 언어의 '떠있는 선택' 확인하기](./90-04-0003-003-floating_selection.md#90-04-03-03-a21)

떠있는 선택은 고정(anchored)하거나 새로운 레이어로 바꿀수 있습니다.

<a id="04-02-01-s1"></a>

## 1. 떠있는 선택(floating selection)이 있는지 어떻게 알 수 있나요?
떠있는 선택이 있다면, 많은 기능이 비활성화됩니다.

작업중인 레이어에서 단축키 Ctrl + Shift + L(Windows) 또는 ⌘ + ⇧ + L(Mac)을 눌러 [레이어 대화상자](./15-02-01-00-layers_dialog.md)를 엽니다.

그리고 [레이어 대화상자](./15-02-01-00-layers_dialog.md)의 가장 위쪽에 "떠있는 선택(Floating Selection)"이 보이는지 확인합니다.

아래와 같은 레이어가 있다면 떠있는 선택이 있는 것을 알 수 있습니다.

<a id="90-04-03-03-a11"></a>

#### [그림 90.4.3.3.a11. 레이어 대화상자 - 떠있는 선택 (Windows)](./90-04-0003-003-floating_selection.md#90-04-03-03-a11)
![90-04-03-layers(windows)-floating_layer-focus-floating_layer(50%)](https://github.com/wonder13662/gimp/assets/15767104/833cda8e-50c1-4176-a614-6f6be559a5f3)

[다른 운영체제와 언어의 '떠있는 선택' 확인하기](./90-04-0003-003-floating_selection.md#90-04-03-03-a21)

아래와 같은 방법으로 떠있는 레이어를 만들 수 있습니다.

<a id="04-02-01-s1-01"></a>

### 1-1. 이미지 메뉴 바의 `선택` → `띄우기`를 선택하여 떠있는 선택 만들기

<a id="90-01-03-04-a101"></a>

#### [그림 90.1.3.4.a101. `선택` → `띄우기`](./90-01-03-04-float.md#90-01-03-04-a101)
![90-01-03-04-a101](https://github.com/wonder13662/gimp/assets/15767104/8080d2be-dc54-4cf0-80ed-e13dfdacfb9a)

<a id="90-01-03-04-a112"></a>

#### [영상 90.1.3.4.a112. `선택` → `띄우기`로 떠있는 선택 만들기](./90-01-03-04-float.md#90-01-03-04-a112)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/cb5074b1-9e67-40bd-8c8f-03cafe24aeea"></video>

<a id="04-02-01-s1-02"></a>

### 1-2. 이미지 메뉴 바의 `선택` → `띄우기`의 단축키로 떠있는 선택 만들기

<a id="90-01-10-02-03-a121"></a>

#### [영상 90.1.10.2.3.a121. `창` → `도킹가능한 대화` → `레이어`의 단축키 사용 (Mac)](./90-01-10-02-03-layers.md#90-01-10-02-03-a121)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/626ceaad-b1d8-4f80-8540-e78a04a1c93a"></video>

<a id="90-01-03-04-a111"></a>

#### [영상 90.1.3.4.a111. 단축키로 떠있는 선택 만들기](./90-01-03-04-float.md#90-01-03-04-a111)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/96771078-ba0f-4aee-a5cd-b49153aa6c6c"></video>

<a id="04-02-01-s1-03"></a>

### 1-3. 선택 영역의 복사 + 붙여넣기로 떠있는 선택 만들기

<a id="90-04-03-03-a31"></a>

#### [영상 90.4.3.3.a31. 선택 영역의 복사 + 붙여넣기로 떠있는 선택 만들기](./90-04-0003-003-floating_selection.md#90-04-03-03-a31)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/df01454e-345e-43ad-af3b-eeb2001c8f4b"></video>

<a id="04-02-01-s2"></a>

## 2. 어떻게 해결하나요?
떠있는 선택 레이어에서 우클릭을 하여 레이어 메뉴를 엽니다. 레이어 메뉴에서 `레이어 고정(Anchor Layer)`을 클릭해서 떠있는 레이어의 아래 레이어로 합칩니다.

<a id="90-04-03-03-a41"></a>

#### [영상 90.4.3.3.a41. 떠있는 선택을 고정(anchor)하기](./90-04-0003-003-floating_selection.md#90-04-03-03-a41)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c175c5af-83c8-4fb6-874b-50893df5dc66"></video>

또는 `새 레이어`를 클릭해서 떠있는 선택을 일반적인 레이어로 바꿀 수 있습니다.

<a id="90-04-03-03-a51"></a>

#### [영상 90.4.3.3.a51. 떠있는 선택을 탭 메뉴로 새 레이어로 만들기](./90-04-0003-003-floating_selection.md#90-04-03-03-a51)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c4472841-c8ce-4b80-8f0f-a9ca33067258"></video>

단축키 Shift + Ctrl + N(Windows) 또는 ⇧ + ⌘ + N(Mac)으로 떠있는 선택을 일반적인 레이어로 바꿀 수 있습니다.

<a id="90-04-03-03-a61"></a>

#### [영상 90.4.3.3.a61. 떠있는 선택을 단축키로 새 레이어로 만들기](./90-04-0003-003-floating_selection.md#90-04-03-03-a61)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d78747ae-8278-417e-bc9d-969f6eff3a03"></video>

자세한 내용은 [16.4.5. 띄우기(Float)](./16-04-05-float.md)를 참고해주세요.

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.2. 숨겨진 선택](./04-02-02-the-selection-is-hidden.md)

[⬅️ 이전: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-getting-unstuck.html)
