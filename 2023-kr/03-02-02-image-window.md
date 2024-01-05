# 3.2.2. 이미지 창(Image window)
GIMP 사용자 인터페이스는 2가지 모드가 가능합니다. [단일창 모드(single-window mode,기본값)](./03-02-00-main-window.md), 그리고 `창(Windows)` → `Single-Window Mode`를 클릭해서 체크를 끄고 [다중창 모드(multi-window)](./03-02-00-main-window.md)로 바꿀 수 있습니다.

#### "언어:영어"의 `Single-Window Mode`을 제어해서 단일창, 다중창으로 바꿀 수 있습니다
#### 그림 3.2.2.1.
<img width="223" alt="single-window-en" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9c406b6a-063e-4d41-a45b-f2d7745bbf3d">

#### "언어:한국어"의 `Single-Window Mode`을 제어해서 단일창, 다중창으로 바꿀 수 있습니다
#### 그림 3.2.2.2.
<img width="212" alt="single-window-mode-kr" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/73aadfaa-00e8-4b45-8126-ff4eb0daae8d">

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
### 1-1. 타이틀 바의 위치
#### 그림 3.2.2.11. 타이틀 바의 위치 (빨간색 영역)
<img width="720" alt="03-02-02-single-multi-window-01-title-bar" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f7103b1f-daaa-4508-9ec7-f349e5bf985f">

### 1-2. 이미지 창에 이미지가 없는 경우

이미지 창에 이미지가 없는 경우의 타이틀 바에는 "그누 이미지 처리 프로그램(GNU Image Manipulating Program)"라고 표시됩니다. 

#### 그림 3.2.2.12. 이미지 창에 이미지가 없는 경우의 타이틀바
<img width="1192" alt="타이틀바-이미지없음" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fd890e79-a302-4288-b08a-7ec1b5e61def">

### 1-3. 이미지 창에 이미지가 있는 경우

이미지 창에 이미지가 있는 경우의 타이틀 바에는 이미지의 이름과 [12.1. 기본 설정 대화상자](./12-01-00-preference-dialog.md)의 설정에 따른 이미지의 명세가 보여집니다.타이틀 바에 표시되는 정보는 GIMP가 아닌 운영체제에서 주는 것입니다. 그러므로 표시되는 정보는 운영체제, 윈도우 매니저(window manager) 또는 테마에 따라 다양합니다.

#### 그림 3.2.2.13. 이미지 창에 이미지가 있는 경우의 타이틀바
<img width="1193" alt="타이틀바-이미지있음" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c19f1f48-355b-4ce3-9848-33a417744178">

[xcf(GIMP 작업 파일 포맷)]() 형식이 아닌 이미지를 열면, 이 이미지는 `.xcf` 파일 형식으로 "(가져옴)" 상태가 되며, 이미지창 하단에 있는 상태 표시줄에 원본 이름이 표시됩니다.(TODO 링크 연결)

## 2. 이미지 메뉴 (Image Menu)
### 2-1. 메뉴 바의 위치
#### 그림 3.2.2.21. 메뉴 바의 위치 (빨간색 영역)
<img width="720" alt="메뉴바 빨간색 영역" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/883425e8-4c2b-426d-afa5-274a3eeea46f">

이미지 메뉴는 (일부러 없애지 않는 한) 제목 표시줄 바로 아래에 위치합니다.

### 2-2. 메뉴 바의 위치(macOS)
#### ⚠️ 주의: macOS의 메뉴바의 위치는 위 설명과 다릅니다. 아래 이미지를 참고해주세요.

#### 그림 3.2.2.221. 메뉴 바의 위치 (단일창) - macOS
<img width="720" alt="mac-single-window" src="https://github.com/wonder13662/gimp/assets/15767104/1e02bbc0-be24-4ef1-be82-2bbaf49113f4">
<br>
메뉴바는 이미지 창의 내부가 아닌 화면 최상단에 있습니다.

