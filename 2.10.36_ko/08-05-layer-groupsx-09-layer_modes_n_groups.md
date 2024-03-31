# 8.5.9. 레이어 모드와 그룹(Layer Modes and Groups)

## 1. 레이어 그룹 안의 레이어에 레이어 모드를 적용했을 때
레이어 그룹 안의 레이어에 적용된 레이어 모드는 레이어 그룹 안에 있는 레이어에만 적용됩니다.

<a id="90-04-03-02-a171"></a>

#### [영상 90.4.3.2.a171. 레이어 그룹 안의 레이어에 레이어 모드 적용](./90-04-03-02-layer_group.md#90-04-03-02-a171)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/64014aa2-f75b-4ee4-afc6-5228029613c4"></video>

## 2. 레이어 그룹 바깥의 레이어에 레이어 모드를 적용했을 때
레이어 그룹 바깥의 레이어에 적용된 레이어 모드는 해당 레이어 아래의 레이어 그룹 안과 바깥에 있는 레이어에 모두 적용됩니다.

<a id="90-04-03-02-a172"></a>

#### [영상 90.4.3.2.a172. 레이어 그룹 바깥의 레이어에 레이어 모드 적용](./90-04-03-02-layer_group.md#90-04-03-02-a172)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/af44a9be-d32d-4723-b326-f5aaa8cb7d11"></video>

## 3. 레이어 그룹 만의 레이어 모드: `Pass Through`
GIMP(김프) 2.10 이후로 레이어 그룹에 특별한 레이어 모드가 생겼습니다. 바로 레이어 모드 `Pass Through`입니다. 이 레이어 모드는 레이어 그룹이 활성화된 경우에만 선택할 수 있습니다.

레이어 그룹에 레이어 모드 `Pass Through`가 적용되면, 레이어 그룹 안의 레이어들은 레이어 그룹이 아닌 레이어 스택에만 쌓여있는 것 처럼 동작합니다. 레이어 그룹 안의 레이어들이 자신들보다 아래에 있는 레이어 그룹 바깥과 안쪽의 레이어들과 혼합(Blending)됩니다.

좀 더 자세한 정보는 [용어집 - Pass Through](./19-glossaryx-pass_through.md)를 참고해주세요.

## 4. 레이어 그룹의 레이어 모드: `Normal`
레이어 그룹의 레이어 모드가 `Normal`이면, 레이어 그룹 안의 레이어들은 하나의 레이어처럼 다루어집니다. 레이어 그룹 아래의 다른 레이어들과 하나의 레이어로써 혼합(Blending)되게 됩니다. 레이어 그룹의 레이어 중에 다른 레이어와 혼합(Blending)되는 레이어는 레이어 그룹 안에서 자신보다 아래에 있는 레이어와만 혼합(Blending)되게 됩니다.

***

## 다른 페이지로 가기
[➡️ 다음: 8.5.10. 불투명도(Opacity)](./08-05-layer-groupsx-10-opacity.md)

[⬅️ 이전: 8.5.8. 레이어 그룹 끼워 넣기(Embed Layer Groups)](./08-05-layer-groupsx-08-embed_layer_groups.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-layer-groups.html)
