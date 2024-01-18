# 3.2.2.9. 상태 표시 영역 (Status Area)
## 3.2.2.9.1. 상태 표시 영역의 위치
#### 그림 3.2.2.91. 상태 표시 영역의 위치 (초록색 영역)
<img width="720" alt="그림 3.2.2.15. 상태 표시 영역의 위치 (초록색 영역)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/4c76f061-15ad-4bef-9f2d-a7d424c8d40e">

상태 표시 영역은 이미지 창의 가장 아랫 부분에 있습니다. 

## 3.2.2.9.2. 상태 표시 내용
기본적으로 상태 표시 영역에는 원본 이미지 `.xcf` 파일의 이름과 이미지의 시스템 메모리 사용량이 표시됩니다. 
#### 그림 3.2.2.92. 이미지 창 아래의 상태 표시 영역
<img width="451" alt="그림 3.2.2.16. 이미지 창 아래의 상태 표시 영역" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b111c3d9-ae55-4b98-91cf-651f81dbb301">

#### 그림 3.2.2.92. 이미지 창 아래의 상태 표시 영역(이미지 잘라내기 시의 정보)
<img width="720" alt="그림 3.2.2.92. 이미지 창 아래의 상태 표시 영역(이미지 잘라내기 시의 정보)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6aec1edb-2fd8-4a66-b2b2-be41480e1858">

[3.4.5. 이미지 잘라내기](./03-04-05-crop-an-image.md)에서 다른 형태의 정보를 노출하는 것을 확인할 수 있습니다.

## 3.2.2.9.3. 상태 표시 정보 변경
`GIMP`→ `기본 설정(Settings...)` → `이미지 창(Image Windows)` → `제목과 상태(Title & Status)`에서 상태 표시 영역에 표시되는 정보를 변경할 수 있습니다. 

#### 그림 3.2.2.93. `GIMP`→ `기본 설정` → `이미지 창` → `제목과 상태`
<img width="699" alt="이미지창-제목과상태(우리말)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/0c48190f-b68f-41e4-8fcd-6728490538ed">

#### 그림 3.2.2.94. `GIMP`→ `Settings...` → `Image Windows` → `Title & Status`
<img width="699" alt="image-window-title-n-status(en)" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d23da0fd-fc9d-42c1-924f-1b010df948e5">

시간이 오래 걸리는 작업을 하는 경우, 작업이 진행되는 동안 상태 표시 영역에 진행 중인 작업 내용과 진행률이 표시됩니다.

> 🗒️ 참고
>
> 이미지가 사용하는 메모리의 양은 이미지의 파일 크기에 따라 다릅니다. 예를 들어, 파일 크기가 70kB인 `.PNG` 이미지는 GIMP에서 열면 RAM의 246kB의 메모리를 차지합니다. 메모리 사용량의 차이에는 두가지 이유가 있습니다. 첫번째, `.PNG` 이미지는 압축된 파일 형식입니다. 그리고 이미지를 RAM에 올릴때 압축되지 않은 형태로 다시 만들어집니다. 두번째로 GIMP는 실행취소 명령을 쓰기 위해 추가적인 메모리를 써서 이미지의 복사본을 만듭니다. 

***

## 다른 페이지로 가기
[➡️ 다음: 3.2.2.10. 취소 버튼 (Cancel Button)](./03-02-02-image-windowx-10-cancel-button.md)

[⬅️ 이전: 3.2.2.8. 확대/축소 버튼 (Zoom Button)](./03-02-02-image-windowx-08-zoom-button.md)

[⬆️ 위: 3. GIMP(김프)의 첫 번째 단계](./03-00-first-step-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-image-window.html)
