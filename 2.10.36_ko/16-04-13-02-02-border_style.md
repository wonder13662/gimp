# 16.4.13.2.2. 테두리 스타일(Border Style)

<a id="90-04-171-a121"></a>

#### [그림 90.4.171.a121. `테두리 선택` 대화상자 → `테두리 스타일` (Windows) (우리말)](./90-04-0171-border_selection.md#90-04-171-a121)
<img width="349" height="238" alt="90-04-171-a121" src="https://github.com/user-attachments/assets/c35f8b5c-0b07-4965-8f1f-69c8f05975b0" />

<a id="90-04-171-a122"></a>

#### [그림 90.4.171.a122. `테두리 선택` 대화상자 → `테두리 스타일`: 드롭다운 목록 (Windows)](./90-04-0171-border_selection.md#90-04-171-a122)
<img width="191" height="172" alt="90-04-171-a122" src="https://github.com/user-attachments/assets/80627610-4acb-44a3-9893-63648cee5ffa" />

<a id="90-04-171-a125"></a>

#### [그림 90.4.171.a125. `테두리 선택` 대화상자 → `테두리 스타일` → `딱딱하게`, `부드럽게`, `솜털효과`: 타원 선택](./90-04-0171-border_selection.md#90-04-171-a125)
<img width="840" height="280" alt="90-04-171-a125" src="https://github.com/user-attachments/assets/bdfced9f-facc-43f7-a93e-b429240c5e20" />

<a id="90-04-171-a124"></a>

#### [그림 90.4.171.a124. `테두리 선택` 대화상자 → `테두리 스타일` → `딱딱하게`, `부드럽게`, `솜털효과`: 사각형 선택](./90-04-0171-border_selection.md#90-04-171-a124)
<img width="840" height="280" alt="90-04-171-a124" src="https://github.com/user-attachments/assets/a703cfdb-2da8-4b9c-9404-6bedf87dfe99" />

<a id="16-04-13-02-02-s1"></a>

## 1. 딱딱하게(Hard)
`딱딱하게(Hard)` 옵션을 선택하면, 곡선 부분의 계단현상에 대해 [안티-앨리어싱](./19-glossaryx-antialiasing.md)을 사용하지 않습니다.

<a id="16-04-13-02-02-s2"></a>

## 2. 부드럽게(Smooth)
`부드럽게(Smooth)` 옵션을 선택하면, 곡선 부분의 계단현상에 대해 [안티-앨리어싱](./19-glossaryx-antialiasing.md)을 사용합니다.

다만, 곡선의 부분이 상대적으로 작은 경우 - [사각형 선택 예제](./16-04-13-02-02-border_style.md#90-04-171-a124)를 보면, [`딱딱하게(Hard)`](./16-04-13-02-02-border_style.md#16-04-13-02-02-s1) 옵션과 `부드럽게(Smooth)` 옵션의 결과가 차이가 없는 것을 확인할 수 있습니다.

반면, 곡선의 부분이 충분히 크다면, [타원 선택 예제](./16-04-13-02-02-border_style.md#90-04-171-a125)을 보면, [`딱딱하게(Hard)`](./16-04-13-02-02-border_style.md#16-04-13-02-02-s1) 옵션과 `부드럽게(Smooth)` 옵션의 결과가 차이가 명확한 것을 확인할 수 있습니다.

<a id="16-04-13-02-02-s3"></a>

## 3. 솜털효과(Feathered)
`솜털효과(Feathered)` 옵션은 [`딱딱하게(Hard)`](./16-04-13-02-02-border_style.md#16-04-13-02-02-s1) 옵션과 같은 동작을 합니다.

대신에 결과물로 나온 경계가 완전히 선택되는 것이 아니라, 바깥쪽으로 흐려지게 만듭니다.

대체로 결과물이 좋은 편은 아닙니다.

흐려지는 경계를 얻고 싶다면, [`딱딱하게(Hard)`](./16-04-13-02-02-border_style.md#16-04-13-02-02-s1) 옵션, 또는 [`부드럽게(Smooth)`](./16-04-13-02-02-border_style.md#16-04-13-02-02-s2) 옵션으로 작업한 뒤에 직접 [페더](./16-04-09-00-feather.md) 효과를 주는 것이 더 나을 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.4.13.2.3. 이미지 바깥에서 선택 영역 이어지기(Selected area continue outside image)](./16-04-13-02-03-selected_areas_continue_outside_the_image.md)

[⬅️ 이전: 16.4.13.2.1. 테두리 선택 영역 량(Border selection by)](./16-04-13-02-01-border_selection_by.md)

[⬆️ 위: 16.4.13.2. `테두리 선택` 대화상자 설명(Description of the “Border” dialog window)](./16-04-13-02-00-description_of_the_border_dialog_window.md)

[⬆️ 위: 16.4.13. 테두리(Border)](./16-04-13-00-border.md)

[⬆️ 위: 16.4. 선택 메뉴(The select menu)](./16-04-00-the-select-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-selection-border.html#idm25020)