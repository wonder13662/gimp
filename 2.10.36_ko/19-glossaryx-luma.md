# 19. 용어집 - 인식가능한 휘도(Luma)

<a id="19-glossaryx-luma-s1"></a>

## 1. 회색 음영을 계산하는 방법

비선형 sRGB(non-linearized sRGB)를 사용하여 회색 음영의 값을 계산하는 방정식은 다음과 같습니다.

```
Luma = (0.22 × R) + (0.72 × G) + (0.06 × B)
```

*** 

## 관련 정보

[8.31. Desaturate](https://docs.gimp.org/2.10/ko/gimp-filter-desaturate.html#idm32648)

[16.8.31. 무채화…(Desaturate…)](./16-08-31-00-desaturate.md)

[8.31.4. More information about the five options for converting from color to black and white: More information about Luma](https://docs.gimp.org/2.10/ko/gimp-filter-desaturate.html#More-information-about-Luma)