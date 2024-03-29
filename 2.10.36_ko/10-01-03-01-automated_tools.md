# 10.1.3.1. 자동화 도구
디지털 카메라의 지능적인 노출 보정 시스템에도 불구하고, 사진들은 종종 과다 노출되거나 노출이 부족합니다. 혹은 간섭광으로 색이 이상해 지기도 합니다. GIMP(김프)는 이러한 경우의 색상 보정을 위해 버튼 클릭 한번으로 사용 가능한 자동 도구에서부터 다양한 조정값들을 사용할 수 있는 고급 도구들을 지원합니다.

김프에는 다섯 개의 자동 색상 보정 도구들이 있습니다.

## 1. 평준화(Equalize)
#### [그림 90.1.7.14.1.a1. `색` → `자동` → `평준화` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EA%B7%B8%EB%A6%BC-9017141a1-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-equalize](https://github.com/wonder13662/gimp/assets/15767104/a7ed6ccd-411e-4cef-8d29-a21310798748)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EA%B7%B8%EB%A6%BC-9017141a1-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-windows)

[다른 운영체제와 언어의 `색` → `자동` → `평준화` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EA%B7%B8%EB%A6%BC-9017141a2-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-mac)

`평준화(Equalize)`는 색상들을 가능한 강도의 범위에 걸쳐 색상들을 고르게 펴줍니다.

간혹 `평준화(Equalize)`의 결과물이 놀라운 대비(contrast) 효과를 보여주기도 하지만, 대체로 이상한 이미지로 보입니다.

#### [영상 90.1.7.14.1.a3. `색` → `자동` → `평준화` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-01-equalize.html#%EC%98%81%EC%83%81-9017141a3-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%8F%89%EC%A4%80%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/7e9fa797-0a96-43e8-9a74-0a2f1909d9ba"></video>

## 2. 색상 보강(Color Enhance)
#### [그림 90.1.7.14.5.a1. `색` → `자동` → `색상 보강` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a1-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-color_enhance](https://github.com/wonder13662/gimp/assets/15767104/0c44c7c0-f339-4f45-9fed-5d2c1e5d6577)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a1-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-windows)

[다른 운영체제와 언어의 `색` → `자동` → `색상 보강` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a2-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-mac)

`색상 보강(Color Enhance)`은 레이어 색상의 밝기(Lightness)나 색조(Hue)를 변경하지 않고 채도(Saturation) 범위만 증가시킵니다. 그러므로 `색상 보강(Color Enhance)`은 그레이스케일 이미지에서 동작하지 않습니다.

