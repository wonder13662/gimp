# 10.1.4.1. 선명하게 하기(Unblurring)
카메라의 초점이 잘 맞지 않았거나, 찍을 때 흔들렸을 경우 사진이 흐릿하게 찍히게 됩니다. 이런 경우, 사진을 보정해 더 낫게 만들 수 있습니다.

## 1. 선명하게 하기 - Sharpen(Unsharp Mask)
The most generally useful technique for sharpening a fuzzy image is called [`필터` → `보강` → `선명하게 하기`](./17-04-08-sharpen-unsharp-mask.md). In spite of the rather confusing name, which derives from its origins as a technique used by film developers, its result is to make the image sharper, not "unsharp". It is a plug-in, and you can access it as Filters → Enhance → Sharpen (Unsharp Mask) in the image menu. There are two parameters, "Radius" and "Amount". The default values often work pretty well, so you should try them first. Increasing either the radius or the amount increases the strength noise in the image and also give rise to visible artifacts where there are sharp edges.

#### 그림 90.1.9.2.7.a1. `필터` → `보강` → `선명하게...` (Windows)
![90-01-09-filtersx-02-enhance(w1080)-focus-sharpen_unsharpen_mask(windows)](https://github.com/wonder13662/gimp/assets/15767104/1a306ad6-8d76-446b-bfb0-ecd7aeb70ad3)

#### [그림 90.4.77.a101. `선명하게 하기` 대화상자 (Windows) (우리말)]()
[![그림 90 4 77 a101  `선명하게 하기` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/6318a007-1f0d-4ec5-bfae-9d4afad17625)]()

## 2. 분해(Decompose) 및 구성(Compose)
Sometimes using Sharpen (Unsharp Mask) can cause color distortion where there are strong contrasts in an image. When this happens, you can often get better results by decomposing the image into separate Hue-Saturation-Value(HSV) layers, and running Sharpen (Unsharp Mask) on the Value layer only, then recomposing. This works because the human eye has much finer resolution for brightness than for color. See the section [`색` → `성분` → `분해`](./16-08-27-decompose.md) and [`색` → `성분` → `구성`](./16-08-26-compose.md) for more information.

#### 그림 90.4.79.a101. `분해` 대화상자 (Windows) (우리말)
![그림 90 4 79 a101  `분해` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/5fe50758-137a-4841-ab81-7670c79cae03)

#### 그림 90.4.78.a101. `구성` 대화상자 (Windows) (우리말)
![그림 90 4 78 a101  `구성` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/01e35985-22bd-48e7-b439-0f4f880e9fcb)

(TODO Decompose 및 Compose 과정 영상 추가)

## 3. 흐릿하게/선명하게(Blur/Sharpen) 도구
In some situations, you may be able to get useful results by selectively sharpening specific parts of an image using the [Blur/Sharpen]() tool from the Toolbox, in "Sharpen" mode. This allows you to increase the sharpness in areas by painting over them with any paintbrush. You should be restrained about this, though, or the results will not look very natural: sharpening increases the apparent sharpness of edges in the image, but also amplifies noise.

(TODO 흐릿하게/선명하게(Blur/Sharpen) 도구 이미지 추가)
(TODO 흐릿하게/선명하게(Blur/Sharpen) 도구 사용 예시 영상)

***

## 다른 페이지로 가기

[➡️ 다음: ?]()

[⬅️ 이전: ?]()

[⬆️ 위: 10.1.4. 선명도 조절하기(Adjust Sharpness)](./10-01-working-with-digital-camera-photosx-04-adjusting_sharpness.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-unblurring)
