# 3.4.4. 이미지 압축하기

#### 그림 3.4.4.1. JPEG 저장을 위한 예제 이미지
<img width="480" alt="그림 3.4.4.1. JPEG 저장을 위한 예제 이미지" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/f261315d-d269-4a77-b823-29ca7fb67e7d">

이미지 크기를 줄이지 않고도 이미지 파일의 용량을 줄일 수 있습니다. 가장 널리 사용되는 압축 이미지 형식은 `JPG`입니다. 압축의 수준을 다양하게 바꿔서 이미 이미지가 같은 `JPG` 포맷이더라도 더 적은 용량으로 줄일 수 있습니다. 다만 이미지가 용량이 줄어들면, 원본보다 이미지의 품질이 낮아집니다. 반복해서 `JPG` 포맷으로 저장하는 경우 점점 이미지의 품질이 낮아지는 것도 주의하세요.

GIMP에서 이미지들은 `.XCF` 파일 포맷으로 불러오거나 저장됩니다. `JPG` 이미지들도 열면 `.XCF` 파일 포맷으로 불러옵니다. 

## 3.4.4.1. "image-name.jpg 덮어쓰기(Overwrite image-name.jpg)"
GIMP에서 [이미지 메뉴바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의 `파일(File)` → `image-name.jpg 덮어쓰기(Overwrite image-name.jpg)` "이미지 내보내기(Export Image)" 대화상자를 열 수 있습니다.

#### 그림 3.4.4.11. `파일(File)` → `image-name.jpg 덮어쓰기(Overwrite image-name.jpg)` 메뉴의 위치
<img width="480" alt="그림 3.4.4.2. `파일(File)` → `image-name.jpg 덮어쓰기(Overwrite image-name.jpg)` 메뉴의 위치" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b4cd76d8-b53c-4d71-8ffd-7d2d2d6aee5c">

## 3.4.4.2. "Export As..."
GIMP에서 [이미지 메뉴바](./03-02-02-image-windowx-02-image-menu.md#32222-이미지-메뉴-바의-위치macos)의  `파일(File)` → `Export As...`를 누르면 "이미지 내보내기(Export Image)" 대화상자를 열 수 있습니다.

#### 그림 3.4.4.22. `파일(File)` → `Export As...` 메뉴의 위치
<img width="480" alt="그림 3.4.4.1 '이미지 내보내기(Export Image)' 메뉴의 위치" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/a9fa3a38-6aef-494b-98cd-ef25f62a6f27">

#### 그림 3.22. `Export As...` 대화상자
<img width="1280" alt="그림 3.22. '이미지 내보내기(Export Image)' 대화상자" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/cccd8b1f-db92-43ba-8118-50b3b2e0c784">

## 3.4.4.3. "Export As..." 대화상자에서 확장자 바꾸기(파일 확장자 직접입력)
The dialog opens with the file name already typed in the Name box, with the default, `.png` extension. Delete the existing extension and type `JPG` instead, and GIMP will determine the file type from the file extension.

## 3.4.4.4. "Export As..." 대화상자에서 확장자 바꾸기(파일 확장자 목록에서 선택)
Use the file extension list, marked with red in the figure above, to see the types supported by GIMP. The supported extensions change depending on your installed libraries. If GIMP complains, of if "JPEG" is grayed out in the Extension menu, cancel out of everything and step through the [3.4.7. 모드 바꾸기](./03-04-07-change-the-mode.md). Once you have done this, click `Save`. This opens the "Export Image as JPEG" dialog that contains the quality control.

## 3.4.4.5. "JPEG로 이미지 내보내기(Export Image as JPEG)" 대화상자
"JPEG로 이미지 내보내기" 대화상자는 좋은 화질을 유지하면서 메모리 크기를 줄이는 기본값을 사용합니다. 대화상자의 `이미지 창에 미리 보기 표시(Show preview in image window)` 체크박스를 체크하면 화질을 바꿀때마다 변하는 이미지의 화질을 직접 확인할 수 있습니다.

#### 그림 3.4.4.51. 'JPEG로 이미지 내보내기(Export Image as JPEG)' 대화상자
<img width="480" alt="그림 3.4.4.51. 'JPEG로 이미지 내보내기(Export Image as JPEG)' 대화상자" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/70c62a31-3d60-4d02-b6db-681ae20a9e08">

#### 영상 3.4.4.52. `이미지 창에 미리 보기 표시(Show preview in image window)`를 켜고 화질 변화 및 파일 크기를 확인할 수 있습니다
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/3d9fb420-813f-4020-9398-8780a984d948"></video>

## 3.4.4.6. 화질 변화와 파일 크기
#### 영상 3.4.4.611. 화질 변화와 파일 크기 빠르게 보기
<video controls="controls" width="1080" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e2f09f9b-4bd0-4b3a-a4fa-279730a8a148"></video>

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

### 3.4.4.7.2. "image-name.jpg 덮어쓰기(Overwrite image-name.jpg)"
#### 영상 3.4.4.7.21. 전체 과정


***

[다음: 3.4.5. 이미지 잘라내기](./03-04-05-crop-an-image.md)

[이전: 3.4.3. 이미지의 크기 바꾸기 (인쇄용)](./03-04-03-change-the-size-of-an-Image-for-print.md)

[부모: 3.4. 자주하는 편집 작업](./03-04-00-common-tasks.md)

[최상위](./00-home.md)

[원본](https://docs.gimp.org/2.10/en_GB/gimp-tutorial-quickie-jpeg.html)
