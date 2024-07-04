# 13.3.3.1. 리스트 정의하기
리스트에 대해서 설명하기 전에, 원자 값과 리스트의 차이점에 대해 설명할 필요가 있습니다.

<a id="13-03-03-01-s1"></a>

## 1. 원자 값(Atomic value)
[이전 수업](./13-03-02-03-the_general_syntax_of_let.md)에서 변수를 초기화할때, 원자 값(atomic value)에 대해 본 적이 있습니다. 원자 값은 단일한 값입니다. 예를 들면, 아래 구문은 변수 `x`에 단일한 값인 `8`을 설정합니다.

```scheme
(let* ( (x 8) )  x)
```

위 구문을 `Script-Fu` 콘솔 창에서 실행하면 결과는 아래와 같습니다.

<a id="90-04-97-a171"></a>

#### [그림 90.4.97.a171. 원자 값(Atomic value) 정의하기 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a171)
![90-04-97-a171](https://github.com/wonder13662/gimp/assets/15767104/c1a61232-fa4a-4c4a-996f-1ea947bf2abe)

`x`에 지정된 값을 화면에 표시하기 위해 구문의 끝에 `x`를 추가했습니다. 보통은 이럴 필요는 없습니다. `let*`이 함수처럼 동작하는 것에 주의하세요. `let*`의 마지막 구문의 값은 반환하는 값입니다. `Script-Fu` 콘솔 창의 `8`은 변수 `x`가 원자 값 `8`을 가지고 있다는 것을 알려줍니다.

<a id="13-03-03-01-s2"></a>

## 2. 리스트(List)
변수는 단일한 값(Single value)이 아닌 값들의 목록을 가리킬 수도 있습니다. 변수 `x`에 값 `1, 3, 5`의 목록을 넣으려면, 아래와 같이 스크립트를 작성합니다.

```scheme
(let* ( (x '(1 3 5))) x)
```

위 구문을 `Script-Fu` 콘솔 창에서 실행하면 결과는 아래와 같습니다.

<a id="90-04-97-a172"></a>

#### [그림 90.4.97.a172. 리스트(List) 정의하기 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a172)
![90-04-97-a172](https://github.com/wonder13662/gimp/assets/15767104/c6482480-f7a5-426b-b688-deb8c8fe70d8)

`Script-Fu` 콘솔 창의 `(1 3 5)`는 변수 `x`가 단일 값을 가지고 있지 않고, 값들의 목록을 가지고 있습니다. 리스트의 선언 또는 값 지정에는 쉼표(`,`)를 쓰지 않았다는 점에 유의하세요. 리스트를 화면에 출력하는 경우에도 쉼표(`,`)가 쓰이지 않습니다.

<a id="13-03-03-01-s3"></a>

## 3. 리스트 정의
리스트를 정의하는 문법은 아래와 같습니다.

```scheme
'(a b c)
```

<a id="90-04-97-a173"></a>

#### [그림 90.4.97.a173. 어포스트로피(`'`)로 리스트(List) 정의하기 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a173)
![90-04-97-a173](https://github.com/wonder13662/gimp/assets/15767104/8271a2e8-fe6e-4e68-8f21-c337152b03fb)

`a`, `b`, 그리고 `c`는 [리터럴](https://ko.wikipedia.org/wiki/%EB%A6%AC%ED%84%B0%EB%9F%B4) 값입니다. 어포스트로피(`'`)를 사용해서 따라오는 함수나 표현식과 달리 괄호의 값들이 리터럴 값들의 목록이라고 표시합니다. 

또는 `list` 함수를 사용해서 리스트를 정의할 수 있습니다. [관련 문서: 13.3.3.4. `list` 함수로 리스트 정의하기](./13-03-03-04-defining_a_list_using_the_list_function.md)

```scheme
(let*   (
          (a 1)
          (b 2)
          (c 3)
        )

        (list 5 4 3 a b c)
)
```

<a id="90-04-97-a181"></a>

#### [그림 90.4.97.a181. `list` 함수로 리스트 정의하기 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a181)
![90-04-97-a181](https://github.com/wonder13662/gimp/assets/15767104/2689293a-9fc8-477f-838a-316a7331ba2e)

## 4. 빈 리스트 정의
빈 리스트는 아래처럼 정의할 수 있습니다.

```scheme
'()
```

<a id="90-04-97-a174"></a>

#### [그림 90.4.97.a174. 빈 리스트 정의 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a174)
![90-04-97-a174](https://github.com/wonder13662/gimp/assets/15767104/6cb06527-5628-4095-8280-a7e51075fc15)

또는 더 단순하게 아래처럼 정의할 수 있습니다.

```scheme
()
```

<a id="90-04-97-a175"></a>

#### [그림 90.4.97.a175. 빈 리스트 정의 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a175)
![90-04-97-a175](https://github.com/wonder13662/gimp/assets/15767104/31a2b6aa-e93b-4867-abee-249f49af3004)

## 5. 리스트에 리스트 넣기
리스트는 원소 값들을 가질 수 있고, 리스트 자체를 가질 수도 있습니다.

```scheme
(let*
  (
    (x
      '("GIMP" (1 2 3) ("is" ("great" () ) ) )
    )
  )
  x
)
```

<a id="90-04-97-a176"></a>

#### [그림 90.4.97.a176. 리스트에 리스트 넣기 (Windows) (우리말)](./90-04-0097-script_fu_console.md#90-04-97-a176)
![90-04-97-a176](https://github.com/wonder13662/gimp/assets/15767104/1065e8bf-c140-472e-9116-d63893118ef4)

첫번째 어퍼스트로피 뒤에 안쪽의 리스트를 정의할 때는 더 이상 어퍼스트로피를 쓰지 않아도 됩니다.

`Script-Fu` 콘솔 창에 위 스크립트를 입력하여 실행해보면, 결과는 단일 값이나 원자 값들이 아닙니다. `("GIMP" (1 2 3) ("is" ("great" ())))`으로 표시됩니다.

***

## 관련 정보

[관련 문서: 13.3.3.4. `list` 함수로 리스트 정의하기](./13-03-03-04-defining_a_list_using_the_list_function.md)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.3.2. 리스트의 구조 이해하기](./13-03-03-02-how_to_think_of_lists.md)

[⬅️ 이전: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬆️ 위: 13.3.3. 더 많은 리스트(Lists, lists and more lists)](./13-03-03-00-lists-lists-and-more-lists.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-lists.html#idm9721)