# 16.6.9.3. 색상 관리 활성화 옵션 비활성화시의 GIMP의 동작(What does GIMP do when Enable Color Management is unchecked?)
`색상 관리 활성화(Enable color management)` 옵션을 비활성화시키면, GIMP(김프)는 두가지 동작을 합니다.

## 1. ICC 프로파일 교체
이미지 파일에 할당했던 ICC 프로파일은 임시로 저장되지만 사용하지는 않습니다.

뒤이어 진행되는 수정, 정밀도 그리고 색상 관리 작업은 실행하지 않고 기다립니다.

GIMP 내부의 sRGB 색공간 프로파일을 이전의 ICC 프로파일 대신에 설정하게 됩니다.

### 1-1. `인지 감마 sRGB(Perceptual gamma sRGB)` 채널 인코딩이 설정된 경우
ICC 프로파일 "GIMP built-in sRGB"이 설정됩니다.

### 1-2. `선형 조명(Linear light)` 채널 인코딩이 설정된 경우
ICC 프로파일 "GIMP built-in Linear sRGB"이 설정됩니다.

변경된 ICC 프로파일은 [`이미지 메뉴 바` → `이미지` → `이미지 성질` → `색상 프로파일`](./16-06-34-image-properties.md)에서 확인할 수 있습니다.

<a id="90-04-31-a111"></a>

#### [그림 90.4.31.a111. `이미지 속성` 대화상자 → `색상 프로파일` (Mac) (우리말)](./90-04-0031-image_properties.md#90-04-31-a111)
<img width="313" height="461" alt="90-04-31-a111" src="https://github.com/user-attachments/assets/289d687c-7b6c-482c-a66c-70df766f892a" />

## 2. 타이틀 바에 "not color managed" 표시
[타이틀 바](./19-glossaryx-title_bar.md)에 이미지의 색공간을 표시하도록 설정되어 있다면, "not color managed"라고 표시됩니다.

실제로는 이미지의 색상은 관리되고 있지만, 이전의 색상 공간 대신에 GIMP(김프)의 자체적인 sRGB 색공간으로 이미지의 색이 관리되고 있습니다.