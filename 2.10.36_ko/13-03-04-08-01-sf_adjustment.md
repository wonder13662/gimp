# 13.3.4.8.1. SF-ADJUSTMENT

대화상자에 조정 위젯을 추가합니다.

## 1. 매개변수의 정의

```scheme
SF-ADJUSTMENT "label" '(value min max step_inc page_inc digits type)

또는

SF-ADJUSTMENT "label" (list value min max step_inc page_inc digits type)
```

## 2. 위젯 인자 목록
|요소|설명|
|---|---|
|label|위젯 옆에 표시될 텍스트|
|value|위젯의 초기값|
|min|위젯의 최소값|
|max|위젯의 최대값|
|step_inc|증가/감소의 값|
|page_inc|page up, page down키를 눌렀을 때의 증가/감소의 값|
|digits|소수점 표시 자릿수|
|type|`SF-SLIDER` 또는 `0`, `SF-SPINNER` 또는 `1`|

## 3. 예시: 매개변수의 정의와 위젯 모습

#### 그림 13.3.4.8.a131. Script-Fu: Sphere - Radius (in pixels)
![13-03-04-08-a131-sf_adjustment-radius](https://github.com/wonder13662/gimp/assets/15767104/09abd31b-b796-4a19-8cd0-547ad4c8c247)

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-ADJUSTMENT "Radius (in pixels)" (list 100 1 5000 1 10 0 SF-SPINNER)
  ...
)
```

|요소|설명|
|---|---|
|label|"Radius (in pixels)"|
|value|100|
|min|1|
|max|5000|
|step_inc|1|
|page_inc|10|
|digits|0|
|type|SF-SPINNER|

#### 그림 13.3.4.8.a132. Script-Fu: Sphere - Radius (in pixels)
![13-03-04-08-a132-sf_adjustment-lighting](https://github.com/wonder13662/gimp/assets/15767104/149a2593-369e-4572-b81e-124b07593e4d)

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-ADJUSTMENT "Lighting (degrees)" (list 45 0 360 1 10 1 SF-SLIDER)
  ...
)
```

|요소|설명|
|---|---|
|label|"Lighting (degrees)"|
|value|45|
|min|0|
|max|360|
|step_inc|1|
|page_inc|10|
|digits|1|
|type|SF-SLIDER|

#### 그림 13.3.4.8.a133. Script-Fu: Sphere - Font size (pixels)
![13-03-04-08-a133-sf_adjustment-font_size](https://github.com/wonder13662/gimp/assets/15767104/39c09e89-3773-4728-a14c-3acbe702b0e9)

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-ADJUSTMENT "Font size (pixels)" '(50 1 1000 1 10 0 1)
  ...
)
```

|요소|설명|
|---|---|
|label|"Font size (pixels)"|
|value|50|
|min|1|
|max|1000|
|step_inc|1|
|page_inc|10|
|digits|0|
|type|1|

***

## 다른 페이지로 가기

[➡️ 다음: ?]()

[⬅️ 이전: 13.3.4.8. Script-Fu 매개변수(parameter) API(The Script-Fu parameter API)](./13-03-04-08-00-the_script_fu_parameter_api.md)

[⬆️ 위: 13.3.4.8. Script-Fu 매개변수(parameter) API(The Script-Fu parameter API)](./13-03-04-08-00-the_script_fu_parameter_api.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#gimp-using-script-fu-api)