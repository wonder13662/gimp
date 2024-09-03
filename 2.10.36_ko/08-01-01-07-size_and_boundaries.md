# 8.1.1.7. 크기와 경계(Size and boundaries)
GIMP(김프)에서는 레이어의 경계가 [이미지(캔버스)](./19-glossaryx-canvas.md)의 경계와 일치할 필요는 없습니다.

예를 들어, 텍스트를 만들때, 각 텍스트 아이템은 분리된 레이어에 속해 있습니다. 

그리고 텍스트의 레이어의 크기는 텍스트의 내용에 따라 달라집니다. 

또한 잘라내기-붙여넣기로 새로운 레이어를 만들 때, 새 레이어는 붙여넣기한 대상에 맞춰 늘어납니다. 

이미지 창에서는 현재 활성화된 레이어의 경계가 검정-노랑 점선으로 보여집니다.

<a id="90-04-03-a271"></a>

#### [그림 90.4.3.a271. 이미지 경계(Image Boundary)와 레이어 경계(Layer Boundary)](./90-04-0003-000-layers.md#90-04-03-a271)
![90-04-03-layer_boundary(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/29e4d4f6-e8a0-4bb5-96cb-c13b791f19b9)

이 검은색과 노란색 점선 밖의 공간에서는 어떤 작업도 할 수 없습니다. 

왜냐하면 실제로 점선 밖의 공간에는 아무것도 존재하지 않기 때문입니다. 

따라서, 이 경우에는 레이어의 크기를 조정하면 됩니다.

> 🗒️ 참고
>
> 레이어가 차지하는 메모리의 총량은 레이어의 내용이 아닌 넓이에 의해 좌우됩니다. 따라서 큰 이미지나 많은 레이어를 가진 이미지로 작업을 한다면 레이어의 크기를 적절하게 조절할 필요가 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 8.1.1.8. 불투명도(Opacity)](./08-01-01-08-opacity.md)

[⬅️ 이전: 8.1.1.6. 다른 레이어와 연결(Linkage to other layers)](./08-01-01-06-linkage_to_other_layers.md)

[⬆️ 위: 8.1.1. 레이어 속성과 특성](./08-01-01-00-layer_properties.md)

[⬆️ 위: 8.1. 레이어 소개](./08-01-00-introduction-to-layers.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-combining.html#gimp-layer-properties)
