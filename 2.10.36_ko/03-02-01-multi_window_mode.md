# 3.2.1. 다중창 모드(multi-window mode)

<a id="90-05-a323"></a>

#### [그림 90.5.a323. 다중창 모드 스크린샷](./90-05-00-image_window.md#90-05-a323)
![90-05-a323](https://github.com/wonder13662/gimp/assets/15767104/7fa9ac60-26d8-4547-9b43-aa914e002e93)

1. [도구상자(Toolbox)](./03-02-01-multi_window_mode.md#03-02-01-s1)
2. [도구 옵션(Tool Options)](./03-02-01-multi_window_mode.md#03-02-01-s2)
3. [이미지 창(Image Window)](./03-02-01-multi_window_mode.md#03-02-01-s3)
4. [붓(Brushes), 무늬(Patterns), 글꼴(Fonts), 문서 이력(Document History) 독](./03-02-01-multi_window_mode.md#03-02-01-s4)
5. [레이어(Layers), 채널(Channels), 패스(Paths)](./03-02-01-multi_window_mode.md#03-02-01-s5)

위의 스크린샷은 가장 기본적인 다중창 모드 배치입니다.

왼쪽과 오른쪽에 2개의 패널이 각각 있습니다. 그리고 가운데에는 [이미지 창(image window)](./19-glossaryx-image_window.md)가 있습니다. 

두번째 이미지 창(image window)는 첫번째 이미지 창에 가려 일부분만 보입니다. 

왼쪽 패널은 [도구상자(Toolbox)](./12-01-13-00-toolbox.md), [도구 옵션(Tool Options)](./12-01-07-00-tool-options.md), [실행취소 이력 대화상자(Undo history dialog)](./15-02-07-00-undo-history-dialog.md), [장치 상태 대화상자(Device Status dialog)](./15-05-03-00-device-status-dialog.md) 그리고 [이미지 대화상자(Images dialogs)](./15-04-02-00-images-dialog.md)를 갖고 있습니다. 

오른쪽 패널은 [붓 대화상자(Brushes dialog)](./15-03-02-00-brushes_dialog.md), [무늬 대화상자(Patterns dialog)](./15-03-04-00-patterns_dialog.md), [글꼴(Fonts)](./15-03-08-00-fonts_dialog.md) 그리고 [문서 이력 대화상자(Document Hisoty dialog)](./15-04-03-00-document-history-dialog.md)가 있는 다중 탭 독(multi-tab dock)과 [레이어 대화상자(Layers dialog)](./15-02-01-00-layers_dialog.md), [채널 대화상자(Channels dialog)](./15-02-02-00-channel_dialog.md) 그리고 [경로 대화상자(Paths dialog)](./15-02-03-00-paths-dialog.md)가 있는 또다른 다중 탭 독(multi-tab dock)을 가지고 있습니다.

<a id="03-02-01-s1"></a>

## 1. 도구상자(Toolbox)
여러 가지 도구들을 선택할 수 있는 아이콘들이 모아져 있습니다. 

그리고 [전경색(Foreground color)](./19-glossaryx-foreground_color.md)/[배경색(Background color)](./19-glossaryx-background_color.md)이 표시됩니다. 

[붓(Brushes)](./07-06-00-brushes.md), [무늬(Patterns)](./07-11-patterns.md), [그라디언트(Gradient)](./07-10-00-gradients.md), 현재 이미지의 아이콘 등을 추가할 수도 있습니다.

[`기본 설정` → `인터페이스` → `도구상자` → `모양새`](./12-01-13-01-appearance.md)를 이용하여 추가로 표시할 수 있는 항목들을 표시하거나 숨길 수 있습니다.

<a id="90-02-06-03-a201"></a>

#### [그림 90.2.6.3.a201. `기본 설정` → `인터페이스` → `도구상자` → `모양새` (Windows) (우리말)](./90-02-06-03-toolbox.md#90-02-06-03-a201)
![90-02-06-03-a201](https://github.com/wonder13662/gimp/assets/15767104/66010aa1-ec2a-43ba-bd3d-e6bb2fe287c1)

<a id="90-02-06-03-a205"></a>

#### [영상 90.2.6.3.a205. 모양새(Appearance) 설정에 따라 도구상자의 모양이 바뀝니다](./90-02-06-03-toolbox.md#90-02-06-03-a205)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/507bc6db-fac6-491d-af68-a2d566b3109a"></video>

<a id="03-02-01-s2"></a>

## 2. 도구 옵션(Tool Options)
도구 옵션(Tool Options) 대화 상자는 도구상자(Toolbox) 아래에 연결되어 있으며, 현재 선택된 도구의 옵션을 표시합니다(위의 스크린샷에는 이동 도구(Move Tool)의 옵션이 표시되고 있습니다).

<a id="03-02-01-s3"></a>

## 3. 이미지 창(Image Window)
GIMP(김프)에서는 [이미지](./19-glossaryx-image.md)들이 각각의 독립된 창으로 열립니다. 

그리고 시스템 자원가 허용하는 한 많은 이미지를 동시에 열 수 있습니다. 

GIMP(김프)를 이용하여 이미지를 편집하려면, 우선 이 [이미지 창](./19-glossaryx-image_window.md)을 이용해 그림을 불러와야 합니다. 

이미지 창의 한쪽 구석에는 메뉴 모음(파일, 편집, 선택 등…)이 있으며, 이 메뉴 모음은 마우스 버튼 우클릭으로도 사용할 수 있습니다.

이미지를 불러올 때 이미지가 이미지 창의 크기보다 큰 경우, 이미지를 축소시켜 창에 전체 이미지가 표시되도록 합니다. 

확대/축소 비율을 100%로 만들면, 이미지 창에 스크롤바가 표시됩니다.

**참고**: (MacOS:Sonoma 14.2.1 GIMP 2.10.36)에서는 이미지 창 안의 메뉴 모음이 없습니다.

<a id="03-02-01-s4"></a>

## 4. 붓(Brushes), 무늬(Patterns), 글꼴(Fonts), 문서 이력(Document History) 독(dock)
[독(dock)](./19-glossaryx-dock.md)안의 대화상자(dialog)들은 탭(tab)입니다. 

[이미지](./19-glossaryx-image.md)에는 붓(Brushes) 탭이 열려 있습니다. 

[칠하기 도구(Paint tools)](./14-03-00-paint_tools.md)에서 사용된 붓(brushes) 종류롤 보여줍니다.

<a id="03-02-01-s5"></a>

## 5. 레이어(Layers), 채널(Channels), 패스(Paths)
[레이어(Layers)](./15-02-01-00-layers_dialog.md), [채널(Channels)](./15-02-02-00-channel_dialog.md) 그리고 [경로(Paths)](./15-02-03-00-paths-dialog.md)는 [붓(Brushes) 대화상자](./15-03-02-00-brushes_dialog.md) 아래의 독(dock) 안의 대화상자에서 관리합니다.

[이미지](./19-glossaryx-image.md)에서는 레이어 탭이 열려 있습니다. 

레이어 탭은 레이어 구조에서 현재 활성화된 이미지를 보여주며, 다양한 방식으로 수정할 수 있도록 해줍니다. 

레이어 대화상자를 사용하지 않고도 기본적인 것들을 하는 것은 가능합니다만, 어느정도 숙련된 GIMP(김프) 사용자들이라면 레이어 대화상자가 항상 필수적이라는 것을 알고 있습니다.

[대화 상자(dialog)](./15-00-dialogs.md)와 독(dock) 관리에 대해서는 [3.2.5. 대화상자(Dialog)와 도킹(docking)](./03-02-05-00-dialogs-and-docking.md)에서 설명합니다.

<a id="03-02-01-s6"></a>

## 6. 다중창 모드의 탭키
다중창 모드에서는 상단 오른쪽, 왼쪽의 탭 키를 이용해 보여지는 대화창들을 선택할 수 있습니다.

<a id="90-05-15-a101"></a>

#### [영상 90.5.15.a101. 다중창 모드의 독의 탭 키로 대화창 선택](./90-05-15-dock.md#90-05-15-a101)
<video controls="controls" width="394" height="456" src="https://github.com/wonder13662/gimp/assets/15767104/dc6bca6a-ac80-41a3-9d40-904cf22a563c"></video>

## 다른 페이지로 가기

[➡️ 다음: 3.2.2. 단일창 모드(single window mode)](./03-02-02-single_window_mode.md)

[⬅️ 이전: 3.2. GIMP(김프)의 주요 화면](./03-02-00-main-window.md)

[⬆️ 위: 3.2. GIMP(김프)의 주요 화면](./03-02-00-main-window.md)

[⬆️ 위: 3. GIMP(김프)의 첫 번째 단계](./03-00-first-step-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-main-windows.html)