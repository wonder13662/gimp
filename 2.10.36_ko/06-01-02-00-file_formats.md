# 6.1.2. 파일 형식
이미지 파일을 저장하고 내보내는 여러가지 명령이 있습니다. 이 장에서 설명하는 명령들은 [16.2. 파일 메뉴](./16-02-00-the-file-menu.md)에서 다루고 있습니다.

GIMP(김프)에서는 작업 결과를 다양한 이미지 파일 유형으로 내보낼 수 있습니다. 오직 GIMP(김프)의 고유한 `XCF` 파일 유형만이 이미지 작업에 관련된 모든 정보(레이어, 투명도 등)를 저장할 수 있습니다. 그 외의 모든 다른 이미지 파일 유형으로 내보내면 이미지 정보를 일부는 저장하지만 나머지는 잃어버리게 됩니다. 그러므로 이미지 파일을 내보내기 위해 선택한 이미지 파일 유형의 특성을 이해하는 것이 중요합니다.

이미지를 내보내더라도 이미지 원본은 바뀌지 않습니다. 더 자세한 내용은 [15.5.7. 파일 내보내기](./15-05-07-export-file.md)에서 확인해보세요.

## `dirty` - 수정된 뒤에 저장되지 않은 이미지 상태

> 🗒️ 참고
>
> GIMP(김프)에서는 이미지가 원본과 다르게 수정된 뒤에 저장되지 않은 이미지의 상태를 `dirty`라고 표현합니다. 이미지를 닫을 때(아마도 GIMP를 끌 때), 이미지의 상태가 `dirty`라면 경고 메시지 대화상자(그림 90.4.42.a101)를 볼 수 있습니다. 또한 [타이틀 바](./03-02-02-01-title-bar.md)에 표시된 파일 이름의 맨 앞에 `*`이 붙어 있는 것(그림 90.5.1.a131)을 확인할 수 있습니다.
>
> 이미지를 GIMP(김프)의 고유한 파일 유형인 `XCF`로 저장(save)하면, 이미지의 상태가 `dirty`가 아닌 것으로 판단합니다. GIMP(김프)는 저장한 이미지의 모든 정보가 유지될 것을 알 수 있기 때문입니다. 반대로 이미지를 내보내면(export) 여전히 이미지의 상태는 `dirty`인 상태로 판단합니다. 왜냐하면 GIMP(김프)는 내보낸 이미지의 정보가 모두 유지될 것인지 아니면 잃어버릴 것인지 알 수 없기 때문입니다.

#### [그림 90.5.1.a131. 타이틀 바의 이미지 이름 표시 - dirty 상태이므로 이름 맨 앞에 `*` 표시](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-01-title_bar.html#%EA%B7%B8%EB%A6%BC-9051a131-%ED%83%80%EC%9D%B4%ED%8B%80-%EB%B0%94%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%9D%B4%EB%A6%84-%ED%91%9C%EC%8B%9C---dirty-%EC%83%81%ED%83%9C%EC%9D%B4%EB%AF%80%EB%A1%9C-%EC%9D%B4%EB%A6%84-%EB%A7%A8-%EC%95%9E%EC%97%90--%ED%91%9C%EC%8B%9C)
[![90-05-01-title_bar-image_status_dirty-focus-asterisk](https://github.com/wonder13662/gimp/assets/15767104/a02c4aad-a110-4391-93cd-ac03a813b8f3)](https://wonder13662.github.io/gimp/2.10.36_ko/90-05-01-title_bar.html#%EA%B7%B8%EB%A6%BC-9051a131-%ED%83%80%EC%9D%B4%ED%8B%80-%EB%B0%94%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%9D%B4%EB%A6%84-%ED%91%9C%EC%8B%9C---dirty-%EC%83%81%ED%83%9C%EC%9D%B4%EB%AF%80%EB%A1%9C-%EC%9D%B4%EB%A6%84-%EB%A7%A8-%EC%95%9E%EC%97%90--%ED%91%9C%EC%8B%9C)

<a id="90-04-42-a101"></a>

#### [그림 90.4.42.a101. `뷰 닫기` 대화상자 (Windows) (우리말)](./90-04-42-close_view.md#90-04-42-a101)
![90-04-42-a101](https://github.com/wonder13662/gimp/assets/15767104/310282c7-ac1e-42ca-8741-78fd81577bc2)

[다른 운영체제와 언어의 `뷰 닫기` 대화상자 확인하기](./90-04-42-close_view.md#90-04-42-a102)

아래 영상에서 수정된 이미지가 `dirty` 상태일 때의 경고 대화상자가 노출되는 과정을 확인할 수 있습니다.

<a id="90-01-01-20-a102"></a>

#### [영상 90.1.1.20.a102. 바뀐 이미지의 “이미지 닫기(Close View)”의 실행여부 확인](./90-01-01-20-close_view.md#90-01-01-20-a102)
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/00f55691-d4a1-42d3-90a4-f3c8c75f50b3"></video>

## 하위 페이지

[6.1.2.1. GIF로 이미지 내보내기](./06-01-02-01-export_image_as_gif.md)

[6.1.2.2. HEIF/HEIC로 이미지 내보내기](./06-01-02-02-export_image_as_heif.md)

[6.1.2.3. 이미지를 JPEG로 내보내기](./06-01-02-03-export_image_as_jpeg.md)

[6.1.2.4. PNG로 이미지 내보내기](./06-01-02-04-export_image_as_png.md)

[6.1.2.5. TIFF로 이미지 내보내기](./06-01-02-05-export_image_as_tiff.md)

[6.1.2.6. WebP로 이미지 내보내기](./06-01-02-06-export_image_as_webp.md)

[6.1.2.7. MNG로 이미지 내보내기](./06-01-02-07-export_image_as_mng.md)

## 다른 페이지로 가기

[➡️ 다음: 6.1.2.1. GIF로 이미지 내보내기](./06-01-02-01-export_image_as_gif.md)

[⬅️ 이전: 6.1.1. 이미지 저장/내보내기](./06-01-01-save_export_images.md)

[⬆️ 위: 6.1. 파일](./06-01-00-files.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-images-out.html)
