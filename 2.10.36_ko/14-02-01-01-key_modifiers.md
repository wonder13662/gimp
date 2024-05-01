# 14.2.1.1. 동작 변경키(Key modifiers)
선택 도구를 사용하는 도중에 `동작 변경키(Key modifiers)`인 Ctrl(⌘), Alt(⌥), Shift(⇧) 등을 눌러 선택 도구의 동작을 변경할 수 있습니다.

<a id="14-02-01-01-s1"></a>

## 1. Ctrl(⌘)
Ctrl(⌘) 키를 누른 채, 선택을 만들 경우, 상황에 따라 서로 다른 두 가지 동작을 하게 됩니다.

<a id="14-02-01-01-s1-01"></a>

### 1-1. 선택을 만들기 전에 Ctrl(⌘) 키를 누름
기존 선택 영역에서 새로 선택된 영역을 빼는 모드(Subtract Mode)로 동작합니다.

<a id="90-10-a102-03"></a>

#### [영상 90.10.a102.3. 선택을 만들기 전에 Ctrl(⌘) 키를 누름](./90-10-00-keyboard_shortcut.md#90-10-a102-03)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1aa010b3-2198-44d2-a4d8-35fb9bf64d91"></video>

### 1-2. 선택을 만든 후에 Ctrl(⌘) 키를 누름
어떤 도구를 사용하고 있느냐에 따라 달라집니다. 예를 들어, 사각 선택 도구의 경우에는 선택 영역을 그릴 때, 클릭한 지점을 중심으로 크기가 확대/축소됩니다.

<a id="90-10-a102-04"></a>

#### [영상 90.10.a102.4. 선택을 만든 후에 Ctrl(⌘) 키를 누름](./90-10-00-keyboard_shortcut.md#90-10-a102-04)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ab044c3b-b060-42be-870f-f505d08aebb8"></video>

<a id="14-02-01-01-s2"></a>

## 2. Alt(⌥)
Alt(⌥) 키를 누르면 현재 선택(선택된 내용이 아닌 선택 자체)을 움직일 수 있습니다. 만약 선택 대신 이미지 전체가 움직인다면 Shift(⇧) + Alt(⌥) 키를 누르고 다시 시도해보세요. Alt(⌥) 키는 가끔씩 GUI 시스템에 의해 선점되는 경우가 있기 때문입니다.

아래 영상에서 이 동작을 확인해볼 수 있습니다. Alt(⌥) 키를 누를 때마다 이미지 창 하단의 도구 동작을 설명하는 메시지가 바뀌는 것도 같이 확인할 수 있습니다.

<a id="90-10-a105-01"></a>

#### [영상 90.10.a105.1. Alt(⌥) 키를 눌러 선택 옮기기](./90-10-00-keyboard_shortcut.md#90-10-a105-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/10babd74-77a0-4c67-999d-bf5836b6682d"></video>

<a id="14-02-01-01-s3"></a>

## 3. Shift(⇧)
Shift(⇧) 키를 누르고 선택을 만들 경우, 상황에 따라 서로 다른 두 가지 동작을 하게 됩니다.

<a id="14-02-01-01-s3-01"></a>

### 3-1. 선택을 만들기 전에 Shift(⇧) 키를 누름
기존 선택 영역에서 새로 선택된 영역을 더하기 모드(Add Mode)로 동작합니다.

<a id="90-10-a103-03"></a>

#### [영상 90.10.a103.3. 선택을 만들기 전에 Shift(⇧) 키를 누름](./90-10-00-keyboard_shortcut.md#90-10-a103-03)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1f578f18-d0d4-4397-aef1-7d725af1a1a9"></video>

<a id="14-02-01-01-s3-02"></a>

### 3-2. 선택을 만든 후에 Shift(⇧) 키를 누름
사용자가 어떤 도구를 사용하고 있느냐에 따라 달라집니다. 예를 들어 [사각 선택 도구](./14-02-02-00-rectangle-selection.md)의 경우, 정사각형의 선택을 만들 수 있습니다.

<a id="90-10-a103-04"></a>

#### [영상 90.10.a103.4. 선택을 만든 후에 Shift(⇧) 키를 누름](./90-10-00-keyboard_shortcut.md#90-10-a103-04)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/c745012f-36ea-42e6-92b9-2a3b69a80d68"></video>

<a id="14-02-01-01-s4"></a>

## 4. Ctrl(⌘) + Shift(⇧)
Ctrl(⌘) + Shift(⇧) 키를 누르면 사용중인 도구에 따라 다양한 동작을 할 수 있습니다.

보통의 선택도구의 동작은 선택 모드가 교차 모드(intersection mode)로 바뀝니다. 동작이 끝나면, 선택 영역은 사용자가 선택한 영역과 이전에 있던 선택 영역과 교차된 영역으로 바뀝니다.

아래 영상에서 이 동작을 확인해볼 수 있습니다. Ctrl(⌘) + Shift(⇧) 키를 누를 때마다 이미지 창 하단의 도구 동작을 설명하는 메시지가 바뀌는 것도 같이 확인할 수 있습니다.

<a id="90-10-a104-04"></a>

