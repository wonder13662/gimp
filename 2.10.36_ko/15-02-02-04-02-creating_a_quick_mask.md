# 15.2.2.4.2. 퀵 마스크 만들기(Creating a quick mask)

<a id="15-02-02-04-02-s1"></a>

## 1. 퀵 마스크 켜기/끄기
퀵 마스크를 새로 만들려면, [이미지 창](./03-02-04-00-image_window.md)의 왼쪽 아래의 [퀵 마스크 토글 버튼](./03-02-04-05-quickmask-toggle.md)을 누릅니다.

작업중인 이미지에서 선택이 활성화되었다면, 선택 영역은 바뀌지 않고 그대로 이미지가 노출됩니다. 그리고 선택 영역의 바깥은 반투명 빨간색으로 채워집니다.

작업중인 이미지에 활성화된 선택이 없다면, 이미지의 모든 영역이 반투명 빨간색으로 채워집니다.

[이미지 창](./03-02-04-00-image_window.md)의 왼쪽 아래의 [퀵 마스크 토글 버튼](./03-02-04-05-quickmask-toggle.md)을 다시 누르면, 퀵 마스크를 비활성화합니다.

<a id="90-05-05-a111"></a>

#### [영상 90.5.5.a111. 퀵 마스크 토글하기](./90-05-05-quickmask_toggle.md#90-05-05-a111)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/74f2db78-a06e-48d8-bcc7-7c99e3d57180"></video>

<a id="15-02-02-04-02-s2"></a>

## 2. 선택 마스크 속성 수정하기
채널 대화상자의 `선택 마스크` - "퀵 마스크"의 이름이나 미리보기를 더블 클릭을 해서 `채널 속성` 대화상자를 열어 속성을 수정할 수 있습니다.

<a id="90-04-122-a101"></a>

#### [그림 90.4.122.a101. `채널 속성` 대화상자 (Windows) (우리말)](./90-04-122-channel_attributes.md#90-04-122-a101)
<img width="560" height="264" alt="90-04-122-a101" src="https://github.com/wonder13662/gimp/assets/15767104/79f279c7-14b9-449a-ace1-0aba0fc53c64" />

[다른 운영체제와 언어의 `채널 속성` 대화상자 확인하기](./90-04-122-channel_attributes.md#90-04-122-a102)

`채널 속성` 대화상자에서 `선택 마스크`의 불투명도나 채우기 색을 설정할 수 있습니다.

`선택 마스크`의 색상은 [15.2.2.2.5. 채널 컨텍스트 메뉴(Channel Context Menu) - 1-1. `선택 마스크 채널`의 `채널 불투명도`](./15-02-02-02-05-channel_context_menu.md#15-02-02-02-05-s1-01)를 참고해주세요.

`선택 마스크`의 불투명도는 [15.2.2.2.5. 채널 컨텍스트 메뉴(Channel Context Menu) - 1-2. `선택 마스크 채널`의 `색상`](./15-02-02-02-05-channel_context_menu.md#15-02-02-02-05-s1-02)을 참고해주세요.

`선택 마스크` - "퀵 마스크"의 [눈 아이콘(가시성)](./15-02-02-02-03-01-channel_visibility.md)을 클릭해서 숨기거나 보여줄 수 있습니다.

<a id="15-02-02-04-02-s3"></a>

## 3. 퀵 마스크 칠하기 및 선택으로 바꾸기
`선택 마스크`는 회색 톤으로 구성되어 있습니다. 

그러므로 흰색이나 회색으로 칠하게 되면 퀵 마스크 영역이 줄어듭니다.

반대로 검은색으로 칠하게 되면 퀵 마스크 영역이 늘어납니다.

완전한 하얀색이 아닌 밝거나 어두운 회색으로 칠하면 [선택](./07-01-00-the-selection.md)의 [페더링](./07-01-01-feathering.md)과 같은 변화 효과를 낼 수 있습니다.

`선택 마스크` - "퀵 마스크"의 작업이 완료가 되면, [이미지 창](./03-02-04-00-image_window.md)의 왼쪽 아래의 [퀵 마스크 토글 버튼](./03-02-04-05-quickmask-toggle.md)을 누릅니다. 그러면 `선택 마스크` - "퀵 마스크"는 채널 목록에서 사라지고, 선택으로 바뀌게 됩니다.

<a id="90-01-03-16-a113"></a>

#### [영상 90.1.3.16.a113. 퀵 마스크를 칠하기 도구로 수정하기](./90-01-03-16-toggle_quick_mask.md#90-01-03-16-a113)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/44c82438-bb6a-426d-b9fd-453fcfb46906"></video>

<a id="15-02-02-04-02-s4"></a>

## 4. 퀵 마스크의 용도
퀵 마스크의 주요한 용도는은 [칠하기 도구](./14-03-00-paint_tools.md)로 [선택](./07-01-00-the-selection.md)을 수정할 수 있도록 해주는 것입니다.

퀵 마스크는 이미지의 배경으로부터 대상을 떼어내는 선택을 만드는데 유용합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 15.2.2.4.3. 그라디언트와 함께 퀵 마스크 사용하기(Using quick mask with a gradient)](./15-02-02-04-03-using_quick_mask_with_a_gradient.md)

[⬅️ 이전: 15.2.2.4.1. 대화상자 활성화하기(Activate the dialog)](./15-02-02-04-01-activate_the_dialog.md)

[⬆️ 위: 15.2.2.4. 퀵 마스크(Quick Mask)](./15-02-02-04-00-quick_mask.md)

[⬆️ 위: 15.2.2. 채널 대화상자(Channel dialog)](./15-02-02-00-channel_dialog.md)

[⬆️ 위: 15.2. 이미지 구조 관련 대화상자(Image structure related dialogs)](./15-02-00-image-structure-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-channel-dialog.html#idm18192)