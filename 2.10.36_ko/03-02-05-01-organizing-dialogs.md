# 3.2.5.1. 대화 상자 위치 변경하기

<a id="03-02-05-01-s1"></a>

## 1. 대화상자 (Dialog)
GIMP(김프)는 ["대화상자(dialog)"](./15-00-dialogs.md)를 유연하게 배치할 할 수 있습니다.

"대화상자"는 움직일 수 있는 창입니다. 도구나 특정 기능을 제어할 수 있는 옵션을 가지고 있습니다. 

<a id="03-02-05-01-s2"></a>

## 2. 독 (Dock)
"독(dock)"은 작업하는 동안 유지되는 대화상자들을 가지고 있습니다. 

예를 들자면, [도구 옵션 대화상자](./14-02-05-04-tool_options.md), [붓 대화상자](./15-03-02-00-brushes_dialog.md), [팔레트 대화상자](./15-03-06-00-palettes_dialog.md)들이 있습니다.

<a id="03-02-05-01-s3"></a>

## 3. GIMP(김프)의 세 개의 독(Dock)
GIMP(김프)에는 세 개의 독(Dock)이 있습니다.

<a id="03-02-05-01-s3-01"></a>

### 3-1. 왼쪽의 독
GIMP(김프)의 왼쪽 판의 도구상자의 아래에 있는 독. 도구 옵션, 장치 상태, 실행취소 이력 그리고 이미지 대화상자들을 가지고 있습니다.

<a id="03-02-05-01-s3-02"></a>

### 3-2. 오른쪽 위의 독
GIMP(김프)의 오른쪽 판의 위쪽에 있는 독. 붓(Brushes), 무늬(Patterns), 글꼴(Fonts) 그리고 문서 이력 대화상자들을 가지고 있습니다.

<a id="03-02-05-01-s3-03"></a>

### 3-3. 오른쪽 아래의 독
GIMP(김프)의 오른쪽 판의 아래쪽에 있는 독. [레이어(Layers)](./15-02-01-00-layers_dialog.md), [채널(Channels)](./15-02-02-00-channel_dialog.md) 그리고 [경로(Paths)](./15-02-03-00-paths-dialog.md) 대화상자들을 가지고 있습니다.

이러한 독(dock)에 여러 대화 상자들이 탭으로 모여 있습니다.

<a id="03-02-05-01-s4"></a>

## 4. 다중창 모드에서의 독(dock)
다중창 모드에서 도구상자는 독(dock)이 아닌 유틸리티 창이 됩니다.

<a id="90-05-15-a111"></a>

