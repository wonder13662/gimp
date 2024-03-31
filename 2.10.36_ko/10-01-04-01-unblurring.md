# 10.1.4.1. 선명하게 하기(Unblurring)
카메라의 초점이 잘 맞지 않았거나, 찍을 때 흔들렸을 경우 사진이 흐릿하게 찍히게 됩니다. 이런 경우, 사진을 보정해 더 낫게 만들 수 있습니다.

## 1. 선명하게 하기 - Sharpen(Unsharp Mask)
흐릿한 이미지를 선명하게 하려면 [`필터` → `보강` → `선명하게 하기`](./17-04-08-sharpen-unsharp-mask.md)를 사용합니다.

실제로 메뉴는 영문으로 `Sharpen(Unsharp Mask)`이라고 쓰여져 있습니다. 우리말로 직역하면 "선명하게(덜 선명한 마스크)"라고 되어 있어 혼란스러울 수 있습니다. 이 기능은 필름 개발자들에 사용되던 기술에서 유래된 이름입니다. 실제로 이 기능은 "더 선명하게(Sharper)" 이미지를 바꿔줍니다. "덜 선명하게(Unsharp)"하게 만들지 않습니다.

이 기능은 플러그인이며, [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `보강` → `선명하게...`로 사용할 수 있습니다.

<a id="90-01-09-02-07-a1"></a>

#### [그림 90.1.9.2.7.a1. `필터` → `보강` → `선명하게...` (Windows)](./90-01-09-filtersx-02-enhancex-07-sharpen_unsharp_mask.md#90-01-09-02-07-a1)
![90-01-09-filtersx-02-enhance(w1080)-focus-sharpen_unsharpen_mask(windows)](https://github.com/wonder13662/gimp/assets/15767104/1a306ad6-8d76-446b-bfb0-ecd7aeb70ad3)

[다른 운영체제와 언어의 `필터` → `보강` → `선명하게...` 확인하기](./90-01-09-filtersx-02-enhancex-07-sharpen_unsharp_mask.md#90-01-09-02-07-a2)

슬라이더 `반경(Radius)`과 `양(Amount)`으로 입력값을 조절할 수 있습니다. 기본값으로도 잘 작동하므로, 우선 기본값으로 적용해보세요.

<a id="90-04-77-a101"></a>

#### [그림 90.4.77.a101. `선명하게 하기` 대화상자 (Windows) (우리말)](./90-04-77-sharpen_unsharp_mask.md#90-04-77-a101)
![그림 90 4 77 a101  `선명하게 하기` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/6318a007-1f0d-4ec5-bfae-9d4afad17625)

[다른 운영체제와 언어의 `선명하게 하기` 대화상자 확인하기](./90-04-77-sharpen_unsharp_mask.md#90-04-77-a102)

슬라이더 `반경(Radius)`과 `양(Amount)`의 값을 높이면, 이미지의 노이즈를 강하게 합니다. 또한 선명한 경계에 시각적인 부산물이 보여집니다.

<a id="90-04-77-a111"></a>

#### [영상 90.4.77.a111. `선명하게 하기` 대화상자 → 슬라이더 `반경(Radius)` 조절 (Windows) (우리말)](./90-04-77-sharpen_unsharp_mask.md#90-04-77-a111)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/46b1c757-8229-4592-8f3b-7983376a0420"></video>

<a id="90-04-77-a112"></a>

#### [영상 90.4.77.a112. `선명하게 하기` 대화상자 → 슬라이더 `양(Amount)` 조절 (Windows) (우리말)](./90-04-77-sharpen_unsharp_mask.md#90-04-77-a112)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/6c3d191e-63ea-402a-bf42-a5e2c1436f5e"></video>

## 2. 분해(Decompose) 및 구성(Compose)
[이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `보강` → `선명하게...`을 사용하면 이미지의 대조가 강한 경우에 때때로 색상 왜곡이 일어납니다. 색상 왜곡이 일어나면, 이미지를 HSV로 분해(Decompose)해서 색상(Hue)-채도(Saturation)-명도(Value) 레이어로 분리합니다.

<a id="90-04-79-a101"></a>

#### [그림 90.4.79.a101. `분해` 대화상자 (Windows) (우리말)](./90-04-79-decompose.md#90-04-79-a101)
![그림 90 4 79 a101  `분해` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/5fe50758-137a-4841-ab81-7670c79cae03)

[다른 운영체제와 언어의 `분해` 대화상자 확인하기](./90-04-79-decompose.md#90-04-79-a102)

<a id="90-04-79-a111"></a>

#### [영상 90.4.79.a111. `분해` 대화상자 → `HSV` (Windows) (우리말)](./90-04-79-decompose.md#90-04-79-a111)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/4982e199-8f77-4f22-91dc-521bf57be295"></video>

그리고 명도(Value) 레이어에만 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `보강` → `선명하게...`를 적용합니다. 

#### 영상 10.1.4.1.a101. 명도(Value) 레이어에 `선명하게` 적용
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/58e8ef4f-2186-425d-a2d5-fa3b56aa20de"></video>

그리고 다시 레이어들을 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `색` → `성분` → `구성...`을 적용해서 하나로 만듭니다.

<a id="90-04-78-a101"></a>

#### [그림 90.4.78.a101. `구성` 대화상자 (Windows) (우리말)](./90-04-78-compose.md#90-04-78-a101)
![그림 90 4 78 a101  `구성` 대화상자 (Windows) (우리말)](https://github.com/wonder13662/gimp/assets/15767104/01e35985-22bd-48e7-b439-0f4f880e9fcb)

[다른 운영체제와 언어의 `구성` 대화상자 확인하기](./90-04-78-compose.md#90-04-78-a102)

<a id="90-04-78-a105"></a>

#### [영상 90.4.78.a105. `구성` 대화상자 → `HSV` (Windows) (우리말)](./90-04-78-compose.md#90-04-78-a105)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/43016a08-52b6-46ef-853b-4989f8e7ab40"></video>

사람의 시각은 색상보다 명암에 대해 더 민감하므로 이 방법은 효과적입니다. 더 자세한 내용은 [16.8.27. 분해(Decompose)](./16-08-27-decompose.md)와 [16.8.26. 구성(Compose)](./16-08-26-compose.md)을 참고해주세요.

## 3. 흐릿하게/선명하게(Blur/Sharpen) 도구
[흐릿하게/선명하게(Blur/Sharpen)]() 도구의 "선명하게" 모드로 이미지의 부분만을 "선명하게" 처리를 하는 것이 좋을 수도 있습니다. 칠하기 붓으로 이미지를 칠해서 영역의 선명도를 올려줍니다.

<a id="90-03-02-33-a2"></a>

#### [그림 90.3.2.33.a2. 도구상자 - '흐릿하게/선명하게'](./90-03-02-tool_iconx-33-blur_sharpen.md#90-03-02-33-a2)
![그림 90.3.2.33.a2. 도구상자 - '흐릿하게/선명하게'](https://github.com/wonder13662/gimp/assets/15767104/b0a3539c-e757-40c6-b3a8-66e730e743ce)

이 방법은 매우 부자연스러운 결과가 나올 수 있기 때문에 자제하면서 사용해야 합니다. "선명하게(Sharpen)"은 이미지의 경계의 선명한 정도를 증가시키며 노이즈도 역시 함께 확대합니다.

<a id="90-03-02-33-a111"></a>

#### [영상 90.3.2.33.a111. 흐릿하게/선명하게(Blur/Sharpen)로 이미지의 선명도 올리기](./90-03-02-tool_iconx-33-blur_sharpen.md#90-03-02-33-a111)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/82df94fb-425d-491a-a6e8-a997bb566094"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.4.2. 거친 정도 줄이기(Reducing Graininess)](./10-01-04-02-reducing_graininess.md)

[⬅️ 이전: 10.1.4. 선명도 조절하기(Adjust Sharpness)](./10-01-04-00-adjusting_sharpness.md)

[⬆️ 위: 10.1.4. 선명도 조절하기(Adjust Sharpness)](./10-01-04-00-adjusting_sharpness.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-unblurring)
