# 6.1.2.3. 이미지를 JPEG로 내보내기
`JPEG` 파일들은 `.jpg`, `.JPG`, 또는 `.jpeg`의 파일 확장자를 가집니다. `JPEG`는 매우 널리 쓰이는 이미지 파일 유형입니다. `JPEG`는 이미지 압축이 매우 효과적이고, 이미지 품질의 손실이 적습니다. 다른 이미지 형식으로는 `JPEG`의 압축률에 따라갈 수 없습니다. 하지만 `JPEG`는 투명도와 여러 개의 레이어를 사용할 수 없습니다.

#### 그림 90.4.33.a111. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 (Windows) (우리말)
![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options](https://github.com/wonder13662/gimp/assets/15767104/670a2bf9-6396-4f11-a566-82d9d27c7cdd)

[다른 운영체제와 언어의 '이미지를 JPEG로 내보내기(Export Image as JPEG)' 대화상자 - 고급 설정 확인하기]()

`JPEG` 알고리즘은 굉장히 복잡하고 많은 옵션을 가지고 있습니다. 따라서 GIMP(김프)를 사용하는 사용자의 입장이라면 대부분의 경우에 아래의 "대화 상자 옵션 설명"의 화질(Quality) 내용만 알고 사용해도 충분합니다.

## 대화 상자 옵션 설명

### 화질(Quality)

#### [그림 90.4.33.a141. '이미지를 JPEG로 내보내기' 대화상자 - 화질 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a141-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%99%94%EC%A7%88-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-quality](https://github.com/wonder13662/gimp/assets/15767104/bed7ef5d-8fa2-4bb2-b9c8-4d898925381a)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a141-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%ED%99%94%EC%A7%88-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

`JPEG` 파일 유형(포맷)으로 저장을 하면, 0에서 100까지 압축률을 조절할 수 있는 대화상자가 열립니다. 기본값은 85로 가장 좋은 결과를 보여주지만, 많은 경우 그보다 낮은 값에서도 큰 화질 저하없이 저장이 가능합니다. 대화상자의 `이미지 창에 미리 보기 표시(Show preview in image window)`를 이용하면 값에 따른 화질을 미리 확인해 볼 수 있습니다. 이는 대화상자의 각 옵션의 설정값에 따른 변화를 즉시 보여주지만 원본 이미지 자체를 변형시키지는 않습니다. 따라서 대화상자를 닫으면 원래 이미지로 돌아갑니다.

> 🗒️ 참고
>
> `JPEG` 화질(Quality) 값은 어플리케이션 별로 다른 의미를 가집니다. GIMP(김프)의 `JPEG` 화질(Quality) 값이 80이라고 해서 다른 어플리케이션에서의 `JPEG` 화질(Quality) 값 80이 꼭 같은 의미는 아닙니다.

### 원본 이미지의 화질 설정값 사용(Use quality settings from original image)

#### [그림 90.4.33.a142. '이미지를 JPEG로 내보내기' 대화상자 - 원본 이미지의 화질 설정값 사용 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a142-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9B%90%EB%B3%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9D%98-%ED%99%94%EC%A7%88-%EC%84%A4%EC%A0%95%EA%B0%92-%EC%82%AC%EC%9A%A9-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-use_quality_setting_from_original_image](https://github.com/wonder13662/gimp/assets/15767104/60e03d6a-4d44-48e0-b117-0218ba81f414)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a142-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9B%90%EB%B3%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9D%98-%ED%99%94%EC%A7%88-%EC%84%A4%EC%A0%95%EA%B0%92-%EC%82%AC%EC%9A%A9-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면, 특별한 화질 설정(또는 "양자화 테이블")이 이미지에 있다면 이미지를 불러올때, 이 설정을 기본 화질 설정을 대신해 사용하게 됩니다.

이미지를 조금만 바꾼 경우, 이 옵션을 사용하면 원본 이미지와 거의 동일한 화질과 크기로 저장할 수 있습니다. 이 옵션은 양자화 단계를 통해 다른 화질 설정을 사용할 때보다 이미지의 손실이 적게 만듭니다.

원본 이미지 파일에서 불러온 화질 설정이 기본값보다 낮은 경우, "원본 이미지의 화질 설정값 사용" 옵션을 사용할 수 없습니다. 이는 항상 기본값보다 높은 화질을 얻을 수 있도록 하는 안전장치입니다.

### 이미지 창에 미리 보기 표시(Show preview in image window)

#### [그림 90.4.33.a143. '이미지를 JPEG로 내보내기' 대화상자 - 이미지 창에 미리 보기 표시 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a143-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B0%BD%EC%97%90-%EB%AF%B8%EB%A6%AC-%EB%B3%B4%EA%B8%B0-%ED%91%9C%EC%8B%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-show_preview_in_image_window](https://github.com/wonder13662/gimp/assets/15767104/a94cfd81-681b-4729-89b3-71155d2707b1)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a143-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B0%BD%EC%97%90-%EB%AF%B8%EB%A6%AC-%EB%B3%B4%EA%B8%B0-%ED%91%9C%EC%8B%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면 대화상자의 화질(Quality) 설정 및 옵션들을 바꿀 때마다 이미지 창(Image Display)에 변경사항이 적용되어 보여집니다. (이미지의 데이터를 실제로 바꾸는 것은 아닙니다. `JPEG` 대화상자를 닫으면 이미지의 원래 상태로 돌아옵니다.)

아래 영상에서 `이미지 창에 미리 보기 표시` 체크박스를 체크한 뒤에 화질을 바꾸면 이미지에서 즉시 반영되는 모습을 확인할 수 있습니다.
#### [영상 90.4.33.a211. 화질 변화와 파일 크기 빠르게 보기](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EC%98%81%EC%83%81-90433a211-%ED%99%94%EC%A7%88-%EB%B3%80%ED%99%94%EC%99%80-%ED%8C%8C%EC%9D%BC-%ED%81%AC%EA%B8%B0-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EB%B3%B4%EA%B8%B0)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/a0f3f4b6-c40d-45a3-8c70-a58238efc2c1"></video>

### 메타데이터 유지하기(Keep metadata)

#### [그림 90.4.33.a144. '이미지를 JPEG로 내보내기' 대화상자 - 메타데이터 유지하기 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a144-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-keep_metadata](https://github.com/wonder13662/gimp/assets/15767104/a2afaf3a-5ad5-4492-9f31-ea88272db903)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a144-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

불러온 이미지가 `Exif`, `XMP`, `IPTC`의 메타데이터를 갖고 있다면, `JPEG` 이미지로 내보낼 때, 체크박스를 체크한 메타데이터 항목에 대해 유지합니다. 체크하지 않으면 내보낼 때 해당 메타데이터를 버립니다.

- 체크박스 `Exif 데이터 저장(Save Exif data)`이 체크되어 있으면 `Exif` 메타데이터를 `JPEG` 이미지로 내보낼 때 유지합니다.
- 체크박스 `XMP 데이터 저장(Save XMP data)`이 체크되어 있으면 `XMP` 메타데이터를 `JPEG` 이미지로 내보낼 때 유지합니다.
- 체크박스 `IPTC 데이터 저장(Save IPTC data)`이 체크되어 있으면 `IPTC` 메타데이터를 `JPEG` 이미지로 내보낼 때 유지합니다.

### 미리 보기 저장(Save thumbnail)

#### [그림 90.4.33.a145. '이미지를 JPEG로 내보내기' 대화상자 - 미리 보기 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a145-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%AF%B8%EB%A6%AC-%EB%B3%B4%EA%B8%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-save_thumbnail](https://github.com/wonder13662/gimp/assets/15767104/f7f8b955-cbac-41db-9603-0144f9b79c6d)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a145-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EB%AF%B8%EB%A6%AC-%EB%B3%B4%EA%B8%B0-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면 다른 어플리케이션에서 보여줄 수 있는 이미지에 대한 작은 미리보기 섬네일을 저장합니다.

### 색상 프로필 저장(Save color profile)

#### [그림 90.4.33.a146. '이미지를 JPEG로 내보내기' 대화상자 - 색상 프로필 저장 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a146-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81-%ED%94%84%EB%A1%9C%ED%95%84-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-save_color_profile](https://github.com/wonder13662/gimp/assets/15767104/158c0db7-6d73-4c21-a6e5-702fd310205b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a146-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%83%89%EC%83%81-%ED%94%84%EB%A1%9C%ED%95%84-%EC%A0%80%EC%9E%A5-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

(TODO 내용 추가 필요)

### 설명(Comment)

#### [그림 90.4.33.a147. '이미지를 JPEG로 내보내기' 대화상자 - 설명 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a147-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%84%A4%EB%AA%85-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-focus-comment](https://github.com/wonder13662/gimp/assets/15767104/efeb9ea3-e94c-4076-a1fc-d6bff72a08e4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a147-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%84%A4%EB%AA%85-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이미지에 첨부될 설명을 수정할 수 있습니다. 한글 입력도 가능합니다.

입력한 설명은 [이미지 메뉴 바](./03-02-02-image-windowx-02-image-menu.md)의 `이미지` → `이미지 속성` → `설명(Comment)`에서 확인할 수 있습니다.
#### 그림 90.4.33.a148. '이미지를 JPEG로 내보내기' 대화상자 - 설명 - 이미지 속성에서 확인 (Windows) (우리말)
![90-04-33-export_image_as_jpeg(windows)(ko)-comment-image_properties-comment-focus](https://github.com/wonder13662/gimp/assets/15767104/f219e319-5b01-4a6a-ab3d-44e809637f29)

### 고급 설정(Advanced Options)

#### 최적화(Optimize)

#### [그림 90.4.33.a151. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 최적화 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a151-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%B5%9C%EC%A0%81%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-focus-optimize](https://github.com/wonder13662/gimp/assets/15767104/006ec18a-fa60-4b19-8c54-87216d331949)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a151-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%B5%9C%EC%A0%81%ED%99%94-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면, "엔트로피 부호화 인자(entropy encoding parameters)"들의 최적화를 합니다. 결과물은 보통 크기가 더 작은 파일입니다. 하지만 만드는 데 시간이 더 걸립니다.

[위키피디아 - 엔트로피 부호화(entropy encoding)](https://ko.wikipedia.org/wiki/%EC%97%94%ED%8A%B8%EB%A1%9C%ED%94%BC_%EB%B6%80%ED%98%B8%ED%99%94)

#### 부드럽게(Smoothing)

#### [그림 90.4.33.a152. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 부드럽게 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a152-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-focus-smoothing](https://github.com/wonder13662/gimp/assets/15767104/6fc95981-c200-4cf7-a07b-54081af410d3)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a152-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

`JPG` 압축은 쓸모없는 부산물을 만듭니다. 이 체크박스를 켜면, 이미지를 내보낼 때 이 부산물을 줄이고 부드럽게 만들어 줍니다. 하지만 어느 정도는 흐려지는 효과가 생깁니다.

#### 산술 부호화 사용(Use arithmetic coding)

#### [그림 90.4.33.a153. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 산술 부호화 사용 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a153-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%82%B0%EC%88%A0-%EB%B6%80%ED%98%B8%ED%99%94-%EC%82%AC%EC%9A%A9-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-focus-use_arithmetic_coding](https://github.com/wonder13662/gimp/assets/15767104/98022f25-e9b5-4767-a185-93d74e6fafb4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a153-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%82%B0%EC%88%A0-%EB%B6%80%ED%98%B8%ED%99%94-%EC%82%AC%EC%9A%A9-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면 산술 부호화(Arithmetic encoding)을 사용합니다. 산술 부호화는 엔트로피 부호화(entropy encoding)의 형태 중 하나이며 무손실 데이터 압축 알고리즘입니다. GIMP 2.10 버전 이후로 이미지를 `JPEG`로 내보낼 때 사용합니다. 산술 부호화를 사용한 이미지는 5 - 10% 정도 더 작습니다. 하지만 오래된 소프트웨어에서 이런 이미지들을 여는 데 문제가 생길 수 있습니다.

[위키피디아 - 산술 부호화](https://ko.wikipedia.org/wiki/%EC%82%B0%EC%88%A0_%EB%B6%80%ED%98%B8%ED%99%94)

#### 재시작 표식 사용(Use restart markers)

#### [그림 90.4.33.a154. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 재시작 표식 사용 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a154-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%9E%AC%EC%8B%9C%EC%9E%91-%ED%91%9C%EC%8B%9D-%EC%82%AC%EC%9A%A9-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-focus-use_restart_marker](https://github.com/wonder13662/gimp/assets/15767104/69f0385a-86c5-43e5-a434-8cdbfa1c27b1)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a154-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%9E%AC%EC%8B%9C%EC%9E%91-%ED%91%9C%EC%8B%9D-%EC%82%AC%EC%9A%A9-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면 이미지 파일에서 읽어들이는 조각 단위의 재시작 표식(마커)를 쓸 수 있습니다. 만약 이미지를 웹페이지에서 읽어들이는데 네트워크가 끊어져서 이미지 로딩이 중단된다면, 네트워크가 회복되고나서 이 재시작 표식(마커)를 사용해 다음에 읽어들일 조각을 알아내서 이미지를 계속 읽어들일 수 있습니다.

#### 간격(MCU 행)(Interval (MCU rows))

#### [그림 90.4.33.a155. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 간격(MCU 행) (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a155-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EA%B0%84%EA%B2%A9mcu-%ED%96%89-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-focus-interval](https://github.com/wonder13662/gimp/assets/15767104/c2c09675-c5a0-4ac0-a332-7da1a716b80e)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a155-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EA%B0%84%EA%B2%A9mcu-%ED%96%89-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

`JPEG` 이미지들은 MCU(Minimum Coding Unit)라고 하는 연이어 있는 압축된 사각형 타일들로 저장됩니다. 이 타일들의 크기를 픽셀 단위로 설정할 수 있습니다.

#### 점진적으로 표시(Progressive)

#### [그림 90.4.33.a156. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 점진적으로 표시 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a156-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%A0%90%EC%A7%84%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%91%9C%EC%8B%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-focus-progressive](https://github.com/wonder13662/gimp/assets/15767104/41c8db31-a757-4247-a5ef-7089774a9e6f)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a156-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EA%B3%A0%EA%B8%89-%EC%84%A4%EC%A0%95---%EC%A0%90%EC%A7%84%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%91%9C%EC%8B%9C-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

이 체크박스를 체크하면, 느린 네트워크에서 이미지를 다운로드할 때 점진적으로 이미지가 표시되도록 이미지 파일 안에 이미지 조각들로 저장이 됩니다. `JPG`의 "점진적으로 표시" 옵션은 `GIF`의 인터레이스(interlace) 옵션과 같은 목적으로 만들어 졌습니다. 안타깝게도 "점진적으로 표시" 옵션을 사용하면 이 옵션을 사용하지 않았을 때보다 파일 크기가 좀 더 커집니다.

> 🗒️ 참고
>
> 오래된 TV나 디스플레이 장치들은 "점진적으로 표시" 설정이 되어 있는 `jpeg` 이미지들을 보여주지 못할 수 도 있습니다.

#### 서브샘플링(Subsampling)

#### 그림 90.4.33.a121. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - 서브샘플링 (Windows) (우리말)
![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-subsampling-focus](https://github.com/wonder13662/gimp/assets/15767104/57d939ba-5165-41e1-a80f-700fe6b20e56)

사람의 눈은 밝기의 변화에 비해 색상의 변화에는 둔감합니다. 이에 따라 밝기 정보와 색상 정보를 분리하여 색상 정보만을 압축하면 사람의 눈은 약간 다른 색이라도 같은 색상으로 느끼게 할 수 있습니다. 이를 통해 색상 정보의 용량을 크게 절약할 수 있습니다. 이 과정을 [크로마 서브샘플링(Chroma subsampling)](https://ko.wikipedia.org/wiki/%ED%81%AC%EB%A1%9C%EB%A7%88_%EC%84%9C%EB%B8%8C%EC%83%98%ED%94%8C%EB%A7%81)이라고 합니다. 색차 정보를 명도 정보보다 줄여서 이미지를 인코딩하는 방식입니다. 이렇게 하기 위한 3가지 방법이 있습니다.

1. `1x1, 1x1, 1x1 (4:4:4)` - (best quality)
   - `(4:4:4)`라고도 합니다. 최고 품질의 이미지를 만들어 냅니다. 경계와 대조 색상을 보존합니다. 하지만 거의 압축을 하지 않습니다.
2. `2x1, 1x1, 1x1 (4:2:2)`
   - 기본 서브샘플링입니다. 기본 서브샘플링은 대체로 이미지 품질과 이미지 파일 크기 간의 적당한 비율을 맞출 수 있습니다. 하지만 서브샘플링을 하지 않는 경우(`(4:4:4)`)에 눈에 띄게 이미지 품질이 나아지는 경우들이 있습니다. 예를 들자면, 글자가 단조로운 색상 배경 위에 있는 경우에는 서브샘플링을 하지 않아야 더 나은 이미지를 얻을 수 있습니다.
3. `1x2, 1x1, 1x1`
   - 이 방식은 `2x1, 1x1, 1x1 (4:2:2)`과 유사합니다. 하지만 크로마 샘플링이 수직 방향보다 수평 방향에 적용됩니다.
4. `2x2, 1x1, 1x1 (4:1:1)` - (smallest file)
   - `(4:1:1)`라고도 합니다. 이 방식은 가장 작은 파일 크기를 만듭니다. 약한 경계선을 가지는 이미지에 적당하지만, 종종 이미지의 색상을 바꾸는 경우가 있습니다.

[위키피디아 - 크로마 서브샘플링](https://ko.wikipedia.org/wiki/%ED%81%AC%EB%A1%9C%EB%A7%88_%EC%84%9C%EB%B8%8C%EC%83%98%ED%94%8C%EB%A7%81)

#### DCT 기법(DCT method)

#### 그림 90.4.33.a131. '이미지를 JPEG로 내보내기' 대화상자 - 고급 설정 - DCT 기법 (Windows) (우리말)
![90-04-33-export_image_as_jpeg(windows)(ko)-advanced_options-dct_method-focus](https://github.com/wonder13662/gimp/assets/15767104/491c73d1-21e0-40bb-91ab-4fc0f20eee84)

DCT는 [이산 코사인 변환(discrete cosine transform)](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%82%B0_%EC%BD%94%EC%82%AC%EC%9D%B8_%EB%B3%80%ED%99%98)의 약자이며 공간 영역을 주파수 영역으로 옮기는 JPEG 알고리즘의 첫번째 과정입니다. `부동형(float)`, `정수형(integer)` - 기본값, `빠른 정수형(fast integer)`의 옵션이 있습니다.

1. `부동형(float)`
   - `부동형(float)` 방식은 `정수형(integer)` 방식보다 조금 더 정확한 결과를 얻을 수 있습니다. 하지만 부동소수점 연산이 매우 빠른 장비를 가지고 있지 않다면 연산 과정이 훨씬 더 느립니다. 또한 부동소수점 연산은 장비마다 다르기 때문에 장비별로 다른 결과를 얻을 수도 있습니다. 하지만, `정수형(integer)` 방식은 어디서든 동일한 계산 결과를 얻을 수 있습니다.
2. `정수형(integer)`
   - 이 방식은 `부동형(float)` 방식보다는 빠르지만, 정확도는 떨어집니다.
3. `빠른 정수형(fast integer)`
   - 이 방식은 위 두가지 방식보다 계산 속도는 가장 빠르지만, 정확도는 가장 떨어집니다.

[위키피디아 - 이산 코사인 변환](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%82%B0_%EC%BD%94%EC%82%AC%EC%9D%B8_%EB%B3%80%ED%99%98)

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.4. PNG로 이미지 내보내기](./06-01-filesx-02-file_formatsx-04-export_image_as_png.md)

[⬅️ 이전: 6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-filesx-02-file_formatsx-02-export_image_as_heif.md)

[⬆️ 위: 6.1.2. 파일 형식](./06-01-filesx-02-file_formats.md)

[⬆️ 위: 6.1. 파일](./06-01-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html#file-jpeg-save)