#### [그림 90.5.15.a111. 다중창 모드에서의 3개의 유틸리티 창](./90-05-15-dock.md#90-05-15-a111)
![90-05-15-a111](https://github.com/wonder13662/gimp/assets/15767104/b2972994-e79b-4d1a-95ab-9e73aee34315)

<a id="03-02-05-01-s5"></a>

## 5. 단일창 모드에서의 독(dock)
단일창 모드에서는 단일창 안에 독(dock)이 포함됩니다.

<a id="90-05-15-a112"></a>

#### [그림 90.5.15.a112. 단일창 모드에서의 3개의 독(Dock)](./90-05-15-dock.md#90-05-15-a112)
![90-05-15-a112](https://github.com/wonder13662/gimp/assets/15767104/dc2a73db-7ffc-47a7-91ac-af53bb9d041e)

<a id="03-02-05-01-s6"></a>

## 6. 독에 보여지는 대화상자 설정하기
`창` → `도킹가능한 대화` 메뉴에 도킹을 할 수 있는 대화상자 목록이 있습니다. 

<a id="90-01-10-02-a1"></a>

#### [그림 90.1.10.2.a1. `이미지 메뉴 바` → `창` → `도킹가능한 대화` (Windows)](./90-01-10-02-00-dockable_dialogs.md#90-01-10-02-a1)
![90-01-10-02-a1](https://github.com/wonder13662/gimp/assets/15767104/2a664a57-69e3-4890-86c2-400a912ecb2b)

[다른 운영체제와 언어의 `도킹가능한 대화` 확인하기](./90-01-10-02-00-dockable_dialogs.md#90-01-10-02-a2)

이 목록에서 원하는 대화상자를 선택하면 해당 대화상자가 표시됩니다. 

선택한 대화상자가 이미 독(dock)안에 포함되어 있으면 해당 대화 상자를 활성화시키고, 없으면 창 모드에 따라 다음과 같이 동작합니다. 

<a id="03-02-05-01-s7"></a>

## 7. 다중창 모드에서 대화상자 추가하기
[다중창 모드](./19-glossaryx-multi_window_mode.md)에서는 새 창, 대화 상자 등이 화면에 표시됩니다.

<a id="90-01-10-02-a101"></a>

#### [영상 90.1.10.2.a101. 다중창 모드에서 대화상자 추가](./90-01-10-02-00-dockable_dialogs.md#90-01-10-02-a101)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/09ddc773-aabd-4ea8-8447-435e2d010e3d"></video>

<a id="03-02-05-01-s8"></a>

## 8. 단일창 모드에서 대화상자 추가하기
[단일창 모드](./19-glossaryx-single_window_mode.md)에서는 대화상자는 자동으로 GIMP(김프)의 오른쪽 판위의 위쪽의 독에 추가됩니다.

<a id="90-01-10-02-a111"></a>

#### [영상 90.1.10.2.a111. 단일창 모드에서 대화상자 추가](./90-01-10-02-00-dockable_dialogs.md#90-01-10-02-a111)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/cc6aec8e-3d77-4945-8685-b7aa00245c07"></video>

<a id="03-02-05-01-s9"></a>

## 9. 탭의 위쪽을 끌어서 대화상자를 원하는 곳으로 이동

<a id="90-04-a111"></a>

#### [영상 90.4.a111. 대화상자 이동](./90-04-0000-dialogs.md#90-04-a111)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d493e232-1630-47f5-8e5b-5fda0fdd0b87"></video>

<a id="03-02-05-01-s10"></a>

## 10. 새 대화상자를 대화상자 그룹에 넣기

<a id="90-04-a112"></a>

#### [영상 90.4.a112. 대화상자그룹에 넣기](./90-04-0000-dialogs.md#90-04-a112)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e3a0a266-aba7-4a96-86f4-ab00cc4168d2"></video>

<a id="90-04-a113"></a>

#### [영상 90.4.a113. 독(Dock) 한쪽에 대화상자 추가](./90-04-0000-dialogs.md#90-04-a113)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/2b1acca7-a83c-4b8d-a5fe-10a4ab7b7979"></video>

<a id="03-02-05-01-s11"></a>

## 11. 탭 메뉴의 탭 추가하기
탭 메뉴의 **탭 추가하기** 기능을 이용합니다. [탭 메뉴](./16-01-04-tab_menus.md)

<a id="90-05-16-a181"></a>

#### [영상 90.5.16.a181. 탭 메뉴의 탭 추가하기](./90-05-16-00-tab_menu.md#90-05-16-a181)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5831e5d3-eb1f-403a-a7ff-55fd7b8fb6df"></video>


> ℹ️ 작은 정보
>
> 이미지 창(Image Window) 안에서 `Tab`키를 누르면 3개의 독을 숨기거나 보여줄 수 있습니다. 3개의 독 중 하나가 이미지 창을 가리는 경우 쓸 수 있습니다. 독 안에서 `Tab`키를 누르면 포커스가 독 안의 기능 버튼을 순회합니다.

<a id="90-05-15-a121"></a>

#### [영상 90.5.15.a121. `Tab`키로 3개의 독 숨기기](./90-05-15-dock.md#90-05-15-a121)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8ee75977-e433-472f-ab87-098fdbef7471"></video>

<a id="90-05-15-a122"></a>

#### [영상 90.5.15.a122. `Tab`키로 독(Dock) 안에서 기능 버튼 순회하기](./90-05-15-dock.md#90-05-15-a122)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/004ab1c2-af3b-478f-a04b-12bda0ea5b73"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 3.2.5.2. 탭 메뉴 (Tab Menu)](./03-02-05-02-00-tab-menu.md)

[⬅️ 이전: 3.2.5. 대화상자(Dialog)와 도킹(docking)](./03-02-05-00-dialogs-and-docking.md)

[⬆️ 위: 3.2.5. 대화상자(Dialog)와 도킹(docking)](./03-02-05-00-dialogs-and-docking.md)

[⬆️ 위: 3.2. GIMP(김프)의 주요 화면](./03-02-00-main-window.md)

[⬆️ 위: 3. GIMP(김프)의 첫 번째 단계](./03-00-first-step-with-gimp.md)

[🏠 홈](./00-home.md)
