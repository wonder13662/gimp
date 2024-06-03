# 10.1.2.1. 이미지 회전시키기

사진을 찍을 때 카메라를 정확하게 수직으로 고정시키지 않으면 사진이 비뚤어지게 됩니다. 이런 사진은 GIMP(김프)의 [14.4.5. 회전 도구](./14-04-05-00-rotate.md)로 사진을 똑바로 고칠 수 있습니다. 

[회전 도구](./14-04-05-00-rotate.md)는 도구상자에서 회전 도구 아이콘을 클릭하거나 이미지 안에서 Shift(⇧) + R 키를 누르면 사용할 수 있습니다.

#### 영상 10.1.2.1.a101. 도구상자에서 회전 도구 아이콘을 클릭
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/27b31ac9-6503-4af9-a67a-536f1d35845b"></video>

#### 영상 10.1.2.1.a102. 이미지 안에서 Shift(⇧) + R 키 누르기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/79cbeb45-cc49-4861-b504-28e8d4eec3ea"></video>

도구 옵션의 "변형:" 부분에서 "레이어 변형"이 선택되어 있는지 확인합니다.

<a id="90-04-01-12-a101"></a>

#### [그림 90.4.1.12.a101. 변형: 레이어 변형 (Windows) (우리말)](./90-04-01-12-rotate.md#90-04-01-12-a101)
![90-04-01-12-a101-rotate(windows)(ko)-focus-transform_layer](https://github.com/wonder13662/gimp/assets/15767104/a37012ad-9d58-44c0-a4d5-dc2635f9f9b3)

그런 다음 이미지 안에서 마우스 버튼을 클릭한 뒤, 드래그하면, 그에 따라 회전되는 격자를 볼 수 있습니다. 원하는 위치에 격자가 오면 "회전" 버튼을 누르거나 "Enter" 키를 눌러 이미지를 회전시킵니다.

특정한 각도를 맞추기 위해 아주 조금씩 회전시킨다면, 문제가 있습니다. 회전을 시킬때마다 픽셀들이 조금씩 틀어지면서 이미지가 점점 흐릿해지는 문제입니다. 회전을 한번 시키면 흐릿해지는 효과는 거의 없지만, 회전이 반복되면 흐릿해지는 효과가 점점 증가하게 됩니다. 따라서 한번 회전을 시킨 뒤 실행 취소를 하고, 필요한 각도만큼 다시 회전시키는 것이 좋습니다. 아래 영상에서 12번 회전시켜 흐릿해진 이미지와 원본 이미지를 비교한 것을 확인해보세요.

#### 영상 10.1.2.1.a122. 이미지 회전 시키기 - 자주 회전시켜서 흐릿해짐(문제 발생)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8b3f0a09-d367-4457-9a44-f504549c36b8"></video>

GIMP(김프)에서 이 문제를 해결하기 위한 또다른 방법으로 회전 도구 옵션의 변형 방향에서 `후진(교정)`(`Backward (Corrective)`)라는 방법을 쓸 수 있습니다. `후진(교정)`으로 사용자가 회전시키는 반대 방향으로 회전시켜 기울어진 픽셀들을 정렬할 수 있습니다.

#### 영상 10.1.2.1.a131. 이미지 회전 시키기 - `후진(교정)`
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/25df931e-ffe3-4d6e-bccb-695235b3b0fc"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.3. 색상 보정](./10-01-03-00-improving_colors.md)

[⬅️ 이전: 10.1.1. 들어가기](./10-01-01-introduction.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-improving)
