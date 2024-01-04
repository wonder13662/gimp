# 3.2.2. 이미지 창(Image window)
GIMP 사용자 인터페이스는 2가지 모드가 가능합니다. [단일창 모드(single-window mode,기본값)](./03-02-00-main-window.md), 그리고 `창(Windows)` → `Single-Window Mode`를 클릭해서 체크를 끄고 [다중창 모드(multi-window)](./03-02-00-main-window.md)로 바꿀 수 있습니다.

#### "언어:영어"의 `Single-Window Mode`을 제어해서 단일창, 다중창으로 바꿀 수 있습니다
#### 그림 3.2.2.1.
<img width="223" alt="single-window-en" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9c406b6a-063e-4d41-a45b-f2d7745bbf3d">

#### "언어:한국어"의 `Single-Window Mode`을 제어해서 단일창, 다중창으로 바꿀 수 있습니다
#### 그림 3.2.2.2.
<img width="212" alt="single-window-mode-kr" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/73aadfaa-00e8-4b45-8126-ff4eb0daae8d">

이미지 없이 GIMP를 실행하면, 단일창 모드에서는 이미지 창이 비어 있게 되고, 다중창 모드에서는 빈 이미지 창이 열립니다.

여기에서는 일반적인 이미지 창에 기본값으로 표시되는 요소들을 설명할 것입니다. 이 요소들 중 일부는 [16.5. 보기 메뉴](16-05-00-the-view-menu.md)의 하위 명령들을 이용하여 숨길 수도 있습니다.

