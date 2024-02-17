# 6.1.2.5. TIFF로 이미지 내보내기

#### [그림 90.4.46.a101. `이미지를 TIFF로 내보내기` 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/35aed86b-c4ed-4465-b24c-e1992d83939d)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a101-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 `이미지를 TIFF로 내보내기` 대화상자 확인하기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a102-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%98%81%EC%96%B4)

## 압축(Compression)

#### [그림 90.4.46.a111. `이미지를 TIFF로 내보내기` 대화상자 - 압축 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a111-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%95%95%EC%B6%95-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-compression](https://github.com/wonder13662/gimp/assets/15767104/3c7934b5-d3fd-4ead-91d0-c890916f8c14)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a111-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%95%95%EC%B6%95-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

`압축(Compression)`에서 이미지를 압축하는 알고리즘을 선택할 수 있습니다.

- `압축 안함(None)`
   - `압축 안함(None)`은 빠르고 이미지 손실이 없습니다. 하지만 이미지 파일은 매우 클 수 있습니다.
- `LZW`
   - "Lempel-Ziv-Welch" 알고리즘을 사용하여 이미지를 무손실로 압축합니다. 이 알고리즘은 효율적이고 빠릅니다. 더 자세한 정보는 [LZW](https://ko.wikipedia.org/wiki/LZW)에서 확인할 수 있습니다.
- `Pack Bits`
   - `Pack Bits`는 [런 렝스 부호화(run-length encoding)](https://ko.wikipedia.org/wiki/%EB%9F%B0_%EB%A0%9D%EC%8A%A4_%EB%B6%80%ED%98%B8%ED%99%94)을 사용하는 빠르고 간단한 압축 알고리즘입니다. 애플에서 매킨토시 컴퓨터의 MacPaint를 출시하면서 `Pack Bits` 포맷을 함께 소개하였습니다. `Pack Bits` 데이터 스트림은 1 바이트 헤더를 가지는 데이터의 패킷들로 이루어져 있습니다. 자세한 내용은 [Wikipedia - PackBits](https://en.wikipedia.org/wiki/PackBits)에서 확인할 수 있습니다.
- `무손실압축(Deflate)`
   - `무손실압축(Deflate)`은 [LZ77 algorithm](https://en.wikipedia.org/wiki/LZ77_and_LZ78)과 [허프만 부호화(Huffman coding)](https://ko.wikipedia.org/wiki/%ED%97%88%ED%94%84%EB%A8%BC_%EB%B6%80%ED%98%B8%ED%99%94)을 조합한 무손실 데이터 압축 알고리즘입니다. 이 알고리즘은 `Zip`, `Gzip` 파일들과 `PNG` 이미지 파일에도 사용됩니다. 자세한 내용은 [위키피디아 - DEFLATE](https://ko.wikipedia.org/wiki/DEFLATE)에서 확인할 수 있습니다.
- `JPEG`
   - `JPEG`는 매우 뛰어난 압축 알고리즘이지만 데이터 손실이 있습니다. `JPEG` 이미지에서 사용된 것과 같은 압축 방식을 사용합니다. 데이터 손실이 있기 때문에, 이미지 화질이 중요하다면 사용해서는 안됩니다. `JPEG`는 [인덱스 모드](./16-06-06-indexed-mode.md)의 이미지에서는 사용할 수 없습니다.
- `CCITT 그룹 3 팩스(CCITT Group 3 fax)`과 `CCITT 그룹 4 팩스(CCITT Group 4 fax)`
   - 팩스의 이미지 전송을 위해 개발된 흑백 이미지 포맷입니다.

> 🗒️ 참고
> `CCITT 그룹 3 팩스(CCITT Group 3 fax)`과 `CCITT 그룹 4 팩스(CCITT Group 4 fax)`은 이미지가 [인덱스 모드](./16-06-06-indexed-mode.md)이고 2개의 색상으로 줄였을 때만 선택할 수 있습니다. [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `이미지` → `모드` → `인덱스` 메뉴를 선택해서 이미지를 인덱스 모드로 바꿀 수 있습니다. 인덱스 모드로 바꿀 때, `색인 색상 변환` 대화상자에서 색상표의 `Use black and white (1-bit) palette` 라디오 버튼이 반드시 체크되어야 합니다.

#### 그림 90.4.32.a111. `이미지를 색인 색상으로 변환` 대화상자 - 흑백(1비트) 팔레트 사용 (Windows) (우리말)
![90-04-32-indexed_color_conversion(windows)(ko)-focus-use_black_and_white_palette](https://github.com/wonder13662/gimp/assets/15767104/10c9fc28-e330-430a-8a8f-70d752eb7162)

## Export in BigTIFF variant file format

#### [그림 90.4.46.a112. `이미지를 TIFF로 내보내기` 대화상자 - Export in BigTIFF variant file format (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a112-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---export-in-bigtiff-variant-file-format-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-export_in_bigtiff_variant_file_format](https://github.com/wonder13662/gimp/assets/15767104/04390635-d058-4329-8881-7ae82efce919)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a112-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---export-in-bigtiff-variant-file-format-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

(TODO 내용 추가가 필요합니다)

## 레이어 저장(Save layers)

#### [그림 90.4.46.a113. `이미지를 TIFF로 내보내기` 대화상자 - 레이어 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a113-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%A0%88%EC%9D%B4%EC%96%B4-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_layers](https://github.com/wonder13662/gimp/assets/15767104/8f3a5f2b-1392-4c73-8c14-bb8b20612d3a)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a113-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%A0%88%EC%9D%B4%EC%96%B4-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

GIMP(김프) 2.10.12 버전부터 `TIFF`로 이미지를 내보낼 때, 레이어를 저장할 수 있습니다. 각 레이어는 `TIFF` 이미지 안에서 개별 페이지가 됩니다.

## 레이어를 이미지 경계에 맞춰 자르기(Crop layers to image bounds)

#### [그림 90.4.46.a114. `이미지를 TIFF로 내보내기` 대화상자 - 레이어를 이미지 경계에 맞춰 자르기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a114-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EA%B3%84%EC%97%90-%EB%A7%9E%EC%B6%B0-%EC%9E%90%EB%A5%B4%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-crop_layers_to_image_bounds](https://github.com/wonder13662/gimp/assets/15767104/9202e5e6-ccbb-4c89-990e-6f9a0d5cc25b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a114-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%A0%88%EC%9D%B4%EC%96%B4%EB%A5%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EA%B3%84%EC%97%90-%EB%A7%9E%EC%B6%B0-%EC%9E%90%EB%A5%B4%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

`레이어 저장(Save layers)` 체크박스가 체크가 되면, `레이어를 이미지 경계에 맞춰 자르기(Crop layers to image bounds)` 체크박스는 함께 체크되어 있는 것이 기본값입니다. 이 옵션은 모든 레이어의 크기를 이미지의 크기에 맞춥니다. `TIFF` 이미지는 음수의 오프셋을 갖지 못합니다. 이 옵션은 원본 이미지의 크기와 다른 크기를 가지는 레이어를 바꿀 필요없이 `TIFF` 이미지를 불러올 수 있게 해줍니다.

(TODO 음수의 오프셋의 정의가 명확하지 않다. 개선필요.)

## 투명한 픽셀의 색상값 저장(Save color values from transparent pixels)

#### [그림 90.4.46.a115. `이미지를 TIFF로 내보내기` 대화상자 - 투명한 픽셀의 색상값 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a115-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%88%AC%EB%AA%85%ED%95%9C-%ED%94%BD%EC%85%80%EC%9D%98-%EC%83%89%EC%83%81%EA%B0%92-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_color_values_from_transparent_pixels](https://github.com/wonder13662/gimp/assets/15767104/80962c7a-b21d-4924-98ad-0c2481b4ccda)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a115-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%88%AC%EB%AA%85%ED%95%9C-%ED%94%BD%EC%85%80%EC%9D%98-%EC%83%89%EC%83%81%EA%B0%92-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면, 픽셀이 완전히 투명하더라도 색상값이 저장됩니다.

## 설명(Comment)

#### [그림 90.4.46.a116. `이미지를 TIFF로 내보내기` 대화상자 - 설명 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a116-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%84%A4%EB%AA%85-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-comment](https://github.com/wonder13662/gimp/assets/15767104/041936af-de8c-442a-9268-057464a51001)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a116-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%84%A4%EB%AA%85-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

입력창에 입력한 텍스트는 이미지의 설명으로 저장됩니다. 입력한 설명을 [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `이미지` → `이미지 성질` → `설명(Comment)`에서 확인할 수 있습니다.

⚠️ 주의: 한글은 입력창에 입력 가능하나 실제로는 저장되지 않습니다.

## Exif 데이터 저장(Save Exif data)

#### [그림 90.4.46.a117. `이미지를 TIFF로 내보내기` 대화상자 - Exif 데이터 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a117-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---exif-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_exif_data](https://github.com/wonder13662/gimp/assets/15767104/8e714a1a-1427-49b0-a18c-aa317651d469)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a117-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---exif-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스가 체크되면 `TIFF` 이미지를 내보낼 때 `Exif` 메타데이터가 함께 저장되어 내보내집니다.

## XMP 데이터 저장(Save XMP data)

#### [그림 90.4.46.a118. `이미지를 TIFF로 내보내기` 대화상자 - XMP 데이터 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a118-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---xmp-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_xmp_data](https://github.com/wonder13662/gimp/assets/15767104/8f3dcef8-62b5-4fe8-a79c-822273d844c3)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a118-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---xmp-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스가 체크되면 `TIFF` 이미지를 내보낼 때 `XMP` 메타데이터가 함께 저장되어 내보내집니다.

## IPTC 데이터 저장(Save IPTC data)

#### [그림 90.4.46.a119. `이미지를 TIFF로 내보내기` 대화상자 - IPTC 데이터 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a119-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---iptc-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_iptc_data](https://github.com/wonder13662/gimp/assets/15767104/f2d85050-2cc3-49a2-bd12-5932baeb8bbb)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a119-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---iptc-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스가 체크되면 `TIFF` 이미지를 내보낼 때 `IPTC` 메타데이터가 함께 저장되어 내보내집니다.

## 미리 보기 저장(Save thumbnail)

#### [그림 90.4.46.a120. `이미지를 TIFF로 내보내기` 대화상자 - 미리 보기 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a120-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%AF%B8%EB%A6%AC-%EB%B3%B4%EA%B8%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_thumbnail](https://github.com/wonder13662/gimp/assets/15767104/e2bdc33a-9ede-4bbb-a01f-e7d90bfc5830)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a120-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%AF%B8%EB%A6%AC-%EB%B3%B4%EA%B8%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면 내보내는 `TIFF` 이미지의 두번째 페이지로 섬네일이 저장됩니다. 이 과정은 `EXIF` 메타데이터가 비활성화되었어도 `EXIF` 메타데이터를 저장합니다.

## 색상 프로필 저장(Save color profile)

#### [그림 90.4.46.a121. `이미지를 TIFF로 내보내기` 대화상자 - 색상 프로필 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a121-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81-%ED%94%84%EB%A1%9C%ED%95%84-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_color_profile](https://github.com/wonder13662/gimp/assets/15767104/fb9786a9-af1e-4f23-9f78-b51b29dacc5e)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a121-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81-%ED%94%84%EB%A1%9C%ED%95%84-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스가 체크되면 색상 프로필(color profile)이 내보내는 `TIFF` 이미지에 저장됩니다.

## GeoTIFF 데이터 저장(Save GeoTIFF data)

#### [그림 90.4.46.a122. `이미지를 TIFF로 내보내기` 대화상자 - GeoTIFF 데이터 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a122-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---geotiff-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-46-export_image_as_tiff(windows)(ko)-focus-save_geotiff_data](https://github.com/wonder13662/gimp/assets/15767104/fe24fd98-3272-40f6-94d7-785a0867191c)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-46-export_image_as_tiff.html#%EA%B7%B8%EB%A6%BC-90446a122-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-tiff%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---geotiff-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스가 체크되면, 원본 이미지의 `GeoTIFF` 메타데이터가 내보내는 `TIFF` 이미지에 저장됩니다.

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.6. WebP로 이미지 내보내기](./06-01-filesx-02-file_formatsx-06-export_image_as_webp.md)

[⬅️ 이전: 6.1.2.4. PNG로 이미지 내보내기](./06-01-filesx-02-file_formatsx-04-export_image_as_png.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html#file-tiff-save)
