# 8.2. 레이어 모드

<a id="08-02-s1"></a>

## 1. GIMP 2.10의 레이어 모드
GIMP(김프)는 38개의 레이어 모드가 있습니다. 이 38개의 레이어 모드는 7개의 그룹으로 나뉩니다.

1. [Normal](./08-02-01-00-normal-layer-mode.md)
2. [Lighten](./08-02-02-00-lighten-layer-mode.md)
3. [Darken](./08-02-03-00-darken-layer-modes.md)
4. [Contrast](./08-02-04-00-contrast-layer-modes.md)
5. [Inversion](./08-02-05-00-inversion-layer-modes.md)
6. [HSV components](./08-02-06-00-hsv-components-layer-modes.md)
7. [LCh components](./08-02-07-00-lch-components-layer-modes.md). 

<a id="08-02-s2"></a>

## 2. GIMP 2.10 이전의 레이어 모드
위의 레이어 모드 외에도 [레거시 레이어 모드](./08-03-00-legacy-layer-modes.md)도 있습니다. 레거시 레이어 모드는 GIMP(김프) 2.10 이전에 사용되었던 레이어 모드입니다. 이 레이어 모드들은 오래된 버전의 GIMP(김프) 파일을 열 경우의 하위 버전 호환성을 위해서 사용되고 있습니다. 하지만 새로운 이미지를 만들때는 사용해서는 안됩니다.

<a id="08-02-s3"></a>

## 3. 레이어 모드는 어떻게 동작하나요?
레이어 모드는 "블렌딩 모드"라고도 합니다. 레이어 모드를 선택해서 선택된 레이어의 아래 레이어를 기준으로 레이어나 이미지의 모습을 바꿉니다. 이미지의 각 레이어는 다른 레이어 모드를 가질 수 있습니다. 레이어 모드의 효과는 차례대로 쌓여 누적됩니다. 그러나 레이어 모드: "Normal"이 아닌 다른 레이어 모드들은 가장 아래의 레이어 또는 레이어 그룹에는 영향을 주지 않습니다.

<a id="08-02-s4"></a>

## 4. 레이어 모드는 어떻게 설정하나요?
[레이어 대화상자](./15-02-01-00-layers-dialog.md)의 위쪽의 "모드" 드롭다운 메뉴에서 레이어 모드를 설정할 수 있습니다. GIMP(김프)는 레이어 모드를 위쪽의 레이어와 그 밑의 레이어의 픽셀을 어떻게 합칠지 결정하는 방법으로 사용합니다.

<a id="90-04-03-07-a11"></a>

