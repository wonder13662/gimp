# 10.1.5.2.2. Mac OSX에서 Resynthesizer 사용하기
## 1. 설치하기
1. [Github의 Resynthesizer 저장소 페이지](https://github.com/bootchk/resynthesizer)로 이동합니다.
2. 도착한 페이지에서 [install Resynthesizer for Windows](https://github.com/bootchk/resynthesizer/wiki/Install-Resynthesizer#windows)를 클릭해서 설치 안내 페이지로 이동합니다.

(TODO 설치 영상 추가하기)

## 2. 사용하기 - Heal selection
1. GIMP(김프)를 재시작합니다.
2. GIMP(김프)에서 제거할 대상이 있는 이미지를 엽니다.
3. 제거할 대상을 선택 도구를 이용해 선택 영역으로 만듭니다.
4. [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터` → `보강` → `Heal selection...`을 클릭합니다.
5. `python_fu_heal_selection` 대화상자가 열립니다. 각 입력항목의 기능은 아래와 같습니다.
|항목|기능|
|---|---|
|Context sampling with (pixels)|빈 공간을 채울 픽셀을 가져올 범위를 픽셀로 정합니다|
|Sample from|가져올 픽셀의 방향을 정합니다. `All around`는 대상 주변 전체, `Sides`는 대상의 왼쪽과 오른쪽이며 `Above and below`는 대상의 위쪽과 아래쪽입니다|
|Filling order|빈 공간을 채울 픽셀의 방향(순서)를 정합니다. `Random`은 무작위입니다. `Inwards towars center`는 바깥쪽에서부터 중심으로 채웁니다. `Outwards from center`는 중심에서 바깥쪽으로 채웁니다|
6. `python_fu_heal_selection` 대화상자의 입력항목의 값을 설정한 뒤에 `OK` 버튼을 클릭합니다.
7. 제거할 대상이 이미지에서 지워진 것을 확인할 수 있습니다.

(TODO 사용하기 영상 추가하기)

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.5.3. 적목 현상 제거(Removing Red-eye)](./10-01-05-03-removing_red_eye.md)

[⬅️ 이전: 10.1.5.2.1. Windows에서 Resynthesizer 사용하기](./10-01-05-02-01-resynthesizer_on_windows.md)

[⬆️ 위: 10.1.5.2. 불필요한 것 제거하기(Garbage Removal)](./10-01-05-02-00-garbage_removal.md)

[⬆️ 위: 10.1.5. 이미지에서 필요없는 물체 없애기](./10-01-05-00-removing_unwanted_objects_from_an_image.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-garbage)
