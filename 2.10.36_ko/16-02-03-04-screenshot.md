# 16.2.3.4. 스크린샷(Screenshot)

<a id="90-01-01-02-a40"></a>

#### [그림 90.1.1.2.a40. `이미지 메뉴 바` → `파일` → `만들기` → `스크린샷` (Windows) (우리말)](./90-01-01-02-00-create.md#90-01-01-02-a40)
<img width="860" height="574" alt="90-01-01-02-a40" src="https://github.com/user-attachments/assets/c007ce1d-a992-4766-a2e2-bb965ae6a0ed" />

`스크린샷(Screenshot)` 메뉴를 누르면 대화상자가 열립니다.

<a id="90-04-152-a101"></a>

#### [그림 90.4.152.a101. `스크린샷` 대화상자 (Windows) (우리말)](./90-04-0152-screenshot.md#90-04-152-a101)
<img width="399" height="382" alt="90-04-152-a101" src="https://github.com/user-attachments/assets/c68ec63c-5e26-4a5f-9d16-a8ad183fad7b" />

[다른 운영체제와 언어의 `스크린샷` 대화상자 확인하기](./90-04-0152-screenshot.md#90-04-152-a102)

이 대화상자는 크게 2개 부분으로 나뉩니다.

<a id="16-02-03-04-s1"></a>

## 1. 그리기 영역(Area)

### 1-1. 창 하나만 찍기(Take a screenshot of a single window)

<a id="90-04-152-a111"></a>

#### [그림 90.4.152.a111. `스크린샷` 대화상자 → `그리기 영역` → `창 하나만 찍기` (Windows) (우리말)](./90-04-0152-screenshot.md#90-04-152-a111)
<img width="399" height="382" alt="90-04-152-a111" src="https://github.com/user-attachments/assets/f67de3d0-94b0-4f7f-b672-4715d31f4f7b" />

`창 하나만 찍기(Take a screenshot of a single window)` 옵션을 켜고, 대화상자의 아래쪽의 `잡아내기(Snap)` 버튼을 누르면 `창 선택하기` 대화상자가 나타납니다.

<a id="90-04-152-a111-01"></a>

#### [그림 90.4.152.a111.1. `스크린샷` 대화상자 → `그리기 영역` → `창 하나만 찍기` → `창 선택하기` 대화상자 (Windows) (우리말)](./90-04-0152-screenshot.md#90-04-152-a111-01)
<img width="214" height="181" alt="90-04-152-a111-01" src="https://github.com/user-attachments/assets/248cb5be-1e6d-4fb3-be77-255e8775d017" />

이 대화상자의 십자를 클릭하고 그대로 누른채로 캡처하고 싶은 창으로 이동합니다.

캡쳐하고 싶은 창 위에서 마우스 버튼을 떼면, 창의 이미지만 GIMP(김프)의 새로운 이미지로 추가됩니다.

<a id="90-04-152-a111-02"></a>

#### [영상 90.4.152.a111.2. `스크린샷` 대화상자 → `그리기 영역` → `창 하나만 찍기` (Windows) (우리말)](./90-04-0152-screenshot.md#90-04-152-a111-02)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/247272ea-855b-4e5f-9f8b-d30c1c415290"></video>

⚠️ 주의: [원문](https://docs.gimp.org/2.10/ko/gimp-file-create.html#plug-in-screenshot)에서는 `창 테두리를 포함(Include window decoration)` 옵션을 끄면, 캡쳐한 이미지에서 타이틀 바와 파란 프레임이 제외된다고 나와있으나, Windows와 Mac에서는 옵션을 켜고 끈 차이가 없습니다.

`마우스 포인터 포함(Include mouse pointer)` 옵션을 끄면, 캡쳐된 이미지에서 마우스 포인터가 제외됩니다.

<a id="90-04-152-a111-03"></a>

#### [그림 90.4.152.a111.3. `스크린샷` 대화상자 → `그리기 영역` → `창 하나만 찍기` → `마우스 포인터 포함`: 켜기/끄기 비교 (Windows) (우리말)](./90-04-0152-screenshot.md#90-04-152-a111-03)
<img width="792" height="480" alt="90-04-152-a111-03" src="https://github.com/user-attachments/assets/a709cbc2-1178-44ae-89b8-ddfdd8fa17a4" />

### 1-2. 전체 화면의 스크린샷을 찍기(Take a screenshot of the entire screen)
`전체 화면의 스크린샷을 찍기(Take a screenshot of the entire screen)` 옵션은 팝업 메뉴 혹은 드롭다운 목록처럼 사용자의 인터렉션이 필요한 상황을 캡쳐해야 할 때 유용합니다.

이런 상황에서는 [지연 시간](./16-02-03-04-screenshot.md#16-02-03-04-s2) 항목의 값도 필요합니다.

그래야만 팝업 메뉴 혹은 드롭다운 목록을 열 수 있는 시간을 얻을 수 있습니다.

<a id="90-04-152-a121"></a>

#### [영상 90.4.152.a121. `스크린샷` 대화상자 → `그리기 영역` → `전체 화면의 스크린샷을 찍기`: 지연 시간 사용 (Windows) (우리말)](./90-04-0152-screenshot.md#90-04-152-a121)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/5cce677f-4e1d-4375-abcb-03aa644aaa64"></video>

`마우스 포인터 포함(Include mouse pointer)` 옵션을 켜면, 마우스 포인터가 함께 캡쳐됩니다.

<a comment="ISSUE: 원문에서는 마우스 포인터가 별도의 레이어에 저장된다고 하였으나 실제로는 하나의 레이어에 포함됨"></a>

<a comment="ISSUE: 2.10.36 에서는 Select a region to grab은 없습니다."></a>

<a id="16-02-03-04-s2"></a>

## 2. 지연 시간(Delay)
전체 화면을 캡쳐할 때, 일정 시간이 지난 뒤에 캡쳐되도록 지연 시간을 설정할 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.2.3.5. 스캐너/카메라(Scanner/Camera)](./16-02-03-05-scanner_camera.md)

[⬅️ 이전: 16.2.3.3. 웹 페이지에서 새 이미지 만들기(From Web page)](./16-02-03-03-from_web_page.md)

[⬆️ 위: 16.2.3. 만들기(Create)](./16-02-03-00-create.md)

[⬆️ 위: 16.2. 파일 메뉴(The File Menu)](./16-02-00-the-file-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-file-create.html#plug-in-screenshot)