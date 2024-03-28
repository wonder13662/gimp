# 10.1.4.2. 거친 정도 줄이기(Reducing Graininess)
빛이 적은 조건이거나 매우 빠른 노출시간으로 사진을 찍으면, 카메라는 각 픽셀의 색상값을 계산할 데이터가 부족하게 됩니다. 그 결과, 이미지의 입자가 거칠게 보입니다.

You can "smooth out" the graininess by blurring the image, but then you will also lose sharpness. There are a couple of approaches that may give better results. 

이미지를 흐리게 해서 거친 입자들을 감출 수 있습니다. 하지만 이미지의 선명함을 잃게 됩니다.

## 1. Selective Blur
Probably the best, if the graininess is not too bad, is to use the filter called [Selective Blur](), setting the blurring radius to 1 or 2 pixels.

## 2. Despeckle filter
The other approach is to use the [Despeckle]() filter. This has a nice preview, so you can play with the settings and try to find some that give good results. When graininess is really bad, though, it is often very difficult to fix by anything except heroic measures (i.e., retouching with paint tools).

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.4.3. 부드럽게 하기(Softening)](./10-01-working-with-digital-camera-photosx-04-adjusting_sharpnessx-03-softening.md)

[⬅️ 이전: 10.1.4.1. 선명하게 하기(Unblurring)](./10-01-working-with-digital-camera-photosx-04-adjusting_sharpnessx-01-unblurring.md)

[⬆️ 위: 10.1.4. 선명도 조절하기(Adjust Sharpness)](./10-01-working-with-digital-camera-photosx-04-adjusting_sharpness.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-unblurring)
