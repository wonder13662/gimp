# 4.2.4. 활성화된 drawable이 보이지 않는 경우
(TODO drawable을 정의해야 합니다. 이는 용어 사전 - Glossary에 추가되어야 합니다. drawable은 사용자가 그릴 수 있는 모든 대상(레이어, 채널, 패스 등)을 의미합니다)

## 4.2.4.1. 문제 확인
레이어가 보이지 않는다면, 레이어가 숨김 상태일 수 있습니다. 레이어 대화상자는 각 레이어를 보이거나 숨길 수 있습니다. [레이어 대화상자](./15-02-01-00-layers-dialog.md)를 확인해보세요. 그리고 작업하려는 레이어가 활성화되어있는지 확인하세요. 활성화되어 있다면 더 어두운 색으로 표시됩니다. 그리고 눈 아이콘 모양이 왼쪽에 표시됩니다.

<a id="90-04-03-05-a1"></a>

#### [그림 90.4.3.5.a1. 레이어의 숨김 상태](./90-04-0003-005-visibility.md#90-04-03-05-a1)
![90-04-03-05-a1](https://github.com/wonder13662/gimp/assets/15767104/5724d0c0-8444-4d84-a4b8-26dd4f15170c)

<a id="90-04-03-10-a11"></a>

#### [영상 90.4.3.10.a11. 레이어 대화상자의 활성화된 drawable](./90-04-0003-010-drawable.md#90-04-03-10-a11)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/36977bde-0050-40be-89a3-77e96b95b007"></video>

영상에서 레이어 대화상자의 레이어를 클릭시, 클릭한 레이어 배경은 더 어두워지고, 레이어의 이름은 볼드체로 두꺼워져 눈에 띄게 됩니다.

<a id="90-04-03-10-a21"></a>

#### [영상 90.4.3.10.a21. 레이어 대화상자의 비활성화된 drawable에 붓으로 그리기 실패](./90-04-0003-010-drawable.md#90-04-03-10-a21)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3e8176fa-3479-422f-9f5e-83b3ad30fb88"></video>

비활성화된 drawable(눈 아이콘이 꺼진 레이어)를 수정하려고 할 경우에는 GIMP에서 경고창("The active layer is not visible")을 보여줍니다.

## 4.2.4.2. 해결방법
작업하려는 레이어가 활성화 상태가 아니라면, 레이어 대화상자 안의 레이어를 클릭해서 활성화시켜주세요. 모든 레이어가 비활성화 상태라면, 활성화된 drawable은 [채널](./19-glossaryx-channel.md)일 수도 있습니다. 이 경우에는 [채널 대화 상자](./15-02-02-00-channel_dialog.md)를 확인해보세요. 레이어의 눈 아이콘이 보이지 않는다면, 레이어 대화상자의 레이어의 눈 아이콘을 클릭해주세요. 눈 아이콘이 보인다면 레이어도 화면에서 보이게 됩니다. 자세한 내용은 [15.2.1. 레이어 대화상자](./15-02-01-00-layers-dialog.md)에서 확인할 수 있습니다.

<a id="90-04-03-10-a31"></a>

#### [영상 90.4.3.10.a31. 채널 대화 상자의 활성화된 drawable](./90-04-0003-010-drawable.md#90-04-03-10-a31)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/78b9917a-5a00-4337-8a7b-3f6e189f3848"></video>

영상의 레이어 대화상자에는 활성화된 레이어가 없습니다. 그러나 채널 대화상자의 채널은 활성화되어 있습니다. 그러므로 레이어가 활성화되지 않았던 것입니다.

<a id="90-04-03-05-a11"></a>

#### [영상 90.4.3.5.a11. 레이어의 눈 아이콘 토글로 레이어 보이기/숨기기](./90-04-0003-005-visibility.md#90-04-03-05-a11)
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/836a5ca4-2185-4148-9e0e-60e3a50f8480"></video>

영상의 레이어의 눈 아이콘이 체크되지 않았을 때는 붓으로 그리려고 하면 [경고 메시지](./04-02-04-the-active-drawable-is-not-visible.md#90-04-03-10-a21)가 이미지 창 하단에 노출됩니다. 레이어 눈 아이콘을 체크한 뒤에는 붓으로 그리기가 성공합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 4.2.5. 활성화된 drawable이 투명한 경우](./04-02-05-the-active-drawable-is-tranparent.md)

[⬅️ 이전: 4.2.3. 선택영역 바깥쪽에서 작업을 하려는 경우](./04-02-03-you-are-acting-outside-the-selection.md)

[⬆️ 위: 4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-drawable-invisible.html)
