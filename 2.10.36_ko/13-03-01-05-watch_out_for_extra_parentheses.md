# 13.3.1.5. 추가적인 괄호를 주의하세요(Watch Out For Extra Parentheses)
복잡한 계산식을 쓸 때, 부분을 괄호로 묶어 더 읽기 쉽게 만들고 싶을 때가 있습니다. `Scheme`에서는 이런 중첩된 괄호를 쓸 때 주의해야 합니다.

예를 들어, 5와 6을 더한 결과에 3을 더하는 계산식을 생각해봅시다.

```
3 + (5 + 6) + 7 = ?
```

`+` 연산자는 숫자들의 목록을 더합니다. 그러므로 아래처럼 만들고 싶을 수도 있습니다.

```scheme
(+ 3 (5 6) 7)
```

<a id="90-04-97-a121"></a>

#### [영상 90.4.97.a121. `Scheme`에서 잘못된 중첩 괄호 사용](./90-04-97-script_fu_console.md#90-04-97-a121)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/51c2e727-9414-4462-b6be-cc5e1bd9aabe"></video>

하지만 이것은 잘못된 구문입니다. `Scheme`의 모든 구문은 괄호로 시작되어 괄호로 끝난다는 점에 주의하세요. 그러므로 위의 구문은 `Scheme`의 인터프리터가 두번째 괄호에서 "5"라는 이름의 함수를 호출하려고 한다고 생각할 것입니다.

올바른 구문은 아래와 같습니다.

```scheme
(+ 3 (+ 5 6) 7)
```

<a id="90-04-97-a122"></a>

#### [영상 90.4.97.a122. `Scheme`에서 올바른 중첩 괄호 사용](./90-04-97-script_fu_console.md#90-04-97-a122)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/a85d47ee-e6aa-4878-8263-ff1a7fe296f6"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.1.6. 꼭 적절한 여백을 두세요(Make Sure You Have The Proper Spacing, Too)](./13-03-01-06-make_sure_you_have_the_proper_spacing.md)

[⬅️ 이전: 13.3.1.4. Script-Fu 콘솔 출력 창(Script-Fu Console Window)](./13-03-01-04-script_fu_console_window.md)

[⬆️ 위: 13.3.1. Scheme에 익숙해지기(Getting acquainted with scheme)](./13-03-01-00-getting-acquainted-with-scheme.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial.html#idm9632)
