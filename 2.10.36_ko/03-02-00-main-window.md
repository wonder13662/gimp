# 3.2. GIMP(김프)의 주요 화면

김프의 사용자 인터페이스는 다음 두 가지 모드를 지원합니다.
#### 그림 3.2.1. 다중창 모드(multi-window mode)
<img width="1080" alt="multi-window-mode" src="https://github.com/wonder13662/gimp/assets/15767104/8b4d2c6e-7fa3-4f16-8c54-5004eb4765cf">

#### 그림 3.2.2. 단일창 모드(single window mode)
<img width="1080" alt="single-window-mode" src="https://github.com/wonder13662/gimp/assets/15767104/86811f94-d7b4-4fd5-a9b6-82c4714b0fb6">

GIMP(김프)를 처음으로 시작하면, 기본으로 단일창 모드(single window mode)로 열립니다. 다중창 모드(multi-window mode)를 활성화하기 위해서는 이미지 메뉴바의 `Windows` → `Single-Window Mode` 옵션을 끄면 됩니다. GIMP를 종료한 뒤에는, 다시 GIMP 시작할 때 마지막으로 선택한 옵션으로 적용됩니다.

#### `Single-Window Mode`
#### 그림 3.2.3.
<img width="1080" alt="그림 3.2.3." src="https://github.com/wonder13662/gimp/assets/15767104/b646e770-2f0d-44b5-b3ca-0451e8b6efa3">

## 다중창 모드(multi-window mode)
#### 그림 3.2. 다중창 모드 스크린샷
<img width="699" alt="multiple-window" src="https://github.com/wonder13662/gimp/assets/15767104/7fa9ac60-26d8-4547-9b43-aa914e002e93">

위의 스크린샷은 가장 기본적인 다중창 모드 배치입니다.

왼쪽과 오른쪽에 2개의 패널이 각각 있습니다. 그리고 가운데에는 이미지 창(image window)가 있습니다. 두번째 이미지 창(image window)는 첫번째 이미지 창에 가려 일부분만 보입니다. 왼쪽 패널은 [기본 도구 상자(Toolbox)](./12-01-13-toolbox.md), [도구 옵션(Tool Options)](./12-01-07-tool-options.md), [실행취소 이력 대화상자(Undo history dialog)](./15-02-07-undo-history-dialog.md), [장치 상태 대화상자(Device Status dialog)](./15-05-03-device-status-dialog.md) 그리고 [이미지 대화상자(Images dialogs)](./15-04-02-images-dialog.md)를 갖고 있습니다. 오른쪽 패널은 [붓 대화상자(Brushes dialog)](./15-03-02-brushes-dialog.md), [무늬 대화상자(Patterns dialog)](./15-03-04-patterns-dialog.md), [글꼴(Fonts)]() 그리고 [문서 이력 대화상자(Document Hisoty dialog)](./15-04-03-document-history-dialog.md)가 있는 다중 탭 독(multi-tab dock)과 [레이어 대화상자(Layers dialog)](./15-02-01-layers-dialog.md), [채널 대화상자(Channels dialog)](./15-02-02-channel-dialog.md) 그리고 [경로 대화상자(Paths dialog)](./15-02-03-paths-dialog.md)가 있는 또다른 다중 탭 독(multi-tab dock)을 가지고 있습니다.

### 1. 기본 도구 상자(Toolbox)
여러 가지 도구들을 선택할 수 있는 아이콘들이 모아져 있습니다. 그리고 전경색(Foreground color)/배경색(Background color)이 표시됩니다. [붓(Brushes)](./07-06-brushes.md), [무늬(Patterns)](./07-11-patterns.md), [그라디언트(Gradient)](./07-10-gradients.md), 현재 이미지의 아이콘 등을 추가할 수도 있습니다. `GIMP` → `기본 설정(Settings...)` → `인터페이스(Interface)` → `도구상자(Toolbox)` → `모양새(Appearance)`를 이용하여 추가로 표시할 수 있는 항목들을 표시하거나 숨길 수 있습니다.

