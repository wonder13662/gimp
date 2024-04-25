# 19. 용어집 - string_append
TinyScheme의 API. GIMP의 소스코드의 `/plug-ins/script-fu/tinyscheme/Manual.txt`을 확인해보면, `String`의 `string-append`가 등록되어 있는 것을 확인할 수 있다. 하지만 API 형식은 확인하지 못했다. 다만, 사용형태로 유추해보면 인자로 받는 모든 문자열을 합쳐 하나의 문자열로 돌려주는 기능일 가능성이 높다.

아래의 예시 코드에서 `string-append`는 `gimp-data-directory`의 경로 문자열과 "/scripts/images/beavis.jpg" 문자열을 합친 경로를 반환해주는 것으로 보인다. 추후 API 명세를 확인할 필요가 있다.

```scheme
(script-fu-register "script-fu-test-sphere"
  ...
  SF-FILENAME   "Environment map" (string-append gimp-data-directory "/scripts/images/beavis.jpg")
  ...
)
```

