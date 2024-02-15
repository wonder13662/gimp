# 6.1.2.3. 이미지를 JPEG로 내보내기
`JPEG` 파일들은 `.jpg`, `.JPG`, 또는 `.jpeg`의 파일 확장자를 가집니다. `JPEG`는 매우 널리 쓰이는 이미지 파일 유형입니다. `JPEG`는 이미지 압축이 매우 효과적이고, 이미지 품질의 손실이 적습니다. 다른 이미지 형식으로는 `JPEG`의 압축률에 따라갈 수 없습니다. 하지만 `JPEG`는 투명도와 여러 개의 레이어를 사용할 수 없습니다.

#### 그림 90.4.33.a111. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 (Windows) (우리말)
![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options](https://github.com/wonder13662/gimp/assets/15767104/670a2bf9-6396-4f11-a566-82d9d27c7cdd)

[다른 운영체제와 언어의 '이미지를 JPEG로 내보내기(Export Image as JPEG)' 대화상자 - 고급 설정 확인하기]()

`JPEG` 알고리즘은 굉장히 복잡하고 많은 옵션을 가지고 있습니다. 따라서 GIMP(김프)를 사용하는 사용자의 입장이라면 대부분의 경우에 아래의 "대화 상자 옵션 설명"의 화질(Quality) 내용만 알고 사용해도 충분합니다.

## 대화 상자 옵션 설명

### 화질(Quality)
`JPEG` 파일 유형(포맷)으로 저장을 하면, 0에서 100까지 압축률을 조절할 수 있는 대화상자가 열립니다. 기본값은 85로 가장 좋은 결과를 보여주지만, 많은 경우 그보다 낮은 값에서도 큰 화질 저하없이 저장이 가능합니다. 대화상자의 `이미지 창에 미리 보기 표시(Show preview in image window)`를 이용하면 값에 따른 화질을 미리 확인해 볼 수 있습니다. 이는 대화상자의 각 옵션의 설정값에 따른 변화를 즉시 보여주지만 원본 이미지 자체를 변형시키지는 않습니다. 따라서 대화상자를 닫으면 원래 이미지로 돌아갑니다.

> 🗒️ 참고
>
> `JPEG` 화질(Quality) 값은 어플리케이션 별로 다른 의미를 가집니다. GIMP(김프)의 `JPEG` 화질(Quality) 값이 80이라고 해서 다른 어플리케이션에서의 `JPEG` 화질(Quality) 값 80이 꼭 같은 의미는 아닙니다.

### 원본 이미지의 화질 설정값 사용(Use quality settings from original image)
이 체크박스를 체크하면, 특별한 화질 설정(또는 "양자화 테이블")이 이미지에 있다면 이미지를 불러올때, 이 설정을 기본 화질 설정을 대신해 사용하게 됩니다.

이미지를 조금만 바꾼 경우, 이 옵션을 사용하면 원본 이미지와 거의 동일한 화질과 크기로 저장할 수 있습니다. 이 옵션은 양자화 단계를 통해 다른 화질 설정을 사용할 때보다 이미지의 손실이 적게 만듭니다.

원본 이미지 파일에서 불러온 화질 설정이 기본값보다 낮은 경우, "원본 이미지의 화질 설정값 사용" 옵션을 사용할 수 없습니다. 이는 항상 기본값보다 높은 화질을 얻을 수 있도록 하는 안전장치입니다.

### 이미지 창에 미리 보기 표시(Show preview in image window)
이 체크박스를 체크하면 대화상자의 화질(Quality) 설정 및 옵션들을 바꿀 때마다 이미지 창(Image Display)에 변경사항이 적용되어 보여집니다. (이미지의 데이터를 실제로 바꾸는 것은 아닙니다. `JPEG` 대화상자를 닫으면 이미지의 원래 상태로 돌아옵니다.)

아래 영상에서 `이미지 창에 미리 보기 표시` 체크박스를 체크한 뒤에 화질을 바꾸면 이미지에서 즉시 반영되는 모습을 확인할 수 있습니다.
#### 영상 90.4.33.a211. 화질 변화와 파일 크기 빠르게 보기
<video controls="controls" width="1080" src="https://github.com/wonder13662/gimp/assets/15767104/a0f3f4b6-c40d-45a3-8c70-a58238efc2c1"></video>

### Keep metadata
불러온 이미지가 `Exif`, `XMP`, `IPTC`의 메타데이터를 갖고 있다면, `JPEG` 이미지로 내보낼 때, 체크박스를 체크한 메타데이터 항목에 대해 유지합니다. 체크하지 않으면 내보낼 때 해당 메타데이터를 버립니다.

- 체크박스 `Exif 데이터 저장(Save Exif data)`이 체크되어 있으면 `Exif` 메타데이터를 `JPEG` 이미지로 내보낼 때 유지합니다.
- 체크박스 `XMP 데이터 저장(Save XMP data)`이 체크되어 있으면 `XMP` 메타데이터를 `JPEG` 이미지로 내보낼 때 유지합니다.
- 체크박스 `IPTC 데이터 저장(Save IPTC data)`이 체크되어 있으면 `IPTC` 메타데이터를 `JPEG` 이미지로 내보낼 때 유지합니다.

### 미리 보기 저장(Save thumbnail), 색상 프로필 저장(Save color profile)

### 설명(Comment)
(TODO 7bit ASCII 문자만 입력 가능한지 확인해야 함)

### 고급 설정(Advanced Options)

#### 최적화(Optimize)

#### 부드럽게(Smoothing)

#### Use arithmetic coding

#### Use restart markers

#### Interval (MCU rows)

#### 점진적으로 표시(Progressive)

#### 서브샘플링(Subsampling)

#### DCT 기법(DCT method)

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.4. PNG로 이미지 내보내기](./06-01-filesx-02-file_formatsx-04-export_image_as_png.md)

[⬅️ 이전: 6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-filesx-02-file_formatsx-02-export_image_as_heif.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html#file-jpeg-save)