#### 그림 3.2.5.a1. 모양새(Appearance) (Windows) (우리말)
<img width="720" alt="그림 3.2.5.a1. 모양새(Appearance) (Windows) (우리말)" src="https://github.com/wonder13662/gimp/assets/15767104/761e1ee7-aa5f-423c-97dc-6cd6c55c6965">

#### 그림 3.2.5.a2. 모양새(Appearance) (Windows) (영어)
<img width="720" alt="그림 3.2.5.a2. 모양새(Appearance) (Windows) (영어)" src="https://github.com/wonder13662/gimp/assets/15767104/0d25b4dc-795e-4e9f-8c0c-93b48619804d">

#### 그림 3.2.5.a3. 모양새(Appearance) (Mac) (우리말)
<img width="720" alt="그림 3.2.5.a3. 모양새(Appearance) (Mac) (우리말)" src="https://github.com/wonder13662/gimp/assets/15767104/0e45ad36-e258-4eca-a113-49a0b5c05fbf">

#### 그림 3.2.5.a4. 모양새(Appearance) (Mac) (영어)
<img width="720" alt="그림 3.2.5.a4. 모양새(Appearance) (Mac) (영어)" src="https://github.com/wonder13662/gimp/assets/15767104/5f628859-2655-4557-a102-fd7af59a687c">

#### 영상 3.2.1.
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/507bc6db-fac6-491d-af68-a2d566b3109a"></video>

### 2. 도구 옵션(Tool Options)
도구 옵션(Tool Options) 대화 상자는 기본 도구 상자(Toolbox) 아래에 연결되어 있으며, 현재 선택된 도구의 옵션을 표시합니다(위의 스크린샷에는 이동 도구(Move Tool)의 옵션이 표시되고 있습니다).

### 3. 이미지 창(Image Window)
GIMP(김프)에서는 이미지들이 각각의 독립된 창으로 열립니다. 그리고 시스템 리소스가 허용하는 한 많은 이미지를 동시에 열 수 있습니다. GIMP를 이용하여 이미지를 편집하려면, 우선 이 이미지 창을 이용해 그림을 불러와야 합니다. 이미지 창의 한쪽 구석에는 메뉴 모음(파일, 편집, 선택 등...)이 있으며, 이 메뉴 모음은 마우스 버튼 우클릭으로도 사용할 수 있습니다.

이미지를 불러올 때 이미지가 이미지 창의 크기보다 큰 경우, 이미지를 축소시켜 창에 전체 이미지가 표시되도록 합니다. 확대/축소 비율을 100%로 만들면, 이미지 창에 스크롤바가 표시됩니다.

**참고**: (MacOS:Sonoma 14.2.1 GIMP 2.10.36)에서는 이미지 창안의 메뉴 모음이 없습니다.

### 4. 붓(Brushes), 무늬(Patterns), 글꼴(Fonts), 문서 이력(Document History) 독
독(dock)안의 대화상자(dialog)들은 탭(tab)입니다. 이미지에는 붓(Brushes) 탭이 열려 있습니다. 칠하기 도구(Paint tools)에서 사용된 붓(brushes) 종류롤 보여줍니다.

### 5. 레이어(Layers), 채널(Channels), 패스(Paths)
레이어(Layers), 채널(Channels) 그리고 경로(Paths)는 붓(Brushes) 대화상자 아래의 독(dock) 안의 대화상자에서 관리합니다. 이미지에서는 레이어 탭이 열려 있습니다. 레이어 탭은 레이어 구조에서 현재 활성화된 이미지를 보여주며, 다양한 방식으로 수정할 수 있도록 해줍니다. 레이어 대화상자를 사용하지 않고도 기본적인 것들을 하는 것은 가능합니다만, 어느정도 숙련된 GIMP 사용자들이라면 레이어 대화상자가 항상 필수적이라는 것을 알고 있습니다.

대화 상자(dialog)와 독(dock) 관리에 대해서는 [3.2.3. 대화상자(Dialog)와 도킹(docking)](./03-02-03-dialogs-and-docking.md)에서 설명합니다.

### 다중창 모드의 탭키
다중창 모드에서는 상단 오른쪽, 왼쪽의 탭 키를 이용해 보여지는 대화창들을 선택할 수 있습니다.
#### 영상 3.2.2.
<video controls="controls" width="394" src="https://github.com/wonder13662/gimp/assets/15767104/dc6bca6a-ac80-41a3-9d40-904cf22a563c"></video>

