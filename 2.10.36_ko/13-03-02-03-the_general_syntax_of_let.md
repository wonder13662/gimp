# 13.3.2.3. `let*`의 기본 문법(The General Syntax of `let*`)
일반적인 형태의 `let*` 구문은 아래와 같습니다.

```scheme
(let* ( variables )
  expression )
```

괄호 안에 선언된 변수들(예: `(a 2)`)과 표현식은 유효한 `Scheme` 표현식입니다. 

여기서 선언된 변수는 `let*` 구문 안에서만 유효합니다. 

이 변수는 지역 변수(Local variable)입니다.

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.2.4. 공백(White Space)](./13-03-02-04-white_space.md)

[⬅️ 이전: 13.3.2.2. 지역 변수는 무엇인가요?(What is a Local Variable?)](./13-03-02-02-what_is_a_local_variable.md)

[⬆️ 위: 13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-identifier.html#idm9672)

