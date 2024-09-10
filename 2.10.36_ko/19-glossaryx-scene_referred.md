# 19. 용어집 - 장면 참조(Scene-referred)

## 1. 정의
카메라로 찍은 이미지에 대해서 이야기할 때, `장면 참조(Scene-referred)`는 이미지의 RGB 채널의 밝기가 사진으로 찍은 장면의 강도에 비례한다는 뜻입니다.

`장면 참조(Scene-referred)`는 카메라가 안개낀 이른 아침의 광경같은 "로우 다이나믹 레인지"를 대상으로 하고 있을 수도 있기 때문에 [높은 동적 범위](./19-glossaryx-high_dynamic_range.md)와 다릅니다.

그렇지만, 구름사이에 달이나 거리의 가로등이 추가되는 것처럼 찍은 사진 이미지에 광원을 추가하면 안개낀 이른 아침의 광경도 [높은 동적 범위](./19-glossaryx-high_dynamic_range.md)로 바꿀 수 있습니다.

광파가 선형적으로 합쳐지므로 `장면 참조(Scene-referred)` 이미지는 반드시 선형적으로 저장되어야 `장면 참조(Scene-referred)` 이미지의 데어터를 보존할 수 있습니다.

***

## 관련 정보

[원문](https://docs.gimp.org/2.10/ko/glossary.html#glossary-scene-referred)

[Models for image editing: Display-referred and scene-referred: Nine Degrees Below Photography](https://ninedegreesbelow.com/photography/display-referred-scene-referred.html)

[editing an image: scene-referred workflow: darktable 3.6 user manual](https://docs.darktable.org/usermanual/3.6/en/overview/workflow/edit-scene-referred/)