## 단일창 모드(single window mode)
#### 그림 3.2. 단일창 모드 스크린샷
<img width="699" alt="single-window" src="https://github.com/wonder13662/gimp/assets/15767104/fd9a7449-3d1b-4f4e-b166-c97fa84da161">

다중창 모드와 같은 요소들을 포함하고 있지만, 사용법은 다소 다릅니다.

### 왼쪽, 오른쪽 판(Panel) 고정
왼쪽(1,2)과 오른쪽(4,5) 판(panel)은 고정입니다. 움직일 수 없습니다.

### 왼쪽, 오른쪽 판(Panel) 너비 수정하기
왼쪽(1,2)과 오른쪽(4,5) 판(panel)의 너비는 마우스 커서가 각 판의 경계에 올라가 있을 경우 나타나는 이동 포인터(moving pointer)를 드래그해서 늘이거나 줄일 수 있습니다. 이동 포인터는 왼쪽 판의 오른쪽 경계, 오른쪽 판의 왼쪽 경계 위에 올라갈 경우 나타납니다. 각 판의 너비를 좁게 두고 싶다면, 도구 옵션의 아래의 스크롤바를 사용하면 됩니다.
#### 영상 3.2.3. 왼쪽 판(panel)의 너비를 조정하는 경우
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/122a8fa7-0b37-4651-af7e-c5aea59ccb32"></video>

#### 영상 3.2.4. 오른쪽 판(panel)의 너비를 조정하는 경우
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/49be469f-50cb-47d0-9a91-6b0247b56ee5"></video>

### 이미지 창(Image window) 제어하기
이미지는 왼쪽과 오른쪽 판(panel) 사이에 가득 차게 표시됩니다. 여러 개의 이미지가 열리면, 이미지 창 위에 모든 이미지의 탭이 보이는 새로운 바(bar)가 나타납니다.
#### 영상 3.2.5.
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/7f7cff40-6263-4edb-a536-9d4fcfe022f8"></video>  

### 열어놓은 이미지 선택하기
#### 영상 3.2.6. 이미지 탭을 클릭하기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ee8e8031-edfb-4885-92ca-98f8fa72995f"></video>  

#### 영상 3.2.7. Ctrl(Windows, Mac) + `Page Up` or `Page Down`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ffd040b7-a63c-4db1-882d-a76a44d45d4a"></video>

#### 영상 3.2.8. Alt(Windows) or ⌥(Mac) + `숫자키`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/262a1036-9dc3-4cb8-82f9-825383aec2b9"></video>
<br/>
("숫자키"는 탭의 번호를 의미합니다. 1번부터 시작합니다) - 키보드 위쪽의 숫자키를 사용해야 합니다. 키보드 오른쪽의 키패드의 숫자키는 허용되지 않습니다.

위 내용은 가장 기본적인 대화 상자(dialog)들입니다. 이외에 목적에 따라 수많은 대화 상자들이 있지만, 대부분은 필요에 따라 그때그때 열어 쓰고 닫아두게 됩니다. 일반적으로 도구 옵션을 포함한 도구 상자와 레이어 대화 상자는 항상 열어두는 편이 좋습니다. 작업 후 저장을 하지 않고 이미지 창을 닫으면, 이미지 창을 닫을 것인지 묻는 창이 표시됩니다.

### 1. 기본 도구 상자(Tool box)
#### 그림 3.2.6.
<img width="203" alt="toolbox" src="https://github.com/wonder13662/gimp/assets/15767104/cd57acfd-21e1-494e-ab23-978bc54b0686">
<br/>
많은 GIMP 기능을 사용하는데 필수적입니다.

### 2. 도구 옵션(Tool Options)
#### 그림 3.2.7. 도구 옵션(Tool Options)
<img width="1080" alt="그림 3.2.7. 도구 옵션(Tool Options)" src="https://github.com/wonder13662/gimp/assets/15767104/71b968e1-ade9-44bb-a064-286b9fa9989b">

