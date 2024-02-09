# 5.1. 이미지 타입
**이미지**를 이미지 창에 보여지는 그림 또는 [JPEG](./06-01-filesx-02-file_formatsx-03-export_image_as_jpeg.md)같은 파일이라고 생각하기 쉽습니다. 하지만 실제로는 GIMP(김프)의 이미지는 복잡한 구조를 가지고 있습니다. 여러가지 타입의 객체가 더해진 레이어 층을 가지고 있습니다. 여러가지 타입의 객체는 마스크 선택 영역, 채널, 경로, 그리고 "실행 취소" 이력 등을 말합니다. 이 장에서는 GIMP(김프)의 이미지의 구성요소들을 자세히 살펴보겠습니다. 그리고 이 구성요소들로 할 수 있는 작업들을 알아보겠습니다.

이미지의 가장 기본적인 속성은 이미지의 색상 모드입니다. 3가지의 색상 모드가 있습니다. `RGB`, `그레이스케일(grayscale)`, 그리고 `인덱스(indexed)` 입니다.

`RGB`는 Red(빨강), Green(초록), Blue(파랑)을 의미합니다. 그리고 이미지의 각 점(픽셀)은 "red", "green", "blue"의 각 레벨로 표시합니다. 이로써 색상을 가지는 이미지로 표시됩니다. 각 색상 채널은 256 단계의 강도를 가집니다. 더 자세한 내용은 [컬러 모델(Color Models)](./19-glossaryx-color-model.md)을 참고해주세요.

`그레이스케일(grayscale)` 이미지는 각 점이 0(검정)에서 255(흰색)까지의 발기 값을 가지는 여러가지 회색들로 표현됩니다.

개념적으로 `그레이스케일(grayscale)` 이미지와 `RGB` 이미지 사이의 차이는 컬러 채널의 갯수의 차이입니다. 

`그레이스케일(grayscale)` 이미지는 광도에 관한 1개의 컬러 채널을 가지고 있습니다. 

