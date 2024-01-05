# 2.1. GIMP(김프) 실행하기

아이콘(1개의 GIMP만을 설치한 경우)을 클릭하거나, 커맨드 라인에서 **gimp**를 입력해서 GIMP를 실행할 수 있습니다. 여러 개의 버전의 GIMP가 설치되어 있는 경우에는 **gimp-2.10**를 입력해서 최신 버전을 실행할 수도 있습니다. gimp 이름 옆에 이미지 파일 이름의 목록을 추가해서 GIMP 시작과 동시에 이미지들을 함께 열 수 있습니다. GIMP가 실행된 이후에도 역시 이미지 파일들을 열 수 있습니다.

#### 영상 2.1.1. 커맨드 라인에서 GIMP 실행하기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/cc1c76f0-d24d-4b98-8738-06b8e9608bab"></video>


#### 영상 2.1.2. 커맨드 라인에서 GIMP 실행 + 이미지 함께 열기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6a58a2fe-1c3b-4d9b-97af-89283a16d57a"></video>

대부분의 운영체제는 파일 확장자와 애플리케이션과의 연결을 지원합니다. 예를 들어서, `.jpg` 확장자 파일을 클릭하면, GIMP로 해당 이미지를 자동으로 여는 기능을 말합니다. 이미지 파일들의 확장자와 GIMP를 연결하면, 이미지를 더블 클릭하면 이미지를 GIMP로 바로 열수 있습니다.

#### 영상 2.1.3. 파일 확장자와 GIMP 연동(file association)해서 바로 열기
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6a73ad52-3751-4174-aa74-f8d8a3a782ea"></video>


## 2.1.1. GIMP(김프)가 실행가능한 플랫폼들
GIMP는 오늘날 가장 많은 플랫폼을 지원하는 이미지 편집 프로그램입니다. GIMP가 지원하는 플랫폼은 아래와 같습니다.

- GNU/Linux™
- Apple macOS™
- Microsoft Windows™
- OpenBSD™
- NetBSD™
- FreeBSD™
- Solaris™
- SunOS™
- AIX™
- HP-UX™
- Tru64™
- Digital UNIX™
- OSF/1™
- IRIX™
- OS/2™
- BeOS™