#### 그림 3.2.2.222. 메뉴 바의 위치 (다중창) - macOS
<img width="720" alt="그림 3.2.2.8. 메뉴 바의 위치 (다중창) - macOS" src="https://github.com/wonder13662/gimp/assets/15767104/b76240dd-db63-4a9b-9547-9f46604bdede">
메뉴바는 이미지 창의 내부가 아닌 화면 최상단에 있습니다.

### 2-3. 메뉴 바의 이미지 메뉴 열기
이 메뉴를 통해 이미지 편집을 위한 거의 모든 작업을 할 수 있습니다. 이미지 안에서 마우스 오른쪽 버튼을 클릭하거나 이미지 창의 왼쪽 상단 구석에 있는 메뉴 버튼(Menu Button)이라고 부르는 "화살표"를 클릭해서 이미지 메뉴를 사용할 수도 있습니다.

#### 영상 3.2.2.23. 이미지 창 안에서 이미지 메뉴 열기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/bf128c3e-5004-4766-90ea-33cf4e59399e"></video>

### 2-4. 이미지 메뉴 단축키 설정
또한 대부분의 메뉴는 메뉴에 표시된 키보드 단축키를 이용해 간편하게 실행할 수 있습니다. [12.1. 기본 설정 대화상자](./12-01-00-preference-dialog.md)에서 [12.1.10. 인터페이스 - 동적 키보드 단축키 사용](./12-01-10-interface.md) 항목을 활성화하면, 메뉴 동작에 대한 단축키를 직접 설정할 수 있습니다.(TODO "동적 키보드 단축키 사용" 링크 연동하기)

#### 그림 3.2.2.241. 키보드 단축키 설정(우리말)
<img width="699" alt="기본설정-키보드단축키" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/494c86cb-d1e1-43ca-bcb3-670b692455d4">

#### 그림 3.2.2.242. 키보드 단축키 설정(영어)
<img width="699" alt="settings-keyboard-shortcut" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f4e91cba-f1b7-4d6f-9ad2-39c53c1d49c2">

## 3. 메뉴 버튼 (Menu Button)
### 3-1. 메뉴 버튼의 위치
#### 그림 3.2.2.31. 메뉴 버튼의 위치 (빨간색 영역)
<img width="720" alt="그림 3.2.2.9. 메뉴 버튼의 위치 (빨간색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b34e53fd-a73f-491e-a324-07681871eeaf">

### 3-2. 메뉴 버튼으로 이미지 메뉴 열기
메뉴 버튼을 클릭해서 이미지 메뉴를 엽니다(전체화면 모드에서는 꼭 필요합니다).

#### 영상 3.2.2.321. 메뉴 버튼 클릭해서 이미지 메뉴 열기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d31327e9-cd48-4dc0-80bb-065b94bf9921"></video>
<br>
단축키 Shift(Windows) or ⇧(Mac) + `F10` 로 이미지 메뉴를 열 수 있습니다.

#### 영상 3.2.2.322. 단축키 Shift(Windows) or ⇧(Mac) + F10로 이미지 메뉴 열기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ebb0cbca-751e-4d63-a43c-99a9437d5813"></video>


## 4. 눈금자 (Ruler)
### 4-1. 눈금자의 위치
#### 그림 3.2.2.41. 눈금자의 위치 (빨간색 영역)
<img width="720" alt="그림 3.2.2.10. 눈금자의 위치 (빨간색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5aa0bfdf-01c9-46e0-a296-3be09b67277e">

기본 화면에서 눈금자는 이미지의 상단과 왼쪽에 표시되며, 이미지 내의 좌표를 나타내는데 사용됩니다. 기본 수치 단위는 픽셀이지만, 필요하다면 아래에 설명되어 있는 단위 설정법을 이용해 다른 타입으로 바꿀 수도 있습니다.

