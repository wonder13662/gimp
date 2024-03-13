# 8.3. 레거시 레이어 모드
GIMP(김프) 2.10 버전에서 레이어 모드가 바뀌었습니다. GIMP(김프) 2.10 버전 이전의 레이어 모드는 하위 호환성을 위해 여전히 사용할 수 있습니다. 이전 버전의 레이어 모드를 "레거시 레이어 모드"라고 합니다. "레거시 레이어 모드"는 GIMP(김프) 2.10 버전 이전의 이미지들을 불러들이기 위해서만 사용해야 합니다.

GIMP(김프) 2.10 버전의 레이어 모드에 대한 정보는 [레이어 모드](./08-02-00-layer-modes.md)에서 확인해주세요.

## 1. 일반 레이어 모드와 레거시 레이어 모드 전환하기
#### 그림 8.3.a11. 일반 레이어 모드와 레거시 레이어 모드 목록
![08-03-layer_dialog-legacy_layer_mode(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/4f770fba-8374-4805-9617-2c82096ec759)

#### 영상 8.3.a12. 일반 레이어 모드와 레거시 레이어 모드 전환하기
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ca578991-bac1-452b-bdf3-978e7fa9ae6e"></video>

오래된 GIMP(김프) 파일을 열어야 하거나, 레거시 레이어 모드를 써야 한다면, [레이어 대화상자(Layers dialog)](./15-02-01-layers-dialog.md)의 오른쪽 위의 레이어 모드 선택 아이콘을 찾으세요. 이 아이콘을 클릭하면, 기본 레이어 모드와 레거시 레이어 모드를 선택할 수 있는 드랍다운 메뉴가 열립니다. 레거시 레이어 모드를 선택하면, 레이어 모드의 이름의 뒷부분에 "(legacy)"가 붙습니다. 선택한 레이어 모드에는 이름의 뒷부분에 "(l)"이 붙습니다.

#### 그림 8.3.a13. 레거시 레이어 모드의 이름표시 방식
![08-03-drop_down-legacy_layer_mode(windows)(ko)-focus](https://github.com/wonder13662/gimp/assets/15767104/34ec4d75-49cd-4ad6-8f3f-18ce60eafbba)

## 2. 레이어 모드 방정식
레이어 모드를 설명할 때, 레이어 모드의 방정식이 포함됩니다. 이 방정식은 레이어 모드의 수학적인 측면을 설명합니다. 하지만 레이어 모드를 사용하기 위해 방정식을 꼭 이해할 필요는 없습니다.

이러한 방정식은 아래처럼 표현됩니다.

#### 그림 8.3.a21. 레이어 모드 방정식 예제
![08-03-equation-example](https://github.com/wonder13662/gimp/assets/15767104/7ec6c7bf-8b70-44f3-8f03-03704a5eae50)

위 방정식의 의미는 다음과 같습니다. "위쪽 레이어(마스크(Mask), M)와 아래쪽 레이어(이미지(Image), I)의 같은 위치의 픽셀의 색상 컴포넌트(RGB255 등)를 더해 결과 픽셀(E)을 얻습니다." 픽셀의 색상 컴포넌트는 0에서 255 사이여야 합니다. 색상 컴포넌트의 값이 음수인 경우, 0으로 조정됩니다. 색상 컴포넌트의 값이 255보다 큰 경우에는 255로 조정됩니다.

아래의 레거시 레이어 모드 예제들의 이름에서 `(legacy)`는 편의를 위해 제외했습니다.

***

## 하위 페이지
### Normal Layer Modes 
[8.3.1. 레이어 모드(Legacy) - 일반(Normal)](./08-03-legacy-layer-modesx-01-normal_layer_mode-normal.md)

[8.3.2. 레이어 모드(Legacy) - 분해(Dissolve)](./08-03-legacy-layer-modesx-02-normal_layer_mode-dissolve.md)

### Lighten Layer Modes
[8.3.3. 레이어 모드(Legacy) - 밝은 색만(Lighten only)](./08-03-legacy-layer-modesx-03-lighten_layer_mode-ligthen_only.md)

[8.3.4. 레이어 모드(Legacy) - 화면(Screen)](./08-03-legacy-layer-modesx-04-lighten_layer_mode-screen.md)

[8.3.5. 레이어 모드(Legacy) - 닷지(Dodge)](./08-03-legacy-layer-modesx-05-lighten_layer_mode-dodge.md)

[8.3.6. 레이어 모드(Legacy) - 더하기(Addition)](./08-03-legacy-layer-modesx-06-lighten_layer_mode-addition.md)

### Darken Layer Modes
[8.3.7. 레이어 모드(Legacy) - 어두운 색만(Darken only)](./08-03-legacy-layer-modesx-07-darken_layer_mode-darken_only.md)

[8.3.8. 레이어 모드(Legacy) - 곱하기(Multiply)](./08-03-legacy-layer-modesx-08-darken_layer_mode-multiply.md)

[8.3.9. 레이어 모드(Legacy) - 번(Burn)](./08-03-legacy-layer-modesx-09-darken_layer_mode-burn.md)

### Contrast Layer Modes
[8.3.10. 레이어 모드(Legacy) - 덧씌우기(Overlay)](./08-03-legacy-layer-modesx-10-contrast_layer_mode-overlay.md)

[8.3.11. 레이어 모드(Legacy) - 부드러운 빛(Soft light)](./08-03-legacy-layer-modesx-11-contrast_layer_mode-soft_light.md)

[8.3.12. 레이어 모드(Legacy) - 강한 빛(Hard light)](./08-03-legacy-layer-modesx-12-contrast_layer_mode-hard_light.md)

***

## 다른 페이지로 가기
[➡️ 다음: 8.3.1. 레이어 모드(Legacy) - 일반(Normal)](./08-03-legacy-layer-modesx-01-normal_layer_mode-normal.md)

[⬅️ 이전: 8.2.7. 레이어 모드-LCh components](./08-02-07-lch-components-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-layer-modes-legacy.html)