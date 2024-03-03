# 3.4.7. 모드 바꾸기
이미지는 목적에 따라 다른 형식을 가집니다. 웹사이트 등에서는 파일의 크기가 작은 것이 중요합니다. 가족사진에서는 높은 품질의 색상정보가 필요합니다. GIMP에서는 이러한 목적에 맞는 이미지 형식을 처리할 수 있습니다. GIMP에서는 세 가지 기본 모드(RGB, 그레이스케일(Grayscale), 인덱스(Indexed))를 지원합니다. 그리고 서로 다른 모드로 전환할 수 있습니다.

#### [그림 90.1.5.2.a1. `이미지` → `모드` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-05-imagex-02-mode.html#%EA%B7%B8%EB%A6%BC-90152a1-%EC%9D%B4%EB%AF%B8%EC%A7%80--%EB%AA%A8%EB%93%9C-windows)
[![그림 90.1.5.2.a1. `이미지` → `모드` (Windows)](https://github.com/wonder13662/gimp/assets/15767104/97db94d4-9a8b-4ab5-9ab3-5e65da6737c7)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-05-imagex-02-mode.html#%EA%B7%B8%EB%A6%BC-90152a1-%EC%9D%B4%EB%AF%B8%EC%A7%80--%EB%AA%A8%EB%93%9C-windows)

[다른 운영체제와 언어의 `이미지` → `모드` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-05-imagex-02-mode.html#%EA%B7%B8%EB%A6%BC-90152a1-%EC%9D%B4%EB%AF%B8%EC%A7%80--%EB%AA%A8%EB%93%9C-windows)

## 3.4.7.1. RGB
기본모드로 높은 화질의 이미지가 필요할 때 사용합니다. RGB 모드에서는 수백만 개의 색상을 표시할 수 있습니다. 그리고 크기 변환, 잘라내기, 뒤집기 등 대부분의 작업 시에 사용합니다. RGB 모드는 각 픽셀이 Red, Green, Blue 세 가지 요소로 구성됩니다. 각 요소는 0-255의 값을 갖습니다. 

## 3.4.7.2. 그레이스케일(Grayscale)
그레이스케일 이미지는 오직 회색톤으로만 표현됩니다. 이 모드는 특수 목적용이거나 파일 크기를 줄이기 위해 사용됩니다. 

## 3.4.7.3. 인덱스(Indexed)
인덱스 모드는 파일 크기가 작아야 하거나, 이미지의 일부 색상만 가지고 작업해야 할 때 씁니다. 인덱스 모드는 전체 이미지의 색상으로 256개 이하의 고정된 개수의 색상을 사용합니다. 기본동작으로 이미지를 제한된 색상의 이미지로 바꿀 때, GIMP는 최적화된 팔레트(optimum palette)를 만들어서 이미지를 나타냅니다.

#### [그림 90.4.32.a101. `이미지를 색인 색상으로 변환` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-32-convert_image_to_indexed_colors.html#%EA%B7%B8%EB%A6%BC-90432a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EC%83%89%EC%9D%B8-%EC%83%89%EC%83%81%EC%9C%BC%EB%A1%9C-%EB%B3%80%ED%99%98-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90.4.32.a101. `이미지를 색인 색상으로 변환` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/309f2a53-e806-4d69-bb89-22799ea04368)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-32-convert_image_to_indexed_colors.html#%EA%B7%B8%EB%A6%BC-90432a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EC%83%89%EC%9D%B8-%EC%83%89%EC%83%81%EC%9C%BC%EB%A1%9C-%EB%B3%80%ED%99%98-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지를 색인 색상으로 변환` 대화상자 확인하기](./90-04-32-convert_image_to_indexed_colors.md)

각 픽셀의 색상을 표현하기 위한 정보가 그다지 많지 않기 때문에, 파일 크기는 굉장히 작습니다. 그리고 가끔 여러 메뉴에서 특별한 이유없이 비활성화된 옵션이 생길 수도 있습니다. 이것은 현재 모드에서는 해당 필터나 옵션을 사용할 수 없다는 의미로, RGB 모드로 바꿈으로써 이러한 문제를 해결할 수 있습니다. 만약 그래도 활성화가 되지 않는다면, 현재 레이어에 투명한 영역이 필요한 옵션이기 때문일 수도 있습니다. 그러한 경우에는 [이미지 메뉴 바(Image Menu Bar)](./03-02-02-image-windowx-02-image-menu.md)의 `레이어` → `투명` → `알파 채널 추가` 메뉴를 통해 알파 채널을 추가해 줍니다.

#### [그림 90.1.6.9.1.a101. `레이어` → `투명` → `알파 채널 추가` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-09-transparencyx-01-add_alpha_channel.html#%EA%B7%B8%EB%A6%BC-901691a101-%EB%A0%88%EC%9D%B4%EC%96%B4--%ED%88%AC%EB%AA%85--%EC%95%8C%ED%8C%8C-%EC%B1%84%EB%84%90-%EC%B6%94%EA%B0%80-windows)
[![그림 90.1.6.9.1.a101. `레이어` → `투명` → `알파 채널 추가` (Windows)](https://github.com/wonder13662/gimp/assets/15767104/3fb3ad7c-4a41-492e-9797-bed56dc9d936)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-06-layerx-09-transparencyx-01-add_alpha_channel.html#%EA%B7%B8%EB%A6%BC-901691a101-%EB%A0%88%EC%9D%B4%EC%96%B4--%ED%88%AC%EB%AA%85--%EC%95%8C%ED%8C%8C-%EC%B1%84%EB%84%90-%EC%B6%94%EA%B0%80-windows)

[다른 운영체제와 언어의 `색인 색상 변환` 대화상자 확인하기](./90-01-06-layerx-03-transparencyx-01-add_alpha_channel.md)

GIMP는 똑똑한 내보내기 기능을 지원하기 때문에, 원하는 파일 형식으로 저장하기 전에 특정한 모드로 변환하지 않아도 알아서 변환이 됩니다.(TODO gif 이미지 변환시에 이런 사례가 보일 것 같음. 확인해보고 추가하자.)

***

## 다른 페이지로 가기
[➡️ 다음: 3.4.8. 이미지 뒤집기](./03-04-08-flip-an-image.md)

[⬅️ 이전: 3.4.6. 이미지 정보 확인하기](./03-04-06-find-info-about-your-image.md)

[⬆️ 위: 3.4. 자주하는 편집 작업](./03-04-00-common-tasks.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tutorial-quickie-change-mode.html)