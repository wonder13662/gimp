# 10.1.5.2.1. Windows에서 Resynthesizer 사용하기
## 1. 설치하기
### 1-1. 다운로드 및 압축 풀기
1. [Github의 Resynthesizer 저장소 페이지](https://github.com/bootchk/resynthesizer)로 이동합니다.
2. 도착한 페이지에서 [install Resynthesizer for Windows](https://github.com/bootchk/resynthesizer/wiki/Install-Resynthesizer#windows)를 클릭해서 설치 안내 페이지로 이동합니다.
3. 설치 안내 페이지에서 [An archive of the resynthesizer plugin for Windows](https://github.com/pixlsus/registry.gimp.org_static/blob/master/registry.gimp.org/files/Resynthesizer_v1.0-i686.zip)를 클릭합니다.
4. 도착한 페이지에서 다운로드 버튼을 클릭해서 `registry.gimp.org/files/Resynthesizer_v1.0-i686.zip` 파일을 다운로드합니다.
5. 다운로드한 파일 - `Resynthesizer_v1.0-i686.zip`의 압축을 풉니다.

<a id="10-01-05-02-01-a4"></a>

#### 파일 10.1.5.2.1.a4. GIMP에서 사용하는 플러그인 모음 압축파일
[Resynthesizer_v1.0-i686.zip](https://github.com/wonder13662/gimp/files/14901087/Resynthesizer_v1.0-i686.zip)

<a id="10-01-05-02-01-a1"></a>

#### 그림 10.1.5.2.1.a1. 설치하기: Part 1
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/fa699710-6f4f-49b9-a828-a1c0acf68108"></video>

### 1-2. 플러그인 파일 설치
1. GIMP(김프)를 엽니다.
2. 기본설정(Preferences)을 열어, 폴더(Folders)의 `Plug-ins`을 선택합니다.
3. GIMP(김프)의 `Plug-ins`의 기본 디렉토리 위치를 클릭한 뒤, 캐비닛 모양의 버튼을 클릭합니다.
4. 파일 탐색기가 열립니다. 파일 탐색기에서 `plug-ins` 디렉토리를 클릭합니다.
5. 압축을 풀었던 디렉토리에 들어가서 아래 파일들을 선택합니다. 선택한 파일외에는 GIMP(김프)에서 동작하지 않으므로 참고하세요.
   - plugin-heal-selection.py
   - plugin-heal-transparency.py
   - plugin-render-texture.py
   - plugin-resynth-enlarge.py
   - plugin-resynth-fill-pattern.py
   - plugin-resynth-sharpen.py
   - resynthesizer-gui.exe
   - resynthesizer.exe
6. 선택한 파일을 파일 탐색기의 `plug-ins` 디렉토리로 복사합니다.

<a id="90-02-09-09-a1"></a>

#### [그림 90.2.9.9.a1. `기본 설정` → `폴더` → `플러그인` (Windows) (우리말)](./90-02-09-09-plugins.md#90-02-09-09-a1)
![90-02-09-09-a1](https://github.com/wonder13662/gimp/assets/15767104/d22a874c-5012-4210-966f-25f2293caca0)

[다른 운영체제와 언어의 `기본 설정` → `폴더` → `플러그인` 확인하기](./90-02-09-09-plugins.md#90-02-09-09-a2)

<a id="10-01-05-02-01-a2"></a>

#### 그림 10.1.5.2.1.a2. 설치하기: Part 2
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/d2a1be3f-56d8-417d-9a0f-147438d33664"></video>

### 1-3. GIMP(김프) 재시작 및 설치 확인
1. GIMP(김프)를 재시작합니다.
2. [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `필터` → `보강` → `Heal selection...`을 확인할 수 있다면, 설치가 완료된 것입니다.

<a id="10-01-05-02-01-a3"></a>

#### 그림 10.1.5.2.1.a3. 설치하기: Part 3
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/4f37fd72-bf52-4dea-9ed0-9325f330e0a4"></video>

## 2. 사용하기 - Heal selection
1. GIMP(김프)를 재시작합니다.
2. GIMP(김프)에서 제거할 대상이 있는 이미지를 엽니다.
3. 제거할 대상을 선택 도구를 이용해 선택 영역으로 만듭니다.
4. [이미지 메뉴 바](./03-02-04-02-image-menu.md)의 `필터` → `보강` → `Heal selection...`을 클릭합니다.
5. `python_fu_heal_selection` 대화상자가 열립니다. 각 입력항목의 기능은 아래와 같습니다.
   - Context sampling with (pixels): 빈 공간을 채울 픽셀을 가져올 범위를 픽셀로 정합니다
   - Sample from: 가져올 픽셀의 방향을 정합니다. `All around`는 대상 주변 전체, `Sides`는 대상의 왼쪽과 오른쪽이며 `Above and below`는 대상의 위쪽과 아래쪽입니다
   - Filling order: 빈 공간을 채울 픽셀의 방향(순서)를 정합니다. `Random`은 무작위입니다. `Inwards towars center`는 바깥쪽에서부터 중심으로 채웁니다. `Outwards from center`는 중심에서 바깥쪽으로 채웁니다
6. `python_fu_heal_selection` 대화상자의 입력항목의 값을 설정한 뒤에 `OK` 버튼을 클릭합니다.
7. 제거할 대상이 이미지에서 지워진 것을 확인할 수 있습니다.

<a id="10-01-05-02-01-a11"></a>

#### 영상 10.1.5.2.1.a11. 사용하기
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/0477be8f-4c32-4109-95f7-55e7ad9bd0cf"></video>

***

## 관련 정보

[13.1.3. 새 플러그인 설치하기(Installing New Plugins)](./13-01-03-00-installing_new_plugins.md)

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.5.2.2. Mac OSX에서 Resynthesizer 사용하기](./10-01-05-02-02-resynthesizer_on_mac.md)

[⬅️ 이전: 10.1.5.2. 불필요한 것 제거하기(Garbage Removal)](./10-01-05-02-00-garbage_removal.md)

[⬆️ 위: 10.1.5.2. 불필요한 것 제거하기(Garbage Removal)](./10-01-05-02-00-garbage_removal.md)

[⬆️ 위: 10.1.5. 이미지에서 필요없는 물체 없애기](./10-01-05-00-removing_unwanted_objects_from_an_image.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-garbage)
