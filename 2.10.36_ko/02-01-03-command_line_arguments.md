## 2.1.3. 커맨드 라인 실행 옵션들(Command line arguments)

GIMP(김프)를 시작할 때, 추가적인 인자(argument) 또는 옵션(Option) 값이 필요하지는 않습니다. 하지만 가장 자주 사용되는 것들을 설명해두었습니다. Unix 시스템에서는 `man gimp` 명령으로 전체 인자(argument) 목록을 확인할 수 있습니다.

커맨드 라인 인자(argument)들은 반드시 `gimp-2.10 [OPTION...] [FILE|URI...]`의 형식으로 입력해야 합니다.

참고: 여기서의 인자(argument)와 옵션(Option)은 같은 의미로 사용되었습니다. 

<a id="02-01-03-s1"></a>

## 1. `-?`, `--help`
모든 커맨드 라인 옵션을 보여줍니다.

<a id="02-01-03-a1"></a>

#### 영상 2.1.3.a1. `--help`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c2b7a28d-eba2-4d6b-bc6e-bebb9f869d45"></video>

<a id="02-01-03-s2"></a>

## 2. `--help-all`
모든 도움말 옵션을 보여줍니다.

<a id="02-01-03-a2"></a>

#### 영상 2.1.3.a2. `--help-all`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/652dc754-d0a7-4683-9a2a-be05a8dfd92f"></video>

<a id="02-01-03-s3"></a>

## 3. `--help-gtk`
GTK+ 옵션을 보여줍니다.

<a id="02-01-03-a3"></a>

#### 영상 2.1.3.a3. `--help-gtk`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e83a6f1f-4156-4bda-a95d-a2cfbbf28fca"></video>

<a id="02-01-03-s4"></a>

## 4. `-v`, `--version`
현재 사용중인 GIMP 버전 정보를 보여준 뒤 종료합니다. `-v`, `--version`에서 각각 노출하는 정보가 다릅니다.

<a id="02-01-03-a4"></a>

#### 영상 2.1.3.a4. `-v`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/66e29f26-248b-4c16-b323-5e9433d3e89e"></video>

<a id="02-01-03-a5"></a>

#### 영상 2.1.3.a5. `--version`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/9295c1c8-4e4c-459c-b67a-813a041b2369"></video>

<a id="02-01-03-s5"></a>

## 5. `--license`
사용 허가서 정보를 보여준 뒤 GIMP를 종료합니다.

<a id="02-01-03-a6"></a>

#### 영상 2.1.3.a6. `--license`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/e80f0686-4205-4c3f-935d-b8c2ccb235b0"></video>

<a id="02-01-03-s6"></a>

## 6. `--verbose`
시작 메시지를 자세히 보여줍니다.

<a id="02-01-03-a7"></a>

#### 영상 2.1.3.a7. `--verbose`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/c7dc47d7-610d-4c30-a391-19e77fffb54c"></video>

<a id="02-01-03-s7"></a>

## 7. `-n`, `--new-instance`
새로운 인스턴스로 GIMP를 시작합니다.. 여러 개의 GIMP 인스턴스를 시작할 수 있습니다.

<a id="02-01-03-a8"></a>

#### 영상 2.1.3.a8. `-n`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/faadf0d5-5978-48db-9a33-32fa339a35d7"></video>

<a id="02-01-03-a9"></a>

#### 영상 2.1.3.a9. `--new-instance`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/d6a4c696-424c-48cd-b6f3-a25977d513f1"></video>

<a id="02-01-03-s8"></a>

## 8. `-a`, `--as-new`
새 이미지를 만듭니다. (TODO 정확한 사용방법을 파악하지 못했습니다)

<a id="02-01-03-s9"></a>

## 9. `-i`, `--no-interface`
사용자 인터페이스 없이 실행합니다.

<a id="02-01-03-a10"></a>

#### 영상 2.1.3.a10. `-i`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/6760d817-7ccc-49c6-8e1f-0616e68c4e02"></video>

<a id="02-01-03-a11"></a>

