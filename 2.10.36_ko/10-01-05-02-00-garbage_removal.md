# 10.1.5.2. 불필요한 것 제거하기(Garbage Removal)
## 1. 도장(Clone) 도구로 불필요한 것 제거하기
이미지에서 얼룩이나 티끌을 제거하는 가장 유용한 방법은 [도장(Clone)](./14-03-12-clone.md) 도구를 사용하는 것입니다. [도장(Clone)](./14-03-12-clone.md) 도구는 이미지(자신이 아닌 다른 이미지일 수도 있습니다)의 다른 부분의 픽셀 정보를 가져와서 이미지의 부분의 위에 칠할 수 있습니다.

도장 도구를 효과적으로 사용하려면, 얼룩이나 티끌의 위에 칠할 이미지의 다른 부분을 찾아야 합니다. 얼룩과 티끌이 있는 부분의 주변과 유사한 부분을 선택하여 도장 도구를 사용하면, 효과적으로 제거할 수 있습니다.

예를 들면, 멋진 해변 사진에서 지우고 싶은 걷는 사람의 모습이 있을 수 있습니다. 이런 경우에, 해변 사진에서 사람이 없는 부분을 도장 도구로 선택해서 걷는 사람 위에 칠하면 자연스럽게 걷는 사람의 모습을 지울 수 있습니다. 아래 영상에서 이 과정을 확인해볼 수 있습니다.

<a id="90-03-02-29-a122"></a>

#### [영상 90.3.2.29.a122. 도장(Clone) 도구로 필요없는 부분 제거하기](./90-03-02-29-clone.md#90-03-02-29-a122)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/22416fc2-2687-4591-a239-c13c7432adc5"></video>

## 2. 복원(Healing) 도구로 불필요한 것 제거하기

도장 도구와 비슷한 [14.3.13. 복원(Healing)](./14-03-13-heal.md) 도구도 역시 다른 부분을 복사해 붙여 넣습니다. 주로 잡티 제거나 부분 수정에 사용됩니다.

<a id="90-03-02-31-a111"></a>

#### [영상 90.3.2.31.a111. 복원(Heal) 도구로 필요없는 부분 제거하기](./90-03-02-31-healing.md#90-03-02-31-a111)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/6afc7e56-5b80-4677-9e56-0ffa19b1720f"></video>

## 3. `Resynthesizer` 플러그인으로 불필요한 것 제거하기

어떤 경우에는 `Resynthesizer` 플러그인을 사용하는 것이 좋을 수도 있습니다. `Resynthesizer` 플러그인은 이미지에서 제거할 대상을 잘라낸 뒤에, 빈 공간을 채웁니다. `Resynthesizer` 플러그인은 GIMP(김프)에서 기본으로 제공되는 플러그인이 아니므로 사용자가 직접 설치해야 합니다. 각 운영체제마다 아래 링크를 확인해서 `Resynthesizer` 플러그인을 설치해보세요.

[10.1.5.2.1. Windows에서 Resynthesizer 사용하기](./10-01-05-02-01-resynthesizer_on_windows.md)

[10.1.5.2.2. Mac OSX에서 Resynthesizer 사용하기](./10-01-05-02-02-resynthesizer_on_mac.md)

<a id="10-01-05-02-01-a11"></a>

#### [영상 10.1.5.2.1.a11. 사용하기](./10-01-05-02-01-resynthesizer_on_windows.md#10-01-05-02-01-a11)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/0477be8f-4c32-4109-95f7-55e7ad9bd0cf"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 10.1.5.2.1. Windows에서 Resynthesizer 사용하기](./10-01-05-02-01-resynthesizer_on_windows.md)

[⬅️ 이전: 10.1.5.1. 잡티 없애기(Despeckling)](./10-01-05-01-despeckling.md)

[⬆️ 위: 10.1.5. 이미지에서 필요없는 물체 없애기](./10-01-05-00-removing_unwanted_objects_from_an_image.md)

[⬆️ 위: 10.1. 디지털 카메라로 찍은 사진 편집하기](./10-01-00-working-with-digital-camera-photos.md)

[⬆️ 위: 10. 사진 편집하기](./10-00-enhancing-photographs.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-imaging-photos.html#gimp-using-photography-garbage)