#### [그림 90.1.7.14.5.a4. 색상 보강 사용 전후 비교](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a4-%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-%EC%82%AC%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)
[![90-01-07-14-05-a4-before_n_after(windows)(ko)-label](https://github.com/wonder13662/gimp/assets/15767104/89c75c04-cf70-4a31-9484-e3487870aff9)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EA%B7%B8%EB%A6%BC-9017145a4-%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-%EC%82%AC%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)

#### [영상 90.1.7.14.5.a3. `색` → `자동` → `색상 보강` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-05-color_enhance.html#%EC%98%81%EC%83%81-9017145a3-%EC%83%89--%EC%9E%90%EB%8F%99--%EC%83%89%EC%83%81-%EB%B3%B4%EA%B0%95-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/995fa1b9-a38b-43c3-bd41-dbb7b056bd1b"></video>

## 3. 대비 증가(Stretch Contrast)
#### [그림 90.1.7.14.3.a1. `색` → `자동` → `대비 증가...` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-03-stretch_contrast.html#%EA%B7%B8%EB%A6%BC-9017143a1-%EC%83%89--%EC%9E%90%EB%8F%99--%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-stretch_contrast](https://github.com/wonder13662/gimp/assets/15767104/f7f9e92f-a885-41e0-a503-8a10e3e4d55c)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-03-stretch_contrast.html#%EA%B7%B8%EB%A6%BC-9017143a1-%EC%83%89--%EC%9E%90%EB%8F%99--%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-windows)

[다른 운영체제와 언어의 `색` → `자동` → `대비 증가...` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-03-stretch_contrast.html#%EA%B7%B8%EB%A6%BC-9017143a2-%EC%83%89--%EC%9E%90%EB%8F%99--%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-mac)

`대비 증가(Stretch Contrast)`는 노출이 부족한 이미지에 효과적입니다. 이 기능은 가장 밝은 부분이 색조 범위의 오른쪽에, 그리고 가장 어두운 부분이 검은색이 될 때까지 전체 이미지를 조정합니다.

#### [그림 90.1.7.14.3.a4. 대비 증가 적용 전후 비교](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-03-stretch_contrast.html#%EA%B7%B8%EB%A6%BC-9017143a4-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-%EC%A0%81%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)
[![90-01-07-14-03-a3-stretch_contrast-before_n_after(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/13c1f0b0-67be-4891-9d18-2ee4e77147b4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-03-stretch_contrast.html#%EA%B7%B8%EB%A6%BC-9017143a4-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-%EC%A0%81%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)

#### [영상 90.1.7.14.3.a5. `색` → `자동` → `대비 증가...` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-03-stretch_contrast.html#%EC%98%81%EC%83%81-9017143a5-%EC%83%89--%EC%9E%90%EB%8F%99--%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/049288bc-b11d-43ae-8d5e-4c7907f8fcfc"></video>

`대비 증가(Stretch Contrast)`의 단점으로는 밝기의 양이 전적으로 이미지의 가장 밝은 곳과 가장 어두운 곳에 의해서 결정된다는 것입니다. 그래서 이미지 안에 하얀 점 픽셀이나 검은색 점 픽셀이 하나라도 있으면, 표준화시킬때 효과적이지 않게 작동하게 됩니다.

`대비 증가(Stretch Contrast)`는 빨강, 녹색, 파랑 채널에 독립적으로 작동합니다. 이 기능은 [컬러 캐스트](./19-glossaryx-color_cast.md)를 줄이는 데 효과적입니다.

## 4. HSV 대비 증가(Stretch Contrast HSV)
#### [그림 90.1.7.14.4.a1. `색` → `자동` → `HSV 대비 증가` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-04-stretch_contrast_hsv.html#%EA%B7%B8%EB%A6%BC-9017144a1-%EC%83%89--%EC%9E%90%EB%8F%99--hsv-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-stretch_contrast_hsv](https://github.com/wonder13662/gimp/assets/15767104/f6f801fb-7a62-41e8-a6a2-dacbc4004850)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-04-stretch_contrast_hsv.html#%EA%B7%B8%EB%A6%BC-9017144a1-%EC%83%89--%EC%9E%90%EB%8F%99--hsv-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-windows)

[다른 운영체제와 언어의 `색` → `자동` → `HSV 대비 증가` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-04-stretch_contrast_hsv.html#%EA%B7%B8%EB%A6%BC-9017144a2-%EC%83%89--%EC%9E%90%EB%8F%99--hsv-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-mac)

`HSV 대비 증가(Stretch Contrast HSV)`는 `대비 증가(Stretch Contrast)`와 비슷하게 `HSV` 색상을 강화합니다. 단 채도(Saturation)는 그대로 유지합니다.

#### [그림 90.1.7.14.4.a3. HSV 대비 증가 사용 전후 비교](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-04-stretch_contrast_hsv.html#%EA%B7%B8%EB%A6%BC-9017144a3-hsv-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-%EC%82%AC%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)
[![90-01-07-14-04-a3-comparing-label](https://github.com/wonder13662/gimp/assets/15767104/6d2d5b9c-6b22-4658-b93e-d59b28ad1ae8)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-04-stretch_contrast_hsv.html#%EA%B7%B8%EB%A6%BC-9017144a3-hsv-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-%EC%82%AC%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)

#### [영상 90.1.7.14.4.a4. `색` → `자동` → `HSV 대비 증가` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-04-stretch_contrast_hsv.html#%EC%98%81%EC%83%81-9017144a4-%EC%83%89--%EC%9E%90%EB%8F%99--hsv-%EB%8C%80%EB%B9%84-%EC%A6%9D%EA%B0%80-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/e6033fa8-72c5-4643-ad8c-db1063f86e8f"></video>

## 5. 화이트 밸런스(White balance)
#### [그림 90.1.7.14.2.a1. `색` → `자동` → `화이트 밸런스` (Windows)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-02-white_balance.html#%EA%B7%B8%EB%A6%BC-9017142a1-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B0%B8%EB%9F%B0%EC%8A%A4-windows)
[![90-01-07-colorsx-01-auto(windows)-focus-white_balance](https://github.com/wonder13662/gimp/assets/15767104/8ad7c354-97b5-4702-9f3b-35d1c432424d)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-02-white_balance.html#%EA%B7%B8%EB%A6%BC-9017142a1-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B0%B8%EB%9F%B0%EC%8A%A4-windows)

[다른 운영체제와 언어의 `색` → `자동` → `화이트 밸런스` 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-02-white_balance.html#%EA%B7%B8%EB%A6%BC-9017142a2-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B0%B8%EB%9F%B0%EC%8A%A4-mac)

`화이트 밸런스(White balance)`는 거의 사용되지 않는 색을 제거해서 흰색이나 검정색이 부족한 이미지를 보기 좋게 만들어줍니다.

#### [그림 90.1.7.14.2.a3. 화이트 밸런스 적용 전후 비교](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-02-white_balance.html#%EA%B7%B8%EB%A6%BC-9017142a3-%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B0%B8%EB%9F%B0%EC%8A%A4-%EC%A0%81%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)
[![90-01-07-14-02-a3-comparing-label](https://github.com/wonder13662/gimp/assets/15767104/b4ae9544-94e5-45dd-b3d0-6224a6b90908)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-02-white_balance.html#%EA%B7%B8%EB%A6%BC-9017142a3-%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B0%B8%EB%9F%B0%EC%8A%A4-%EC%A0%81%EC%9A%A9-%EC%A0%84%ED%9B%84-%EB%B9%84%EA%B5%90)

#### [영상 90.1.7.14.2.a4. `색` → `자동` → `화이트 밸런스` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-14-autox-02-white_balance.html#%EC%98%81%EC%83%81-9017142a4-%EC%83%89--%EC%9E%90%EB%8F%99--%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%B0%B8%EB%9F%B0%EC%8A%A4-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ce19f698-5f49-4fdd-8b6e-77eee91f7561"></video>

## 6. 레벨 자동조절(Auto Levels)
### 6-1. `색상` → `레벨`에서 자동조절 사용
#### [그림 90.1.7.9.a1. `색` → `레벨`](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-09-levels.html#%EA%B7%B8%EB%A6%BC-90179a1-%EC%83%89--%EB%A0%88%EB%B2%A8)
[![90-00-image_menu_bar-color-focus-level](https://github.com/wonder13662/gimp/assets/15767104/6b7630bd-f3bd-4c29-959d-98611857918d)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-07-colorsx-09-levels.html#%EA%B7%B8%EB%A6%BC-90179a1-%EC%83%89--%EB%A0%88%EB%B2%A8)

이미지 메뉴에서 `색상` → `레벨`을 선택하면 도구 대화상자가 나타납니다. 

#### [그림 90.4.72.a111. `레벨` 대화상자 → `입력 레벨 자동화` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EA%B7%B8%EB%A6%BC-90472a111-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%9E%85%EB%A0%A5-%EB%A0%88%EB%B2%A8-%EC%9E%90%EB%8F%99%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90 4 72 a101  `레벨` 대화상자 (Windows) (우리말)-focus-auto-input-levels](https://github.com/wonder13662/gimp/assets/15767104/a8e7e121-5c16-447c-a5b7-6e59f6993adc)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EA%B7%B8%EB%A6%BC-90472a111-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%9E%85%EB%A0%A5-%EB%A0%88%EB%B2%A8-%EC%9E%90%EB%8F%99%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 대화상자의 아래쪽에 있는 `입력 레벨 자동화`을 클릭합니다. 결과에 대한 미리보기가 가능하며, 효과를 적용하려면 확인 버튼을 누릅니다. 만약 취소 버튼을 누르면 이미지는 이전 상태로 되돌아갑니다.

#### [영상 90.4.72.a121. `레벨` 대화상자 → `입력 레벨 자동화` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EC%98%81%EC%83%81-90472a121-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%9E%85%EB%A0%A5-%EB%A0%88%EB%B2%A8-%EC%9E%90%EB%8F%99%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ec75e09d-a736-40d8-bb36-3d75857f61e1"></video>

### 6-2. `색상` → `레벨`에서 반자동조절 사용
만약 이미지에서 완전하게 하얀색이거나 검정색인 부분이 있다면, 반자동 조정모드로 레벨 도구를 사용할 수 있습니다. 이는 밝기나 색상 조절에 좋은 방법입니다. 먼저 앞서 말한 레벨 도구를 불러옵니다. 그런 후에 레벨 대화상자의 아래쪽에 있는 스포이드 모양의 세 개의 아이콘을 찾습니다. 

왼쪽 아이콘에 마우스를 가져가면 `모든 채널에 대한 검정색 점 고르기(Pick black point for all channels)`라고 설명이 나옵니다. 

#### [그림 90.4.72.a131. `레벨` 대화상자 → 모든 채널에 대한 검정색 점 고르기(Pick black point for all channels) (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EA%B7%B8%EB%A6%BC-90472a131-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EB%AA%A8%EB%93%A0-%EC%B1%84%EB%84%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B2%80%EC%A0%95%EC%83%89-%EC%A0%90-%EA%B3%A0%EB%A5%B4%EA%B8%B0pick-black-point-for-all-channels-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90 4 72 a131](https://github.com/wonder13662/gimp/assets/15767104/31fbe106-2d71-4950-9e31-79b1181021d1)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EA%B7%B8%EB%A6%BC-90472a131-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EB%AA%A8%EB%93%A0-%EC%B1%84%EB%84%90%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B2%80%EC%A0%95%EC%83%89-%EC%A0%90-%EA%B3%A0%EB%A5%B4%EA%B8%B0pick-black-point-for-all-channels-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이것을 클릭한 뒤 이미지에서 완벽하게 검정색이라고 생각되는 부분을 클릭합니다. 

이번에는 제일 오른쪽에 있는 `모든 채널에 대한 하얀색 점 고르기(Pick white point for all channels)`를 클릭한 후, 완벽하게 흰색이라고 생각되는 부분을 클릭하고 이미지가 변하는 것을 확인합니다. 

#### [그림 90.4.72.a133. `레벨` 대화상자 → 모든 채널에 대한 하얀색 점 고르기(Pick white point for all channels) (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EA%B7%B8%EB%A6%BC-90472a133-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EB%AA%A8%EB%93%A0-%EC%B1%84%EB%84%90%EC%97%90-%EB%8C%80%ED%95%9C-%ED%95%98%EC%96%80%EC%83%89-%EC%A0%90-%EA%B3%A0%EB%A5%B4%EA%B8%B0pick-white-point-for-all-channels-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![그림 90 4 72 a133](https://github.com/wonder13662/gimp/assets/15767104/5ceb437f-65dd-49a0-8de9-b6a8b067f97a)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EA%B7%B8%EB%A6%BC-90472a133-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EB%AA%A8%EB%93%A0-%EC%B1%84%EB%84%90%EC%97%90-%EB%8C%80%ED%95%9C-%ED%95%98%EC%96%80%EC%83%89-%EC%A0%90-%EA%B3%A0%EB%A5%B4%EA%B8%B0pick-white-point-for-all-channels-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

원하는 결과가 나왔다면 확인 버튼을 누르고, 그렇지 않다면 취소 버튼을 누릅니다. 아래 영상에서 전체 과정을 확인해보세요.

#### [영상 90.4.72.a134. `레벨` 대화상자에서 검정색 점과 하얀색 점 고르기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-72-level.html#%EC%98%81%EC%83%81-90472a134-%EB%A0%88%EB%B2%A8-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%97%90%EC%84%9C-%EA%B2%80%EC%A0%95%EC%83%89-%EC%A0%90%EA%B3%BC-%ED%95%98%EC%96%80%EC%83%89-%EC%A0%90-%EA%B3%A0%EB%A5%B4%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/628b689d-52a0-459f-9e1e-87a9aa855a58"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.3.2. 노출 문제](./10-01-03-02-00-exposure_problems.md)

[⬅️ 이전: 10.1.3. 색상 보정](./10-01-03-00-improving_colors.md)

[⬆️ 위: 10.1.3. 색상 보정](./10-01-03-00-improving_colors.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-colors)
