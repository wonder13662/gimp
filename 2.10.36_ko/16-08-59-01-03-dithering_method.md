# 16.8.59.1.3. 디더링 방식(Dithering method)

<a id="90-04-221-a131"></a>

#### [그림 90.4.221.a131. `디더링` 대화상자 → `디더링 방식` (Windows) (우리말)](./90-04-0221-dither.md#90-04-221-a131)
<img width="448" height="486" alt="90-04-221-a131" src="https://github.com/user-attachments/assets/06694fd4-6bca-4d7c-9ab4-c82bf26944a2" />

<a id="90-04-221-a132"></a>

#### [그림 90.4.221.a132. `디더링` 대화상자 → `디더링 방식`: 드롭다운 목록 (Mac)](./90-04-0221-dither.md#90-04-221-a132)
<img width="162" height="233" alt="90-04-221-a132" src="https://github.com/user-attachments/assets/f3a20792-99d1-4b54-9591-44440c7c61ca" />

<a id="16-08-59-01-03-s1"></a>

## 1. None

<a id="90-04-221-a133-01"></a>

#### [그림 90.4.221.a133.1. `디더링` 대화상자 → `디더링 방식` → `None`](./90-04-0221-dither.md#90-04-221-a133-01)
<img width="640" height="80" alt="90-04-221-a133-01" src="https://github.com/user-attachments/assets/8e2a997b-a242-4ce4-8e67-8fed0f5a4f6a" />

이미지에 디더링을 적용하지 않습니다.

<a id="16-08-59-01-03-s2"></a>

## 2. 플로이드-스타인버그 디더링(Floyd-Steinberg)

<a id="90-04-221-a133-02"></a>

#### [그림 90.4.221.a133.2. `디더링` 대화상자 → `디더링 방식` → `플로이드-스타인버그 디더링`](./90-04-0221-dither.md#90-04-221-a133-02)
<img width="640" height="80" alt="90-04-221-a133-02" src="https://github.com/user-attachments/assets/2af6db1a-5bec-4ac0-9196-5272d3335807" />

[플로이드-스타인버그 디더링(Floyd-Steinberg)](./19-glossaryx-floyd_steinberg_dithering.md)은 가장 많이 사용되는 디더링 방식이며, 기본값입니다.

<a id="16-08-59-01-03-s3"></a>

## 3. Bayer

<a id="90-04-221-a133-03"></a>

#### [그림 90.4.221.a133.3. `디더링` 대화상자 → `디더링 방식` → `Bayer`](./90-04-0221-dither.md#90-04-221-a133-03)
<img width="640" height="80" alt="90-04-221-a133-03" src="https://github.com/user-attachments/assets/f5aa5e0a-016c-4b7a-8498-2e6c2151c9d3" />

[Bayer Matrix](./19-glossaryx-ordered_dithering.md)도 색상의 갯수를 줄이기 위해 자주 사용되는 디더링 방법입니다.

이 알고리즘은 결과 이미지에 눈에 띄는 그물 모양의 패턴이 나타납니다.

<a id="16-08-59-01-03-s4"></a>

## 4. Random, Random covariant

<a id="90-04-221-a133-04"></a>

#### [그림 90.4.221.a133.4. `디더링` 대화상자 → `디더링 방식` → `Random`](./90-04-0221-dither.md#90-04-221-a133-04)
<img width="640" height="80" alt="90-04-221-a133-04" src="https://github.com/user-attachments/assets/191882b3-3692-4acc-8eca-b46c71e8cfd7" />

이 디더링 방식들은 색상의 갯수를 줄이기 위해 픽셀값을 무작위 추출을 합니다.

<a id="16-08-59-01-03-s5"></a>

## 5. Arithmetic add, Arithmetic add covariant, Arithmetic xor, Arithmetic xor covariant

<a id="90-04-221-a133-05"></a>

#### [그림 90.4.221.a133.5. `디더링` 대화상자 → `디더링 방식` → `Arithmetic add`](./90-04-0221-dither.md#90-04-221-a133-05)
<img width="640" height="80" alt="90-04-221-a133-05" src="https://github.com/user-attachments/assets/bb3cc29b-b93d-42f0-a2ba-4eee64c3d204" />

이 디더링 방식들은 [마법수(magic number)](https://namu.wiki/w/%EB%A7%A4%EC%A7%81%EB%84%98%EB%B2%84#s-4.1)와 산수를 기반으로 공간적으로 안정적입니다.

[추가정보: 19. 용어집 - a dithering](./19-glossaryx-a_dithering.md)을 참고해주세요.

<a id="16-08-59-01-03-s6"></a>

## 6. Blue Noise, Blue Noise covariant

<a id="90-04-221-a133-06"></a>

#### [그림 90.4.221.a133.6. `디더링` 대화상자 → `디더링 방식` → `Blue Noise`](./90-04-0221-dither.md#90-04-221-a133-06)
<img width="640" height="80" alt="90-04-221-a133-06" src="https://github.com/user-attachments/assets/6ee0fd26-97f2-4f8c-83ec-80b346e8c4ad" />

이 디더링 방식들은 가장 볼품없고, 혼란스러운 ["blue noise"](https://en.wikipedia.org/wiki/Colors_of_noise#Blue_noise)를 사용합니다.

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.59.1.4. 무작위 산출(Random Seed)](./16-08-59-01-04-random_seed.md)

[⬅️ 이전: 16.8.59.1.2. 색상 단계(Color Levels)](./16-08-59-01-02-color_levels.md)

[⬆️ 위: 16.8.59.1. 옵션(Options)](./16-08-59-01-00-options.md)

[⬆️ 위: 16.8.59. 디더링(Dither)](./16-08-59-00-dither.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-filter-dither.html#idm34499)