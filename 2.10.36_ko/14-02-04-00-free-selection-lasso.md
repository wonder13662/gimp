# 14.2.4. 자유 선택 도구(올가미) - Free selection (lasso)
`자유 선택 도구(올가미)`는 마우스 포인터로 선택 영역을 그려서 만듭니다.

## 1. 자유 선택 만드는 방법
`자유 선택 도구(올가미)`는 두가지 방법으로 만들 수 있습니다.

[관련 정보: 3.4.10. 원하는 개체만 선택하여 분리하기 - 1-1. 자유 선택 도구(올가미)](./03-04-10-separating-an-object-from-its-background.md#03-04-10-s1-01)

### 1-1. 자유롭게 그리기(Free hand segment)
이미지 위의 한 지점을 클릭합니다. 그리고 클릭한 뒤에 마우스 버튼을 계속 누른 채로 드래그하여 자유 선택을 그립니다. 시작점에 도착하면, 마우스 버튼을 놓아서 선택을 닫습니다.

<a id="90-03-02-05-a101"></a>

#### [영상 90.3.2.5.a101. 자유 선택 도구(올가미) 사용하기 - 자유롭게 그리기](./90-03-02-05-free_select.md#90-03-02-05-a101)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fa4089d6-4cff-4b95-9a37-b38ce28e642a"></video>

### 1-2. 다각형으로 그리기(Polygonal segment)
이미지 위의 한 지점을 클릭합니다. 그리고 마우스 버튼을 놓습니다. 이후 다른 지점을 클릭하면서, 다각형 선택을 만듭니다. 시작점을 클릭해 닫힌 선택을 선택을 만듭니다.

<a id="90-03-02-05-a102"></a>

#### [영상 90.3.2.5.a102. 자유 선택 도구(올가미) 사용하기 - 다각형으로 그리기](./90-03-02-05-free_select.md#90-03-02-05-a102)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/65c479b4-d623-434a-a094-f5b8283e9e1a"></video>

Ctrl(⌘) 키를 누르고 마우스 포인터를 이동하면, 그어지는 선의 각도가 15도씩 움직이도록 제한합니다. 이 방법으로 수직, 수평선을 쉽게 그릴 수 있습니다.

<a id="90-03-02-05-a102-01"></a>

#### [영상 90.3.2.5.a102.1. 자유 선택 도구(올가미) 사용하기 - 다각형으로 그리기 - 15도 회전 제한](./90-03-02-05-free_select.md#90-03-02-05-a102-01)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0dbba48e-5423-4f5b-a1d5-cd4d40e95d73"></video>

### 1-3. 끝점을 더블클릭해서 선택 닫기
`자유롭게 그리기(Free hand segment)`와 `다각형으로 그리기(Polygonal segment)`에서 닫히지 않은 자유 선택의 마지막 점을 더블 클릭하면, 시작점과 마지막 점이 직선으로 연결되며, 자유 선택이 닫힙니다.

<a id="90-03-02-05-a121"></a>

#### [영상 90.3.2.5.a121. 끝점을 더블클릭해서 선택 닫기 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a121)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/08b3d9f3-e5b1-4fff-8b98-e9003e58f916"></video>

### 1-4. 자유롭게 그리기와 다각형으로 그리기 섞어 쓰기
자유 선택을 그릴 때, 클릭과 드래그, 드롭을 섞어쓰면 `자유롭게 그리기(Free hand segment)`와 `다각형으로 그리기(Polygonal segment)`를 함께 그릴 수 있습니다.

<a id="90-03-02-05-a122"></a>

#### [영상 90.3.2.5.a122. 자유롭게 그리기와 다각형으로 그리기 섞어 쓰기 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a122)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/640ba2ac-e74a-4ab6-a49e-6dfc960e2fba"></video>

마우스 커서가 이미지 창 바깥으로 나갔을 경우, 다시 이미지 창 안쪽으로 들어오면 언제든지 다시 자유 선택을 그릴 수 있습니다.

<a id="90-03-02-05-a123"></a>

#### [영상 90.3.2.5.a123. 자유 선택을 중단한 뒤에 이어서 그리기 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a123)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7bf5a406-b8e6-469c-b66f-f0718e017966"></video>

시작점과 다른 점이 분리되어 있는 경우, 다른 점을 클릭, 드래그하면, 자유 선택의 크기를 확대/축소할 수 있습니다.

<a id="90-03-02-05-a124"></a>

#### [영상 90.3.2.5.a124. 자유 선택의 크기를 확대/축소 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a124)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1961cf9e-cc36-4b45-a60b-0ff5e5e6c830"></video>

## 2. 자유 선택 되돌리기
`다각형으로 그리기(Polygonal segment)` 모드에서 만든 선택은 예비 선택(행진하는 개미)입니다. 아직 작은 노란 원이 보이는 상태입니다. 

이 상태에서 선택을 복사할 수 있습니다.

<a id="90-03-02-05-a125"></a>

#### [영상 90.3.2.5.a125. 예비 선택 복사 및 붙여넣기 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a125)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0bbd16c2-e4aa-4805-9880-69271840592b"></video>

그리고 백 스페이스 키를 눌러서 이전 선택 단계(닫힌 선택 열린 상태로 되돌리기)로 되돌릴 수 있습니다. 그리고 선택을 수정할 수 있습니다.

<a id="90-03-02-05-a126"></a>

#### [영상 90.3.2.5.a126. 백 스페이스를 눌러 이전 단계로 되돌리기 및 수정 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a126)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/2cac7668-9e54-4eab-8e5c-4c26873cc9d5"></video>

⚠️ 주의: Ctrl(⌘) + Z 로 실행취소를 하게 되면, 자유 선택의 단계가 아닌 자유 선택 자체가 취소되게 됩니다.

<a id="90-03-02-05-a127"></a>

#### [영상 90.3.2.5.a127. 예비 선택을 Ctrl(⌘) + Z 로 실행취소 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a127)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/21cc5ff8-12ec-421b-84f7-73a48d675312"></video>

## 3. 자유 선택 취소하기
작업 중이던 예비 선택은 ESC 키를 눌러 취소할 수 있습니다. 이 동작은 실행 취소(Ctrl(⌘) + Z)로 되돌릴 수 없으니, 실행하기 전에 다시 한번 더 확인해주세요.

<a id="90-03-02-05-a128"></a>

#### [영상 90.3.2.5.a128. 자유 선택 취소하기 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a128)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/11cc6106-4480-4395-bbda-92d6425e1b4e"></video>

## 3. 자유 선택 검증하기(Validation)
자유 선택을 만든 뒤 엔터키를 누르거나 마우스 포인터를 자유 선택의 안쪽에 두고 더블 클릭을 하면, 자유 선택이 선택 영역으로 바뀝니다.

<a id="90-03-02-05-a129"></a>

#### [영상 90.3.2.5.a129. 자유 선택 검증하기: 엔터키 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a129)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/82ee4c9d-865b-47ef-aafb-dc895ff581dc"></video>

<a id="90-03-02-05-a130"></a>

#### [영상 90.3.2.5.a130. 자유 선택 검증하기: 자유 선택 안에 더블클릭 (Windows) (우리말)](./90-03-02-05-free_select.md#90-03-02-05-a130)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/b6652178-d85c-4146-8f4c-7df4a41f6977"></video>

## 4. 언제 자유 선택 도구를 쓰나요?
자유선택 도구는 간단하게 선택을 만드는 데 자주 사용됩니다. 하지만, 세밀한 선택을 만들기에는 적합하지 않습니다. 경험이 많은 GMIP(김프) 사용자는 자유선택 도구로 선택을 만들고, [퀵 마스크](./15-02-02-00-channel-dialog.md) 모드에서 세밀한 작업을 진행합니다.

***

## 관련 정보

[3.4.10. 원하는 개체만 선택하여 분리하기 - 1-1. 자유 선택 도구(올가미)](./03-04-10-separating-an-object-from-its-background.md#03-04-10-s1-01)

[15.2.2. 채널 대화상자(Channel dialog)](./15-02-02-00-channel-dialog.md)

***

## 하위 페이지

[14.2.4.1. 도구 활성화하기(Activating the tools)](./14-02-04-01-activating_the_tool.md)

[14.2.4.2. 동작 변경키(Key modifiers)](./14-02-04-02-key_modifiers.md)

[14.2.4.3. 자유 선택 도구(올가미) - Free selection (lasso)](./14-02-04-03-tool_manipulation.md)

[14.2.4.4. 도구 옵션(Tool Options)](./14-02-04-04-tool_options.md)

***

## 다른 페이지로 가기

[➡️ 다음: ?]()

[⬅️ 이전: 14.2.3.5. 타원 그리기(Draw ellipse)](./14-02-03-05-draw_ellipse.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-free-select.html)