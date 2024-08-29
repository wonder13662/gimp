# 4.2.3. 선택영역 바깥쪽에서 작업을 하려는 경우

<a id="04-02-03-s1"></a>

## 1. 문제
사전에 이미지의 일부분을 선택했을 수도 있지만, 지금은 작업하고 있는 부분이 선택 영역의 안쪽이 아닙니다.

선택 영역의 테두리를 찾아 작업하려던 곳이 맞는지 확인해야 합니다.

<a id="04-02-03-s2"></a>

## 2. 해결방안

<a id="04-02-03-s2-01"></a>

### 2-1. 해결방안 - 선택영역을 지우기
선택영역이 보이지 않는 경우라면, 선택영역이 매우 작거나, 화면에서 보이는 영역의 바깥에 선택영역이 있을 수 있습니다. 

또는 선택영역이 픽셀을 가지지 않을수도 있습니다. 이런 경우라면, 선택 영역을 지우면 됩니다. 

[`이미지 메뉴 바` → `선택` → `없음`](./16-04-03-00-none.md) 또는 [키보드 단축키 Ctrl(⌘) + Shift(⇧) + `A`]()를 누릅니다.

<a id="90-01-03-02-a101"></a>

#### [그림 90.1.3.2.a101. `이미지 메뉴 바` → `선택` → `없음`](./90-01-03-02-none.md#90-01-03-02-a101)
<img width="934" height="539" alt="90-01-03-02-a101" src="https://github.com/user-attachments/assets/60c6e26b-51f4-46a5-874d-384e59721ef4" />

<a id="90-01-03-02-a111"></a>

#### [영상 90.1.3.2.a111. `이미지 메뉴 바` → `선택` → `없음`: 선택 영역 없애기 (Mac) (영어)](./90-01-03-02-none.md#90-01-03-02-a111)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ef2e45f7-53d1-4a7a-b576-2a0e91fcdae8"></video>

<a id="90-10-70-01-01-a1"></a>

#### [영상 90.10.70.1.1.a1. `이미지 메뉴 바` → `선택` → `없음`: 키보드 단축키 Ctrl(⌘) + Shift(⇧) + `A` (Windows) (우리말)](./90-10-70-01-01-ctrl_shift_a.md#90-10-70-01-01-a1)
<video controls="controls" width="700" height="360" src="https://github.com/user-attachments/assets/eab2f261-0101-4d12-9b48-2c66f5cd9934"></video>

<a id="04-02-03-s2-02"></a>

### 2-2. 해결방안 - 선택영역을 퀵 마스크로 확인하기
선택영역이 보이더라도, 기대하는 것과는 정반대의 선택영역일 수도 있습니다. 가장 쉽게 확인하는 방법은 [퀵 마스크](./07-03-00-the-quickmask.md) 버튼을 눌러보는 것입니다. 선택 영역인 곳은 사라지고, 선택 영역이 아닌 곳은 가려집니다. 

<a id="90-05-05-a121"></a>

#### [영상 90.5.5.a121. 퀵 마스크 적용으로 선택영역 확인하기](./90-05-05-quickmask_toggle.md#90-05-05-a121)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ecb7111d-e19d-4959-bd35-65dd55af06a0"></video>

<a id="04-02-03-s2-03"></a>

### 2-3. 해결방안 - 선택영역을 반전시키기
확인된 선택영역이 올바르지 않다면, 퀵 마스크를 끈 뒤에 [`이미지 메뉴 바` → `선택` → `반전`](./16-04-04-00-invert.md) 또는 단축키 Ctrl + I (Windows) 또는 ⌘ + I (Mac)를 눌러 선택영역을 반대로 바꿀 수 있습니다.

<a id="90-01-03-03-a101"></a>

#### [그림 90.1.3.3.a101. `이미지 메뉴 바` → `선택` → `반전`](./90-01-03-03-invert.md#90-01-03-03-a101)
<img width="934" height="539" alt="90-01-03-03-a101" src="https://github.com/user-attachments/assets/65a0dffe-a49c-423c-ba76-0d0a1ea2cced" />

<a id="90-01-03-03-a102"></a>

#### [영상 90.1.3.3.a102. `이미지 메뉴 바` → `선택` → `반전`: 선택영역 반전(Invert) 시키기 (Mac) (영어)](./90-01-03-03-invert.md#90-01-03-03-a102)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6a9c1486-e342-4b0f-955d-c4f058f834ff"></video>

<a id="90-10-71-01-01-a1"></a>

#### [영상 90.10.71.1.1.a1. `이미지 메뉴 바` → `선택` → `반전`: 키보드 단축키 Ctrl(⌘) + `I` (Mac) (영어)](./90-10-71-01-01-ctrl_i.md#90-10-71-01-01-a1)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/ce0dd549-3101-4ca7-84f1-1ca53a3dc54b"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.4. 활성화된 drawable이 보이지 않는 경우](./04-02-04-the-active-drawable-is-not-visible.md)

[⬅️ 이전: 4.2.2. 숨겨진 선택](./04-02-02-the-selection-is-hidden.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)
