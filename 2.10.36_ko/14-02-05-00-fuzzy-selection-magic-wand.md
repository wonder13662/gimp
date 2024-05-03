# 14.2.5. 퍼지 선택(마법 지팡이) - Fuzzy selection(magic wand)

<a id="90-03-02-08-a1"></a>

#### [그림 90.3.2.8.a1. 도구상자의 퍼지 선택의 도구옵션](./90-03-02-08-fuzzy_select.md#90-03-02-08-a1)
![90-03-02-08-a1](https://github.com/wonder13662/gimp/assets/15767104/59bfa923-2940-4687-9ca9-2aae4df010aa)

## 1. 퍼지 선택(마법 지팡이)이란?
`퍼지 선택(마법 지팡이)` 도구는 작업중인 이미지나 레이어에서 비슷한 색상이 연속적으로 이어진 영역을 선택하는 도구입니다. 이미지의 한 지점을 선택하면, 선택한 지점의 색상과 비슷한 색상으로 이어진 픽셀들이 모두 선택됩니다.

<a id="90-03-02-08-a101"></a>

#### [영상 90.3.2.8.a101. 이미지 안의 배경 영역 선택](./90-03-02-08-fuzzy_select.md#90-03-02-08-a101)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5bdf065c-08c3-4e6d-b7db-b32c8d9f36aa"></video>

## 2. 퍼지 선택(마법 지팡이)의 임계값(범위) 조정
도구 옵션의 임계값(Threshold)에서 마우스 버튼을 누른 채 드래그해서 비슷한 색상의 임계값(범위)를 조절할 수 있습니다. 아래쪽이나 오른쪽으로 드래그하면 더 많은 영역이 선택되고, 위쪽이나 왼쪽으로 드래그하면 더 적은 영역이 선택됩니다.

<a id="90-03-02-08-a121"></a>

#### [그림 90.3.2.8.a121. `도구 옵션` → `퍼지 선택` → `임계값` (Windows) (우리말)](./90-03-02-08-fuzzy_select.md#90-03-02-08-a121)
![90-03-08-fuzzy_select(w1080)-focus-threshold](https://github.com/wonder13662/gimp/assets/15767104/afc3bcd8-a1a5-41c7-8c06-dc632d773086)

<a id="90-03-02-08-a122"></a>

#### [영상 90.3.2.8.a122. `도구 옵션` → `퍼지 선택` → `임계값` (Windows) (우리말)](./90-03-02-08-fuzzy_select.md#90-03-02-08-a122)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/fb714519-4c1f-4bc3-960a-06ebc8b0b84b"></video>

## 3. 퍼지 선택(마법 지팡이)의 용도
`퍼지 선택(마법 지팡이)` 도구는 뚜렷한 외곽선을 가진 대상을 선택할 때 좋습니다. 쓰기 쉽기 때문에 초심자가 자주 사용하곤 합니다. 하지만 `퍼지 선택(마법 지팡이)` 도구를 더 자주 사용하면 할수록 원하는 결과를 얻기가 어려워집니다. 경험이 많은 사용자들은 `퍼지 선택(마법 지팡이)` 도구보다는 [경로(Paths)](./14-05-02-paths.md)와 [색상으로 선택하기(Select by color)](./14-02-06-select-by-color.md)를 더 자주 효과적으로 사용합니다. 그럼에도 불구하고 불완전한 선택을 개선하거나, 윤곽 안의 영역을 선택하려고 할 때는 유용합니다. 특히 단색 배경을 선택할 때는 매우 잘 동작합니다.

***

## 하위 페이지

[14.2.5.1. 도구 활성화하기(Activating the tools)](./14-02-05-01-activating_the_tool.md)

[14.2.5.2. 동작 변경키(Key modifiers)](./14-02-05-02-key_modifiers.md)

[14.2.5.3. 도구 사용(Tool manipulation)](./14-02-05-03-tool_manipulation.md)

[14.2.5.4. 도구 옵션(Tool Options)](./14-02-05-04-tool_options.md)

***

## 다른 페이지로 가기

[➡️ 다음: 14.2.5.1. 도구 활성화하기(Activating the tools)](./14-02-05-01-activating_the_tool.md)

[⬅️ 이전: 14.2.4.4. 도구 옵션(Tool Options)](./14-02-04-04-tool_options.md)

[⬆️ 위: 14.2. 선택 도구(Selection tools)](./14-02-00-selection-tools.md)

[⬆️ 위: 14. 도구(Tools)](./14-00-tools.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-fuzzy-select.html)