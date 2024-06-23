# 12.1.4.2. 색상 관리 디스플레이(Color Managed Display)

<a id="90-02-02-a13"></a>

#### [그림 90.2.2.a13. `기본설정` → `색상관리` → `색상 관리 디스플레이` (Windows) (우리말)](./90-02-02-color-management.md#90-02-02-a13)
![90-02-02-a13](https://github.com/wonder13662/gimp/assets/15767104/8d5548c3-737e-4926-9ccf-5aa5b2f43571)

<a id="12-01-04-02-s1"></a>

## 1. 모니터 프로필(Monitor profile)

<a id="90-02-02-a13-01"></a>

#### [그림 90.2.2.a13.1. `기본설정` → `색상관리` → `색상 관리 디스플레이` → `모니터 프로필` (Windows)](./90-02-02-color-management.md#90-02-02-a13-01)
![90-02-02-a13-01](https://github.com/wonder13662/gimp/assets/15767104/1d039db4-1285-4af9-aa91-13a1a3706567)

- 없음(None): GIMP(김프)에서 모니터의 [비색계(colorimetric)](./19-glossaryx-colorimetric.md) 프로필을 사용합니다.
- 디스크에서 색상 프로필 선택...(Select color profile from disk): 사용자의 컴퓨터 디스크에서 색상 프로필 파일(`.icc`)를 선택합니다.

> 🗒️ 참고
>
> [비색법(Colormetry)](./19-glossaryx-colorimetric.md)이란 인간의 색채 지각을 물리적으로 정량화하고 설명하는 데 사용되는 과학 및 기술입니다.

<a id="12-01-04-02-s2"></a>

## 2. 시스템 모니터 프로필 사용(Try to use the system monitor profile)
`시스템 모니터 프로필 사용` 옵션이 체크되면, 시스템에서 제공하는 화면 색상 프로필을 사용합니다. [1. 모니터 프로필(Monitor profile)](./12-01-04-02-color_managed_display.md#12-01-04-02-s1)에서 설정한 모니터 프로필 값은 실패할 경우의 대체값으로 사용됩니다.

<a id="12-01-04-02-s3"></a>

## 3. 렌더링 목적(Rendering intent)

<a id="90-02-02-a13-02"></a>

#### [그림 90.2.2.a13.2. `기본설정` → `색상관리` → `색상 관리 디스플레이` → `렌더링 목적` (Windows)](./90-02-02-color-management.md#90-02-02-a13-02)
![90-02-02-a13-02-rendering_intent](https://github.com/wonder13662/gimp/assets/15767104/ca0d2f03-9751-4b65-8188-0ae55b653ac9)

`렌더링 목적(Rendering intent)` 옵션은 색상이 이미지의 색공간에서 표시 장치(모니터, 프린터 등)로 어떻게 바뀌는지 결정합니다. 4가지 모드를 선택할 수 있습니다.

- 지각적(Perceptual)
- 상대 비색계(Relative colorimetric)
- 채도(Saturation)
- 절대 비색계(Absolute colorimetric)

`상대 비색계(Relative colorimetric)`은 대부분의 경우, 가장 좋은 선택이며 기본값입니다.

모니터 프로필 [순람표(룩업테이블, LUT)](./19-glossaryx-lookup_table.md)(대부분의 모니터 프로필은 행렬입니다)을 사용하지 않는다면, `지각적(Perceptual)` 항목을 선택하면 실제로는 `상대 비색계(Relative colorimetric)`를 사용하는 것과 같은 결과를 얻습니다.

`비색계`에 대해서는 [19.용어집 - 비색법(Colormetry)](./19-glossaryx-colorimetric.md)을 참고해주세요.

<a id="12-01-04-02-s4"></a>

## 4. 흑점 보상 활용(Use black point compensation)
`흑점 보상 활용(Use black point compensation)`은 기본값으로 체크되어 있습니다. `흑점 보상 활용(Use black point compensation)`은 이미지 파일의 최대 검은색 단계와 다양한 디지털 표시 장치의 검은색 표시 범위를 조정하는 기능입니다. 사용하지 말아야 할 이유가 없다면, 그냥 두는 편이 좋습니다.

더 자세한 내용은 [19.용어집 - 흑점 보상(Black Point Compensation or BPC)](./19-glossaryx-black_point_compensation.md)을 참고해주세요.

[comment]: <> (TODO 흑점 보상 활용의 역할에 대해서 추가 설명해줄 필요가 있다)

<a id="12-01-04-02-s5"></a>

## 5. 이미지 표시 최적화(Optimize image display for)

<a id="90-02-02-a13-03"></a>

#### [그림 90.2.2.a13.3. `기본설정` → `색상관리` → `색상 관리 디스플레이` → `이미지 표시 최적화 대상` (Windows)](./90-02-02-color-management.md#90-02-02-a13-03)
![90-02-02-a13-02-optimize_image_display_for](https://github.com/wonder13662/gimp/assets/15767104/bb9643d2-bad0-4433-a234-e879f4754124)

`속도(Speed)`와 `정확도/색상 정확성(Precision/Color fidelity)`를 선택할 수 있습니다. `속도(Speed)`가 기본값입니다. `정확도/색상 정확성(Precision/Color fidelity)`를 선택하면, 이미지 표시가 더 나아지고 속도가 떨어지게 됩니다.

***

## 다른 페이지로 가기

[➡️ 다음: 12.1.4.3. 색상 교정(Soft-Proofing)](./12-01-04-03-soft_proofing.md)

[⬅️ 이전: 12.1.4.1. 이미지 표시 모드(Image Display Mode)](./12-01-04-01-image_display_mode.md)

[⬆️ 위: 12.1.4. 색상 관리(Color Management)](./12-01-04-00-color-management.md)

[⬆️ 위: 12.1. 기본설정 대화상자](./12-01-00-preference-dialog.md)

[⬆️ 위: 12. 나만의 GIMP(김프) 만들기](./12-00-enrich-my-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-pimping.html#gimp-prefs-color-management)
