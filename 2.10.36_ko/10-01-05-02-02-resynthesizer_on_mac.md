# 10.1.5.2.2. Mac OSX에서 Resynthesizer 사용하기
## 1. 설치하기

사용자의 Mac에 MacPorts가 설치되어 있지 않다면, [MacPorts 설치하기](https://guide.macports.org/) 페이지의 내용을 확인하여 MacPorts를 설치합니다. 설치가 완료되었다면, 아래 명령으로 MacPorts가 설치되었는지 확인합니다.

```
$ port version
```

사용자의 Mac에 MacPorts를 설치한 뒤에, [MacPorts의 gimp-resynthesizer](https://ports.macports.org/port/gimp-resynthesizer/details/)를 설치합니다.

```
$ sudo port install gimp-resynthesizer
```

⚠️ 주의: 처음으로 MacPorts를 설치하는 경우, `gimp-resynthesizer`에 필요한 라이브러리를 설치하기 위해 오래 기다려야 할 수 있습니다. 이 예제를 위해 설치할 당시, 약 7분 30초 정도가 걸려 설치가 완료되었습니다.

#### 영상 10.1.5.2.2.a1. Mac의 터미널에서 MacPorts로 `gimp-resynthesizer` 설치 (Mac) (우리말)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/106c8e8a-32b3-44f8-99ee-2c62bdef602d"></video>

[MacPorts의 gimp-resynthesizer](https://ports.macports.org/port/gimp-resynthesizer/details/)을 설치한 이후에 아래 명령으로 플러그인 파일이 설치된 위치를 확인해야 합니다.

```
$ port contents gimp-resynthesizer
```

플러그인 파일의 경로를 확인해서 [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `기본 설정` → `폴더` → `플러그인`에서 플러그인 파일의 경로를 추가합니다.

GIMP(김프)를 재시작하면, Resynthesizer 플러그인이 설치된 것을 확인할 수 있습니다.

#### 영상 10.1.5.2.2.a2. GIMP(김프)에 플러그인 경로 추가 (Mac) (우리말)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/58f01bee-cecc-41d1-a3ef-ed8c77113bae"></video>

## 2. 사용하기 - Heal selection
1. GIMP(김프)를 재시작합니다.
2. GIMP(김프)에서 제거할 대상이 있는 이미지를 엽니다.
3. 제거할 대상을 선택 도구를 이용해 선택 영역으로 만듭니다.
4. [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `필터` → `보강` → `Heal selection...`을 클릭합니다.
5. `python_fu_heal_selection` 대화상자가 열립니다. 각 입력항목의 기능은 아래와 같습니다.
|항목|기능|
|---|---|
|Context sampling with (pixels)|빈 공간을 채울 픽셀을 가져올 범위를 픽셀로 정합니다|
|Sample from|가져올 픽셀의 방향을 정합니다. `All around`는 대상 주변 전체, `Sides`는 대상의 왼쪽과 오른쪽이며 `Above and below`는 대상의 위쪽과 아래쪽입니다|
|Filling order|빈 공간을 채울 픽셀의 방향(순서)를 정합니다. `Random`은 무작위입니다. `Inwards towars center`는 바깥쪽에서부터 중심으로 채웁니다. `Outwards from center`는 중심에서 바깥쪽으로 채웁니다|
6. `python_fu_heal_selection` 대화상자의 입력항목의 값을 설정한 뒤에 `OK` 버튼을 클릭합니다.
7. 제거할 대상이 이미지에서 지워진 것을 확인할 수 있습니다.

#### 영상 10.1.5.2.2.a3. 플러그인 `Heal Selection` 사용 (Mac) (우리말)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/af379030-c0ee-44a9-8f42-4f7ea6a11221"></video>

***

## 관련 정보

[13.1.3. 새 플러그인 설치하기(Installing New Plugins)](./13-01-03-00-installing_new_plugins.md)

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
