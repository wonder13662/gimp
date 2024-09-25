# 13.3.2.5. 변수에 새로운 값을 할당하기(Assigning a New Value to a Variable)
변수를 초기화하고 나서, 스크립트 안에서 변수의 값을 바꿔야 할 때가 있습니다. 

이 경우, `set!` 구문을 사용해서 변수의 값을 바꿔줍니다.

```scheme
(let* ( (theNum 10) ) (set! theNum (+ theNum theNum)) )
```

위 코드가 어떻게 동작할지 예상해보세요. 

그리고 `Script-Fu` 콘솔 창에 위 코드를 입력해서 결과를 확인해보세요.

<a id="90-04-97-a151"></a>

#### [그림 90.4.97.a151. 변수에 새로운 값을 할당하기](./90-04-0097-script_fu_console.md#90-04-97-a151)
![90-04-97-a151](https://github.com/wonder13662/gimp/assets/15767104/4bdb9752-748d-4d14-9add-6a1df0436ecf)

***

## 다른 페이지로 가기

[➡️ 다음: 13.3.2.6. 함수(Functions)](./13-03-02-06-functions.md)

[⬅️ 이전: 13.3.2.4. 공백(White Space)](./13-03-02-04-white_space.md)

[⬆️ 위: 13.3.2. 변수와 함수(Variables and functions)](./13-03-02-00-variables-and-functions.md)

[⬆️ 위: 13.3. Script-Fu 튜토리얼(A Script-Fu tutorial)](./13-03-00-a-script-fu-tutorial.md)

[⬆️ 위: 13. 스크립팅(Scripting)](./13-00-scripting.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-script-fu-tutorial-identifier.html#idm9686)