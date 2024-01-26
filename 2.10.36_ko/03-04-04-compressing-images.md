# 3.4.4. 이미지 압축하기
(TODO 저작권이 없는 Pixabay 이미지로 작업하는 것으로 수정이 필요함)

#### 그림 3.4.4.1. JPEG 저장을 위한 예제 이미지
<img width="480" alt="그림 3.4.4.1. JPEG 저장을 위한 예제 이미지" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/33acbd8d-9e23-4f3f-9e7e-4949bd5f1ec8">

이미지 크기를 줄이지 않고도 이미지 파일의 용량을 줄일 수 있습니다. 가장 널리 사용되는 압축 이미지 형식은 `JPG`입니다. 압축의 수준을 다양하게 바꿔서 이미 이미지가 같은 `JPG` 포맷이더라도 더 적은 용량으로 줄일 수 있습니다. 다만 이미지가 용량이 줄어들면, 원본보다 이미지의 품질이 낮아집니다. 반복해서 `JPG` 포맷으로 저장하는 경우 점점 이미지의 품질이 낮아지는 것도 주의하세요.

GIMP에서 이미지들은 `.XCF` 파일 포맷으로 불러오거나 저장됩니다. `JPG` 이미지들도 열면 `.XCF` 파일 포맷으로 불러옵니다. 

