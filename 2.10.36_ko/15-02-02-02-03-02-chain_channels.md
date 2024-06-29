# 15.2.2.2.3.2. 채널 연결고리(Chain Channels)

<a id="90-04-04-a11-04-02"></a>

#### [그림 90.4.4.a11.4.2. `채널 대화상자` → `채널 속성` → `채널 연결고리` (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-04-02)
<img width="262" height="290" alt="90-04-04-a11-04-02" src="https://github.com/wonder13662/gimp/assets/15767104/7fdf9f5d-25e8-4924-aa1a-b015db42cda8" />

<a id="15-02-02-02-03-02-s1"></a>

## 1. 선택 마스크 채널 목록의 채널 연결 고리

선택 마스크 채널 목록은 `연결고리(chain)` 버튼을 사용해서 연결할 수 있습니다.

`연결고리(chain)` 버튼이 활성화된 모든 채널은 그 중 한 채널이라도 바뀌면 같은 방식으로 바뀌게 됩니다.

아래 영상을 보시면, 연결 고리를 하지 않았을 때와 했을 때의 차이점을 확인할 수 있습니다.

<a id="90-04-04-a11-04-02-01"></a>

#### [영상 90.4.4.a11.4.2.1. `채널 대화상자` → `채널 속성` → `채널 연결고리`: 연결된 채널에 같이 작업하기 (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-04-02-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/038cea3c-8ce3-4b2e-989a-eafb139009fb"></video>

<a id="15-02-02-02-03-02-s2"></a>

## 2. 색상 채널과 알파 채널의 채널 연결 고리 

채널 대화상자 위쪽의 [원색(Primary color) 채널](./15-02-02-02-01-overview.md#15-02-02-02-01-s1)과 알파채널은 `연결고리(chain)` 버튼이 없습니다.

하지만, 모든 색상 채널과 알파 채널은 기본으로 선택되어 있는 상태이므로 강조(Highlighted) 표시가 되어 있습니다.

이 상태에서는 모든 색상 채널과 알파 채널에 작업이 수행됩니다.

목록의 채널을 클릭하여서 채널을 비활성화할 수 있습니다.

[색상화](./16-08-56-colorize.md) 같은 작업을 선택한 채널에만 적용할 수 있습니다.

비활성화한 채널은 클릭하여 다시 활성화시킬 수 있습니다.

아래 영상을 확인해보시면, 색 채널과 알파 채널을 선택하거나 선택을 취소하여서 최종 결과물에 영향을 미치는 모습을 확인할 수 있습니다.

<a id="90-04-04-a11-01-03-01"></a>

#### [영상 90.4.4.a11.1.3.1. `채널 대화상자` → `색 채널`: 모든 채널에 같은 작업하기 (Windows) (우리말)](./90-04-04-channels.md#90-04-04-a11-01-03-01)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/69254f6f-4095-4f67-8f75-ee74714cae57"></video>

⚠️ 주의: 색 채널을 비활성화시키면 의도하지 않은 결과를 얻을 수 있으므로 주의해야 합니다. 예를 들어, 파랑색 채널을 비활성화한 뒤에는 모든 픽셀은 파랑색이 빠져있는 상태가 됩니다. 이 상태에서 하얀색 픽셀은 노란색으로 보여지게 됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 15.2.2.2.4. 채널 관리하기(Managing Channels)](./15-02-02-02-04-00-managing_channels.md)

[⬅️ 이전: 15.2.2.2.2. 채널 잠그기 속성(Channel Lock Attributes)](./15-02-02-02-02-channel_lock_attributes.md)

[⬆️ 위: 15.2.2.2.3. 채널 속성(Channel Attributes)](./15-02-02-02-03-00-channel_attributes.md)

[⬆️ 위: 15.2.2.2. 채널 대화상자 사용하기(Using the Channel Dialog)](./15-02-02-02-00-using_the_channel_dialog.md)

[⬆️ 위: 15.2.2. 채널 대화상자(Channel dialog)](./15-02-02-00-channel_dialog.md)

[⬆️ 위: 15.2. 이미지 구조 관련 대화상자(Image structure related dialogs)](./15-02-00-image-structure-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-channel-dialog.html#gimp-channel-dialog-using-attributes)