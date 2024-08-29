# 16.4.5.3. 떠있는 선택 고정하기(Anchor a Floating Selection)
떠있는 선택을 아래와 같은 방법으로 고정할 수 있습니다:

<a id="16-04-05-03-s1"></a>

## 1. 떠있는 선택 바깥쪽의 클릭으로 고정
떠있는 선택을 만든 현재 레이어로 고정할 수 있습니다.

떠있는 선택의 바깥쪽을 클릭하면 됩니다. 

클릭하면 현재 레이어와 떠있는 레이어가 합쳐집니다.

#### 영상 16.4.5.3.1.a1. 떠있는 선택 바깥쪽의 클릭으로 고정
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6adad8cd-6dea-4192-9a9f-81f0ff5fbd37"></video>

<a id="16-04-05-03-s2"></a>

## 2. 단축키로 고정
[16.7.6. 레이어 고정](./16-07-06-anchor-layer.md) 명령 단축키 Ctrl(⌘) + `H`를 사용할 수도 있습니다.

#### 영상 16.4.5.3.2.a1. 단축키로 고정
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9b37bf92-7c1d-45bc-a210-f3746660a331"></video>

<a comment="16.7.6. 레이어 고정에서 사용된 단축키 영상으로 교체하기"></a>

> ⚠️ 주의
>
> ⌘ + H(Mac)는 Mac의 ["전면에 있는 앱의 윈도우를 가리기"](https://support.apple.com/ko-kr/HT201236) 기본 단축키입니다. 위의 단축키를 사용하면 GIMP가 갑자기 사라집니다. 그러므로 단축키를 다시 설정할 필요가 있습니다. 이 예제에서는 ⇧ + ⌘ + H 로 단축키를 변경한 상태입니다.

<a comment="위 이슈 등록하기"></a>

#### 그림 16.4.5.3.2.a2. Mac의 기본 단축키
<img width="813" alt="그림 16.4.5.3.2.a2. Mac의 기본 단축키" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b6244b73-7cb1-4741-ac85-56a2a8c1c21b">

#### 그림 16.4.5.3.2.a3. Mac의 기본 단축키와 겹치는 문제 해결하기
<img width="720" alt="그림 16.4.5.3.2.a3. Mac의 기본 단축키와 겹치는 문제 해결하기" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/43d3c7b1-a931-4f16-954f-2d3644c2238a">

위 단축키 설정처럼 변경해두시면 맥의 기본 단축키와 겹치는 일이 없어 작업시 편리합니다.

<a id="16-04-05-03-s3"></a>

## 3. 레이어 대화상자의 고정 버튼 클릭해서 고정
레이어 대화상자의 아래쪽의 고정(anchor) 버튼을 눌러서 떠있는 선택을 현재 레이어로 고정시킬 수 있습니다.

GIMP 2.10.18 버전 이후로는 떠있는 선택이 만들어지면, 레이어 합치기 아이콘 대신에 고정 버튼이 나타납니다.

<a id="90-04-03-08-a47"></a>

#### [그림 90.4.3.8.a47. `레이어 대화상자` → `레이어 관리` → `레이어 고정하기` (Windows) (우리말)](./90-04-0003-008-bottom_bar_buttons.md#90-04-03-08-a47)
<img width="262" height="214" alt="90-04-03-08-a47" src="https://github.com/wonder13662/gimp/assets/15767104/461ab382-8aba-44cd-941b-60ea93917dc9" />

<a id="90-04-03-08-a47-01"></a>

#### [영상 90.4.3.8.a47.1. `레이어 대화상자` → `레이어 관리` → `레이어 고정하기` (Mac) (우리말)](./90-04-0003-008-bottom_bar_buttons.md#90-04-03-08-a47-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/58e87af1-566b-4b6e-a460-0bc905ab6537"></video>

<a id="16-04-05-03-s4"></a>

## 4. 새 레이어로 만들어서 고정
떠있는 선택이 있는 동안에 새 레이어를 만들면, 떠있는 선택이 새 레이어로 고정됩니다.

<a comment="레이어 > 새 레이어 메뉴 이미지 교체할 것"></a>

#### 그림 16.4.5.3.4.a1. 이미지 메뉴 바(Image Menu Bar)의 새 레이어 버튼 위치
<img width="480" alt="그림 16.4.5.3.4.a2. 레이어 대화상자의 새 레이어 버튼 위치" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b15d9e66-7f17-4d63-99bc-c467ee722b9e">

<a id="90-04-03-08-a41"></a>

#### [그림 90.4.3.8.a41. `레이어 대화상자` → `레이어 관리` → `새 레이어` (Windows) (우리말)](./90-04-0003-008-bottom_bar_buttons.md#90-04-03-08-a41)
<img width="262" height="312" alt="90-04-03-08-a41" src="https://github.com/wonder13662/gimp/assets/15767104/52a71866-bf39-40cb-9e2f-dd1e7b747fe3" />

<a id="90-04-03-08-a41-01"></a>

#### [영상 90.4.3.8.a41.1. `레이어 대화상자` → `레이어 관리` → `새 레이어`: 떠있는 선택을 세 레이어로 고정 (Windows) (우리말)](./90-04-0003-008-bottom_bar_buttons.md#90-04-03-08-a41-01)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/21370c12-9074-44e6-bf99-44a23caf183b"></video>

***

## 관련 정보

[16.4.3. 없음(None)](./16-04-03-00-none.md)

***

## 다른 페이지로 가기

[➡️ 다음: 16.4.6. By color](./16-04-06-by-color.md)

[⬅️ 이전: 16.4.5.2. 자동으로 떠있는 선택 만들기(Creating a Floating Selection Automatically)](./16-04-05-02-creating_a_floating_selection_automatically.md)

[⬆️ 위: 16.4.5. 띄우기(Float)](./16-04-05-00-float.md)

[⬆️ 위: 16.4. 선택 메뉴(The select menu)](./16-04-00-the-select-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-selection-float.html#anchor-floating-selection)