# 13.1.3.1. 리눅스/유닉스 계열 시스템(Linux/Unix-like systems)
리눅스/유닉스 계열 시스템의 GIMP(김프) 플러그인은 크게 두가지로 나뉩니다. 첫번째는 `.c` 파일의 소스코드 형태입니다. 두번째는 `Makefile`을 포함한 파일들과 디렉토리를 가진 형태입니다.

`borker.c`라는 1개 파일인 플러그인을 설치하려면, `gimptool-2.0 --install borker.c`을 실행하면 됩니다. 이 명령은 플러그인을 사용자의 플러그인 디렉토리인 `~/gimp-2.10/plug-ins`으로 설치합니다. 만약 사용자의 플러그인 디렉토리를 별도로 설정했다면 설정한 위치의 디렉토리에 설치됩니다. 설치된 플러그인은 GIMP(김프)를 다시 시작하면 사용할 수 있습니다. 이 작업을 하기 위해서 관리자 권한(Root 권한)을 가질 필요는 없습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.1.3.2. 마이크로소프트 윈도우즈(Microsoft Windows)](./13-01-03-02-microsoft_windows.md)

[⬅️ 이전: 13.1.3. 새 플러그인 설치하기(Installing New Plugins)](./13-01-00-plugins.md)

[⬆️ 위: 13.1.3. 새 플러그인 설치하기(Installing New Plugins)](./13-01-00-plugins.md)

[⬆️ 위: 13.1. 플러그인(Plugins)](./13-01-00-plugins.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-scripting.html#idm9427)
