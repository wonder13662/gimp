# 5.3.1.1. PDF 불러오기
`이미지 열기` 대화상자에서 PDF 파일을 열면, 추가적인 대화상자가 뜹니다. 이 대화상자에는 PDF 파일 유형에 관련된 선택사항들이 있습니다.

#### [그림 90.4.40.a101. `PDF 가져오기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a101-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-pdf](https://github.com/wonder13662/gimp/assets/15767104/43a4c258-15c8-4070-806a-538078b8fd23)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a101-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `PDF 가져오기` 대화상자 확인하기](./90-04-40-import_from_pdf.md)

아래 영상에서 PDF 파일을 여는 과정에서 `PDF 가져오기` 대화상자가 추가적으로 열리는 모습을 확인할 수 있습니다.

#### [영상 90.4.40.a105. `PDF 가져오기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EC%98%81%EC%83%81-90440a105-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5fb81830-f54c-4cb4-a143-9b151997452e"></video>

## 페이지 선택(Page Selection)
`PDF 가져오기` 대화상자의 `페이지 선택` 영역의 `범위 선택`의 입력창에 하나 이상의 페이지 번호 또는 범위를 입력할 수 있습니다. 각 페이지는 콤마(`,`)로 구분합니다.

#### [그림 90.4.40.a111. `PDF 가져오기` 대화상자 - `페이지 선택` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a111-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%84%A0%ED%83%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-pdf-page_selection-focus-page_selection](https://github.com/wonder13662/gimp/assets/15767104/1a567be9-6a55-4130-be65-dfbc6bf07136)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a111-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%84%A0%ED%83%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

예를 들어서, 4-7, 9를 입력한다면, PDF 이미지의 4,5,6,7 페이지와 9 페이지가 선택됩니다. 기본값으로 두면 PDF 이미지의 모든 페이지가 선택됩니다. 아래 영상에서 위 예시에서 말한 페이지 선택 과정을 확인할 수 있습니다.

#### [영상 90.4.40.a112. `PDF 가져오기` 대화상자 - `페이지 선택`의 `범위 선택`으로 페이지 선택하기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EC%98%81%EC%83%81-90440a112-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%84%A0%ED%83%9D%EC%9D%98-%EB%B2%94%EC%9C%84-%EC%84%A0%ED%83%9D%EC%9C%BC%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/5b353e1e-80e1-475f-8d24-4a1df1b17a93"></video>

## 페이지 열기(Open pages as)
PDF 이미지의 페이지들을 별개의 이미지 또는 레이어로 선택할 수 있습니다.

#### [그림 90.4.40.a121. `PDF 가져오기` 대화상자 - `페이지 열기` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a121-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%97%B4%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(en)-extra_dialog-pdf-open_page_as-focus-open_page_as](https://github.com/wonder13662/gimp/assets/15767104/262d920e-6224-499b-bb13-302b7b9a35ed)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a121-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%97%B4%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

### 레이어로 페이지 열기
레이어로 페이지를 열면, PDF의 페이지들은 하나의 이미지 안에 낱개의 레이어로 가져옵니다. 아래 영상에서 레이어로 페이지 열기 과정을 확인할 수 있습니다.

#### [영상 90.4.40.a122. `PDF 가져오기` 대화상자 - `페이지 열기`에서 `레이어` 선택 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EC%98%81%EC%83%81-90440a122-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%97%B4%EA%B8%B0%EC%97%90%EC%84%9C-%EB%A0%88%EC%9D%B4%EC%96%B4-%EC%84%A0%ED%83%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/3ee9b4f0-0076-4921-a675-6070f288cd5d"></video>

### 이미지로 페이지 열기
이미지로 페이지를 열면, PDF의 페이지들은 개별 이미지로 가져옵니다. 아래 영상에서 이미지로 페이지 열기 과정을 확인할 수 있습니다.

#### [영상 90.4.40.a123. `PDF 가져오기` 대화상자 - `페이지 열기`에서 `이미지` 선택 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EC%98%81%EC%83%81-90440a123-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%97%B4%EA%B8%B0%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%84%A0%ED%83%9D-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/11b5a9f2-a498-4797-91ae-ff1b264d3a14"></video>

## 이미지 크기(Image size)
이미지의 크기를 너비(width), 높이(height) 그리고 해상도(resolution) 설정으로 제어할 수 있습니다. PDF 문서는 물리적인 길이의 단위로 너비와 높이에 대한 정보를 갖고 있습니다. 그러므로 1 픽셀당 물리적인 길이의 단위가 너비, 높이, 해상도에 영향을 줍니다. 너비, 높이, 해상도 중 하나라도 바꾼다면, 나머지 값들이 자동으로 바뀐 값에 맞게 조정됩니다.

#### [그림 90.4.40.a131. `PDF 가져오기` 대화상자 - `이미지 크기` (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a131-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%81%AC%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-38-open_image(windows)(ko)-extra_dialog-pdf-page_selection-focus-image_size](https://github.com/wonder13662/gimp/assets/15767104/e59a2488-e764-41ca-907f-20582502fbc1)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-40-import_from_pdf.html#%EA%B7%B8%EB%A6%BC-90440a131-pdf-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%81%AC%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

## 안티-앨리어싱 사용(Use Anti-Aliasing)
이미지 안의 텍스트에 [안티-앨리어싱](./19-glossaryx-antialiasing.md)을 적용하려면 이 체크박스를 체크해주세요.

#### 그림 90.4.40.a141. `PDF 가져오기` 대화상자 - `안티-앨리어싱 사용` (Windows) (우리말)
![90-04-38-open_image(windows)(ko)-extra_dialog-pdf-page_selection-focus-anti-aliasing](https://github.com/wonder13662/gimp/assets/15767104/cb30cc32-7852-4a73-a622-48cd426f3d03)

#### 영상 90.4.40.a142. `PDF 가져오기` 대화상자 - `안티-앨리어싱 사용` 체크박스 토글 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/1c0123c7-d8fb-4b3b-829f-1287ab389fa7"></video>

## 다른 페이지로 가기

[➡️ 다음: 5.3.1.2. PostScript 불러오기](./05-03-01-open-filex-02-import_from_postscript.md)

[⬅️ 이전: 5.3.1. 파일 열기](./05-03-01-open-file.md)

[⬆️ 위: 5.3.1. 파일 열기](./05-03-01-open-file.md)

[⬆️ 위: 5.3. 파열 열기](./05-03-00-opening-files.md)

[⬆️ 위: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-fileformats-opening.html#file-pdf-load)
