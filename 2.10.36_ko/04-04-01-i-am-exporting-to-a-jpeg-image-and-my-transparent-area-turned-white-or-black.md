# 4.4.1. jpeg 이미지로 내보냈더니 투명 부분이 흰색 또는 검은색으로 바뀌었습니다

이미지를 내보낼 때, 어떤 이미지 형식들은 투명도를 지원하지 않는 것들도 있습니다. 예를 들어, `jpeg` 형식은 GIMP에서 투명한 부분들을 배경색으로 채웁니다. 이 배경색의 기본값은 흰색입니다.

#### [그림 90.1.1.13.a111. 작업중인 이미지가 투명도를 가지는 모습](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-13-export_as.html#%EA%B7%B8%EB%A6%BC-901113a111-%EC%9E%91%EC%97%85%EC%A4%91%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80%EA%B0%80-%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EB%8A%94-%EB%AA%A8%EC%8A%B5)
[![image_menu_bar-file(ko)(windows)-export-tranparency_test-xcf_source](https://github.com/wonder13662/gimp/assets/15767104/20997fbf-1d29-4bf7-86eb-ae8b63ef79d4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-13-export_as.html#%EA%B7%B8%EB%A6%BC-901113a111-%EC%9E%91%EC%97%85%EC%A4%91%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80%EA%B0%80-%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EB%8A%94-%EB%AA%A8%EC%8A%B5)

#### [그림 90.1.1.13.a112. 투명도를 가지는 이미지를 `jpeg`(투명도를 가지지 않음)으로 출력한 모습](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-13-export_as.html#%EA%B7%B8%EB%A6%BC-901113a112-%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EC%A7%80-%EC%95%8A%EC%9D%8C%EC%9C%BC%EB%A1%9C-%EC%B6%9C%EB%A0%A5%ED%95%9C-%EB%AA%A8%EC%8A%B5)
[![image_menu_bar-file(ko)(windows)-export-tranparency_test-jpeg_output](https://github.com/wonder13662/gimp/assets/15767104/cec22f48-e277-457d-b9dd-70caa00f3786)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-13-export_as.html#%EA%B7%B8%EB%A6%BC-901113a112-%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-jpeg%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EC%A7%80-%EC%95%8A%EC%9D%8C%EC%9C%BC%EB%A1%9C-%EC%B6%9C%EB%A0%A5%ED%95%9C-%EB%AA%A8%EC%8A%B5)

투명도를 이미지에 포함시키기 위해서, 투명도를 지원하는 `png` 또는 `tiff` 같은 다른 이미지 형식으로 바꿔야 합니다.

#### [그림 90.1.1.13.a113. 투명도를 가지는 이미지를 `png`(투명도를 가짐)으로 출력한 모습](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-13-export_as.html#%EA%B7%B8%EB%A6%BC-901113a113-%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-png%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%90%EC%9C%BC%EB%A1%9C-%EC%B6%9C%EB%A0%A5%ED%95%9C-%EB%AA%A8%EC%8A%B5)
[![image_menu_bar-file(ko)(windows)-export-tranparency_test-png_output](https://github.com/wonder13662/gimp/assets/15767104/bfe00d75-1ed7-4f80-b9ae-b48b99f91cb4)](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-13-export_as.html#%EA%B7%B8%EB%A6%BC-901113a113-%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%80%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-png%ED%88%AC%EB%AA%85%EB%8F%84%EB%A5%BC-%EA%B0%80%EC%A7%90%EC%9C%BC%EB%A1%9C-%EC%B6%9C%EB%A0%A5%ED%95%9C-%EB%AA%A8%EC%8A%B5)

## 다른 페이지로 가기

[➡️ 다음: ]()

[⬅️ 이전: 4.4. 이미지 내보내기 할 때의 문제 해결하기](./04-04-00-how-to-fix-problems-exporting-images.md)

[⬆️ 위: 4.4. 이미지 내보내기 할 때의 문제 해결하기](./04-04-00-how-to-fix-problems-exporting-images.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-getting-unstuck-export.html)
