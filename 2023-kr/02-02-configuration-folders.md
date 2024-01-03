# 2.2. 설정 폴더들
GIMP를 처음 실행하면 옵션과 디렉토리를 설정하는 여러 단계를 거칩니다. 설정 과정에서 사용자가 편집할 수 있는 GIMP라는 이름의 디렉토리를 만듭니다. 이 디렉토리는 `GIMP/2.10`처럼 버전별 하위 디렉토리를 만듭니다. 모든 설정 정보는 이 디렉토리에 저장됩니다. 만약 이 디렉토리의 이름을 바꾸거나 지운다면, GIMP는 위에서 말한 초기화 작업을 다시 실행하여 새로운 디렉토리(`GIMP/2.10`)를 만듭니다. 이 기능을 활용하여 현재 설정을 지우지 않고도 다른 설정 옵션을 탐색해볼 수 있습니다. 혹은 망가진 설정 파일을 복구할 수도 있습니다. (예를 들어 `GIMP/2.10`의 설정정보를 복사해두었다가 필요한 경우에 덮어씌우면 복사한 시점의 설정 정보로 복원시킬 수 있습니다)

설정 폴더들은 다음 위치에 저장됩니다.

- UNIX 플랫폼에서는 `$XDG_CONFIG_HOME` (기본값은 `$HOME/.config`) 에 저장됩니다. macOS는 해당되지 않습니다.
- 마이크로소프트 윈도우즈에서는 `%APPDATA%` 에 저장됩니다.
- macOS에서는 NSApplicationSupportDirectory (보통 `~/Library/Application Support`입니다)에 저장됩니다.

#### macOS에서의 설정 폴더 확인 (MacOS:Sonoma 14.2.1 GIMP 2.10.36)
##### "언어:영어"인 경우의 설정 폴더 위치
<img width="700" alt="settings-preference-folders-en" src="https://github.com/wonder13662/gimp/assets/15767104/a53ff89d-f3e2-416e-82b5-6a653d260e98">

##### "언어:한국어"인 경우의 설정 폴더 위치
<img width="699" alt="settings-preference-folders-ko" src="https://github.com/wonder13662/gimp/assets/15767104/8e11cd17-a104-44c6-b4c6-29b66a14ff22">


## 2.2.1. 시작 전 참고할만한 몇 가지 조언
1. GIMP(김프)에서 `도움말` → `오늘의 팁` 메뉴를 이용하면 유용한 정보를 확인할 수 있습니다. 시간을 내어 읽어보시기 바랍니다. 
2. 작업 중 갑자기 GIMP(김프)가 멈추거나 특정 기능을 사용할 수 없는 경우, [4.2. GIMP(김프)가 멈추었을 때의 원인](./04-02-00-common-causes-of-gimp-non-responsiveness.md) 페이지를 참고하면 해결할 수 있습니다.

## 다른 페이지로 가기
[최상위](./00-home.md)

[부모: 2. GIMP(김프) 시작하기](./02-00-fire-up-gimp.md)

[이전: 2.1. GIMP(김프) 실행하기](./02-01-running-gimp.md)

[다음: 3.1. GIMP(김프)의 기본 개념들](./03-01-basic-concepts.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-setup.html)