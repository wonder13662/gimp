# 16.8.10.3. 실제 사례 연습(Actual practice)

<a id="16-08-10-03-s1"></a>

## 1. 원본: 노출 부족 이미지

<a id="90-04-202-a221"></a>

#### [그림 90.4.202.a221. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 원본 이미지 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a221)
<img width="300" height="259" alt="90-04-202-a221" src="https://github.com/user-attachments/assets/8f1f94a1-31d1-4a36-9b93-2d4f4b648bf4" />

<a id="90-04-202-a222"></a>

#### [그림 90.4.202.a222. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 원본 이미지 - 입력 채널의 히스토그램 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a222)
<img width="382" height="187" alt="90-04-202-a222" src="https://github.com/user-attachments/assets/cccee068-ab54-47d1-8550-b2b67f92e1dc" />

위 입력 채널의 히스토그램에서 어두운 톤인 그림자 영역이 많고, 밝은 톤인 강조(Highlight)가 없음을 확인할 수 있습니다.

<a id="90-04-202-a222-01"></a>

#### [그림 90.4.202.a222.1. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 원본 이미지 - 히스토그램 대화상자 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a222-01)
<img width="200" height="247" alt="90-04-202-a222-01" src="https://github.com/user-attachments/assets/8e44eb04-68ab-4737-a510-d1790311e254" />

<a id="16-08-10-03-s2"></a>

## 2. 화이트 포인트 설정하기

<a id="90-04-202-a223-01"></a>

#### [그림 90.4.202.a223.1. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 화이트 포인트 설정한 결과 이미지 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a223-01)
<img width="300" height="259" alt="90-04-202-a223-01" src="https://github.com/user-attachments/assets/c37d2c78-70b6-44ba-9693-7dd4c648c9db" />

<a id="90-04-202-a223-02"></a>

#### [그림 90.4.202.a223.2. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 화이트 포인트 설정한 결과 이미지 - 입력 채널의 히스토그램 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a223-02)
<img width="382" height="187" alt="90-04-202-a223-02" src="https://github.com/user-attachments/assets/debc1c67-b47e-4407-9aae-66da5acf2230" />

입력 채널의 히스토그램의 슬라이더에서 오른쪽의 하얀색 삼각형을 179까지 옮깁니다.

이 결과로 이미지가 전체적으로 밝아집니다.

<a id="90-04-202-a223-03"></a>

#### [그림 90.4.202.a223.3. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 화이트 포인트 설정한 결과 이미지 - 히스토그램 대화상자(Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a223-03)
<img width="200" height="247" alt="90-04-202-a223-03" src="https://github.com/user-attachments/assets/2455b883-f828-442e-8740-7ec0115fb684" />

하지만 [히스토그램 대화상자](./15-02-05-00-histogram-dialog.md)를 확인해보면 여전히 어두운 톤이 많은 것을 볼 수 있습니다.

<a id="90-04-202-a223-04"></a>

#### [영상 90.4.202.a223.4. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 화이트 포인트 설정 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a223-04)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/1c7e7481-96d9-4c16-96f7-8778a33c3c54"></video>

<a id="16-08-10-03-s3"></a>

## 3. 그림자와 강조(Highlight)의 균형 맞추기

<a id="90-04-202-a224-01"></a>

#### [그림 90.4.202.a224.1. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 중간톤 설정 결과 이미지 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a224-01)
<img width="300" height="259" alt="90-04-202-a224-01" src="https://github.com/user-attachments/assets/0807ad6e-4f23-4fba-bec3-ca0aa01f66a8" />

<a id="90-04-202-a224-02"></a>

#### [그림 90.4.202.a224.2. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 중간톤 설정 결과 이미지 - 입력 채널의 히스토그램 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a224-02)
<img width="382" height="263" alt="90-04-202-a224-02" src="https://github.com/user-attachments/assets/620d2cc5-228c-4e8c-b585-2d89f8f031e9" />

입력 채널의 슬라이더의 중간톤 회색 삼각형을 왼쪽으로 2.06까지 옮깁니다.

이 결과로 이미지의 어두운 톤(그림자)이 줄어들고 밝은 톤(강조, Highlight)이 늘어납니다.

아래 히스토그램들에서도 어두운 톤(그림자)이 줄어든 것을 확인할 수 있습니다.

<a id="90-04-202-a224-03"></a>

#### [그림 90.4.202.a224.3. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 중간톤 설정 결과 이미지 - 히스토그램 대화상자 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a224-03)
<img width="200" height="247" alt="90-04-202-a224-03" src="https://github.com/user-attachments/assets/9f2038d7-23fd-4b42-9665-12a8b1c4b04c" />

<a id="90-04-202-a224-04"></a>

#### [영상 90.4.202.a224.4. `레벨` 대화상자: 노출 부족 이미지 개선하기 - 중간톤 설정 (Windows) (우리말)](./90-04-0202-levels.md#90-04-202-a224-04)
<video controls="controls" width="640" height="360" src="https://github.com/user-attachments/assets/87f25fd4-7044-4a26-9949-5a0daac06b2c"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 16.8.11. 커브(Curves)](./16-08-11-curves.md)

[⬅️ 이전: 16.8.10.2.11. 보기 영역 분할(Split view)](./16-08-10-02-11-split_view.md)

[⬆️ 위: 16.8.10. 레벨(Levels)](./16-08-10-00-levels.md)

[⬆️ 위: 16.8. 색 메뉴(The colors menu)](./16-08-00-the-colors-menu.md)

[⬆️ 위: 16. 메뉴(Menus)](./16-00-menus.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-tool-levels.html#idm31258)