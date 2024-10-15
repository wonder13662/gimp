# 10.1.3.1. 자동화 도구
디지털 카메라의 지능적인 노출 보정 시스템에도 불구하고, 사진들은 종종 과다 노출되거나 노출이 부족합니다. 

혹은 간섭광으로 색이 이상해 지기도 합니다. 

GIMP(김프)는 이러한 경우의 색상 보정을 위해 버튼 클릭 한번으로 사용 가능한 자동 도구에서부터 다양한 조정값들을 사용할 수 있는 고급 도구들을 지원합니다.

GIMP(김프)에는 다섯 개의 자동 색상 보정 도구들이 있습니다.

<a id="10-01-03-01-s1"></a>

## 1. 평준화(Equalize)

<a id="90-01-07-14-01-a1"></a>

#### [그림 90.1.7.14.1.a1. `이미지 메뉴 바` → `색` → `자동` → `평준화` (Windows)](./90-01-07-14-01-equalize.md#90-01-07-14-01-a1)
![90-01-07-colorsx-01-auto(windows)-focus-equalize](https://github.com/wonder13662/gimp/assets/15767104/a7ed6ccd-411e-4cef-8d29-a21310798748)

[다른 운영체제와 언어의 `색` → `자동` → `평준화` 확인하기](./90-01-07-14-01-equalize.md#90-01-07-14-01-a2)

`평준화(Equalize)`는 색상들을 가능한 강도의 범위에 걸쳐 색상들을 고르게 펴줍니다.

간혹 `평준화(Equalize)`의 결과물이 놀라운 대비(contrast) 효과를 보여주기도 하지만, 대체로 이상한 이미지로 보입니다.

<a id="90-01-07-14-01-a3"></a>

#### [영상 90.1.7.14.1.a3. `이미지 메뉴 바` → `색` → `자동` → `평준화` (Windows) (우리말)](./90-01-07-14-01-equalize.md#90-01-07-14-01-a3)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/7e9fa797-0a96-43e8-9a74-0a2f1909d9ba"></video>

<a id="10-01-03-01-s2"></a>

## 2. 색상 보강(Color Enhance)

<a id="90-01-07-14-05-a1"></a>

#### [그림 90.1.7.14.5.a1. `이미지 메뉴 바` → `색` → `자동` → `색상 보강` (Windows)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a1)
![90-01-07-colorsx-01-auto(windows)-focus-color_enhance](https://github.com/wonder13662/gimp/assets/15767104/0c44c7c0-f339-4f45-9fed-5d2c1e5d6577)

[다른 운영체제와 언어의 `이미지 메뉴 바` → `색` → `자동` → `색상 보강` 확인하기](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a2)

`색상 보강(Color Enhance)`은 레이어 색상의 밝기(Lightness)나 색조(Hue)를 변경하지 않고 채도(Saturation) 범위만 증가시킵니다.

그러므로 `색상 보강(Color Enhance)`은 그레이스케일 이미지에서 동작하지 않습니다.

<a id="90-01-07-14-05-a4"></a>

#### [그림 90.1.7.14.5.a4. 색상 보강 사용 전후 비교](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a4)
![90-01-07-14-05-a4-before_n_after(windows)(ko)-label](https://github.com/wonder13662/gimp/assets/15767104/89c75c04-cf70-4a31-9484-e3487870aff9)

<a id="90-01-07-14-05-a3"></a>

#### [영상 90.1.7.14.5.a3. `이미지 메뉴 바` → `색` → `자동` → `색상 보강` (Windows) (우리말)](./90-01-07-14-05-color_enhance.md#90-01-07-14-05-a3)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/995fa1b9-a38b-43c3-bd41-dbb7b056bd1b"></video>

<a id="10-01-03-01-s3"></a>

## 3. 대비 증가(Stretch Contrast)

<a id="90-01-07-14-03-a1"></a>

#### [그림 90.1.7.14.3.a1. `이미지 메뉴 바` → `색` → `자동` → `대비 증가…` (Windows)](./90-01-07-14-03-stretch_contrast.md#90-01-07-14-03-a1)
![90-01-07-colorsx-01-auto(windows)-focus-stretch_contrast](https://github.com/wonder13662/gimp/assets/15767104/f7f9e92f-a885-41e0-a503-8a10e3e4d55c)

[다른 운영체제와 언어의 `색` → `자동` → `대비 증가…` 확인하기](./90-01-07-14-03-stretch_contrast.md#90-01-07-14-03-a2)

[`대비 증가(Stretch Contrast)`](./16-08-18-00-stretch-contrast.md)는 노출이 부족한 이미지에 효과적입니다. 

이 기능은 가장 밝은 부분이 색조 범위의 오른쪽에, 그리고 가장 어두운 부분이 검은색이 될 때까지 전체 이미지를 조정합니다.

<a id="90-01-07-14-03-a4"></a>

#### [그림 90.1.7.14.3.a4. 대비 증가 적용 전후 비교](./90-01-07-14-03-stretch_contrast.md#90-01-07-14-03-a4)
![90-01-07-14-03-a3-stretch_contrast-before_n_after(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/13c1f0b0-67be-4891-9d18-2ee4e77147b4)

<a id="90-01-07-14-03-a5"></a>

#### [영상 90.1.7.14.3.a5. `이미지 메뉴 바` → `색` → `자동` → `대비 증가…` (Windows) (우리말)](./90-01-07-14-03-stretch_contrast.md#90-01-07-14-03-a5)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/049288bc-b11d-43ae-8d5e-4c7907f8fcfc"></video>

`대비 증가(Stretch Contrast)`의 단점으로는 밝기의 양이 전적으로 이미지의 가장 밝은 곳과 가장 어두운 곳에 의해서 결정된다는 것입니다. 

그래서 이미지 안에 하얀 점 픽셀이나 검은색 점 픽셀이 하나라도 있으면, 표준화시킬때 효과적이지 않게 작동하게 됩니다.

`대비 증가(Stretch Contrast)`는 빨강, 녹색, 파랑 채널에 독립적으로 작동합니다. 

이 기능은 [컬러 캐스트](./19-glossaryx-color_cast.md)를 줄이는 데 효과적입니다.

<a id="10-01-03-01-s4"></a>

## 4. HSV 대비 증가(Stretch Contrast HSV)

<a id="90-01-07-14-04-a1"></a>

#### [그림 90.1.7.14.4.a1. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가` (Windows)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a1)
![90-01-07-colorsx-01-auto(windows)-focus-stretch_contrast_hsv](https://github.com/wonder13662/gimp/assets/15767104/f6f801fb-7a62-41e8-a6a2-dacbc4004850)

[다른 운영체제와 언어의 `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가` 확인하기](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a2)

`HSV 대비 증가(Stretch Contrast HSV)`는 `대비 증가(Stretch Contrast)`와 비슷하게 `HSV` 색상을 강화합니다. 

단 [채도(Saturation)](./19-glossaryx-saturation.md)는 그대로 유지합니다.

<a id="90-01-07-14-04-a3"></a>

#### [그림 90.1.7.14.4.a3. HSV 대비 증가 사용 전후 비교](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a3)
![90-01-07-14-04-a3-comparing-label](https://github.com/wonder13662/gimp/assets/15767104/6d2d5b9c-6b22-4658-b93e-d59b28ad1ae8)

<a id="90-01-07-14-04-a4"></a>

#### [영상 90.1.7.14.4.a4. `이미지 메뉴 바` → `색` → `자동` → `HSV 대비 증가` (Windows) (우리말)](./90-01-07-14-04-stretch_contrast_hsv.md#90-01-07-14-04-a4)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/e6033fa8-72c5-4643-ad8c-db1063f86e8f"></video>

## 5. 화이트 밸런스(White balance)

<a id="90-01-07-14-02-a1"></a>

#### [그림 90.1.7.14.2.a1. `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스` (Windows)](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a1)
![90-01-07-colorsx-01-auto(windows)-focus-white_balance](https://github.com/wonder13662/gimp/assets/15767104/8ad7c354-97b5-4702-9f3b-35d1c432424d)

[다른 운영체제와 언어의 `색` → `자동` → `화이트 밸런스` 확인하기](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a2)

`화이트 밸런스(White balance)`는 거의 사용되지 않는 색을 제거해서 흰색이나 검정색이 부족한 이미지를 보기 좋게 만들어줍니다.

<a id="90-01-07-14-02-a3"></a>

#### [그림 90.1.7.14.2.a3. 화이트 밸런스 적용 전후 비교](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a3)
![90-01-07-14-02-a3-comparing-label](https://github.com/wonder13662/gimp/assets/15767104/b4ae9544-94e5-45dd-b3d0-6224a6b90908)

<a id="90-01-07-14-02-a4"></a>

#### [영상 90.1.7.14.2.a4. `이미지 메뉴 바` → `색` → `자동` → `화이트 밸런스` (Windows) (우리말)](./90-01-07-14-02-white_balance.md#90-01-07-14-02-a4)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/ce19f698-5f49-4fdd-8b6e-77eee91f7561"></video>

## 6. 레벨 자동조절(Auto Levels)
### 6-1. `색상` → `레벨`에서 자동조절 사용

<a id="90-01-07-09-a1"></a>

#### [그림 90.1.7.9.a1. `이미지 메뉴 바` → `색` → `레벨`](./90-01-07-09-levels.md#90-01-07-09-a1)
<img width="916" height="970" alt="90-01-07-09-a1" src="https://github.com/user-attachments/assets/67bf07ba-763c-4e47-919b-a6c0c44088a3" />

이미지 메뉴에서 `색상` → `레벨`을 선택하면 도구 대화상자가 나타납니다. 

<a id="90-04-72-a111"></a>

#### [그림 90.4.72.a111. `레벨` 대화상자 → `입력 레벨 자동화` (Windows) (우리말)](./90-04-0072-level.md#90-04-72-a111)
![그림 90 4 72 a101  `레벨` 대화상자 (Windows) (우리말)-focus-auto-input-levels](https://github.com/wonder13662/gimp/assets/15767104/a8e7e121-5c16-447c-a5b7-6e59f6993adc)

이 대화상자의 아래쪽에 있는 `입력 레벨 자동화`을 클릭합니다. 결과에 대한 미리보기가 가능하며, 효과를 적용하려면 확인 버튼을 누릅니다. 만약 취소 버튼을 누르면 이미지는 이전 상태로 되돌아갑니다.

<a id="90-04-72-a121"></a>

#### [영상 90.4.72.a121. `레벨` 대화상자 → `입력 레벨 자동화` (Windows) (우리말)](./90-04-0072-level.md#90-04-72-a121)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/ec75e09d-a736-40d8-bb36-3d75857f61e1"></video>

### 6-2. `색상` → `레벨`에서 반자동조절 사용
만약 이미지에서 완전하게 하얀색이거나 검정색인 부분이 있다면, 반자동 조정모드로 레벨 도구를 사용할 수 있습니다. 이는 밝기나 색상 조절에 좋은 방법입니다. 먼저 앞서 말한 레벨 도구를 불러옵니다. 그런 후에 레벨 대화상자의 아래쪽에 있는 스포이드 모양의 세 개의 아이콘을 찾습니다. 

왼쪽 아이콘에 마우스를 가져가면 `모든 채널에 대한 검정색 점 고르기(Pick black point for all channels)`라고 설명이 나옵니다. 

<a id="90-04-72-a131"></a>

#### [그림 90.4.72.a131. `레벨` 대화상자 → 모든 채널에 대한 검정색 점 고르기(Pick black point for all channels) (Windows) (우리말)](./90-04-0072-level.md#90-04-72-a131)
![그림 90 4 72 a131](https://github.com/wonder13662/gimp/assets/15767104/31fbe106-2d71-4950-9e31-79b1181021d1)

이것을 클릭한 뒤 이미지에서 완벽하게 검정색이라고 생각되는 부분을 클릭합니다. 

이번에는 제일 오른쪽에 있는 `모든 채널에 대한 하얀색 점 고르기(Pick white point for all channels)`를 클릭한 후, 완벽하게 흰색이라고 생각되는 부분을 클릭하고 이미지가 변하는 것을 확인합니다. 

<a id="90-04-72-a133"></a>

#### [그림 90.4.72.a133. `레벨` 대화상자 → 모든 채널에 대한 하얀색 점 고르기(Pick white point for all channels) (Windows) (우리말)](./90-04-0072-level.md#90-04-72-a133)
![그림 90 4 72 a133](https://github.com/wonder13662/gimp/assets/15767104/5ceb437f-65dd-49a0-8de9-b6a8b067f97a)

원하는 결과가 나왔다면 확인 버튼을 누르고, 그렇지 않다면 취소 버튼을 누릅니다. 아래 영상에서 전체 과정을 확인해보세요.

<a id="90-04-72-a134"></a>

#### [영상 90.4.72.a134. `레벨` 대화상자에서 검정색 점과 하얀색 점 고르기 (Windows) (우리말)](./90-04-0072-level.md#90-04-72-a134)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/628b689d-52a0-459f-9e1e-87a9aa855a58"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.3.2. 노출 문제](./10-01-03-02-00-exposure_problems.md)

[⬅️ 이전: 10.1.3. 색상 보정](./10-01-03-00-improving_colors.md)

[⬆️ 위: 10.1.3. 색상 보정](./10-01-03-00-improving_colors.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-colors)