#### [그림 90.4.3.7.a11. 모드(Mode)](./90-04-03-07-layer_mode.md#90-04-03-07-a11)
![90-04-03-layers(windows)(ko)(slim)-focus-mode](https://github.com/wonder13662/gimp/assets/15767104/0f62ad29-be47-4bcf-bcb1-6b94dbb95038)

<a id="08-02-s5"></a>

## 5. 레이어 모드의 효과
레이어 모드는 이미지 안에서 복합적으로 색상을 바꿀 수 있게 해줍니다. 레이어 모드는 새로운 레이어를 마스크처럼 쓸 수 있게 해줍니다. 예를 들어서, 하얀색으로 불투명하게 채워진 레이어를 이미지 위에 두고, 레이어 모드를 "HSV 채도(HSV Saturation)"으로 설정하면, 아래의 보여지는 레이어는 흑백으로 보입니다.

#### 영상 8.2.a1. 레이어 모드를 "HSV 채도(HSV Saturation)"로 바꾸기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/60d676cc-1b19-456f-9390-50d87da1aa4d"></video>

<a id="08-02-s6"></a>

## 6. 추가정보: 레이어 모드와 비슷한 페인트 모드
활성화된 도구가 칠하기 도구(painting tool)이라면, 도구 옵션에 레이어 모드와 비슷하게 모드를 선택할 수 있는 드롭다운 목록이 있습니다. 레이어 모드와 같은 모드를 칠하기에 사용할 수 있습니다. 그리고 칠하기 도구만의 추가적인 모드가 있습니다. 상세한 정보는 [14.3.1.3. 칠하기 모드 예제](./14-03-01-03-paint_mode_examples.md)와 [14.3.1.2.1. 모드(Mode)](./14-03-01-02-01-mode.md)를 확인해주세요.

<a id="90-03-02-23-a115"></a>

#### [그림 90.3.2.23.a115. 칠하기 붓의 도구 옵션 - 모드](./90-03-02-23-paintbrush.md#90-03-02-23-a115)
![90-03-02-23-paintbrush(windows)(ko)-focus-mode](https://github.com/wonder13662/gimp/assets/15767104/45e4f406-089e-4ebc-a295-4a5e6ab9e687)

<a id="08-02-s7"></a>

## 7. 이번 장에서 사용할 예제 이미지

#### 그림 8.2.a2. 마스크 (위쪽 레이어)
![original-layer-modes-mask](https://github.com/wonder13662/gimp/assets/15767104/8136bac2-7d3e-4f19-a1f0-135064d9247f)

#### 그림 8.2.a3. 배경 이미지 (아래쪽 레이어)
![duck_orig](https://github.com/wonder13662/gimp/assets/15767104/1b3e6533-47ad-4c3b-a9da-e99d6cc99621)

<a id="08-02-s8"></a>

## 8. 레이어 모드 예제
아래의 예제 페이지들은 각 레이어 모드의 효과와 원리에 대해 설명해주고 있습니다.

각 레이어 모드의 결과는 레이어의 색상에 따라 매우 달라질 수 있습니다. 위의 예제 이미지들은 레이어 모드가 어떻게 동작하는지 기본적인 원리만을 알려줍니다. 직접 레이어 모드를 사용해보세요. 비슷한 레이어를 가지고 시작해볼 수 있습니다. 혹은 원본을 복사한 것이어도 좋습니다. 하지만 약간 수정(블러, 이동, 회전, 크기 변경, 색 반전 등)이 되어야 합니다. 그리고 위쪽 레이어의 레이어 모드를 바꿔가면서 어떻게 결과가 달라지는지 확인해보세요.

***

## 하위 페이지

[8.2.1. 레이어 모드-Normal](./08-02-01-00-normal-layer-mode.md)

[8.2.1.1. 일반(Normal)](./08-02-01-01-normal.md)

[8.2.1.2. 분해(Dissolve)](./08-02-01-02-dissolve.md)

[8.2.1.3. 색상 지우기(Color Erase)](./08-02-01-03-color_erase.md)

[8.2.1.4. 지우기(Erase)](./08-02-01-04-erase.md)

[8.2.1.5. 합치기(Merge)](./08-02-01-05-merge.md)

[8.2.1.6. 분할(Split)](./08-02-01-06-split.md)

[8.2.2. 레이어 모드-Lighten](./08-02-02-00-lighten-layer-mode.md)

[8.2.2.1. 밝은 색만(Lighten only)](./08-02-02-01-00-lighten_only.md)

[8.2.2.2. 휘도가 밝은 색만(Luma/Luminance lighten only)](./08-02-02-02-00-luma.md)

[8.2.2.3. 화면(Screen)](./08-02-02-03-00-screen.md)

[8.2.2.4. 닷지(Dodge)](./08-02-02-04-00-dodge.md)

[8.2.2.5. 더하기(Addition)](./08-02-02-05-00-addition.md)

[8.2.3. 레이어 모드-어두움(Darken)](./08-02-03-00-darken-layer-modes.md)

[8.2.3.1. 어두운 색만(Darken only)](./08-02-03-01-00-darken_only.md)

[8.2.3.2. 휘도가 어두운 색만(Luma/Luminance darken only)](./08-02-03-02-00-luma_darken_only.md)

[8.2.3.3. 곱하기(Multiply)](./08-02-03-03-00-multiply.md)

[8.2.3.4. 번(Burn)](./08-02-03-04-burn.md)

[8.2.3.5. 선형적 번(Linear burn)](./08-02-03-05-00-linear_burn.md)

[8.2.4. 레이어 모드-대조(Contrast)](./08-02-04-00-contrast-layer-modes.md)

[8.2.4.1. 덧씌우기(Overlay)](./08-02-04-01-overlay.md)

[8.2.4.2. 부드러운 조명(Soft light)](./08-02-04-02-soft_light.md)

[8.2.4.3. 강한 조명(Hard light)](./08-02-04-03-hard_light.md)

[8.2.4.4. 은은한 조명(Vivid light)](./08-02-04-04-vivid_light.md)

[8.2.4.5. 핀 조명(Pin light)](./08-02-04-05-pin_light.md)

[8.2.4.6. 선형 조명(Linear light)](./08-02-04-06-linear_light.md)

[8.2.4.7. 강한 혼합(Hard mix)](./08-02-04-07-hard_mix.md)

[8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-00-inversion-layer-modes.md)

[8.2.5.1. 차이점(Difference)](./08-02-05-01-difference.md)

[8.2.5.2. 제외(Exclusion)](./08-02-05-02-exclusion.md)

[8.2.5.3. 빼기(Subtract)](./08-02-05-03-subtract.md)

[8.2.5.4. 질감 드러내기(Grain extract)](./08-02-05-04-grain_extract.md)

[8.2.5.5. 질감 합치기(Grain merge)](./08-02-05-05-grain_merge.md)

[8.2.5.6. 나누기(Divide)](./08-02-05-06-divide.md)

[8.2.6. 레이어 모드-HSV components](./08-02-06-00-hsv-components-layer-modes.md)

[8.2.6.1. HSV 색상(HSV Hue)](./08-02-06-01-hsv_hue.md)

[8.2.6.2. HSV 채도(HSV Saturation)](./08-02-06-02-hsv_saturation.md)

[8.2.6.3. HSL 색상(HSL Color)](./08-02-06-03-hsl_color.md)

[8.2.6.4. HSV 명도(HSV Value)](./08-02-06-04-hsv_value.md)

[8.2.7. 레이어 모드-LCh components](./08-02-07-00-lch-components-layer-modes.md)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.1. 레이어 모드-Normal](./08-02-01-00-normal-layer-mode.md)

[⬅️ 이전: 8.1.1. 레이어 속성](./08-01-01-00-layer_properties.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-combining.html#gimp-layer-properties)
