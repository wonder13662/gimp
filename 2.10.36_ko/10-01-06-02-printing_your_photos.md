# 10.1.6.2. 사진 인쇄하기(Printing Your Photos)
GIMP(김프)에서 인쇄를 하기 위해서는 [`이미지 메뉴 바` → `파일` → `인쇄`](./16-02-15-00-print.md) 메뉴로 이동합니다. 

결과물이 이상하게 보이는 것을 막거나 고치기 위해서 아래와 같은 기본적인 개념을 알아두면 유용합니다.

<a id="10-01-06-02-s1"></a>

## 1. 모니터 스크린의 이미지
모니터 스크린의 이미지는 [RGB 모드](./19-glossaryx-color_mode_rgb.md)로 표현됩니다. 

인쇄할 이미지는 [CMY(K) 모드](./19-glossaryx-color_model_cmyk.md)로 표현됩니다. 

따라서 실제 인쇄되는 색상이 모니터에서 본 것과는 다르게 나타날 수도 있습니다. 

이 차이는 RGB-CMYK 색상 대응 차트를 통해 알 수 있습니다. 

이에 대한 더 자세한 내용은 아래 링크를 참고하세요.

- [ICC-Profile](./19-glossaryx-icc_profile.md)
- [CMYK](./19-glossaryx-color_model_cmyk.md)
- [Gamut](./19-glossaryx-gamut.md)

<a id="10-01-06-02-s2"></a>

## 2. 모니터 스크린의 해상도
모니터 스크린의 [해상도](./19-glossaryx-resolution.md)는 75 dpi에서 100 dpi 사이인데 비해 프린터의 해상도는 그보다 10배 이상 높습니다. 

또 인쇄된 이미지의 크기는 사용가능한 픽셀수와 해상도에 좌우되기 때문에 모니터에 보여지는 크기와 인쇄지의 크기가 일치하지 않습니다.

[comment]: <> (TODO 위 위키내용을 파악하여 이 장에서 설명한 내용과 관련된 것들을 정리해야 함)

<a id="10-01-06-02-s3"></a>

## 3. 인쇄 크기 설정하기
인쇄 크기를 설정하려면 [`이미지 메뉴 바` → `이미지` → `인쇄 크기`](./16-06-20-00-print-size.md) 메뉴를 엽니다. 

그리고 원하는 출력물의 크기와 [해상도](./19-glossaryx-resolution.md)를 "인쇄 해상도 설정" 대화상자에서 조정합니다. 

X축 해상도와 Y축 해상도의 [연결 고리(Linkage)](./19-glossaryx-chain.md) 심볼은 X축 해상도와 Y축 해상도 값이 서로 연결되어 있다는 의미입니다. 

연결 고리(Linkage) 심볼을 클릭해서 X축 해상도와 Y축 해상도 값을 분리할 수도 있지만, 위험할 수 있습니다. 

연결 고리(Linkage) 심볼을 분리하는 것은 프린터의 X축 해상도와 Y축 해상도 값이 다른 경우에 사용할 수 있습니다.

<a id="90-01-05-09-a101"></a>

#### [그림 90.1.5.9.a101. `이미지 메뉴 바` → `이미지` → `인쇄 크기`](./90-01-05-09-print_size.md#90-01-05-09-a101)
<img width="977" height="603" alt="90-01-05-09-a101" src="https://github.com/user-attachments/assets/d99cce28-7bf5-4256-92e8-a63181ef7a93" />

<a id="90-04-30-a101"></a>

#### [그림 90.4.30.a101. 인쇄 해상도 설정 대화상자 (Windows) (우리말)](./90-04-0030-set_image_print_resolution.md#90-04-30-a101)
<img width="449" height="343" alt="90-04-30-a101" src="https://github.com/wonder13662/gimp/assets/15767104/6f4138fe-b944-4a86-bd46-9b30ddd4181c" />

[다른 운영체제와 언어의 `인쇄 해상도 설정` 대화상자 확인하기](./90-04-0030-set_image_print_resolution.md#90-04-30-a102)

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.6.3. Exif 데이터(Exif Data)](./10-01-06-03-exif_data.md)

[⬅️ 이전: 10.1.6.1. 파일(Files)](./10-01-06-01-files.md)

[⬆️ 위: 10.1.6. 결과물 저장하기](./10-01-06-00-saving_your_results.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-printing)
