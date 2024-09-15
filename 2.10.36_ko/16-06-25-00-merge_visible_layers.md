# 16.6.25. 보이는 레이어 합치기(Merge visible layers)

<a id="90-01-05-15-a101"></a>

#### [그림 90.1.5.15.a101. `이미지 메뉴 바` → `이미지` → `보이는 레이어 합치기`](./90-01-05-15-merge_visible_layers.md#90-01-05-15-a101)
<img width="977" height="603" alt="90-01-05-15-a101" src="https://github.com/user-attachments/assets/ba5888db-ac38-46f4-9f4f-b944dc8a04fd" />

<a id="16-06-25-s1"></a>

## 1. 명령 설명
`보이는 레이어 합치기(Merge visible layers)` 명령은 모든 보이는 레이어를 하나의 레이어로 합칩니다.

<a id="16-06-25-s2"></a>

## 2. 보이는 레이어란 무엇인가요?
보이는 레이어는 [레이어 대화상자](./15-02-01-00-layers_dialog.md)의 [눈 아이콘](./08-01-01-04-visibility.md)이 켜져있는 레이어를 뜻합니다.

<a id="90-04-03-05-a2"></a>

#### [그림 90.4.3.5.a2. 레이어의 가시성 심볼: 눈 아이콘](./90-04-0003-005-visibility.md)
<img width="28" height="29" alt="90-04-03-05-a2" src="https://github.com/wonder13662/gimp/assets/15767104/f2a6e4a3-71b4-40b5-8560-80dc9b2ade83" />

<a id="16-06-25-s3"></a>

## 3. 보이는 원본 레이어들이 사라지지 않고 레이어를 합치려면?
`보이는 레이어 합치기(Merge visible layers)` 명령은 실행된 뒤에는 보이는 원본 레이어가 모두 사라집니다.

보이는 원본 레이어가 사라지지 않고 레이어를 합치려면, [`이미지 메뉴 바` → `레이어` → `보이는 영역에서 새로 만들기`](./16-07-03-new_from_visible.md) 명령을 사용하세요.

이 명령은 레이어 목록 가장 위에 새로운 레이어를 만들고 이 새 레이어에 모든 보이는 레이어를 합친 내용을 넣습니다.

그리고 보이는 원본 레이어들은 유지됩니다.

***

## 관련 정보

[15.2.1.3. 레이어 대화상자 컨텍스트 메뉴(The Layer dialog context menu) - 26. 보이는 레이어 합치기(Merge visible layers)](./15-02-01-03-the_layer_dialog_context_menu.md#15-02-01-03-s26)