## 3.4.4.1. "image-name.jpg 덮어쓰기(Overwrite image-name.jpg)"
GIMP에서 [이미지 메뉴바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `파일(File)` → `image-name.jpg 덮어쓰기(Overwrite image-name.jpg)`를 클릭하면 “JPEG로 이미지 내보내기(Export Image as JPEG)” 대화상자를 열 수 있습니다.

#### [그림 90.1.1.12.a101 `파일(File)` → `image-name.jpg 덮어쓰기(Overwrite image-name.jpg)` 메뉴의 위치](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-12-overwrite.html#%EA%B7%B8%EB%A6%BC-901112a101-%ED%8C%8C%EC%9D%BCfile--image-namejpg-%EB%8D%AE%EC%96%B4%EC%93%B0%EA%B8%B0overwrite-image-namejpg-%EB%A9%94%EB%89%B4%EC%9D%98-%EC%9C%84%EC%B9%98)
[<img width="1080" src="https://github.com/wonder13662/gimp/assets/15767104/f08f271e-255c-4b1f-bcd9-c3a3615366ef">](https://wonder13662.github.io/gimp/2.10.36_ko/90-01-01-filex-12-overwrite.html#%EA%B7%B8%EB%A6%BC-901112a101-%ED%8C%8C%EC%9D%BCfile--image-namejpg-%EB%8D%AE%EC%96%B4%EC%93%B0%EA%B8%B0overwrite-image-namejpg-%EB%A9%94%EB%89%B4%EC%9D%98-%EC%9C%84%EC%B9%98)

#### [그림 90.4.33.a101. 'JPEG로 이미지 내보내기(Export Image as JPEG)' 대화상자 (Windows) (우리말)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a101-jpeg%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0export-image-as-jpeg-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)
[<img width="207" alt="90-04-33-export_image_as_jpeg(windows)(ko)" src="https://github.com/wonder13662/gimp/assets/15767104/b1e96240-69ca-44e6-90a5-782059a2d383">](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-33-export_image_as_jpeg.html#%EA%B7%B8%EB%A6%BC-90433a101-jpeg%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0export-image-as-jpeg-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90-windows-%EC%9A%B0%EB%A6%AC%EB%A7%90)

[다른 운영체제와 언어의 'JPEG로 이미지 내보내기(Export Image as JPEG)' 대화상자 확인하기](./90-04-33-export_image_as_jpeg.md)

## 3.4.4.2. "Export As..."
GIMP에서 [이미지 메뉴바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의  `파일(File)` → `Export As...`를 누르면 "이미지 내보내기(Export Image)" 대화상자를 열 수 있습니다. "이미지 내보내기(Export Image)" 대화상자에서 파일 이름과 확장자를 설정하면 다시 "JPEG로 이미지 내보내기(Export Image as JPEG)" 대화상자를 열 수 있습니다.

#### 그림 3.4.4.a211. `파일(File)` → `Export As...` 메뉴의 위치
![90-01-01-file-export_as(w1080)-focus-export_as](https://github.com/wonder13662/gimp/assets/15767104/c18cee54-15c2-40b7-9fe6-755373b235a9)

#### 그림 90.4.34.a101 `Export As...` 대화상자 (Windows) (우리말)
![90-04-34-export_as(windows)(ko)(w720)](https://github.com/wonder13662/gimp/assets/15767104/b633f0c9-d50d-42f3-b43d-9e7a848ff01e)

[다른 운영체제와 언어의 `Export As...` 대화상자 확인하기](./90-04-34-export_as.md)

## 3.4.4.3. "Export As..." 대화상자에서 확장자 바꾸기(파일 확장자 직접입력)
"Export As..." 대화상자가 열리면 이름입력 필드에 기본값으로 현재 파일 이름이 이미 입력이 되어 있습니다. 파일 이름의 확장자를 지우고, `JPG`로 확장자 이름을 입력하면, GIMP는 사용자가 입력한 확장자 이름의 파일타입으로 설정합니다.

#### 영상 3.4.4.3.1. "Export As..." 대화상자에서 확장자 바꾸기(파일 확장자 직접입력)
<video controls="controls" width="1280" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9ec33a38-550c-4890-9250-9e9ee1eceb55"></video>

## 3.4.4.4. "Export As..." 대화상자에서 확장자 바꾸기(파일 확장자 목록에서 선택)
GIMP에서 지원하는 파일 타입을 확인하기 위해 "Export As..." 대화상자의 아래쪽의 "파일 유형 선택(Select File Type)"의 목록을 엽니다.

GIMP에서 지원되는 확장자는 사용자가 설치한 라이브러리에 따라 달라집니다. 만약 "JPEG" 확장자가 비활성화되어 있다면, 취소한 뒤에 [3.4.7. 모드 바꾸기](./03-04-07-change-the-mode.md)의 과정을 진행해주세요. 그 이후, `내보내기(Export)` 버튼을 클릭하면 "JPEG로 이미지 내보내기(Export Image as JPEG)" 대화상자를 열 수 있습니다.

#### 영상 3.4.4.4.1. "파일 유형 선택(Select File Type)"의 목록 열기
<video controls="controls" width="1280" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/057ca909-dbd1-4db3-affd-e4a2a5692025"></video>

## 3.4.4.5. "JPEG로 이미지 내보내기(Export Image as JPEG)" 대화상자
"JPEG로 이미지 내보내기" 대화상자는 좋은 화질을 유지하면서 메모리 크기를 줄이는 기본값을 사용합니다. 대화상자의 `이미지 창에 미리 보기 표시(Show preview in image window)` 체크박스를 체크하면 화질을 바꿀때마다 변하는 이미지의 화질을 직접 확인할 수 있습니다.

#### 그림 3.4.4.51. 'JPEG로 이미지 내보내기(Export Image as JPEG)' 대화상자
<img width="480" alt="그림 3.4.4.51. 'JPEG로 이미지 내보내기(Export Image as JPEG)' 대화상자" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/70c62a31-3d60-4d02-b6db-681ae20a9e08">

#### 영상 3.4.4.52. `이미지 창에 미리 보기 표시(Show preview in image window)`를 켜고 화질 변화 및 파일 크기를 확인할 수 있습니다
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9fd754fe-b40b-4160-b60e-417334775377"></video>

## 3.4.4.6. 화질 변화와 파일 크기
여기서는 원본 `JPG` 파일을 다른 압축률로 저장하여 화질과 파일크기의 변화를 살펴봅니다.
#### 영상 3.4.4.611. 화질 변화와 파일 크기 빠르게 보기
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/cccb8006-c816-4140-8867-e7331cfff4e0"></video>

| 화질(%) | 원본 | 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 0 |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 파일 크기 | 97 kB | 216 kB | 80 kB | 54 kB | 43 kB | 37 kB | 33 kB | 29 kB | 24 kB | 20 kB | 14 kB | 10 kB |

⚠️ 주의: 원본에서 화질 100%로 압축을 할 경우, 오히려 이미지의 파일 크기가 더 커집니다.

#### 그림 3.4.4.621. 화질(%): 원본, 파일크기: 97 kB
<img width="720" alt="그림 3.4.4.621. 화질(%): 원본, 파일크기: 97 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c86ee18a-134a-4f46-a460-16ddc1d073bc">

#### 그림 3.4.4.622. 화질(%): 100, 파일크기: 216 kB
<img width="720" alt="그림 3.4.4.622. 화질(%): 100, 파일크기: 216 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/33e7d1be-3bc4-4c09-9b0a-865fe19f6f02">

#### 그림 3.4.4.623. 화질(%): 90, 파일크기: 80 kB
<img width="720" alt="그림 3.4.4.623. 화질(%): 90, 파일크기: 80 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/bf0e63ec-f4ba-47ca-807f-3f574c7b9ca6">

#### 그림 3.4.4.624. 화질(%): 80, 파일크기: 54 kB
<img width="720" alt="그림 3.4.4.624. 화질(%): 80, 파일크기: 54 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f01589a0-37c5-4891-9728-8b261f51312e">

#### 그림 3.4.4.625. 화질(%): 70, 파일크기: 43 kB
<img width="720" alt="그림 3.4.4.625. 화질(%): 70, 파일크기: 43 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9536cd75-de33-4d2f-aa2f-adfccccdce39">

#### 그림 3.4.4.626. 화질(%): 60, 파일크기: 37 kB
<img width="720" alt="그림 3.4.4.626. 화질(%): 60, 파일크기: 37 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/61b7a920-c188-4a50-ba6a-b9fa73bafc5a">

#### 그림 3.4.4.627. 화질(%): 50, 파일크기: 33 kB
<img width="720" alt="그림 3.4.4.627. 화질(%): 50, 파일크기: 33 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fbfd20ce-622d-42ef-9afd-2a975135ca9f">

#### 그림 3.4.4.628. 화질(%): 40, 파일크기: 29 kB
<img width="720" alt="그림 3.4.4.628. 화질(%): 40, 파일크기: 29 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/71f4ad61-e079-4cbb-a6f9-025f88f7636c">

#### 그림 3.4.4.629. 화질(%): 30, 파일크기: 24 kB
<img width="720" alt="그림 3.4.4.629. 화질(%): 30, 파일크기: 24 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/1c3da61a-2a05-423e-9e7b-73da8545eb3f">

#### 그림 3.4.4.630. 화질(%): 20, 파일크기: 20 kB
<img width="720" alt="그림 3.4.4.630. 화질(%): 20, 파일크기: 20 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d7902f5f-d947-4f0a-88fe-ff471c14a11b">

#### 그림 3.4.4.631. 화질(%): 10, 파일크기: 14 kB
<img width="720" alt="그림 3.4.4.631. 화질(%): 10, 파일크기: 14 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ac55ec45-ebd8-41eb-9b3c-2b179751ed07">

#### 그림 3.4.4.632. 화질(%): 0, 파일크기: 10 kB
<img width="720" alt="그림 3.4.4.632. 화질(%): 0, 파일크기: 10 kB" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5f50636c-c75c-4817-8e39-49242e55c8b8">

## 3.4.4.7. 전체 과정 예시 영상
### 3.4.4.7.1. "Export As..."
#### 영상 3.4.4.7.11. 전체 과정
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fb9a59e4-df6a-424c-b483-001f6642b320"></video>

### 3.4.4.7.2. "image-name.jpg 덮어쓰기(Overwrite image-name.jpg)"
#### 영상 3.4.4.7.21. 전체 과정
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f5f165d9-dcb1-4039-81ce-cba09ed238b6"></video>

***

## 다른 페이지로 가기
[➡️ 다음: 3.4.5. 이미지 잘라내기](./03-04-05-crop-an-image.md)

[⬅️ 이전: 3.4.3. 이미지의 크기 바꾸기 (인쇄용)](./03-04-03-change-the-size-of-an-Image-for-print.md)

[⬆️ 위: 3.4. 자주하는 편집 작업](./03-04-00-common-tasks.md)

[🏠 홈](./00-home.md)

[원본](https://docs.gimp.org/2.10/en_GB/gimp-tutorial-quickie-jpeg.html)