### 4-2. 눈금자의 안내선 (guide)
눈금자의 중요한 기능 중 하나는 안내선 (guide)입니다. 눈금자를 클릭하고 이미지로 드래그해서 안내선을 그립니다.
#### 영상 3.2.2.421. 안내선 그리기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/604bb899-0e9b-4f76-8c94-fd66fec37808"></video>

안내선은 직선이며, 대상을 정확한 위치에 옮기는 데 사용합니다. 또는 선이 수평인지 수직인지 확인하는데도 쓰입니다.

#### 영상 3.2.2.422. 안내선에 따라 대상 옮기기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8034ea5d-2c4a-4bc2-b1d2-8a1bec0dcb52"></video>

이동 도구(Move tool)을 사용해서 안내선을 움직일 수 있습니다. 안내선을 이미지 바깥으로 드래그하면 사라집니다. 여러 개의 안내선을 동시에 쓸 수 있습니다.

#### 영상 3.2.2.423. 안내선 수정 및 삭제
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/aec0424e-f862-4806-a746-36bb60de25f8"></video>

이미지 창 내에서 마우스 커서를 움직이면 눈금자 부분에 현재 마우스 커서의 가로/세로 위치를 표시하는 작은 화살표가 표시됩니다.

#### 영상 3.2.2.424. 눈금자 화살표가 커서를 따라갑니다
<video controls="controls" width="158" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3d46763e-02c8-4f67-97fb-9ff61934aa35"></video>

(TODO 위치 표식인 빨간색 영역을 초록색 영역으로 변경이 필요합니다)

## 5. 퀵마스크 토글 버튼 (QuickMask Toggle)
### 5-1. 퀵마스크 토글 버튼의 위치
#### 그림 3.2.2.51. 퀵마스크 토글 버튼의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.11. 퀵마스크 토글 버튼의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ec4aa95d-bb02-4df3-9f46-cc6a1304ab3f">

이미지의 아래편 왼쪽 구석의 작은 버튼으로 퀵마스크를 켜고 끌 수 있습니다. 

### 5-2. 퀵마스크 제어하기
#### 영상 3.2.2.521. 퀵 마스크 토글하기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/74f2db78-a06e-48d8-bcc7-7c99e3d57180"></video>

퀵마스크가 켜지면, 이 버튼은 빨간색 테두리가 생깁니다(macOS에는 이 효과가 없습니다).

#### 영상 3.2.2.522. 퀵 마스크 토글 확대해서 보기
<video controls="controls" width="170" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/2a4236c9-ff2d-4200-9ce6-6dc880a50a84"></video>

좀 더 상세한 정보는 [15.2.2. 채널 대화 상자 - Quick Mask](./15-02-02-channel-dialog.md)를 확인해주세요. (TODO 추후 링크 수정이 필요합니다)

## 6. 커서 좌표 (Pointer Coordinates)
#### 그림 3.2.2.61. 커서 좌표의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.12. 커서 좌표의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/680dc1bb-23a7-4993-9f07-45767376ea68">

마우스 커서가 이미지 경계 안에 있을 경우, 창의 왼쪽 아래 구석에 있는 사각형 부분에 현재 커서의 좌표가 표시됩니다. 좌표의 단위는 눈금자(Ruler)와 같습니다.

#### 영상 3.2.2.62. 커서 좌표 확인하기
<video controls="controls" width="170" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/50eaa32f-bb39-4674-b405-096db2a92691"></video>

## 7. 단위 메뉴 (Units Menu)
### 7-1. 단위 메뉴의 위치
#### 그림 3.2.2.71. 단위 메뉴의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.12. 커서 좌표의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d6823026-1727-4914-8eff-a38039c9e977">

이 메뉴는 눈금자나 다른 여러 기능에서 사용되는 단위를 바꾸는데 씁니다. 기본 단위는 픽셀입니다. 

### 7-2. 단위 메뉴의 단위 변경
하지만 이 메뉴를 통해 `inch`나 `cm` 등 다른 단위로 바꿀 수도 있습니다. 