#### [그림 90.90.1.a112. Color Channel: Grayscale](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a112-color-channel-grayscale)
[![wilber-channel-gray](https://github.com/wonder13662/gimp/assets/15767104/17dfeee9-0dc1-4bd9-850d-814be3ced385)](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a112-color-channel-grayscale)

`RGB` 이미지는 3개의 컬러 채널을 가지고 있습니다. `RGB` 이미지는 3개의 컬러 채널(Red(빨강), Green(초록), Blue(파랑))을 포개어 놓은 것으로 생각할 수 있습니다. 

#### [그림 90.90.1.a111. Color Channel: RGB](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a111-color-channel-rgb)
[![wilber-channel-rgb](https://github.com/wonder13662/gimp/assets/15767104/02f98ed9-ad8e-4901-8707-03b02d1cc976)](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a111-color-channel-rgb)

실제로 `RGB` 이미지와 `그레이스케일(grayscale)` 이미지는 알파 채널이라고 하는 추가적인 색상 채널을 가지고 있습니다. 알파 채널은 이미지의 투명도를 나타냅니다. 레이어의 특정 위치의 알파 채널의 값이 최소값인 0이면, 레이어의 특정 위치는 투명합니다. 그러므로 아래의 레이어의 모습을 볼 수 있습니다. 레이어의 특정 위치의 알파 채널의 값이 최대값인 255이면, 레이어의 특정 위치는 불투명합니다. 그러므로 아래의 레이어의 모습을 볼 수 없고, 알파 채널의 레이어의 모습만 볼 수 있습니다. 알파 채널의 값을 조정함으로써 투명도/불투명도를 설정할 수 있습니다. 이 값을 조정하면 현재 레이어와 아래의 레이어와의 픽셀의 색상을 섞는 비율을 바꿀 수 있습니다.

GIMP(김프)에서의 알파 채널을 포함한 모든 컬러 채널은 이미지 정확도에 따른 값 범위를 가지고 있습니다. 8비트 이미지의 색상 깊이의 경우, 0부터 255까지의 값을 가집니다. GIMP(김프)는 16비트 그리고 32비트 이미지를 열 수 있습니다. 그리고 16비트와 32비트의 경우, 더 넓은 색상 깊이를 가질 수 있습니다.

`RGB` 컬러 모델에서는 빨강, 초록, 파랑을 모두 합치면 흰색이 됩니다. 이 방식은 실제로 모니터에서 색을 조합하는 방식(가산 혼합 - addictive)입니다.

#### [그림 90.90.1.a101. Color Model: RGB](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a101-color-model-rgb)
[![color-model-additive](https://github.com/wonder13662/gimp/assets/15767104/20ee4023-afb8-4233-8d2b-70c46d5924c8)](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a101-color-model-rgb)

`CMY(K)` 컬러 모델에서는 사이언(Cyan), 마젠다(Magenta), 노랑(Yellow)를 합치면 검정이 됩니다. 이 방식은 실제로 인쇄할 때의 방식(감산 혼합 - subtractive)입니다. 인쇄기는 실제로도 사이언(Cyan), 마젠다(Magenta), 노랑(Yellow) 카트리지의 색상을 합치지 않고 단 하나의 검은색 카트리지를 사용해 인쇄를 합니다. 이는 색상을 적게 사용하는 경제적인 이유도 있고, 더 나은 색상을 보여주는 결과를 가져옵니다.

#### [그림 90.90.1.a102. Color Model: CMY](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a102-color-model-cmy)
[![color-model-subtractive](https://github.com/wonder13662/gimp/assets/15767104/e101bf1e-8f07-463f-9bc2-2113927937c2)](https://wonder13662.github.io/gimp/2.10.36_ko/90-90-01-color_model.html#%EA%B7%B8%EB%A6%BC-90901a102-color-model-cmy)

세번째 타입인 `인덱스(indexed)` 컬러 모델은 다소 이해하기 쉽지 않습니다. `인덱스(indexed)` 이미지는 제한된 색상들만 사용할 수 있습니다. 보통은 256 색상이거나 그보다 적은 색상을 사용합니다. `인덱스(indexed)` 컬러 모델은 8비트 정확도의 이미지에만 적용할 수 있습니다. 이 색상들은 이미지의 색상표(colormap)를 구성합니다. 그리고 이미지의 각 픽셀의 색상은 이 색상표(colormap)에서 온 것입니다. `인덱스(indexed)` 이미지는 상대적으로 매우 적은 메모리를 사용하는 이점을 가지고 있습니다. 그래서 10년 전의 환경에서는 `인덱스(indexed)` 이미지가 매우 널리 사용되었습니다. 시간이 지나면서, `인덱스(indexed)` 이미지는 점점 사용하지 않게 되었습니다. 하지만 아직까지는 GIMP(김프)에서 `인덱스(indexed)` 이미지를 지원하고 있습니다. (또한 몇가지 이미지 조작에서 `RGB` 이미지보다 `인덱스(indexed)` 이미지가 더 나은 점이 있습니다.)

GIMP(김프)에서 파일을 열 때, 자주 사용되는 파일 형식([GIF](./06-01-filesx-02-file_formatsx-01-export_image_as_gif.md)과 [PNG](./06-01-filesx-02-file_formatsx-04-export_image_as_png.md)을 포함) 중에 어떤 파일 형식은 `인덱스(indexed)` 이미지로 열립니다. GIMP(김프)의 많은 수의 도구와 필터들이 `인덱스(indexed)` 이미지에서는 제한된 색상의 갯수 때문에 잘 작동하지 않습니다. 이러한 이유로, 보통 작업전에 `인덱스(indexed)` 이미지를 `RGB` 이미지로 바꿉니다. 필요하다면, `인덱스(indexed)` 이미지로 언제든지 다시 바꿀 수 있습니다.

GIMP(김프)에서는 이미지 메뉴 바의 [Mode](./16-06-03-mode.md) 명령으로 이미지 모드를 쉽게 바꿀 수 있습니다. `RGB` 모드에서 `그레이스케일(grayscale)` 모드 또는 `인덱스(indexed)` 모드로의 전환 등은 색상 정보를 잃을 수 있습니다. 그리고 이 작업이 완료된 뒤에는 원래 색상 정보로 복구가 불가능할 수 있습니다.

> 🗒️ 참고
>
> 이미지에 필터를 적용하려고 할 때, 만약 해당 메뉴가 비활성된다면, 대부분 작업하려는 이미지나 레이어의 모드가 잘못되어 있는 경우입니다. 
> 대부분의 필터들은 `인덱스(indexed)` 이미지에서 사용이 불가능하고, 일부는 `RGB` 모드나 `그레이스케일(grayscale)` 모드 전용입니다. 또 일부 필터는 알파 채널이 필요합니다. 따라서 일반적으로 편집을 위한 이미지 모드 변환은 `RGB` 모드로의 변환을 의미합니다.

## 다른 페이지로 가기

[➡️ 다음: 5.2. 새 파일 만들기](./05-02-creating-new-files.md)

[⬅️ 이전: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[⬆️ 위: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-export-gif-colors-changed.https://docs.gimp.org/2.10/ko/gimp-images-in.html)
