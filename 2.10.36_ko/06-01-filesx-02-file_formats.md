# 6.1.2. 파일 형식
이미지 파일을 저장하고 내보내는 여러가지 명령이 있습니다. 이 장에서 설명하는 명령들은 [16.2. 파일 메뉴](./16-02-00-the-file-menu.md)에서 다루고 있습니다.

GIMP(김프)에서는 작업 결과를 다양한 이미지 파일 유형으로 내보낼 수 있습니다. 오직 GIMP(김프)의 고유한 `XCF` 파일 유형이 이미지 작업에 관련된 모든 정보(레이어, 투명도 등)를 저장할 수 있습니다. 그 외의 모든 다른 이미지 파일 유형으로 내보내면 이미지 정보를 일부는 저장하지만 나머지는 잃어버리게 됩니다. 그러므로 이미지 파일을 내보내기 위해 선택한 이미지 파일 유형의 특성을 이해하는 것이 중요합니다.

이미지를 내보내더라도 이미지 원본은 바뀌지 않습니다. 더 자세한 내용은 [15.5.7. 파일 내보내기](./15-05-07-export-file.md)에서 확인해보세요.

> 🗒️ 참고
>
> GIMP(김프)에서는 이미지가 원본과 다르게 수정된 뒤에 저장되지 않은 이미지의 상태를 `dirty`라고 표현합니다. 이미지를 닫을 때(아마도 GIMP를 끌 때), 이미지의 상태가 `dirty`이라면 경고 메시지 대화상자를 볼 수 있습니다. 또한 [타이틀 바](./03-02-02-image-windowx-01-title-bar.md)에 표시된 파일 이름의 맨 앞에 `*`이 붙어 있는 것을 확인할 수 있습니다.
>
> 이미지를 GIMP(김프)의 고유한 파일 유형인 `XCF`로 저장(save)하면, 이미지의 상태가 `dirty`가 아닌 것으로 판단합니다. GIMP(김프)는 저장한 이미지의 모든 정보가 유지될 것을 알 수 있기 때문입니다. 반대로 이미지를 내보내면(export) 여전히 이미지의 상태는 `dirty`인 상태로 판단합니다. 왜냐하면 GIMP(김프)는 내보낸 이미지의 정보가 모두 유지될 것인지 아니면 잃어버릴 것인지 알 수 없기 때문입니다.

#### 그림 90.5.1.a131. 타이틀 바의 이미지 이름 표시 - dirty 상태이므로 이름 맨 앞에 `*` 표시
![90-05-01-title_bar-image_status_dirty-focus-asterisk](https://github.com/wonder13662/gimp/assets/15767104/a02c4aad-a110-4391-93cd-ac03a813b8f3)

#### 그림 90.4.42.a101. `뷰 닫기` 대화상자 (Windows) (우리말)
![90-04-42-close_view(windows)(ko)](https://github.com/wonder13662/gimp/assets/15767104/310282c7-ac1e-42ca-8741-78fd81577bc2)

## 하위 페이지

[6.1.2.1. GIF로 이미지 내보내기](./06-01-filesx-02-file_formatsx-01-export_image_as_gif.md)

[6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-filesx-02-file_formatsx-02-export_image_as_heif.md)

[6.1.2.3. JPEG로 이미지 내보내기](./06-01-filesx-02-file_formatsx-03-export_image_as_jpeg.md)

[6.1.2.4. PNG로 이미지 내보내기](./06-01-filesx-02-file_formatsx-04-export_image_as_png.md)

[6.1.2.5. TIFF로 이미지 내보내기](./06-01-filesx-02-file_formatsx-05-export_image_as_tiff.md)

[6.1.2.6. WebP로 이미지 내보내기](./06-01-filesx-02-file_formatsx-06-export_image_as_webp.md)

[6.1.2.7. MNG로 이미지 내보내기](./06-01-filesx-02-file_formatsx-07-export_image_as_mng.md)

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.1. GIF로 이미지 내보내기](./06-01-filesx-02-file_formatsx-01-export_image_as_gif.md)

[⬅️ 이전: 6.1.1. 이미지 저장/내보내기](./06-01-filesx-01-save_export_images.md)

[⬆️ 위: 6.1. 파일](./06-01-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html)
