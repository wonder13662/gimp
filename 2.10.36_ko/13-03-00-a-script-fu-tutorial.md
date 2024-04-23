# 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)
이 튜토리얼에서는 `Script-Fu`에서 사용하는 [인터프리터](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%ED%94%84%EB%A6%AC%ED%84%B0) 언어인 `Scheme`의 기본 개념에 대해 소개합니다. 그러고 나서 도구상자의 스크립트를 추가하는 편리한 스크립트를 만들어 보겠습니다. 이 스크립트는 텍스트를 입력받는 대화상자를 띄웁니다. 그리고 텍스트에 완전히 맞는 이미지를 만듭니다. 이 스크립트를 개선해서 텍스트의 주변에 여유 공간을 추가해줄 수 있도록 해주겠습니다. 마지막으로 `Script-Fu`의 지식을 한 단계 높여줄 몇가지 도전과제를 알아보겠습니다.

***

## 하위 페이지

[13.3.1. Scheme에 익숙해지기(Getting acquainted with scheme)](./13-03-01-00-getting-acquainted-with-scheme.md)

[13.3.1.1. Scheme을 시작해봅시다(Let's Start Scheme'ing))](./13-03-01-01-lets_start_schemeing.md)

[13.3.1.2. 접두사, 삽입사, 접미사 예제(Examples Of Prefix, Infix, And Postfix Notations)](./13-03-01-02-example_of_prefix_infix_n_postfix_notations.md)

[13.3.1.3. Scheme 연습하기(Practicing In Scheme)](./13-03-01-03-practicing_in_scheme.md)

[13.3.1.4. Script-Fu 콘솔 출력 창(Script-Fu Console Window)](./13-03-01-04-script_fu_console_window.md)

[13.3.1.5. 추가적인 괄호를 주의하세요(Watch Out For Extra Parentheses)](./13-03-01-05-watch_out_for_extra_parentheses.md)

[13.3.1.6. 꼭 적절한 여백을 두세요(Make Sure You Have The Proper Spacing, Too)](./13-03-01-06-make_sure_you_have_the_proper_spacing.md)

[13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[13.3.2.1. 변수 선언하기(Declaring Variables)](./13-03-02-01-declaring_variables.md)

[13.3.2.2. 지역 변수는 무엇인가요?(What is a Local Variable?)](./13-03-02-02-what_is_a_local_variable.md)

[13.3.2.3. `let*`의 기본 문법(The General Syntax of `let*`)](./13-03-02-03-the_general_syntax_of_let.md)

[13.3.2.4. 공백(White Space)](./13-03-02-04-white_space.md)

[13.3.2.5. 변수에 새로운 값을 할당하기(Assigning a New Value to a Variable)](./13-03-02-05-assigning_a_new_value_to_a_variable.md)

[13.3.2.6. 함수(Functions)](./13-03-02-06-functions.md)

[13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[13.3.3.1. 리스트 정의하기](./13-03-03-01-defining_a_list.md)

[13.3.3.2. 리스트의 구조 이해하기](./13-03-03-02-how_to_think_of_lists.md)

[13.3.3.3. `cons` 함수로 리스트 만들기](./13-03-03-03-creating_lists_through_concatenation.md)

[13.3.3.4. `list` 함수로 리스트 정의하기](./13-03-03-04-defining_a_list_using_the_list_function.md)

[13.3.3.5. 리스트의 값 가져오기](./13-03-03-05-accessing_values_in_a_list.md)

[13.3.3.6. `car` 함수](./13-03-03-06-the_car_function.md)

[13.3.3.7. `cdr` 함수](./13-03-03-07-the_cdr_function.md)

[13.3.3.8. 리스트의 다른 요소 가져오기](./13-03-03-08-accessing_other_elements_in_a_list.md)

[13.3.4. 첫번째 script-fu 스크립트(Your first script-fu script)](./13-03-04-your-first-script-fu-script.md)

[13.3.5. 스크립트 개선하기(Giving our script some guts)](./13-03-05-giving-our-script-some-guts.md)

[13.3.6. 텍스트 박스 스크립트 확장하기(Extending the text box script)](./13-03-06-extending-the-text-box-script.md)

[13.3.7. 최종 스크립트 결과 확인하기(Your script and its working)](./13-03-07-your-script-and-its-working.md)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.1. Scheme에 익숙해지기(Getting acquainted with scheme)](./13-03-01-00-getting-acquainted-with-scheme.md)

[⬅️ 이전: 13.2.4. 다른 종류의 Script-Fu(Different kinds of Script-Fus)](./13-02-04-different-kinds-of-script-fus.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial.html)
