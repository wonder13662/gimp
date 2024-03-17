# 8.2. 레이어 모드
## 1. GIMP 2.10의 레이어 모드
GIMP(김프)는 38개의 레이어 모드가 있습니다. 이 38개의 레이어 모드는 7개의 그룹으로 나뉩니다.

1. [Normal](./08-02-01-normal-layer-mode.md)
2. [Lighten](./08-02-02-lighten-layer-mode.md)
3. [Darken](./08-02-03-darken-layer-modes.md)
4. [Contrast](./08-02-04-contrast-layer-modes.md)
5. [Inversion](./08-02-05-inversion-layer-modes.md)
6. [HSV components](./08-02-06-hsv-components-layer-modes.md)
7. [LCh components](./08-02-07-lch-components-layer-modes.md). 

## 2. GIMP 2.10 이전의 레이어 모드
위의 레이어 모드 외에도 [레거시 레이어 모드](./08-03-legacy-layer-modes.md)도 있습니다. 레거시 레이어 모드는 GIMP(김프) 2.10 이전에 사용되었던 레이어 모드입니다. 이 레이어 모드들은 오래된 버전의 GIMP(김프) 파일을 열 경우의 하위 버전 호환성을 위해서 사용되고 있습니다. 하지만 새로운 이미지를 만들때는 사용해서는 안됩니다.

## 3. 레이어 모드는 어떻게 동작하나요?
레이어 모드는 "블렌딩 모드"라고도 합니다. 레이어 모드를 선택해서 선택된 레이어의 아래 레이어를 기준으로 레이어나 이미지의 모습을 바꿉니다. 이미지의 각 레이어는 다른 레이어 모드를 가질 수 있습니다. 레이어 모드의 효과는 차례대로 쌓여 누적됩니다. 그러나 레이어 모드: "Normal"이 아닌 다른 레이어 모드들은 가장 아래의 레이어 또는 레이어 그룹에는 영향을 주지 않습니다.

## 4. 레이어 모드는 어떻게 설정하나요?
[레이어 대화상자](./15-02-01-layers-dialog.md)의 위쪽의 "모드" 드롭다운 메뉴에서 레이어 모드를 설정할 수 있습니다. GIMP(김프)는 레이어 모드를 위쪽의 레이어와 그 밑의 레이어의 픽셀을 어떻게 합칠지 결정하는 방법으로 사용합니다.

#### [그림 90.4.3.7.a11. 모드(Mode)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-07-layer_mode.html#%EA%B7%B8%EB%A6%BC-90437a11-%EB%AA%A8%EB%93%9Cmode)
[![90-04-03-layers(windows)(ko)(slim)-focus-mode](https://github.com/wonder13662/gimp/assets/15767104/0f62ad29-be47-4bcf-bcb1-6b94dbb95038)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-03-layersx-07-layer_mode.html#%EA%B7%B8%EB%A6%BC-90437a11-%EB%AA%A8%EB%93%9Cmode)

## 5. 레이어 모드의 효과
레이어 모드는 이미지 안에서 복합적으로 색상을 바꿀 수 있게 해줍니다. 레이어 모드는 새로운 레이어를 마스크처럼 쓸 수 있게 해줍니다. 예를 들어서, 하얀색으로 불투명하게 채워진 레이어를 이미지 위에 두고, 레이어 모드를 "HSV 채도(HSV Saturation)"으로 설정하면, 아래의 보여지는 레이어는 흑백으로 보입니다.

#### 영상 8.2.a1. 레이어 모드를 "HSV 채도(HSV Saturation)"로 바꾸기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/60d676cc-1b19-456f-9390-50d87da1aa4d"></video>

## 6. 추가정보: 레이어 모드와 비슷한 페인트 모드
활성화된 도구가 칠하기 도구(painting tool)이라면, 도구 옵션에 레이어 모드와 비슷하게 모드를 선택할 수 있는 드롭다운 목록이 있습니다. 레이어 모드와 같은 모드를 칠하기에 사용할 수 있습니다. 그리고 칠하기 도구만의 추가적인 모드가 있습니다. 상세한 정보는 [14.3.1.3. 칠하기 모드 예제](./14-03-01-common-featuresx-03-paint_mode_examples.md)를 확인해주세요.

#### [그림 90.3.2.23.a115. 그리기 붓의 도구 옵션 - 모드](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-23-paintbrush.html#%EA%B7%B8%EB%A6%BC-903223a115-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%B6%93%EC%9D%98-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98---%EB%AA%A8%EB%93%9C)
[![90-03-02-23-paintbrush(windows)(ko)-focus-mode](https://github.com/wonder13662/gimp/assets/15767104/45e4f406-089e-4ebc-a295-4a5e6ab9e687)](https://wonder13662.github.io/gimp/2.10.36_ko/90-03-02-tool_iconx-23-paintbrush.html#%EA%B7%B8%EB%A6%BC-903223a115-%EA%B7%B8%EB%A6%AC%EA%B8%B0-%EB%B6%93%EC%9D%98-%EB%8F%84%EA%B5%AC-%EC%98%B5%EC%85%98---%EB%AA%A8%EB%93%9C)

## 7. 이번 장에서 사용할 예제 이미지

#### 그림 8.2.a2. 마스크 (위쪽 레이어)
![original-layer-modes-mask](https://github.com/wonder13662/gimp/assets/15767104/8136bac2-7d3e-4f19-a1f0-135064d9247f)

#### 그림 8.2.a3. 배경 이미지 (아래쪽 레이어)
![duck_orig](https://github.com/wonder13662/gimp/assets/15767104/1b3e6533-47ad-4c3b-a9da-e99d6cc99621)

## 8. 레이어 모드 예제
아래의 예제 페이지들은 각 레이어 모드의 효과와 원리에 대해 설명해주고 있습니다.

각 레이어 모드의 결과는 레이어의 색상에 따라 매우 달라질 수 있습니다. 위의 예제 이미지들은 레이어 모드가 어떻게 동작하는지 기본적인 원리만을 알려줍니다. 직접 레이어 모드를 사용해보세요. 비슷한 레이어를 가지고 시작해볼 수 있습니다. 혹은 원본을 복사한 것이어도 좋습니다. 하지만 약간 수정(블러, 이동, 회전, 크기 변경, 색 반전 등)이 되어야 합니다. 그리고 위쪽 레이어의 레이어 모드를 바꿔가면서 어떻게 결과가 달라지는지 확인해보세요.

***

## 하위 페이지

[8.2.1. 레이어 모드-Normal](./08-02-01-normal-layer-mode.md)

[8.2.2. 레이어 모드-Lighten](./08-02-02-lighten-layer-mode.md)

[8.2.3. 레이어 모드-Darken](./08-02-03-darken-layer-modes.md)

[8.2.4. 레이어 모드-Contrast](./08-02-04-contrast-layer-modes.md)

[8.2.5. 레이어 모드-Inversion](./08-02-05-inversion-layer-modes.md)

[8.2.6. 레이어 모드-HSV components](./08-02-06-hsv-components-layer-modes.md)

[8.2.7. 레이어 모드-LCh components](./08-02-07-lch-components-layer-modes.md)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.1. 레이어 모드-Normal](./08-02-01-normal-layer-mode.md)

[⬅️ 이전: 8.1.1. 레이어 속성](./08-01-introduction-to-layersx-01-layer_properties.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-combining.html#gimp-layer-properties)
