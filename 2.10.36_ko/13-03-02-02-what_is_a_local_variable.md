# 13.3.2.2. 지역 변수는 무엇인가요?(What is a Local Variable?)
두 변수의 합을 구하는 구문인 `(+ a b)`가 `let*` 표현식의 뒤가 아닌 괄호 안에 있는 것을 보았을 것입니다. 

`let*` 표현식은 변수를 쓸 수 있는 범위도 정의하기 때문입니다. 만약 `(+ a b)` 구문을 `let*` 표현식의 괄호 바깥의 뒤에 쓴다면, 에러 메시지를 받게 됩니다. 이 경우에는 변수 `a`, `b`는 `let*` 표현식의 안에 선언되었고, `a`, `b` 변수의 값을 읽어오는 `(+ a b)` 구문은 `let*` 표현식의 바깥이어서 변수의 값을 읽어올 수 없기 때문입니다. 이 특징을 `지역 변수`라고 합니다.

<a id="90-04-97-a143"></a>

#### [그림 90.4.97.a143. 지역변수 읽어오기: `let*` 표현식 바깥에서 읽기(실패)](./90-04-97-script_fu_console.md#90-04-97-a143)
![90-04-97-a143](https://github.com/wonder13662/gimp/assets/15767104/36417616-79d0-4faf-a085-930ff2abff5e)

<a id="90-04-97-a144"></a>

#### [그림 90.4.97.a144. 지역변수 읽어오기: `let*` 표현식 안쪽에서 읽기(성공)](./90-04-97-script_fu_console.md#90-04-97-a144)
![90-04-97-a144](https://github.com/wonder13662/gimp/assets/15767104/096d0401-8860-47c6-b943-94ba03cb47d1)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.2.3. `let*`의 기본 문법(The General Syntax of `let*`)](./13-03-02-03-the_general_syntax_of_let.md)

[⬅️ 이전: 13.3.2.1. 변수 선언하기(Declaring Variables)](./13-03-02-01-declaring_variables.md)

[⬆️ 위: 13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-identifier.html#idm9662)