#### 그림 3.2.2.72. 단위 메뉴의 단위 바꾸기
<img width="451" alt="단위_메뉴_단위변경" src="https://github.com/wonder13662/gimp/assets/15767104/943d39cf-c0b5-452a-961d-66763697a844">

단위를 바꿀 경우 보여지는 비율이 바뀔 수 있으므로 [16.5. 보기 메뉴](16-05-00-the-view-menu.md)의 "점 대 점" 설정을 확인해야 합니다. 이에 대한 자세한 내용은 [16.5.4. 점 대 점](./16-05-04-dot-for-dot.md)에 있습니다.

## 8. 확대/축소 버튼 (Zoom Button)
### 8-1. 확대/축소 버튼의 위치
#### 그림 3.2.2.81. 확대/축소 버튼의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.14. 확대/축소 버튼의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/55bd7f61-0042-4c27-8924-8176c586251e">

이미지를 확대하거나 축소해 보는 방법에는 여러가지가 있지만 이 메뉴가 가장 간단합니다. 더 정확한 값을 직접 입력할 수도 있습니다.

### 8-2. 확대/축소 버튼으로 이미지의 크기를 조정하기
#### 영상 3.2.2.81. 확대/축소 버튼으로 이미지의 크기를 조정하기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/a1fea92d-db44-4fa8-a7d6-ba5527d25498"></video>

## 9. 상태 표시 영역 (Status Area)
### 9-1. 상태 표시 영역의 위치
#### 그림 3.2.2.91. 상태 표시 영역의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.15. 상태 표시 영역의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/4c76f061-15ad-4bef-9f2d-a7d424c8d40e">

상태 표시 영역은 이미지 창의 가장 아랫 부분에 있습니다. 

### 9-2. 상태 표시 내용
기본적으로 상태 표시 영역에는 원본 이미지 `.xcf` 파일의 이름과 이미지의 시스템 메모리 사용량이 표시됩니다. 
#### 그림 3.2.2.92. 이미지 창 아래의 상태 표시 영역
<img width="451" alt="그림 3.2.2.16. 이미지 창 아래의 상태 표시 영역" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b111c3d9-ae55-4b98-91cf-651f81dbb301">

### 9-3. 상태 표시 정보 변경
`GIMP`→ `기본 설정(Settings...)` → `이미지 창(Image Windows)` → `제목과 상태(Title & Status)`에서 상태 표시 영역에 표시되는 정보를 변경할 수 있습니다. 

#### 그림 3.2.2.93. `GIMP`→ `기본 설정` → `이미지 창` → `제목과 상태`
<img width="699" alt="이미지창-제목과상태(우리말)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/0c48190f-b68f-41e4-8fcd-6728490538ed">

#### 그림 3.2.2.94. `GIMP`→ `Settings...` → `Image Windows` → `Title & Status`
<img width="699" alt="image-window-title-n-status(en)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d23da0fd-fc9d-42c1-924f-1b010df948e5">

시간이 오래 걸리는 작업을 하는 경우, 작업이 진행되는 동안 상태 표시 영역에 진행 중인 작업 내용과 진행률이 표시됩니다.

> 🗒️ 참고
>
> 이미지가 사용하는 메모리의 양은 이미지의 파일 크기에 따라 다릅니다. 예를 들어, 파일 크기가 70kB인 `.PNG` 이미지는 GIMP에서 열면 RAM의 246kB의 메모리를 차지합니다. 메모리 사용량의 차이에는 두가지 이유가 있습니다. 첫번째, `.PNG` 이미지는 압축된 파일 형식입니다. 그리고 이미지를 RAM에 올릴때 압축되지 않은 형태로 다시 만들어집니다. 두번째로 GIMP는 실행취소 명령을 쓰기 위해 추가적인 메모리를 써서 이미지의 복사본을 만듭니다. 

## 10. 취소 버튼 (Cancel Button)
### 10-1. 취소 버튼의 위치
#### 그림 3.2.2.101. 취소 버튼의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.101. 취소 버튼의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/576a666d-5a6b-464a-872b-b0b6c62f77ad">

