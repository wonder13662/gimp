# 9.1.4.10. 오른쪽에서 왼쪽으로(From Right to Left)
텍스트 박스가 [고정(Fixed) 모드](./19-glossaryx-text_box_mode.md)인 상태에서 텍스트가 텍스트 박스의 오른쪽에 붙습니다.

## 1. 고정 모드로 바꾸기
글자가 쓰여지는 방향을 확인하기 위해서는 텍스트 상자가 동적(Dynamic) 모드가 아닌 고정(Fixed) 모드여야 합니다. 자세한 내용은 [19. 용어집 - 텍스트 박스의 동적, 고정 모드](./19-glossaryx-text_box_mode.md)를 참고해주세요.

## 2. `텍스트 컨텍스트 메뉴` → `오른쪽에서 왼쪽으로`
`텍스트 컨텍스트 메뉴`에서 `오른쪽에서 왼쪽으로`을 클릭합니다. 텍스트 상자가 동적(Dynamic) 모드인 경우에는 변화가 없습니다. 텍스트 상자가 고정(Fixed) 모드인 경우, 텍스트가 텍스트 박스의 오른쪽에 붙어 입력됩니다. 그리고 텍스트 박스에 직접 텍스트를 입력하는 경우, 커서가 맨 앞이면 맨 뒤에 글자가 입력됩니다. 반대로 커서가 맨 뒤면 맨 앞에 글자가 입력됩니다. 아래 영상에서 확인해 볼 수 있습니다.

#### [그림 90.4.68.a291. `텍스트 컨텍스트 메뉴` → `오른쪽에서 왼쪽으로` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-68-text_context_menu.html#%EA%B7%B8%EB%A6%BC-90468a291-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%A9%94%EB%89%B4--%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-68-a291-text_context_menu(windows)(ko)-focus-from_right_to_left](https://github.com/wonder13662/gimp/assets/15767104/25505d30-c399-49ee-bbc6-3472a5724b18)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-68-text_context_menu.html#%EA%B7%B8%EB%A6%BC-90468a291-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%A9%94%EB%89%B4--%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

#### [영상 90.4.67.a191. 텍스트 도구상자 대화상자 - 텍스트 상자 동적(Dynamic) 모드 - 입력 방향은 오른쪽에서 왼쪽으로](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-67-text_toolbox.html#%EC%98%81%EC%83%81-90467a191-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%83%81%EC%9E%90-%EB%8F%99%EC%A0%81dynamic-%EB%AA%A8%EB%93%9C---%EC%9E%85%EB%A0%A5-%EB%B0%A9%ED%96%A5%EC%9D%80-%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/167630eb-ac4d-421f-bd09-f2355c1d20ce"></video>

#### [영상 90.4.67.a192. 텍스트 도구상자 대화상자 - 텍스트 상자 고정(Fixed) 모드 - 입력 방향은 오른쪽에서 왼쪽으로](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-67-text_toolbox.html#%EC%98%81%EC%83%81-90467a192-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%8F%84%EA%B5%AC%EC%83%81%EC%9E%90-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%83%81%EC%9E%90-%EA%B3%A0%EC%A0%95fixed-%EB%AA%A8%EB%93%9C---%EC%9E%85%EB%A0%A5-%EB%B0%A9%ED%96%A5%EC%9D%80-%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/88e999ba-9a6d-4a5b-8ad6-67511b969c56"></video>

## 3. `김프 텍스트 편집기` → `오른쪽에서 왼쪽으로`
`김프 텍스트 편집기` → `오른쪽에서 왼쪽으로`을 선택해서 입력할 수 있습니다. 동작은 위에서 설명한 것과 같습니다만, `김프 텍스트 편집기`로 글자를 입력하는 경우, 커서가 위치한 곳에 글자가 바로 입력되는 모습을 확인할 수 있습니다.

#### [그림 90.4.65.a121. `김프 텍스트 편집기` 대화상자 → `오른쪽에서 왼쪽으로` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-65-gimp_text_editor.html#%EA%B7%B8%EB%A6%BC-90465a121-%EA%B9%80%ED%94%84-%ED%85%8D%EC%8A%A4%ED%8A%B8-%ED%8E%B8%EC%A7%91%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-65-a101-dialog_text_editor(windows)(ko)-focus-from_right_to_left](https://github.com/wonder13662/gimp/assets/15767104/7f7842c1-0650-4599-951f-b7ad76df3171)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-65-gimp_text_editor.html#%EA%B7%B8%EB%A6%BC-90465a121-%EA%B9%80%ED%94%84-%ED%85%8D%EC%8A%A4%ED%8A%B8-%ED%8E%B8%EC%A7%91%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

#### [영상 90.4.65.a122. `김프 텍스트 편집기` 대화상자 → `오른쪽에서 왼쪽으로` (텍스트 박스 동적모드) (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-65-gimp_text_editor.html#%EC%98%81%EC%83%81-90465a122-%EA%B9%80%ED%94%84-%ED%85%8D%EC%8A%A4%ED%8A%B8-%ED%8E%B8%EC%A7%91%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B0%95%EC%8A%A4-%EB%8F%99%EC%A0%81%EB%AA%A8%EB%93%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/6a474371-4ebf-45f1-be7f-1655c3948c49"></video>

#### [영상 90.4.65.a123. `김프 텍스트 편집기` 대화상자 → `오른쪽에서 왼쪽으로` (텍스트 박스 고정모드) (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-65-gimp_text_editor.html#%EC%98%81%EC%83%81-90465a123-%EA%B9%80%ED%94%84-%ED%85%8D%EC%8A%A4%ED%8A%B8-%ED%8E%B8%EC%A7%91%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90--%EC%98%A4%EB%A5%B8%EC%AA%BD%EC%97%90%EC%84%9C-%EC%99%BC%EC%AA%BD%EC%9C%BC%EB%A1%9C-%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B0%95%EC%8A%A4-%EA%B3%A0%EC%A0%95%EB%AA%A8%EB%93%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/799f8096-e911-4293-a48d-d2ce4c7c73e5"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 9.1.4.11 수직으로 오른쪽에서 왼쪽(혼합 방향) - Vertical, right to left(mixed orientation)](./09-01-04-text_context_menux-11-vertical_right_to_left_mixed_orientation.md)

[⬅️ 이전: 9.1.4.9. 왼쪽에서 오른쪽으로(From Left to Right)](./09-01-04-text_context_menux-09-from_left_to_right.md)

[⬆️ 위: 9.1.4. 텍스트 컨텍스트 메뉴(Text Context Menu)](./09-01-04-text_context_menu.md)

[⬆️ 위: 9.1. 텍스트 관리(Text management)](./09-01-text-management.md)

[⬆️ 위: 9. 텍스트 관리(Text management)](./09-00-text-management.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-text-management.html#text-context-menu)