#### 영상 2.1.3.a11. `--no-interface`
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/b375e345-867e-450c-a8b9-ec5fc58766c0"></video>

<a id="02-01-03-s10"></a>

## 10. `-d`, `-no-data`
[무늬(pattern)](./19-glossaryx-pattern.md), 그라디언트(gradient), 색상표(palette), 붓(brush) 등을 읽어 들이지 않습니다. 비대화식 환경에서 시작 시간을 최소화할 때 유용합니다.

<a id="02-01-03-a12"></a>

#### 영상 2.1.3.a12. 붓(brush), 무늬(pattern)의 읽지 않음
<video controls="controls" width="640" height="360" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/a232c28c-a137-497b-a2d6-0fec8b6ace11"></video>

아래 예시들은 위 옵션으로 실행한 경우(`-no-data`)와 그렇지 않은 경우를 비교한 이미지입니다.

<a id="90-04-15-a101"></a>

#### [그림 90.4.15.a101. 붓 대화상자(brush dialog)](./90-04-0015-brushes.md#90-04-15-a101)
![90-04-15-a101](https://github.com/wonder13662/gimp/assets/15767104/59bbf85f-d885-4f8a-bc09-d05a0fc7ac23)

<a id="90-04-19-a4"></a>

#### [그림 90.4.19.a4. 그라디언트 대화상자(gradient dialog)](./90-04-0019-gradient.md#90-04-19-a4)
![90-04-19-a4](https://github.com/wonder13662/gimp/assets/15767104/ad0a4680-d117-47f0-90f0-edf3e532020a)

<a id="90-04-20-a4"></a>

#### [그림 90.4.20.a4. 팔레트 대화상자(palette dialog)](./90-04-0020-palette.md#90-04-20-a4)
![90-04-20-a4](https://github.com/wonder13662/gimp/assets/15767104/0734f993-5e82-4182-a986-931dadbb3eb9)

<a id="90-04-18-a2"></a>

#### [그림 90.4.18.a2. 무늬 대화상자(pattern dialog)](./90-04-0018-patterns.md#90-04-18-a2)
![90-04-18-a2](https://github.com/wonder13662/gimp/assets/15767104/c918e337-d746-438c-ab0c-f036dbc7e46f)

<a id="02-01-03-s11"></a>

## 11. `-f`, `-no-fonts`
글꼴(font)을 읽어오지 않습니다. 이 옵션은 글꼴(font)을 사용하지 않는 스크립트를 사용하거나 문제가 있는 글꼴(font)을 찾아내기 위해 GIMP(김프)를 시작할 때 유용합니다.

<a id="02-01-03-a17"></a>

### 영상 2.1.3.a17. `-f`, `-no-fonts`

<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/242ee167-9c78-47e3-9dd2-f08d75eac4a6"></video>

아래 이미지는 위 옵션으로 실행한 경우(`-no-fonts`)와 그렇지 않은 경우를 비교한 이미지입니다.

<a id="90-04-21-a2"></a>

#### [그림 90.4.21.a2. `-no-fonts` 사용한 경우와 그렇지 않은 경우 비교](./90-04-0021-fonts.md#90-04-21-a2)
![90-04-21-a2](https://github.com/wonder13662/gimp/assets/15767104/fc8d52e4-09ac-46b2-8e46-278fd53bef95)

<a id="02-01-03-s12"></a>

## 12. `-s`, `--no-splash`
시작시 스플래쉬 화면을 보여주지 않습니다.

<a id="02-01-03-a18"></a>

#### 그림 2.1.3.a18. 시작시의 스플래쉬 화면
<img width="720" alt="example-splash" environment="MacOS:Sonoma 14.2.1 GIMP 2.10.36" src="https://github.com/wonder13662/gimp/assets/15767104/85da532a-731b-488f-b5e1-66a217c30c8b">

참고: 맥OS에서는 커맨드 라인으로 실행시 스플래시 화면을 보여주지 않는 것이 기본값입니다.

<a id="02-01-03-s13"></a>

## 13. `--no-shm`
GIMP와 플러그인 사이의 공유 메모리를 사용하지 않습니다.

<a id="02-01-03-s14"></a>

## 14. `--no-cpu-accel`
특수한 CPU 가속 기능을 사용하지 않습니다. 문제가 많은 하드웨어 가속기나 기능을 찾아내거나 사용하지 않을 때 유용합니다.

<a id="02-01-03-s15"></a>

## 15. `--session=name`
현재 GIMP 세션에 다른 `sessionrc`를 사용합니다. 새 세션 이름은 기본 `sessionrc` 파일명에 덧붙여집니다.

<a id="02-01-03-s16"></a>

## 16. `--gimprc=filename`
기본값 외의 다른 `gimprc`를 사용합니다. `gimprc`는 GIMP 설정값을 담고 있는 파일입니다. 플러그인 위치나 시스템 사양이 틀린 경우에 유용합니다. 

<a id="02-01-03-s17"></a>

## 17. `--system-gimprc=filename`
다른 시스템의 `gimprc` 파일을 사용합니다.

<a id="02-01-03-s18"></a>

## 18. `-b`, `--batch=commands`
비대화명 명령(command)들의 모음을 실행합니다. 명령 모음(set of commands)은 일반적으로 GIMP 스크립팅 확장에서 실행할 수 있는 스크립트 형태로 되어 있습니다. 명령이 `-`일 경우, 이는 표준 입력으로 해석됩니다.

<a id="02-01-03-s19"></a>

## 19. `--batch-interpreter=proc`
일괄처리 명령을 수행하기 위한 프로시저입니다. 기본 프로시저는 Script-Fu입니다.

<a id="02-01-03-s20"></a>

## 20. `--console-messages`
에러나 경고를 다이얼로그 박스에 나타내지 않습니다. 대신 콘솔에 메시지를 출력합니다.

<a id="02-01-03-s21"></a>

## 21. `--pdb-compat-mode=mode`
PDB 호환 모드 (`off`|`on`|`warn`)

<a id="02-01-03-s22"></a>

## 22. `--stack-trace-mode=mode`
충돌시 디버그를 합니다. (`never`|`query`|`always`)

<a id="02-01-03-s23"></a>

## 23. `--debug-handlers`
치명적이지 않은 디버깅 시그널 처리기를 사용합니다. GIMP(김프) 디버깅 시에 유용합니다.

<a id="02-01-03-s24"></a>

## 24. `--g-fatal-warnings`
모든 경고를 치명적인 단계로 설정합니다. GIMP(김프) 디버깅 시에 유용합니다.

<a id="02-01-03-s25"></a>

## 25. `--dump-gimprc`
기본 설정으로 `gimprc` 파일을 출력합니다. `gimprc` 파일을 결합할 때 유용합니다.

<a id="02-01-03-s26"></a>

## 26. `--display=display`
X-윈도우 스타일을 사용합니다(Microsoft Windows에서는 사용불가).

<a id="02-01-03-s27"></a>

## 27. `--show-playground`
[기본 설정(preference page)](./12-01-06-experimental-playground.md)의 실험적 기능(experimental features) 항목을 보여줍니다.

<a id="90-02-10-a101"></a>

#### [그림 90.2.10.a101. 기본 설정(preference page)의 실험적 기능(experimental features) 항목 비교](./90-02-10-playground.md#90-02-10-a101)
![90-02-10-a101](https://github.com/wonder13662/gimp/assets/15767104/0c9bd441-4cb1-4aac-80d9-3b387ab124cc)

## 다른 페이지로 가기

[➡️ 다음: 2.2. 설정 폴더들](./02-02-configuration-folders.md)

[⬅️ 이전: 2.1.2.1. 여러 개의 언어 설정으로 다른 언어의 GIMP(김프) 띄우기](./02-01-02-01-multiple-instances.md)

[⬆️ 위: 2.1. GIMP(김프) 실행하기](./02-01-00-running-gimp.md)

[⬆️ 위: 2. GIMP(김프) 시작하기](./02-00-fire-up-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-fire-up.html)