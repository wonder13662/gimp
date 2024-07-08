# 15.2.5.2. 히스토그램에 대해서(About Histogram)

<a id="15-02-05-02-s1"></a>

## 1. 채널
GIMP(김프)에서는 이미지의 각 레이어는 하나 혹은 그 이상의 [채널](./19-glossaryx-channel.md)로 나눌 수 있습니다.

[RGB 이미지](./19-glossaryx-color_mode_rgb.md)는 빨강, 초록, 파랑 채널로 나눌 수 있습니다.

[그레이스케일 이미지](./19-glossaryx-color_mode_grayscale.md)는 단일 값 채널입니다.

[레이어](./19-glossaryx-layer.md)는 투명한 채널인 [알파 채널](./19-glossaryx-alpha_channel.md)을 사용할 수 있습니다.

<a id="15-02-05-02-s2"></a>

## 2. 채널에서의 픽셀 값
이미지의 픽셀은 각 채널에서 정수로 표현되는 0부터 255까지의 강도를 가질 수 있습니다.

그러므로 검은색 픽셀은 모든 채널에서 0의 값을 갖습니다.

반면 하얀색 픽셀은 모든 채널에서 255의 값을 갖습니다.

투명(Transparency)한 픽셀은 알파 채널에서 0의 값을 갖습니다.

반면 불투명(Opaque)한 픽셀은 알파 채널에서 0의 값을 갖습니다.

<a id="15-02-05-02-s3"></a>

## 3. 가상 채널(Pseudo Channel)
[RGB 이미지](./19-glossaryx-color_mode_rgb.md)에서 `가상 채널(Pseudo Channel)` 값을 정의하는 것이 편리합니다.

`가상 채널(Pseudo Channel)`은 실제 색 채널은 아닙니다.

`가상 채널(Pseudo Channel)`은 이미지 안에 저장된 어떠한 색 정보도 나타내지 않습니다.

그 대신, 실제 이미지의 픽셀 값에서 `가상 채널(Pseudo Channel)`의 픽셀의 값을 다음의 방정식으로 구합니다.

```
V = max(R,G,B)
```

위 방정식은 빨강, 초록, 파랑 채널의 픽셀의 값 중에 가장 큰 것을 구합니다.

이미지를 [그레이스케일 이미지](./19-glossaryx-color_mode_grayscale.md)로 바꿀 경우, 각 픽셀의 값은 위 방정식을 통해서 구하게 됩니다.

<a id="15-02-05-02-s4"></a>

## 4. 채널에 대한 더 많은 정보 확인하기

채널에 대한 더 자세한 내용은 [19. 용어집 - 채널(Channel)](./19-glossaryx-channel.md)을 확인해주세요.

***

## 다른 페이지로 가기

[➡️ 다음: 15.2.5.3. 히스토그램 대화상자 사용하기(Using the Histogram dialog)](./15-02-05-03-00-using_the_histogram_dialog.md)

[⬅️ 이전: 15.2.5.1. 히스토그램 대화상자 활성화하기(Activating the dialog)](./15-02-05-01-activating_the_dialog.md)

[⬆️ 위: 15.2.5. 히스토그램 대화상자(Histogram dialog)](./15-02-05-00-histogram-dialog.md)

[⬆️ 위: 15.2. 이미지 구조 관련 대화상자(Image structure related dialogs)](./15-02-00-image-structure-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-histogram-dialog.html#idm18804)