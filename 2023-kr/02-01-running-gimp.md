# 2.1. GIMP(김프) 실행하기

아이콘(1개의 GIMP만을 설치한 경우)을 클릭하거나, 커맨드 라인에서 **gimp**를 입력해서 GIMP를 실행할 수 있습니다. 여러 개의 버전의 GIMP가 설치되어 있는 경우에는 **gimp-2.10**를 입력해서 최신 버전을 실행할 수도 있습니다. gimp 이름 옆에 이미지 파일 이름의 목록을 추가해서 GIMP 시작과 동시에 이미지들을 함께 열 수 있습니다. GIMP가 실행된 이후에도 역시 이미지 파일들을 열 수 있습니다.

#### 커맨드 라인에서 GIMP 실행하기(MacOS:Sonoma 14.2.1 GIMP 2.10.36)
<video src="https://github.com/wonder13662/gimp/assets/15767104/cc1c76f0-d24d-4b98-8738-06b8e9608bab"></video>

#### 커맨드 라인에서 GIMP 실행 + 이미지 함께 열기(MacOS:Sonoma 14.2.1 GIMP 2.10.36)
<video src="https://github.com/wonder13662/gimp/assets/15767104/6a58a2fe-1c3b-4d9b-97af-89283a16d57a"></video>

대부분의 운영체제는 파일 확장자와 애플리케이션과의 연결을 지원합니다. 예를 들어서, `.jpg` 확장자 파일을 클릭하면, GIMP로 해당 이미지를 자동으로 여는 기능을 말합니다. 이미지 파일들의 확장자와 GIMP를 연결하면, 이미지를 더블 클릭하면 이미지를 GIMP로 바로 열수 있습니다.

#### 파일 확장자와 GIMP 연동(file association)해서 바로 열기(MacOS:Sonoma 14.2.1 GIMP 2.10.36)
<video src="https://github.com/wonder13662/gimp/assets/15767104/6a73ad52-3751-4174-aa74-f8d8a3a782ea"></video>


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

#### Settings(Preference) > GIMP 언어설정 바꾸기(MacOS:Sonoma 14.2.1 GIMP 2.10.36)
<img width="720" alt="user interface language" src="https://github.com/wonder13662/gimp/assets/15767104/8a58b8e2-270c-4983-b65d-a9f7b4b6ce1a">

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

#### 애플 맥OS의 언어설정 (MacOS:Sonoma 14.2.1 GIMP 2.10.36)
<img width="720" alt="language-n-region" src="https://github.com/wonder13662/gimp/assets/15767104/5f25a7e3-58bb-4d89-9e6c-6c784a5f8d40">


### 새 인스턴스로 GIMP(김프) 시작
Use `-n` to run multiple instances of GIMP. For example, use **gimp-2.10** to start GIMP in the default system language, and `LANGUAGE=en gimp-2.10 -n` to start another instance of GIMP in English; this is very useful for translators.

GIMP를 커맨드라인으로 실행할 때, `-n` 옵션을 추가해서 여러 개의 GIMP 인스턴스를 띄울 수 있습니다. 예를 들어, 리눅스 시스템의 콘솔에서 **gimp-2.10**를 입력하여 GIMP를 띄운다면, 커맨드 라인 툴에서 `LANGUAGE=en gimp-2.10 -n`를 입력하여 두번째 GIMP 인스턴스는 언어를 영어로 하여 띄울 수 있습니다. 변역 작업을 할 때 매우 편리합니다.

#### [다른 언어로 여러 개의 GIMP(김프) 띄우기 (MacOS:Sonoma 14.2.1 GIMP 2.10.36)](./02-01-running-gimp(multiple-instances).md)
<img width="720" alt="Screenshot 2024-01-02 at 4 01 47 PM" src="https://github.com/wonder13662/gimp/assets/15767104/71928696-cfb7-4578-82b8-f0d6cf1a27cb">

## 2.1.3. 커맨드 라인 실행 옵션들
GIMP를 시작할 때, 추가적인 인자(argument) 또는 옵션(Option) 값이 필요하지는 않습니다. 하지만 가장 자주 사용되는 것들을 설명해두었습니다. Unix 시스템에서는 `man gimp` 명령으로 전체 인자(argument) 목록을 확인할 수 있습니다.