### 10-2. 취소 버튼의 역할
플러그인 사용과 같이 복잡하고 시간이 걸리는 작업을 하는 경우, 이미지 창(Image Window)의 오른쪽 하단에 취소 버튼이 표시됩니다. 이 취소 버튼을 눌러 작업을 취소할 수 있습니다(TODO 적절한 예시가 추가되어야 합니다. 대부분의 작업에서 이 버튼을 보기 어렵습니다.)

> 🗒️ 참고
>
> 몇몇 플러그인은 취소를 해도 응답이 없는 경우가 있는데, 이것은 실행 중단으로 인해 쓸모없어진 이미지 조각들을 삭제하고 있기 때문입니다.

## 11. 내비게이션 (Navigation Control)
### 11-1. 내비게이션의 위치
#### 그림 3.2.2.1111. 내비게이션의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.111. 내비게이션의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/529f87f9-d8b4-45cd-a7e8-3993c1b5f23c">

#### 그림 3.2.2.1112. 내비게이션 버튼의 모양
<img width="100" alt="내비게이션-버튼" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6c9cd4a7-8fd1-4d6c-8f0e-6db56f821508">

이미지 창의 오른편 아래쪽에 있는 작은 화살표 모양의 버튼입니다.

### 11-2. 내비게이션 미리보기로 이미지의 다른 부분으로 옮기기
마우스로 내비게이션 버튼을 클릭하여 누르고 있으면 내비게이션 미리 보기가 표시됩니다. 내비게이션 미리보기에는 전체 이미지 중에서 현재 화면에 표시되는 영역이 작은 상자로 표시됩니다. 내비게이션 미리 보기에서 마우스 버튼을 누른 채 움직이면 이미지의 다른 부분으로 이동할 수 있습니다. 일부 밖에 표시되지 않는 큰 이미지의 경우 이런 방식을 통해 손쉽게 원하는 부분으로 이동할 수 있습니다.

#### 영상 3.2.2.1121. 내비게이션 미리보기로 이미지의 다른 부분으로 옮기기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b3082a40-da2a-4105-9f6b-8f0657354098"></video>

### 11-3. 내비게이션 창을 다른 방법으로 열기
내비게이션 창을 다른 방법으로 열고 싶다면 [15.2.6. 내비게이션 대화상자](./15-02-06-navigation-dialog.md)에 대한 설명을 참조해주세요. 또한 마우스 가운데 버튼이 있다면, 이미지 위에서 가운데 버튼을 클릭한 후 드래그하여 원하는 부분으로 옮길수 있습니다.

#### 영상 3.2.2.1131. 마우스 가운데 버튼으로 이미지의 원하는 부분으로 옮기기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/1b8b315c-e71d-4414-926e-6daef83183ed"></video>

## 12. 비활성 여백 공간 (Inactive Padding Area)
### 12-1. 비활성 여백 공간의 위치
#### 그림 3.2.2.121. 비활성 여백 공간의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.121. 비활성 여백 공간의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/60f0da98-b237-4135-a560-1469129ac4dd">

이미지 크기가 이미지 창(Image window)보다 작을 때, 비활성 여백 공간이 활성화된 이미지로부터 분리되어 나머지 공간으로 보여집니다. 비활성 여백 공간에는 필터나 작업을 적용할 수 없습니다.

## 13. 이미지 (Image Display)

## 14. 창 크기를 바꿀 때의 이미지 확대/축소 버튼 (Image Window Resize Toggle)

***



## 다른 페이지로 가기
[다음: 3.2.3. 대화상자(Dialog)와 도킹(docking)](./03-02-03-dialogs-and-docking.md)

[이전: 3.2.1. 기본 도구 상자(The toolbox)](./03-02-01-the-toolbox.md)

[부모: 3. GIMP(김프)의 첫 번째 단계](./03-00-first-step-with-gimp.md)

[최상위](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-window.html)
