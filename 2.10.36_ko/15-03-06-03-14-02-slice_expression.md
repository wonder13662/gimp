# 15.3.6.3.14.2. 슬라이스 표현식(Slice Expression)

<a id="90-04-145-a112"></a>

#### [그림 90.4.145.a112. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112)
<img width="347" height="503" alt="90-04-145-a112" src="https://github.com/user-attachments/assets/9c753828-655e-4429-a63b-7519124475b4" />

`슬라이스 표현식(Slice Expression)` 옵션은 [선택들](./15-03-06-03-14-01-selections.md) 옵션에서 `Slice/Array`을 선택해야 사용할 수 있습니다.

<a id="90-04-145-a112-01"></a>

#### [그림 90.4.145.a112-01. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 원본 팔레트 (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-01)
<img width="377" height="89" alt="90-04-145-a112-01" src="https://github.com/user-attachments/assets/fb110906-7f67-4cc1-b3ab-39527f61843f" />

## 1. 빈값
팔레트의 모든 아이템을 선택합니다.

<a id="90-04-145-a112-02"></a>

#### [그림 90.4.145.a112-02. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: 빈값 (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-02)
<img width="377" height="89" alt="90-04-145-a112-02" src="https://github.com/user-attachments/assets/919a098a-e07d-43d1-a752-e311930bc1d7" />

## 2. `:4,` 또는 `:4`
팔레트의 모든 색상에서 4개의 행(Row)만 남깁니다.

행(Row)의 길이는 자동으로 결정됩니다.

<a id="90-04-145-a112-03"></a>

#### [그림 90.4.145.a112-03. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `:4,` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-03)
<img width="377" height="89" alt="90-04-145-a112-03" src="https://github.com/user-attachments/assets/d9949796-ff4a-413a-b784-d315a4752c0e" />

<a id="90-04-145-a112-04"></a>

#### [그림 90.4.145.a112-04. `Python-fu: 팔레트 정렬` 대화상자 → `슬라이스 표현식`: `:4` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-04)
<img width="377" height="89" alt="90-04-145-a112-04" src="https://github.com/user-attachments/assets/d65eb508-0186-49d4-9db4-c1468337a134" />

## 3. `:1,4`
첫 색상에서부터 4번째 색상까지만 선택합니다.

<a id="90-04-145-a112-05"></a>

#### [그림 90.4.145.a112.5 `Python-fu: 팔레트 정렬` 대화상자 → `:1,4` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-05)
<img width="347" height="89" alt="90-04-145-a112-05" src="https://github.com/user-attachments/assets/6f3bed1b-2b98-4b1f-85d9-2ffe30d524f4" />

## 4. `:,4`
각 행(Row)의 4개의 색상만 선택합니다.

행의 갯수는 자동으로 결정됩니다.

<a id="90-04-145-a112-06"></a>

#### [그림 90.4.145.a112.6. `Python-fu: 팔레트 정렬` 대화상자 → `:,4` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-06)
<img width="347" height="89" alt="90-04-145-a112-06" src="https://github.com/user-attachments/assets/12eaa8ca-1682-4598-ab96-7e8c465d1b3c" />

## 5. `:4,4`
4개의 행에서 각 행의 4개의 색상만 선택합니다.

<a id="90-04-145-a112-07"></a>

#### [그림 90.4.145.a112.7. `Python-fu: 팔레트 정렬` 대화상자 → `:4,4` (Windows) (우리말)](./90-04-0145-python_fu_palette_sort.md#90-04-145-a112-07)
<img width="347" height="89" alt="90-04-145-a112-07" src="https://github.com/user-attachments/assets/2c938378-b9ff-453b-b095-df2bc7a97e53" />

## 6. `4:`
하나의 행의 4번째 이후의 모든 색상을 가져옵니다.

## 7. `4:,4`
모든 행의 4번째 이후의 4개의 색상을 가져옵니다.

행의 갯수는 자동으로 결정됩니다.

## 8. `4:4,4`
4개의 행에서 4번째 이후의 4개의 색상을 가져옵니다.

가져오는 색상의 총 개수는 16개가 됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 15.3.6.3.14.3. 채널 정렬(Channel to Sort)](./15-03-06-03-14-03-channel_to_sort.md)

[⬅️ 이전: 15.3.6.3.14.1. 선택들(Selections)](./15-03-06-03-14-01-selections.md)

[⬆️ 위: 15.3.6.3.14. 팔레트 정렬(Sort Palette)](./15-03-06-03-14-00-sort_palette.md)

[⬆️ 위: 15.3.6.3. 팔레트 컨텍스트 메뉴(The Palettes context menu)](./15-03-06-03-00-the_palettes_context_menu.md)

[⬆️ 위: 15.3.6. 팔레트 대화상자(Palettes dialog)](./15-03-06-00-palettes-dialog.md)

[⬆️ 위: 15.3. 이미지 콘텐츠 관련 대화상자(Image content related dialogs)](./15-03-00-image-content-related-dialogs.md)

[⬆️ 위: 15. 대화상자(Dialogs)](./15-00-dialogs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-palette-dialog.html#gimp-concepts-palettes-menu)