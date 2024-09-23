# 16.7.5. 레이어 복제(Duplicate Layer)

<a id="90-01-06-04-a1"></a>

#### [그림 90.1.6.4.a1. `이미지 메뉴 바` → `레이어` → `레이어 복제`](./90-01-06-04-duplicate_layer.md#90-01-06-04-a1)
<img width="849" height="404" alt="90-01-06-04-a1" src="https://github.com/user-attachments/assets/7c26e456-1b8e-401b-b8e0-0ae9028839ba" />

<a id="16-07-05-s1"></a>

## 1. 기능 정의
`레이어 복제(Duplicate Layer)` 명령은 이미지에 활성화된 원본 레이어와 동일한 내용의 새 레이어를 추가합니다.

<a id="16-07-05-s2"></a>

## 2. 복제된 레이어의 이름
복제된 레이어의 이름은 원본 레이어의 이름과 같습니다.

하지만, 이름의 끝에 번호("#1")를 붙여서 고유한 이름으로 만듭니다.

<a id="16-07-05-s3"></a>

## 3. 알파 채널이 없는 배경 레이어를 복제
알파 채널을 가지고 있지 않은 배경 레이어를 복제하면, 복제한 새 레이어는 알파 채널을 가지고 있습니다.

<a id="16-07-05-s4"></a>

## 4. 패러사이트를 가지고 있는 레이어를 복제
활성화 레이어에 [패러사이트](./19-glossaryx-parasite.md)를 가지고 있다면, 복제한 레이어에는 [패러사이트](./19-glossaryx-parasite.md)를 가지고 있지 않습니다.

<a id="16-07-05-s5"></a>

## 5. 명령 활성화

<a id="16-07-05-s5-01"></a>

### 5-1. `이미지 메뉴 바` → `레이어` → `레이어 복제`

<a id="90-01-06-04-a11"></a>

#### [영상 90.1.6.4.a11. `이미지 메뉴 바` → `레이어` → `레이어 복제` (Windows) (우리말)](./90-01-06-04-duplicate_layer.md#90-01-06-04-a11)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/df432d9e-b057-4844-b8b4-d02e4e8590b3"></video>

<a id="16-07-05-s5-02"></a>

### 5-2. 키보드 단축키: Ctrl(⌘) + Shift(⇧) + `D`

<a id="90-10-88-01-01-a1"></a>

#### [영상 90.10.88.1.1.a1. `이미지 메뉴 바` → `레이어` → `레이어 복제`: Ctrl(⌘) + Shift(⇧) + `D` (Windows) (우리말)](./90-10-88-01-01-ctrl_shift_n.md#90-10-88-01-01-a1)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/5248e570-c2e9-49ee-bf84-88b3227be7b6"></video>

<a id="16-07-05-s5-03"></a>

### 5-3. `레이어 대화상자` → `레이어 관리` → `레이어 복사하기`
[15.2.1.2.4.5. 레이어 복사하기(Duplicate Layer)](./15-02-01-02-04-05-duplicate_layer.md)을 참고해주세요.

***

## 다른 페이지로 가기

[➡️ 다음: 16.7.6. 레이어 고정하기(Anchor layer)](./16-07-06-anchor-layer.md)

[⬅️ 이전: 16.7.4. 새 레이어 그룹(New Layer Group)](./16-07-04-new-layer-group.md)

[⬆️ 위: 16.7. 레이어 메뉴(The "Layer" menu)](./16-07-00-the-layer-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-duplicate.html)