독립적으로 분리되어 있는 대화상자입니다. 기본 도구 상자의 아래에 연결되어 있습니다. 도구를 효과적으로 사용하기 위해 도구의 설정상태를 보면서 작업해야 하기에 항상 필요합니다. 따라서 많은 사용자들이 위의 스크린샷과 같은 형태로 사용합니다.

### 3. 레이어 대화상자(Layers Dialog)
#### 그림 3.2.9. 레이어 대화상자(Layers dialog)
<img width="1080" alt="그림 3.2.9. 레이어 대화상자(Layers dialog)" src="https://github.com/wonder13662/gimp/assets/15767104/75ca9047-dd8f-4ea2-9a2a-f99e2507acf8">

여러개의 레이어를 가진 이미지를 편집할 때 사용됩니다. GIMP를 전문적으로 사용하려면 필수적으로 사용하게 됩니다. 그리고 레이어 대화 상자는 작업중인 이미지를 보는데에도 사용합니다.

## 🗒️ 참고
### `최근 닫은 독(Recently Closed Docks)`
실수로 GIMP의 대화 상자를 닫아도 `창(Windows)` → `최근 닫은 독(Recently Closed Docks)` 메뉴를 이용하면 스크린샷과 같은 모습으로 쉽게 복구시킬 수 있습니다.
(TODO 스크린샷 및 관련 동영상 필요) 

#### 그림 3.2.11. `창` → `최근 닫은 독`
<img width="358" alt="창-최근_닫은_독" src="https://github.com/wonder13662/gimp/assets/15767104/90bfd69b-48ab-46d1-992d-18377afc1408">

#### 그림 3.2.12. `Windows` → `Recently Closed Docks`
<img width="337" alt="windows-recently-closed-docks" src="https://github.com/wonder13662/gimp/assets/15767104/f1c526e6-40a5-4eaf-a40e-6715d3420a46">

#### 영상 3.2.9. ⚠️탭을 닫고나서 `최근 닫은 독`의 목록에 아무것도 없음
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/28a9dde1-984f-4639-85b5-16e3aca8a8af"></video>

### 창 메뉴(Window menu)
창 메뉴는 열려있는 이미지가 있을 때에만 사용이 가능합니다. 
(TODO 스크린샷 및 관련 동영상 필요)

### `탭 설정(Configure this tab)` 버튼
독(dock)에 탭을 추가하거나, 닫기, 떼어내기를 하려면 대화 상자의 오른쪽 상단에 있는 `탭 설정(Configure this tab)` 버튼을 클릭합니다. 이 버튼을 누르면 탭 메뉴가 표시됩니다. 메뉴에서 `탭 추가(Add Tab)`, `탭 닫기(Close Tab)`, 또는 `탭 떼어내기(Detach Tab)` 중 필요한 메뉴를 선택합니다.

#### 영상 3.2.10. 탭 추가(Add Tab)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c2859f79-24af-41ff-8ec6-e859da6c8fb8"></video>

#### 영상 3.2.11. 탭 닫기(Close Tab)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5d38720a-30b5-4466-9719-292c7f66dc5c"></video>

#### 영상 3.2.12. 탭 떼어내기(Detach Tab)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/50310e90-46d0-445f-9801-a676bd5db9e7"></video>

[다음 절(3.2.1. 기본 도구 상자)](./03-02-01-the-toolbox.md)에서는 스크린샷에 있는 각 창(Window)의 구성 요소들과 기능에 대해 설명하겠습니다. [3.2.1. 기본 도구 상자](./03-02-01-the-toolbox.md)와 [GIMP 이미지의 기본 구조]()를 통해 GIMP를 이용한 기본적인 이미지 편집의 다양한 방법을 배울 수 있습니다.
(TODO "GIMP 이미지의 기본 구조"는 어떤 페이지인지 확인이 필요함)

## 다른 페이지로 가기
[➡️ 다음: 3.2.1. 기본 도구 상자](./03-02-01-the-toolbox.md)

[⬅️ 이전: 3.1. GIMP(김프)의 기본 개념들](./03-01-basic-concepts.md)

[⬆️ 위: 3. GIMP(김프)의 첫 번째 단계](./03-00-first-step-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-main-windows.html)