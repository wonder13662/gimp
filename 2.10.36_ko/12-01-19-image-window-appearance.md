# 12.1.19. 이미지 창 모양(Image Window Appearance)

<a id="90-02-07-01-a1"></a>

#### [그림 90.2.7.1.a1. `기본 설정` → `이미지 창` → `모양새` (Windows) (우리말)](./90-02-07-01-appearance.md#90-02-07-01-a1)
![90-02-07-01-a1](https://github.com/wonder13662/gimp/assets/15767104/d1a75c59-320f-4835-b679-c037ec4f7425)

[다른 운영체제와 언어의 `기본 설정` → `이미지 창` → `모양새` 확인하기](./90-02-07-01-appearance.md#90-02-07-01-a2)

`이미지 창 모양`은 전체 화면 모드와 일반 모드의 이미지 창의 기본 모양을 설정할 수 있게 해줍니다. 여기의 모든 설정은 [이미지 메뉴 바](./19-glossaryx-image_menu_bar.md)의 [보기](./16-05-00-the-view-menu.md) 메뉴에서 현재 작업중인 이미지에 한해 바꿀 수 있습니다.

## 1. 채우기(Padding)

`채우기(Padding)`는 이미지의 경계의 둘레의 색깔입니다. `채우기(Padding)`의 색상을 4가지 중에 하나를 선택할 수 있습니다.

1. 현재 테마에서 지정된 색을 사용하기
2. 이미지의 투명한 부분을 나타내는데 사용하는 체커보드의 밝은 색을 사용하기
3. 이미지의 투명한 부분을 나타내는데 사용하는 체커보드의 어두운 색을 사용하기
4. `사용자 정의 색상` 버튼을 눌러 지정한 사용자 지정 색을 사용하기

아래 영상에서 보통 상태와 전체 화면 상태의 "캔버스 채우기 모드 변경"에 따른 차이를 확인해볼 수 있습니다.

<a id="90-02-07-01-a11"></a>

#### [영상 90.2.7.1.a11. `기본 설정` → `이미지 창` → `모양새` → `보통 상태의 기본 모양`: 캔버스 채우기 모드 변경 (Windows) (우리말)](./90-02-07-01-appearance.md#90-02-07-01-a11)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/0930f086-271a-493c-b199-b9a479676fed"></video>

<a id="90-02-07-01-a21"></a>

#### [영상 90.2.7.1.a21. `기본 설정` → `이미지 창` → `모양새` → `전체 화면 상태의 기본 모양`: 캔버스 채우기 모드 변경 (Windows) (우리말)](./90-02-07-01-appearance.md#90-02-07-01-a21)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/0e175518-d699-4e51-9241-5d711a51cf24"></video>

## 2. 캔버스 채우기를 "모두 보기" 모드로 유지하기(Keep canvas padding in "Show All" mode)
[이미지 메뉴 바](./19-glossaryx-image_menu_bar.md)의 [`보기` → `모두 보기(Show All)`](./16-05-03-show-all.md) 메뉴를 클릭하면, 캔버스 바깥쪽의 픽셀을 볼 수 있습니다. 

이 상태에서 `캔버스 채우기를 "모두 보기" 모드로 유지하기` 옵션이 체크가 되어있지 않다면, 캔버스의 바깥영역은 체커보드 패턴으로 채워집니다. 아래 영상에서 이 조건의 상황을 확인할 수 있습니다.

<a id="90-02-07-01-a11-01"></a>

#### [영상 90.2.7.1.a11.1. `기본 설정` → `이미지 창` → `모양새` → `보통 상태의 기본 모양` → `캔버스 채우기를 "모두 보기" 모드로 유지하기`: 켜기 (Windows) (우리말)](./90-02-07-01-appearance.md#90-02-07-01-a11-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/7249cf07-8191-4ac2-8786-e8e1f3221c24"></video>


이 상태에서 `캔버스 채우기를 "모두 보기" 모드로 유지하기` 옵션이 체크되어있다면, 캔버스의 바깥영역은 `사용자 정의 색상`으로 채워집니다.

<a id="90-02-07-01-a11-02"></a>

#### [영상 90.2.7.1.a11.2. `기본 설정` → `이미지 창` → `모양새` → `보통 상태의 기본 모양` → `캔버스 채우기를 "모두 보기" 모드로 유지하기`: 끄기 (Windows) (우리말)](./90-02-07-01-appearance.md#90-02-07-01-a11-02)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/be8a4458-45a4-4f2a-b7fb-7af578d46bda"></video>

⚠️ 주의: 이 옵션은 GIMP(김프)를 재시동해야 적용됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 12.1.20. 이미지 창 제목표시줄과 상태표시줄(Image Window Title and Statusbar)](./12-01-20-image-window-title-and-statusbar.md)

[⬅️ 이전: 12.1.18.4. 마우스 포인터(Mouse Pointers)](./12-01-18-04-mouse_pointers.md)

[⬆️ 위: 12.1. 기본설정 대화상자](./12-01-00-preference-dialog.md)

[⬆️ 위: 12. 나만의 GIMP(김프) 만들기](./12-00-enrich-my-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-pimping.html#gimp-prefs-image-window-appearance)