커맨드 라인 인자(argument)들은 반드시 `gimp-2.10 [OPTION...] [FILE|URI...]`의 형식으로 입력해야 합니다.

참고: 여기서의 인자(argument)와 옵션(Option)은 같은 의미로 사용되었습니다. 

### `-?`, `--help`
모든 커맨드 라인 옵션 목록을 보여줍니다.

<video src="https://github.com/wonder13662/gimp/assets/15767104/c2b7a28d-eba2-4d6b-bc6e-bebb9f869d45"></video>

### `--help-all`
모든 도움말 옵션들을 보여줍니다.

<video src="https://github.com/wonder13662/gimp/assets/15767104/652dc754-d0a7-4683-9a2a-be05a8dfd92f"></video>

### `--help-gtk`
GTK+ 옵션들을 보여줍니다.

<video src="https://github.com/wonder13662/gimp/assets/15767104/e83a6f1f-4156-4bda-a95d-a2cfbbf28fca"></video>

### `-v`, `--version`
GIMP 버전 정보를 보여줍니다. `-v`, `--version`에서 각각 노출하는 정보가 다릅니다.

#### `-v`

<video src="https://github.com/wonder13662/gimp/assets/15767104/66e29f26-248b-4c16-b323-5e9433d3e89e"></video>

#### `--version`

<video src="https://github.com/wonder13662/gimp/assets/15767104/9295c1c8-4e4c-459c-b67a-813a041b2369"></video>

### `--license`
Show license information and exit.

### `--verbose`
Show detailed start-up messages.

### `-n`, `-new-instance`
Start a new GIMP instance.

### `-a`, `-as-new`
Open images as new.

### `-i`, `-no-interface`
Run without a user interface.

### `-d`, `-no-data`
Do not load patterns, gradients, palettes, or brushes. Often useful in non-interactive situations where start-up time is to be minizied.

### `-f`, `-no-fonts`
Do not load any fonts. This is useful to load GIMP faster for scripts that do not use fonts, or to find problems related to malformed fonts that hang GIMP.

### `-s`, `-no-splash`
Do not show the splash screen while starting.

### `--no-shm`
Do not use shared memory between GIMP and plugins.

### `--no-cpu-accel`
Do not use special CPU acceleration functions. Useful for finding or disabling buggy accelerated hardware or functions.

### `--session=name`
Use a different `sessionrc` for this GIMP session. The given session name is appended to the default `sessionrc` filename.

### `--gimprc=filename`
Use an alternative `gimprc` instead of the default one. The `gimprc` file contains a record of your preferences. Useful in cases where plugins paths or machine specs may be different.

### `--system-gimprc=filename`
Use an alternate system gimprc file

### `-b`, `--batch=commands`
Execute the set of commands non-interactively. The set of commands is typically in the form of a script that can be executed by one of the GIMP scripting extensions. When the command is `-`, commands are read from standard input.

### `--batch-interpreter=proc`
Specify the procedure to use to process batch commands. The default procedure is Script-Fu.

### `--console-messages`
Do not display dialog boxes on errors or warnings. Print the messages on the console instead.

### `--pdb-compat-mode=mode`
PDB compatibiliity mode (`off`|`on`|`warn`)

### `--stack-trace-mode=mode`
Debug in case of a crash (`never`|`query`|`always`)

### `--debug-handlers`
Enable non-fatal debugging signal handlers. Useful for GIMP debugging.

### `--g-fatal-warnings`
Make all warnings fatal. Useful for debugging.

### `--dump-gimprc`
Output a `gimprc` file with default settings. Useful if you messed up the `gimprc` file.

### `--display=display`
Use the designated X display (does not apply to all platforms).

### `--show-playground`
Show a [preference page](./12-01-06-experimental-playground.md) with experimental features.

### [Home](./00-home.md)
### [Parent: 2. 2. GIMP(김프) 켜기](./02-00-fire-up-gimp.md)
### [Prev: 1.2. GIMP(김프)의 새로운 기능 알아보기](./01-02-whats-new-in-gimp.md)
### [Next: 2.2. 설정 폴더들](./02-02-configuration-folders.md)