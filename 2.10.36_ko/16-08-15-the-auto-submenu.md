# 16.8.15. 자동 하위 메뉴(The auto submenu)

<a id="90-01-07-14-a101"></a>

#### [그림 90.1.7.14.a101. `이미지 메뉴 바` → `색` → `자동` (Windows) (우리말)](./90-01-07-14-00-auto.md#90-01-07-14-a101)
<img width="542" height="947" alt="90-01-07-14-a101" src="https://github.com/user-attachments/assets/db007ef4-ee6b-40fd-9c69-1dbcc33b706e" />

`자동 하위 메뉴(The auto submenu)`는 [활성화 레이어](./19-glossaryx-active_layer.md)의 색상의 분포를 자동으로 조정해주는 기능들을 가지고 있습니다.

이 기능들 중에 몇가지는 플러그인으로 구현되었습니다.

## 1. 자동 색상 확장(Automatic Color-Stretching)
GIMP(김프)에는 [활성화 레이어](./19-glossaryx-active_layer.md)의 색상 채널의 히스토그램의 컬럼들을 자동으로 확장하는 몇가지 명령이 있습니다.

이 명령들로 가장 밝은 픽셀을 오른쪽으로 옮기고, 가장 어두운 픽셀을 왼쪽으로 옮기면, 밝은 픽셀들은 더 밝아지고 어두운 픽셀은 더 어두워집니다.

결과적으로 레이어의 대비가 강해집니다.

### 1-1. 자동 색상 확장 기능이 색상(Hue)에 미치는 영향
몇가지 명령들은 빨강, 녹색, 파랑의 세 가지 색상 채널에 똑같이 색상 확장을 합니다.

그러므로 [색상(Hue)](./19-glossaryx-hue.md)은 변하지 않습니다.

그 외의 다른 명령들은 빨강, 녹색, 파랑의 세 가지 색상 채널에 개별적으로 색상 확장을 합니다.

그러므로 [색상(Hue)](./19-glossaryx-hue.md)이 변하게 됩니다.

***

## 하위 메뉴 페이지

[16.8.16. 평준화(Equalize)](./16-08-16-equalize.md)

[16.8.17. 화이트 밸런스(White Balance)](./16-08-17-white-balance.md)

[16.8.18. 대비 증가…(Stretch Contrast…)](./16-08-18-stretch-contrast.md)

[16.8.19. HSV 대비 증가(Stretch Contrast HSV)](./16-08-19-stretch-contrast-hsv.md)

[16.8.20. 색상 보강(Color Enhance)](./16-08-20-color-enhance.md)

[16.8.21. 색상 보강(레거시)(Color Enhance (legacy))](./16-08-21-color-enhance-legacy.md)