#### [영상 90.10.a104.4. 선택을 만든 후에 Ctrl(⌘) + Shift(⇧) 키를 누름](./90-10-00-keyboard_shortcut.md#90-10-a104-04)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/97ebc183-71d3-4642-93fa-bdb8dabc799c"></video>

<a id="14-02-01-01-s5"></a>

## 5. 선택 영역 옮기기
아래 키 조합으로 선택 영역을 옮길 수 있습니다. 상세한 내용은 [7.2.1. 선택 옮기기와 크기 조정하기](./07-02-01-00-moving-or-resizing-a-selection.md)을 참고하세요.

<a id="14-02-01-01-s5-01"></a>

### 5-1. Ctrl(⌘) + Alt(⌥) + 왼쪽 클릭 + 드래그
Ctrl(⌘) + Alt(⌥) + 왼쪽 클릭 + 드래그로 선택 영역의 콘텐츠로 옮기게 되면, 옮긴 콘텐츠의 원래 자리는 배경색(Background Color)로 채워지게 됩니다. 옮긴 콘텐츠는 [떠있는 선택(floating selection)](./04-02-01-there-is-a-floating-selection.md)이 됩니다.

<a id="90-10-a106-01"></a>

#### [영상 90.10.a106.1. Ctrl(⌘) + Alt(⌥) + 왼쪽 클릭 + 드래그](./90-10-00-keyboard_shortcut.md#90-10-a106-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/6a5f12d6-af9d-4e79-a1af-6dad5b8e1e63"></video>

<a id="14-02-01-01-s5-02"></a>

### 5-2. Shift(⇧) + Alt(⌥) + 왼쪽 클릭 + 드래그
Shift(⇧) + Alt(⌥) + 왼쪽 클릭 + 드래그로 선택 영역의 콘텐츠로 옮기게 되면, 옮긴 콘텐츠의 원래 자리는 원래 이미지로 유지됩니다. 옮긴 콘텐츠는 [떠있는 선택(floating selection)](./04-02-01-there-is-a-floating-selection.md)이 됩니다.

<a id="90-10-a106-02"></a>

#### [영상 90.10.a106.2. Shift(⇧) + Alt(⌥) + 왼쪽 클릭 + 드래그](./90-10-00-keyboard_shortcut.md#90-10-a106-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5b2df02c-54cc-49e4-a13d-3fa52edeed4d"></video>

<a id="14-02-01-01-s6"></a>

## 6. 스페이스 바
선택 도구를 사용하는 동안에 스페이스 바를 누르면, 스페이스 바를 누른 동안에는 선택 도구가 내비게이션 십자로 바뀝니다. 이 상태에서 이미지를 클릭, 드래그를 하게되면 `기본 설정` → `이미지 창` → `스페이스 바` → `스페이스 바를 누르고 있는 동안`에서 설정한 동작을 하게 됩니다. 각 동작은 아래 이미지와 영상을 확인해주세요.

[관련 정보: 12.1.18.3. 스페이스 바(Space Bar)](./12-01-18-03-space_bar.md)

<a id="90-02-07-a31"></a>

#### [그림 90.2.7.a31. `기본 설정` → `이미지 창` → `스페이스 바` (Windows) (우리말)](./90-02-07-00-image-windows.md#90-02-07-a31)
![90-02-07-a31](https://github.com/wonder13662/gimp/assets/15767104/0dbf52b9-4174-44e2-a40a-d0c82915c4de)

<a id="90-02-07-a31-01"></a>

#### [그림 90.2.7.a31.1. `기본 설정` → `이미지 창` → `스페이스 바` → `스페이스 바를 누르고 있는 동안`: 드롭다운 목록 (Windows) (우리말)](./90-02-07-00-image-windows.md#90-02-07-a31-01)
![90-02-07-a31-01](https://github.com/wonder13662/gimp/assets/15767104/fd19357e-5638-4366-8911-607fe3e09ddb)

<a id="90-02-07-a31-02"></a>

#### [영상 90.2.7.a31.2. `기본 설정` → `이미지 창` → `스페이스 바` → `스페이스 바를 누르고 있는 동안` → `화면 이동` (Windows)](./90-02-07-00-image-windows.md#90-02-07-a31-02)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e964361f-9267-452f-a7b8-06717c234951"></video>

<a id="90-02-07-a31-03"></a>

#### [영상 90.2.7.a31.3. `기본 설정` → `이미지 창` → `스페이스 바` → `스페이스 바를 누르고 있는 동안` → `이동 도구로 전환` (Windows)](./90-02-07-00-image-windows.md#90-02-07-a31-03)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/d197748d-fea4-4153-a080-0d8e674137fd"></video>

***

## 관련 정보

[14.2.2.3. 도구 조작(Tool manipulation)](./14-02-02-03-tool_manipulation.md)

***

## 다른 페이지로 가기

[➡️ 다음: 14.2.1.2. 옵션(Options)](./14-02-01-02-options.md)

[⬅️ 이전: 14.2.1. 일반적인 특징(Common features)](./14-02-01-00-common-features.md)

[⬆️ 위: 14.2.1. 일반적인 특징(Common features)](./14-02-01-00-common-features.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tools-selection.html#gimp-tools-select-modifiers)