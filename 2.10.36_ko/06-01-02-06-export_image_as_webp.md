# 6.1.2.6. WebP로 이미지 내보내기

<a id="90-04-47-a101"></a>

#### [그림 90.4.47.a101. `이미지를 WebP로 내보내기` 대화상자 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a101)
![90-04-47-a101](https://github.com/wonder13662/gimp/assets/15767104/dfd35949-142a-47af-9293-487c64863457)

[다른 운영체제와 언어의 `이미지를 WebP로 내보내기` 대화상자 확인하기](./90-04-0047-export_image_as_webp.md#90-04-47-a102)

## 무손실(Lossless)

<a id="90-04-47-a121"></a>

#### [그림 90.4.47.a121. `이미지를 WebP로 내보내기` 대화상자 - 무손실 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a121)
![90-04-47-a121](https://github.com/wonder13662/gimp/assets/15767104/cba2618d-8ef3-4248-8b89-e3b4f4e95a5c)

이 체크박스를 체크하면 이미지는 원본의 이미지 품질을 유지하면서 동시에 `이미지 품질(Image Quality)`과 `알파 품질(Alpha Quality)` 항목을 비활성화시킵니다. 체크박스의 체크를 해제하면 `이미지 품질(Image Quality)`과 `알파 품질(Alpha Quality)` 항목의 설정값을 사용합니다. 이 설정값은 압축 효율은 더 낫지만, 이미지 품질과 데이터 손실에 영향을 줄 수 있습니다. 기본값은 체크박스가 해제된 것입니다.

아래 영상에서 체크박스의 체크를 해제하면 `이미지 품질(Image Quality)`과 `알파 품질(Alpha Quality)` 항목이 활성화되는 모습을 확인할 수 있습니다.

<a id="90-04-47-a128"></a>

#### [영상 90.4.47.a128. `이미지를 WebP로 내보내기` 대화상자 - 무손실 (Windows) 체크박스 토글 (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a128)
![90-04-47-a128](https://github.com/wonder13662/gimp/assets/15767104/a44ef4d0-31ca-45ad-a965-3e1f8b55f338)

## 이미지 품질(Image quality), 알파 품질(Alpha quality)

<a id="90-04-47-a122"></a>

#### [그림 90.4.47.a122. `이미지를 WebP로 내보내기` 대화상자 - 이미지 품질, 알파 품질 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a122)
![90-04-47-a122](https://github.com/wonder13662/gimp/assets/15767104/5578f93b-9652-4b21-8c9d-ed2836f92231)

`이미지 품질(Image Quality)`과 `알파 품질(Alpha Quality)` 항목은 어떤 품질로 이미지가 저장되는지 결정합니다. 높은 품질의 이미지는 더 큰 파일 크기를 가집니다. 파일 크기가 작아야 한다면, 이미지 품질을 낮추고 낮춘 품질이 사용 용도에 잘 맞는지 확인할 수 있습니다.

## 원본 타입(Source Type)

<a id="90-04-47-a111"></a>

#### [그림 90.4.47.a111. `이미지를 WebP로 내보내기` 대화상자 - 원본 타입 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a111)
![90-04-47-a111](https://github.com/wonder13662/gimp/assets/15767104/9688e64f-5507-4fe0-94e0-2043672cdbc9)

[다른 운영체제와 언어의 `이미지를 WebP로 내보내기` 대화상자 - 원본 타입 확인하기](./90-04-0047-export_image_as_webp.md#90-04-47-a112)

이 드롭다운 목록은 내보내기할 이미지의 유형을 선택할 수 있습니다. 선택한 유형에 따라 이미지를 압축하는 방식이 달라집니다. 선택할 수 있는 이미지의 유형은 아래와 같습니다.

1. `기본값(Default)`
   - `실내사진(Picture)`과 동일한 설정입니다. 아래를 참고해주세요.
2. `실내사진(Picture)`
   - 조명을 사용한 실내 촬영한 디지털 이미지
3. `야외사진(Photo)`
   - 자연광을 사용한 야외 촬영한 디지털 이미지
4. `그림(Drawing)`
   - 대조가 강한 선으로 그린 그림
5. `아이콘(Icon)`
   - 작은 크기의 색조가 화려한 아이콘 이미지
6. `텍스트(Text)`
   - 문자가 주로 표현된 이미지

## Exif 데이터 저장(Save Exif data)

<a id="90-04-47-a123"></a>

#### [그림 90.4.47.a123. `이미지를 WebP로 내보내기` 대화상자 - Exif 데이터 저장 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a123)
![90-04-47-a123](https://github.com/wonder13662/gimp/assets/15767104/79127005-66af-403d-8942-61d9aaa7cd7f)

이 체크박스가 체크되면 `WebP` 이미지를 내보낼 때 `Exif` 메타데이터가 함께 저장되어 내보내집니다.

## IPTC 데이터 저장(Save IPTC data)

<a id="90-04-47-a124"></a>

#### [그림 90.4.47.a124. `이미지를 WebP로 내보내기` 대화상자 - IPTC 데이터 저장 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a124)
![90-04-47-a124](https://github.com/wonder13662/gimp/assets/15767104/33948932-7287-4c25-9f9b-11509cb274e8)

이 체크박스가 체크되면 `WebP` 이미지를 내보낼 때 `IPTC` 메타데이터가 함께 저장되어 내보내집니다.

## XMP 데이터 저장(Save XMP data)

<a id="90-04-47-a125"></a>

#### [그림 90.4.47.a125. `이미지를 WebP로 내보내기` 대화상자 - XMP 데이터 저장 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a125)
![90-04-47-a125](https://github.com/wonder13662/gimp/assets/15767104/824820b6-7894-4479-8c01-157d40af4917)

이 체크박스가 체크되면 `WebP` 이미지를 내보낼 때 `XMP` 메타데이터가 함께 저장되어 내보내집니다.

## 색상 프로필 저장(Save color profile)

<a id="90-04-47-a126"></a>

#### [그림 90.4.47.a126. `이미지를 WebP로 내보내기` 대화상자 - 색상 프로필 저장 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a126)
![90-04-47-a126](https://github.com/wonder13662/gimp/assets/15767104/e44210df-3377-49df-8053-22eaeb48d14b)

이 체크박스가 체크되면 색상 프로필(color profile)이 내보내는 `WebP` 이미지에 저장됩니다.

## 미리 보기 저장(Save thumbnail)

<a id="90-04-47-a127"></a>

#### [그림 90.4.47.a127. `이미지를 WebP로 내보내기` 대화상자 - 미리 보기 저장 (Windows) (우리말)](./90-04-0047-export_image_as_webp.md#90-04-47-a127)
![90-04-47-a127](https://github.com/wonder13662/gimp/assets/15767104/efa1202d-04f8-473b-a9e4-bfeb43522d21)

이 체크박스를 체크하면 내보내는 `WebP` 이미지에 섬네일이 저장됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.7. MNG로 이미지 내보내기](./06-01-02-07-export_image_as_mng.md)

[⬅️ 이전: 6.1.2.5. TIFF로 이미지 내보내기](./06-01-02-05-export_image_as_tiff.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-02-00-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-00-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html#file-webp-save)