GIMP는 소스 코드의 가용성 덕분에 쉽게 다른 운영체제로 포팅될 수 있습니다. 좀 더 많은 정보를 알고 싶다면 GIMP 개발자 홈페이지를 참고해주세요. [GIMP-DEV](https://developer.gimp.org/)

## 2.1.2. 언어 설정
GIMP는 자동으로 시스템의 언어를 감지합니다. 언어 감지가 실패하는 경우는 드물지만, GIMP에서 다른 언어를 사용하고 싶다면, `Edit` → `Preference` → `Interface` → `Language`에서 바꿀 수 있습니다.

#### 그림 2.1.1. Settings(Preference) > GIMP 언어설정 바꾸기
<img width="720" alt="user interface language" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/8a58b8e2-270c-4983-b65d-a9f7b4b6ce1a">

또는 다음 방법 중 하나를 사용합니다.

### 리눅스(Linux)
콘솔 모드에서 `LANGUAGE=en gimp` 또는 `LANG=en gimp`을 타이핑할 때, `en`을 `fe`, `de` 등의 원하는 언어 기호로 바꿔 입력합니다. `LANGUAGE=en`은 GIMP를 실행하기 위한 환경 변수를 설정합니다.

### 마이크로소프트 윈도우즈
"시스템 속성" 영역에서 `제어판` → `시스템 속성` → `고급` → `환경변수` 버튼을 누릅니다. **새로 만들기(W)** 버튼을 눌러 시스템 변수 이름을 `LANG`으로 추가하고 값으로 `fr` 또는 `de`등의 원하는 언어 기호로 바꿔 입력합니다. **확인** 버튼을 반드시 3번 연속으로 클릭해야 적용할 수 있습니다.

GIMP에서 사용되는 언어를 자주 바꿔야 한다면, 배치파일을 만들어서 언어를 바꿀 수 있습니다.
메모장을 열고 아래 명령을 입력합니다(예시에서는 프랑스어인 `fr`을 사용했습니다):
```
set lang=fr
start gimp-2.10.exe
```
`GIMP-FR.BAT`로 저장합니다 (혹은 다른 이름도 가능합니다. 하지만 항상 파일의 확장자가 `.BAT`로 끝나야 합니다). 배치파일의 바로가기를 만들어서 바탕화면으로 드래그해서 옮겨둡니다.

다른 방법으로는 `시작` → `프로그램` → `GTK Runtime Environment`를 실행한 뒤에 `Select language`를 클릭해서 드롭다운 리스트에서 언어를 선택할 수 있습니다.

참고: [GTK](https://ko.wikipedia.org/wiki/GTK)는 GIMP 툴킷의 줄임말입니다.

### 애플 맥OS
`System Settings` → `General` → `Language & Region`에서 원하는 언어를 설정할 수 있습니다.

#### 그림 2.1.2. 애플 맥OS의 언어설정
<img width="720" alt="language-n-region" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/5f25a7e3-58bb-4d89-9e6c-6c784a5f8d40">


### 새 인스턴스로 GIMP(김프) 시작
GIMP를 커맨드라인으로 실행할 때, `-n` 옵션을 추가해서 여러 개의 GIMP 인스턴스를 띄울 수 있습니다. 예를 들어, 리눅스 시스템의 콘솔에서 **gimp-2.10**를 입력하여 GIMP를 띄운다면, 커맨드 라인 툴에서 `LANGUAGE=en gimp-2.10 -n`를 입력하여 두번째 GIMP 인스턴스는 언어를 영어로 하여 띄울 수 있습니다. 변역 작업을 할 때 매우 편리합니다.

#### 그림 2.1.3. 
<img width="720" alt="Screenshot 2024-01-02 at 4 01 47 PM" src="https://github.com/wonder13662/gimp/assets/15767104/71928696-cfb7-4578-82b8-f0d6cf1a27cb">
<br/>
[다른 언어로 여러 개의 GIMP(김프) 띄우기 (MacOS:Sonoma 14.2.1 GIMP 2.10.36)](./02-01-running-gimpx-multiple-instances.md)

## 2.1.3. 커맨드 라인 실행 옵션들
GIMP를 시작할 때, 추가적인 인자(argument) 또는 옵션(Option) 값이 필요하지는 않습니다. 하지만 가장 자주 사용되는 것들을 설명해두었습니다. Unix 시스템에서는 `man gimp` 명령으로 전체 인자(argument) 목록을 확인할 수 있습니다.

커맨드 라인 인자(argument)들은 반드시 `gimp-2.10 [OPTION...] [FILE|URI...]`의 형식으로 입력해야 합니다.

참고: 여기서의 인자(argument)와 옵션(Option)은 같은 의미로 사용되었습니다. 

### `-?`, `--help`
모든 커맨드 라인 옵션을 보여줍니다.

#### 영상 2.1.4. `--help`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c2b7a28d-eba2-4d6b-bc6e-bebb9f869d45"></video>

### `--help-all`
모든 도움말 옵션을 보여줍니다.

#### 영상 2.1.5. `--help-all`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/652dc754-d0a7-4683-9a2a-be05a8dfd92f"></video>

### `--help-gtk`
GTK+ 옵션을 보여줍니다.

#### 영상 2.1.6. `--help-gtk`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e83a6f1f-4156-4bda-a95d-a2cfbbf28fca"></video>

### `-v`, `--version`
현재 사용중인 GIMP 버전 정보를 보여준 뒤 종료합니다. `-v`, `--version`에서 각각 노출하는 정보가 다릅니다.

#### 영상 2.1.7. `-v`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/66e29f26-248b-4c16-b323-5e9433d3e89e"></video>

#### 영상 2.1.8. `--version`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9295c1c8-4e4c-459c-b67a-813a041b2369"></video>

### `--license`
사용 허가서 정보를 보여준 뒤 GIMP를 종료합니다.

#### 영상 2.1.9. `--license`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e80f0686-4205-4c3f-935d-b8c2ccb235b0"></video>

### `--verbose`
시작 메시지를 자세히 보여줍니다.

#### 영상 2.1.10. `--verbose`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c7dc47d7-610d-4c30-a391-19e77fffb54c"></video>

### `-n`, `--new-instance`
새로운 인스턴스로 GIMP를 시작합니다.. 여러 개의 GIMP 인스턴스를 시작할 수 있습니다.

#### 영상 2.1.11. `-n`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/faadf0d5-5978-48db-9a33-32fa339a35d7"></video>

#### 영상 2.1.12. `--new-instance`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d6a4c696-424c-48cd-b6f3-a25977d513f1"></video>

### `-a`, `--as-new`
새 이미지를 만듭니다. (TODO 정확한 사용방법을 파악하지 못했습니다)

### `-i`, `--no-interface`
사용자 인터페이스 없이 실행합니다.

#### 영상 2.1.13. `-i`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6760d817-7ccc-49c6-8e1f-0616e68c4e02"></video>

#### 영상 2.1.14. `--no-interface`
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b375e345-867e-450c-a8b9-ec5fc58766c0"></video>

### `-d`, `-no-data`
무늬(pattern), 그라디언트(gradient), 색상표(palette), 붓(brush) 등을 읽어 들이지 않습니다. 비대화식 환경에서 시작 시간을 최소화할 때 유용합니다.

#### 영상 2.1.15. 붓(brush), 무늬(pattern)의 읽지 않음
<video controls="controls" width="720" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/a232c28c-a137-497b-a2d6-0fec8b6ace11"></video>

아래 예시들은 위 옵션으로 실행한 경우(`-no-data`)와 그렇지 않은 경우를 비교한 이미지입니다.
#### 그림 2.1.4. 붓(brush)
<img width="480" alt="no-data-brush" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/59bbf85f-d885-4f8a-bc09-d05a0fc7ac23">

#### 그림 2.1.5. 그라디언트(gradient)
<img width="426" alt="no-data-gradient" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/ad0a4680-d117-47f0-90f0-edf3e532020a">

#### 그림 2.1.6. 색상표(palette)
<img width="425" alt="no-data-palette" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/0734f993-5e82-4182-a986-931dadbb3eb9">

#### 그림 2.1.7. 무늬(pattern)
<img width="429" alt="no-data-pattern" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c918e337-d746-438c-ab0c-f036dbc7e46f">

### 영상 2.1.16. `-f`, `-no-fonts`
글꼴(font)을 읽어오지 않습니다. 이 옵션은 글꼴(font)을 사용하지 않는 스크립트를 사용하거나 문제가 있는 글꼴(font)을 찾아내기 위해 GIMP(김프)를 시작할 때 유용합니다.

<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/242ee167-9c78-47e3-9dd2-f08d75eac4a6"></video>

아래 이미지는 위 옵션으로 실행한 경우(`-no-fonts`)와 그렇지 않은 경우를 비교한 이미지입니다.
#### 그림 2.1.8. `-no-fonts` 사용한 경우와 그렇지 않은 경우 비교
<img width="480" alt="no-fonts" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/fc8d52e4-09ac-46b2-8e46-278fd53bef95">

### `-s`, `--no-splash`
시작시 스플래쉬 화면을 보여주지 않습니다.

#### 그림 2.1.9. 시작시의 스플래쉬 화면
<img width="720" alt="example-splash" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/85da532a-731b-488f-b5e1-66a217c30c8b">

참고: 맥OS에서는 커맨드 라인으로 실행시 스플래시 화면을 보여주지 않는 것이 기본값입니다.

### `--no-shm`
GIMP와 플러그인 사이의 공유 메모리를 사용하지 않습니다.

### `--no-cpu-accel`
특수한 CPU 가속 기능을 사용하지 않습니다. 문제가 많은 하드웨어 가속기나 기능을 찾아내거나 사용하지 않을 때 유용합니다.

### `--session=name`
현재 GIMP 세션에 다른 `sessionrc`를 사용합니다. 새 세션 이름은 기본 `sessionrc` 파일명에 덧붙여집니다.

### `--gimprc=filename`
기본값 외의 다른 `gimprc`를 사용합니다. `gimprc`는 GIMP 설정값을 담고 있는 파일입니다. 플러그인 위치나 시스템 사양이 틀린 경우에 유용합니다. 

### `--system-gimprc=filename`
다른 시스템의 `gimprc` 파일을 사용합니다.

### `-b`, `--batch=commands`
비대화명 명령(command)들의 모음을 실행합니다. 명령 모음(set of commands)은 일반적으로 GIMP 스크립팅 확장에서 실행할 수 있는 스크립트 형태로 되어 있습니다. 명령이 `-`일 경우, 이는 표준 입력으로 해석됩니다.

### `--batch-interpreter=proc`
일괄처리 명령을 수행하기 위한 프로시저입니다. 기본 프로시저는 Script-Fu입니다.

### `--console-messages`
에러나 경고를 다이얼로그 박스에 나타내지 않습니다. 대신 콘솔에 메시지를 출력합니다.

### `--pdb-compat-mode=mode`
PDB 호환 모드 (`off`|`on`|`warn`)

### `--stack-trace-mode=mode`
충돌시 디버그를 합니다. (`never`|`query`|`always`)

### `--debug-handlers`
치명적이지 않은 디버깅 시그널 처리기를 사용합니다. GIMP(김프) 디버깅 시에 유용합니다.

### `--g-fatal-warnings`
모든 경고를 치명적인 단계로 설정합니다. GIMP(김프) 디버깅 시에 유용합니다.

### `--dump-gimprc`
기본 설정으로 `gimprc` 파일을 출력합니다. `gimprc` 파일을 결합할 때 유용합니다.

### `--display=display`
X-윈도우 스타일을 사용합니다(Microsoft Windows에서는 사용불가).

### `--show-playground`
[기본 설정(preference page)](./12-01-06-experimental-playground.md)의 실험적 기능(experimental features) 항목을 보여줍니다.

#### 그림 2.1.10. 기본 설정(preference page)의 실험적 기능(experimental features) 항목 비교
<img width="720" alt="--show-playground" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/0c9bd441-4cb1-4aac-80d9-3b387ab124cc">

## 다른 페이지로 가기
[다음: 2.2. 설정 폴더들](./02-02-configuration-folders.md)

[이전: 1.2. GIMP(김프)의 새로운 기능 알아보기](./01-02-whats-new-in-gimp.md)

[부모: 2. GIMP(김프) 시작하기](./02-00-fire-up-gimp.md)

[최상위](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-fire-up.html)