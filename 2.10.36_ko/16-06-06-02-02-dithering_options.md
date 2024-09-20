# 16.6.6.2.2. 디더링 옵션(Dithering options)

<a id="16-06-06-02-02-s1"></a>

## 1. 디더링의 역할
인덱스 모드 이미지는 256개 혹은 더 적은 색상을 가지기 때문에, 원본 이미지의 몇몇 색상들은 팔레트에 없는 색상일 수 있습니다.

그렇기 때문에 미묘한 색상의 변화가 있는 부분에서는 얼룩이나 색상이 조각으로 나뉘어서 보여집니다.

이런 부작용을 디더링 옵션으로 교정할 수 있습니다.

<a id="16-06-06-02-02-s2"></a>

## 2. 디더링의 동작 방식
디더링 필터는 픽셀의 색상이 팔레트에 없는 경우, 팔레트의 색상의 모음을 사용하여 비슷한 색을 만들어 냅니다.

멀리서 보게되면, 이 색상들의 모음들은 새로운 색처럼 보입니다.

더 자세한 내용은 [19. 용어집 - 디더링(Dithering)](./19-glossaryx-dithering.md)을 참고해주세요.

<a id="16-06-06-02-02-s3"></a>

## 3. 디더링 필터 소개

<a id="90-04-32-a130"></a>

#### [그림 90.4.32.a130. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a130)
<img width="658" height="566" alt="90-04-32-a130" src="https://github.com/user-attachments/assets/e6de1312-3f31-42dd-a19b-8b7a84edb843" />

<a id="90-04-32-a131"></a>

#### [그림 90.4.32.a131. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링`: 드롭다운 목록 (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a131)
<img width="601" height="197" alt="90-04-32-a131" src="https://github.com/user-attachments/assets/36a4d28e-1e95-4e51-9296-c45ba1164c67" />

세가지의 디더링 필터를 사용할 수 있습니다.

아쉽게도 이미지에 적용될 디더링 필터의 결과를 미리 예상해서 볼 수는 없습니다.

그래서 직접 복제본을 만들어서 실험해 봐야 합니다.

또한 디더링 필터 옵션 중 `위치`는 애니메이션에 적합합니다.

아래 예시 이미지는 16개의 인덱스 색상을 사용합니다.

<a id="90-04-32-a140"></a>

#### [그림 90.4.32.a140. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링`: 원본 (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a140)
<img width="320" height="80" alt="90-04-32-a140" src="https://github.com/user-attachments/assets/5f682269-3270-4aec-a9d9-436806d0d77f" />

<a id="90-04-32-a141"></a>

#### [그림 90.4.32.a141. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링` → `없음` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a141)
<img width="320" height="80" alt="90-04-32-a141" src="https://github.com/user-attachments/assets/89a1c230-e3e0-42d9-bfa9-d8fd9d6bc365" />

<a id="90-04-32-a142"></a>

#### [그림 90.4.32.a142. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링` → `Folyd-Steinberg(보통)` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a142)
<img width="320" height="80" alt="90-04-32-a142" src="https://github.com/user-attachments/assets/a58a8c2f-62bc-47b9-a42b-9d6a54d6edc0" />

<a id="90-04-32-a143"></a>

#### [그림 90.4.32.a143. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링` → `Folyd-Steinberg Color(보통)` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a143)
<img width="320" height="80" alt="90-04-32-a143" src="https://github.com/user-attachments/assets/b1aa06c3-20db-4fc9-8e9b-1461f8ebdb17" />

<a id="90-04-32-a144"></a>

#### [그림 90.4.32.a144. `이미지를 색인 색상으로 변환` 대화상자 → `디더링` → `색상 디더링` → `위치` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a144)
<img width="320" height="80" alt="90-04-32-a144" src="https://github.com/user-attachments/assets/640dee9f-7216-4eb2-a255-061d167a386e" />

<a id="16-06-06-02-02-s4"></a>

## 4. 투명도의 디더링 활성화(Enable dithering of transparency)

<a id="90-04-32-a151"></a>

#### [그림 90.4.32.a151. `이미지를 색인 색상으로 변환` 대화상자 → `투명도의 디더링 활성화` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a151)
<img width="658" height="566" alt="90-04-32-a151" src="https://github.com/user-attachments/assets/90b1d863-32cc-4b35-aac7-9f56f858331f" />

GIF 이미지에서 투명은 1비트로 나타냅니다. 

투명이거나 불투명이거나로 표현하며 부분적으로 투명한 상태는 나타낼 수 없습니다.

이런 경우, `투명도의 디더링 활성화` 옵션을 켜서 부분적으로 투명한 효과를 나타낼 수 있습니다.

또는 [Semi-Flatten](./17-15-03-semi-flatten.md) 플러그인을 사용해볼 수도 있습니다.

<a id="16-06-06-02-02-s5"></a>

## 5. 텍스트 레이어의 디더링 활성화(Enable dithering of text layers)

<a id="90-04-32-a161"></a>

#### [그림 90.4.32.a161. `이미지를 색인 색상으로 변환` 대화상자 → `텍스트 레이어의 디더링 활성화` (Windows) (우리말)](./90-04-0032-convert_image_to_indexed_colors.md#90-04-32-a161)
<img width="658" height="566" alt="90-04-32-a161" src="https://github.com/user-attachments/assets/0a40c43e-76c9-4f29-b704-524424ac7fc3" />

이 옵션을 켜면 [텍스트 레이어](./09-01-02-managing_text_layer.md)를 디더링하여 텍스트에서 이미지로 바꿔 텍스트를 수정할 수 없도록 만듭니다.

***

## 관련 정보

[19. 용어집 - 디더링(Dithering)](./19-glossaryx-dithering.md)

***

## 다른 페이지로 가기

[➡️ 다음: 16.6.7. 정밀도(Precision)](./16-06-07-00-precision.md)

[⬅️ 이전: 16.6.6.2.1.4. 사용자 정의 팔레트 사용하기(Use custom palette)](./16-06-06-02-01-04-use_custom_palette.md)

[⬆️ 위: 16.6.6.2. "이미지를 색인 색상으로 변환" 대화상자(The “Convert Image to Indexed Colors” dialog)](./16-06-06-02-00-the_convert_image_to_indexed_colors_dialog.md)

[⬆️ 위: 16.6.6. 인덱스 모드(Indexed mode)](./16-06-06-00-indexed-mode.md)

[⬆️ 위: 16.6. 이미지 메뉴(The "Image" menu)](./16-06-00-the-image-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-convert-indexed.html#idm26483)