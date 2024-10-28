# 16.8.51. 테두리 평균(Border Average)

<a id="90-01-07-19-02-a101"></a>

#### [그림 90.1.7.19.2.a101. `이미지 메뉴 바` → `색` → `정보` → `테두리 평균` (Windows)](./90-01-07-19-02-border_average.md#90-01-07-19-02-a101)
<img width="516" height="266" alt="90-01-07-19-02-a101" src="https://github.com/user-attachments/assets/d3bd1af6-d22e-44d0-91b4-0edafd9c1a16" />

<a id="16-08-51-s1"></a>

## 1. 기능 설명
`테두리 평균(Border Average)` 플러그 인은 [활성화 레이어](./19-glossaryx-active_layer.md) 또는 [선택 영역](./19-glossaryx-selection.md)의 경계에서 가장 자주 사용된 색상을 찾아줍니다.

또한 비슷한 색상들을 모아서 가장 주요한 색으로 만들어 줍니다.

이렇게 찾은 색상은 [도구상자](./19-glossaryx-toolbox.md)의 [전경색](./19-glossaryx-foreground_color.md)이 됩니다.

<a comment="TODO RGB(0, 0, 0)에서 RGB(64, 0, 0)의 10개의 색타일을 가진 이미지를 가지고 테두리 평균을 구하면, 회색이 결과값으로 나옴. 버그 리포트가 필요함."></a>

<a id="16-08-51-s2"></a>

## 2. 사용 사례
이 플러그 인은 이미지의 경계의 변화가 적은 웹페이지의 배경색을 찾을 때 유용합니다.

<a id="16-08-51-s3"></a>

## 3. 실행 취소가 불가능합니다
`테두리 평균(Border Average)` 플러그 인을 사용하면, 이미지를 바꾸는 작업이 아니기 때문에 [실행취소 이력 대화상자](./15-02-07-00-undo-history-dialog.md)에 등록되지 않습니다.

또한, Ctrl(⌘) + `Z`로 되돌릴 수 없습니다.

<a id="16-08-51-s4"></a>

## 4. 사용가능한 색상 모드
이 플러그 인은 [RGB](./19-glossaryx-color_mode_rgb.md) 이미지에서만 쓸 수 있습니다.

[그레이스케일](./19-glossaryx-color_mode_grayscale.md) 이미지 또는 [인덱스](./19-glossaryx-color_mode_indexed.md) 이미지일 경우에는 메뉴가 비활성화 상태가 됩니다.

<a id="16-08-51-s5"></a>

## 5. 명령 활성화하기: `이미지 메뉴 바` → `색` → `정보` → `테두리 평균`

<a id="90-01-07-19-02-a102"></a>

#### [영상 90.1.7.19.5.a102. `이미지 메뉴 바` → `색` → `정보` → `테두리 평균` (Windows) (우리말)](./90-01-07-19-02-border_average.md#90-01-07-19-02-a102)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/1628dc96-a080-4d07-9b8b-5b31dfee8d28"></video>

***

## 하위 페이지

[16.8.51.1. 옵션(Options)](./16-08-51-01-00-options.md)

[16.8.51.1.1. 테두리 크기(Border Size)](./16-08-51-01-01-border_size.md)

[16.8.51.2. 색상수(Number of Colors)](./16-08-51-01-02-number_of_colors.md)

[16.8.51.2. 예제(Examples)](./16-08-51-02-example.md)

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.51.1. 옵션(Options)](./16-08-51-01-00-options.md)

[⬅️ 이전: 16.8.50. 히스토그램(Histogram)](./16-08-50-histogram.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/plug-in-borderaverage.html)