#### 그림 3.5. 다중창 모드의 이미지 창
![image-window-multi](https://github.com/wonder13662/gimp/assets/15767104/71a5c1f4-0bfc-486d-9534-1b211ff94b80)

#### 그림 3.6. 단일창 모드의 이미지 창
![image-window-single](https://github.com/wonder13662/gimp/assets/15767104/49005d64-07cb-4d55-ae57-adddace9f92c)

> 🗒️ 참고
>
> 용어의 혼란을 막기 위해 단일창 모드의 이미지 영역을 "이미지 창(Image window)"이라고 부르겠습니다.

***

## 1. 타이틀 바 (Title Bar)
#### 그림 3.2.2.1. 타이틀 바의 위치 (빨간색 영역)
<img width="720" alt="03-02-02-single-multi-window-01-title-bar" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f7103b1f-daaa-4508-9ec7-f349e5bf985f">

### 1-1. 이미지 창에 이미지가 없는 경우

이미지 창에 이미지가 없는 경우의 타이틀 바에는 "그누 이미지 처리 프로그램(GNU Image Manipulating Program)"라고 표시됩니다. 

#### 그림 3.2.2.2. 이미지 창에 이미지가 없는 경우의 타이틀바
<img width="1192" alt="타이틀바-이미지없음" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fd890e79-a302-4288-b08a-7ec1b5e61def">

### 1-2. 이미지 창에 이미지가 있는 경우

이미지 창에 이미지가 있는 경우의 타이틀 바에는 이미지의 이름과 [12.1. 기본 설정 대화상자](./12-01-00-preference-dialog.md)의 설정에 따른 이미지의 명세가 보여집니다.타이틀 바에 표시되는 정보는 GIMP가 아닌 운영체제에서 주는 것입니다. 그러므로 표시되는 정보는 운영체제, 윈도우 매니저(window manager) 또는 테마에 따라 다양합니다.

#### 그림 3.2.2.3. 이미지 창에 이미지가 있는 경우의 타이틀바
<img width="1193" alt="타이틀바-이미지있음" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c19f1f48-355b-4ce3-9848-33a417744178">

[xcf(GIMP 작업 파일 포맷)]() 형식이 아닌 이미지를 열면, 이 이미지는 `.xcf` 파일 형식으로 "(가져옴)" 상태가 되며, 이미지창 하단에 있는 상태 표시줄에 원본 이름이 표시됩니다.(TODO 링크 연결)

## 2. 이미지 메뉴 (Image Menu)
#### 그림 3.2.2.4. 메뉴 바의 위치 (빨간색 영역)
<img width="720" alt="메뉴바 빨간색 영역" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/883425e8-4c2b-426d-afa5-274a3eeea46f">

이미지 메뉴는 (일부러 없애지 않는 한) 제목 표시줄 바로 아래에 위치합니다. 이 메뉴를 통해 이미지 편집을 위한 거의 모든 작업들을 할 수 있습니다. 이미지 안에서 마우스 오른쪽 버튼을 클릭하거나 이미지 창의 왼쪽 상단 구석에 있는 메뉴 버튼(Menu Button)이라고 부르는 "화살표"를 클릭해서 이미지 메뉴를 사용할 수도 있습니다.

#### 영상 3.2.2.1. 이미지 창 안에서 이미지 메뉴 열기
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/bf128c3e-5004-4766-90ea-33cf4e59399e"></video>

또한 대부분의 메뉴는 메뉴에 표시된 키보드 단축키를 이용해 간편하게 실행할 수 있습니다. [12.1. 기본 설정 대화상자](./12-01-00-preference-dialog.md)에서 [12.1.10. 인터페이스 - 동적 키보드 단축키 사용](./12-01-10-interface.md) 항목을 활성화하면, 메뉴 동작에 대한 단축키를 직접 설정할 수 있습니다.(TODO "동적 키보드 단축키 사용" 링크 연동하기)

#### 그림 3.2.2.5. 키보드 단축키 설정(우리말)
<img width="699" alt="기본설정-키보드단축키" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/494c86cb-d1e1-43ca-bcb3-670b692455d4">

#### 그림 3.2.2.6. 키보드 단축키 설정(영어)
<img width="699" alt="settings-keyboard-shortcut" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f4e91cba-f1b7-4d6f-9ad2-39c53c1d49c2">

### ⚠️ 주의: macOS의 메뉴바의 위치는 위 설명과 다릅니다. 아래 이미지를 참고해주세요.

#### 그림 3.2.2.7. 메뉴 바의 위치 (단일창) - macOS
<img width="720" alt="mac-single-window" src="https://github.com/wonder13662/gimp/assets/15767104/1e02bbc0-be24-4ef1-be82-2bbaf49113f4">
<br>
메뉴바는 이미지 창의 내부가 아닌 화면 최상단에 있습니다.

#### 그림 3.2.2.8. 메뉴 바의 위치 (다중창) - macOS
<img width="720" alt="그림 3.2.2.8. 메뉴 바의 위치 (다중창) - macOS" src="https://github.com/wonder13662/gimp/assets/15767104/b76240dd-db63-4a9b-9547-9f46604bdede">
메뉴바는 이미지 창의 내부가 아닌 화면 최상단에 있습니다.

## 3. 메뉴 버튼 (Menu Button)
#### 그림 3.2.2.9. 메뉴 버튼의 위치 (빨간색 영역)
<img width="720" alt="그림 3.2.2.9. 메뉴 버튼의 위치 (빨간색 영역)" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b34e53fd-a73f-491e-a324-07681871eeaf">

메뉴 버튼을 클릭해서 이미지 메뉴를 엽니다(전체화면 모드에서는 꼭 필요합니다).

#### 영상 3.2.2.2. 메뉴 버튼 클릭해서 이미지 메뉴 열기
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d31327e9-cd48-4dc0-80bb-065b94bf9921"></video>
<br>
단축키 Shift(Windows) or ⇧(Mac) + `F10` 로 이미지 메뉴를 열 수 있습니다.

#### 영상 3.2.2.2. 단축키 Shift(Windows) or ⇧(Mac) + F10로 이미지 메뉴 열기
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ebb0cbca-751e-4d63-a43c-99a9437d5813"></video>


## 4. 눈금자 (Ruler)
#### 그림 3.2.2.10. 눈금자의 위치 (빨간색 영역)
<img width="720" alt="그림 3.2.2.10. 눈금자의 위치 (빨간색 영역)" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5aa0bfdf-01c9-46e0-a296-3be09b67277e">

기본 화면에서 눈금자는 이미지의 상단과 왼쪽에 표시되며, 이미지 내의 좌표를 나타내는데 사용됩니다. 기본 수치 단위는 픽셀이지만, 필요하다면 아래에 설명되어 있는 단위 설정법을 이용해 다른 타입으로 바꿀 수도 있습니다.

눈금자의 중요한 기능 중 하나는 안내선(guide)입니다. 눈금자를 클릭하고 이미지로 드래그해서 안내선을 그립니다.
#### 영상 3.2.2.3. 안내선 그리기
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/604bb899-0e9b-4f76-8c94-fd66fec37808"></video>

안내선은 직선이며, 대상을 정확한 위치에 옮기는 데 사용합니다. 또는 선이 수평인지 수직인지 확인하는데도 쓰입니다.

#### 영상 3.2.2.4. 안내선에 따라 대상 옮기기
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8034ea5d-2c4a-4bc2-b1d2-8a1bec0dcb52"></video>

이동 도구(Move tool)을 사용해서 안내선을 움직일 수 있습니다. 안내선을 이미지 바깥으로 드래그하면 사라집니다. 여러 개의 안내선을 동시에 쓸 수 있습니다.

#### 영상 3.2.2.5. 안내선 수정 및 삭제
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/aec0424e-f862-4806-a746-36bb60de25f8"></video>

(TODO 위치 표식인 빨간색 영역을 초록색 영역으로 변경이 필요합니다)

## 5. 퀵마스크 토글 버튼 (QuickMask Toggle)
#### 그림 3.2.2.11. 퀵마스크 토글 버튼의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.11. 퀵마스크 토글 버튼의 위치 (초록색 영역)" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ec4aa95d-bb02-4df3-9f46-cc6a1304ab3f">

이미지의 아래편 왼쪽 구석의 작은 버튼으로 퀵마스크를 켜고 끌 수 있습니다. 퀵마스크가 켜지면, 이 버튼은 빨간색 테두리가 생깁니다(macOS에는 이 효과가 없습니다).

#### 영상 3.2.2.6. 퀵 마스크 토글하기
<video controls="controls" width="720" version="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/74f2db78-a06e-48d8-bcc7-7c99e3d57180"></video>

좀 더 상세한 정보는 [15.2.2. 채널 대화 상자 - Quick Mask](./15-02-02-channel-dialog.md)를 확인해주세요. (TODO 추후 링크 수정이 필요합니다)

## 6. 커서 좌표 (Pointer Coordinates)

## 7. 단위 메뉴 (Units Menu)

## 8. 확대/축소 버튼 (Zoom Button)

## 9. 상태 표시 영역 (Status Area)

## 10. 취소 버튼 (Cancel Button)

## 11. 내비게이션 (Navigation Control)

## 12. 비활성 여백 공간 (Inactive Padding Area)

## 13. 이미지 (Image Display)

## 14. 창 크기 변경시 이미지 확대/축소 버튼 (Image Window Resize Toggle)

***



## 다른 페이지로 가기
[다음: 3.2.3. 대화상자(Dialog)와 도킹(docking)](./03-02-03-dialogs-and-docking.md)

[이전: 3.2.1. 기본 도구 상자(The toolbox)](./03-02-01-the-toolbox.md)

[부모: 3. GIMP(김프)의 첫 번째 단계](./03-00-first-step-with-gimp.md)

[최상위](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-window.html)
