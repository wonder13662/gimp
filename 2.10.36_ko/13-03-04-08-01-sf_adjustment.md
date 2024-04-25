# 13.3.4.8.1. SF-ADJUSTMENT

대화상자에 조정 위젯을 추가합니다.

## 1. 매개변수의 정의

```scheme
SF-ADJUSTMENT "label" '(value min max step_inc page_inc digits type)
```

또는

```scheme
SF-ADJUSTMENT "label" (list value min max step_inc page_inc digits type)
```

⚠️ 주의: 매개변수를 목록으로 넣기 위해 `list` 또는 `'`(어퍼스트로피)를 써야 하는 점을 유의하세요. 

[관련 문서: 13.3.3.1. 리스트 정의하기 - 3. 리스트 정의](./13-03-03-01-defining_a_list.md#13-03-03-01-s3)

[관련 문서: 13.3.3.4. `list` 함수로 리스트 정의하기](./13-03-03-04-defining_a_list_using_the_list_function.md)

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

#### 그림 13.3.4.8.1.a1. Script-Fu: Sphere - Radius (in pixels)
![13-03-04-08-01-a1](https://github.com/wonder13662/gimp/assets/15767104/09abd31b-b796-4a19-8cd0-547ad4c8c247)

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-ADJUSTMENT "Radius (in pixels)" (list 100 1 5000 1 10 0 SF-SPINNER)
  ...
)
```

|요소|값|
|---|---|
|label|"Radius (in pixels)"|
|value|100|
|min|1|
|max|5000|
|step_inc|1|
|page_inc|10|
|digits|0|
|type|SF-SPINNER|

#### 그림 13.3.4.8.1.a2. Script-Fu: Sphere - Radius (in pixels)
![13-03-04-08-01-a2](https://github.com/wonder13662/gimp/assets/15767104/149a2593-369e-4572-b81e-124b07593e4d)

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-ADJUSTMENT "Lighting (degrees)" (list 45 0 360 1 10 1 SF-SLIDER)
  ...
)
```

|요소|값|
|---|---|
|label|"Lighting (degrees)"|
|value|45|
|min|0|
|max|360|
|step_inc|1|
|page_inc|10|
|digits|1|
|type|SF-SLIDER|

#### 그림 13.3.4.8.1.a3. Script-Fu: Sphere - Font size (pixels)
![13-03-04-08-01-a3](https://github.com/wonder13662/gimp/assets/15767104/374a210c-85f8-49e6-bdaa-d342b1e05e04)

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-ADJUSTMENT "Font size (pixels)" '(50 1 1000 1 10 0 1)
  ...
)
```

|요소|값|
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

[➡️ 다음: 13.3.4.8.2. SF-COLOR](./13-03-04-08-02-sf_color.md)

[⬅️ 이전: 13.3.4.8. Script-Fu 매개변수(parameter) API(The Script-Fu parameter API)](./13-03-04-08-00-the_script_fu_parameter_api.md)

[⬆️ 위: 13.3.4.8. Script-Fu 매개변수(parameter) API(The Script-Fu parameter API)](./13-03-04-08-00-the_script_fu_parameter_api.md)

[⬆️ 위: 13.3.4. 첫번째 Script-Fu 스크립트(Your first Script-Fu script)](./13-03-04-00-your-first-script-fu-script.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-first-script.html#gimp-using-script-fu-api)