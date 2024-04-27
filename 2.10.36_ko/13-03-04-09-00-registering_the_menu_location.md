# 13.3.4.9. 메뉴 위치 등록하기(Registering the Menu Location)
스크립트가 GIMP(김프)에 등록되면, 이 스크립트가 표시될 메뉴에 대해 GIMP(김프)에게 알려줘야 합니다.

메뉴의 적절한 위치는 함수에 따라 달라집니다. 대부분의 스크립트는 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `필터`와 `색`에 위치하고 있습니다.

```scheme
; 스크립트가 표시될 메뉴 위치를 설정
(script-fu-menu-register "script-fu-text-box" "<Image>/File/Create/Text")
```

새로운 이미지를 만드는 [현재의 스크립트](./13-03-04-08-12-script_fu_example_test_sphere.md)의 `script-fu-menu-register` 함수가 [이미지 메뉴 바](./03-02-02-02-image-menu.md)의 `파일` → `만들기` → `Text` → `Text Box`를 추가합니다.

<a id="13-03-04-05-a1"></a>

#### [그림 13.3.4.5.a1. `파일` → `만들기` → `Text` → `Text Box`](./13-03-04-05-00-registering_the_function.md#13-03-04-05-a1)
![13-03-04-05-a1](https://github.com/wonder13662/gimp/assets/15767104/4f11ae5b-7199-40b4-9402-e1bfbfa0bb47)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.4.9.1. 작업중인 스크립트](./13-03-04-09-01-script_in_progress.md)

[⬅️ 이전: 13.3.4.8.12. Script-Fu 매개변수(parameter) API 예시:test-sphere.scm](./13-03-04-08-12-script_fu_example_test_sphere.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#script-fu-adding-menu-location)