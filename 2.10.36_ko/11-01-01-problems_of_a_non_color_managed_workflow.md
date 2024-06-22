# 11.1.1. 색상 관리를 하지 않는 작업의 문제점
이미지 편집을 색상 관리없이 진행한다면, 결과물이 작업한 대로 보여지지 않습니다. 이 문제는 두 가지 영역에 걸쳐 나타납니다.

1. 카메라, 스캐너, 모니터, 프린터 등 서로 다른 장치의 색상 관리 차이로 인해 표현되는 색상에 차이가 발생할 수 있습니다.
2. 각 장치의 사용가능한 색상공간의 한계 차이로 인해 색상이 달라질 수도 있습니다.

색상 관리의 주 목적은 위의 두 가지 문제를 피하는 것입니다. 그렇게 하기 위해서 이미지 또는 장치에 "색상 표현 특성"에 관한 설명을 추가합니다.

이 설명을 `색상 프로필(Color Profile)`이라고 합니다. `색상 프로필(Color Profile)`은 장치의 고유한 색상을 장치에서 독립적인 색상 공간(Color space)로 번역해주는 [순람표(룩업테이블, LUT)](./19-glossaryx-lookup_table.md)입니다. 이 색상 공간(Color Space)를 작업 공간(Working Space)라고도 합니다. 모든 이미지의 수정은 이 작업 공간(Working Space)에서 이루어 집니다. 게다가 장치의 `색상 프로필(Color Profile)`은 색상이 장치에서 어떻게 보여지는지 실험해볼 수 있습니다.

`색상 프로필(Color Profile)`은 보통 장치를 만든 제조사에서 만듭니다. `색상 프로필(Color Profile)`을 플랫폼과 운영 체제에서 독립적으로 만들기 위해, [ICC (International Color Consortium) - 국제 컬러 협회](https://ko.wikipedia.org/wiki/%EA%B5%AD%EC%A0%9C_%EC%BB%AC%EB%9F%AC_%ED%98%91%ED%9A%8C)에서 `ICC-profile`이라고 하는 표준을 만들었습니다. 이 표준은 `색상 프로필(Color Profile)`이 파일에 어떻게 저장되고, 이미지에 첨부되어야 하는지 정의해주고 있습니다.

***

## 다른 페이지로 가기

[➡️ 다음: 11.1.2. 색상 관리 작업 소개](./11-01-02-00-introduction_to_a_color_managed_workflow.md)

[⬅️ 이전: 11.1. GIMP(김프)에서의 색상 관리](./11-01-00-color-management-in-gimp.md)

[⬆️ 위: 11.1. GIMP(김프)에서의 색상 관리](./11-01-00-color-management-in-gimp.md)

[⬆️ 위: 11. GIMP(김프)에서의 색상 관리](./11-00-color-management-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-color-management.html#idm7829)
