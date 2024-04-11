# 12.1.4.3. 색상 교정(Soft-Proofing)

<a id="90-02-02-a14"></a>

#### [그림 90.2.2.a14. `기본설정` → `색상관리` → `색상 교정` (Windows) (우리말)](./90-02-02-color-management.md#90-02-02-a14)
![90-02-02-a14](https://github.com/wonder13662/gimp/assets/15767104/e5e2e543-7220-49d0-bbe8-1521186a1717)

[`색상 교정(Soft Proofing)`](./19-glossaryx-soft_proofing.md)은 화면에 보이는 이미지가 인쇄된 종이에 어떻게 보이는지 확인하는 방법입니다. 일반적으로 이미지의 색 공간(Color Space)에서 프린터나 다른 출력 장치의 다른 색 공간으로의 [`색상 교정(Soft Proofing)`](./19-glossaryx-soft_proofing.md)을 의미합니다.

## 1. 색상 교청 프로필(Soft-proofing profile)

<a id="90-02-02-a14-01"></a>

#### [그림 90.2.2.a14.1. `기본설정` → `색상관리` → `색상 교정` → `색상 교정 프로필` (Windows) (우리말)](./90-02-02-color-management.md#90-02-02-a14-01)
![90-02-02-a14-01](https://github.com/wonder13662/gimp/assets/15767104/53f36af3-497f-439b-9d42-11c9703ba8e7)

`없음(None)`이 기본값입니다. `디스크에서 색상 프로필 선택...(Select color profile from disk...)`을 선택해서 `.icc` 파일을 직접 설정할 수 있습니다.

## 2. 렌더링 목적(Rendering intent)

<a id="90-02-02-a14-02"></a>

#### [그림 90.2.2.a14.2. `기본설정` → `색상관리` → `색상 교정` → `렌더링 목적` (Windows) (우리말)](./90-02-02-color-management.md#90-02-02-a14-02)
![90-02-02-a14-02](https://github.com/wonder13662/gimp/assets/15767104/44cffe3d-3061-4650-93d6-1acfa80accdb)

## 3. 흑점 보상 활용(Use black point compensation)
`흑점 보상 활용(Use black point compensation)` 옵션의 체크를 켜둔 것과 꺼둔 것을 비교해서 더 나은 결과물을 확인하세요.

더 자세한 내용은 [19.용어집 - 흑점 보상(Black Point Compensation or BPC)](./19-glossaryx-black_point_compensation.md)을 참고해주세요.

## 4. 색상 교정 최적화(Optimize soft-proofing for)

<a id="90-02-02-a14-03"></a>

#### [그림 90.2.2.a14.3. `기본설정` → `색상관리` → `색상 교정` → `색상 교정 최적화 대상` (Windows) (우리말)](./90-02-02-color-management.md#90-02-02-a14-03)
![90-02-02-a14-03](https://github.com/wonder13662/gimp/assets/15767104/b0f3614e-4a0f-49a2-a515-b6c27b5cb012)

`속도(Speed)`와 `정확도/색상 정확성(Precision/Color fidelity)`를 선택할 수 있습니다. `속도(Speed)`가 기본값입니다. `정확도/색상 정확성(Precision/Color fidelity)`를 선택하면, 색상 교정이 더 나아지고 속도가 떨어지게 됩니다.

## 5. 색의 영역을 벗어난 색상 표시(Mark out of gamut colors)

`색의 영역을 벗어난 색상 표시(Mark out of gamut colors)` 옵션이 체크되면, 색상 교정 과정에서 [색역(gamut)](./19-glossaryx-gamut.md)에서 표시할 수 없는 색상을 표시합니다. 오른쪽에 색상 버튼을 누르면, 색상 선택 대화상자를 열어 표시할 수 없는 색상을 나타내는 색을 선택할 수 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 12.1.4.4. 선호 프로파일(Preferred Profiles)](./12-01-04-04-preferred_profiles.md)

[⬅️ 이전: 12.1.4.2. 색상 관리 디스플레이(Color Managed Display)](./12-01-04-02-color_managed_display.md)

[⬆️ 위: 12.1. 기본설정 대화상자](./12-01-00-preference-dialog.md)

[⬆️ 위: 12. 나만의 GIMP(김프) 만들기](./12-00-enrich-my-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-pimping.html#gimp-prefs-color-management)
