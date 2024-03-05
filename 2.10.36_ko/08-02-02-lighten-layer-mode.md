# 8.2.2. 레이어 모드-Lighten
`밝은 색(Lighten)` 그룹은 레이어를 더 밝게 만들어 줍니다.

## 1. 밝은 색만(Lighten only)
`밝은 색만(Lighten only)` 모드는 위쪽 레이어와 아래쪽 레이어의 각 픽셀값을 비교하여 더 밝은 색을 선택합니다.

⚠️ 주의: 밝은 색의 단위는 검은색을 0, 하얀색을 255의 범위로 그레이스케일의 밝기를 말합니다.

#### 그림 8.2.2.a1. 밝은 색만(Lighten only): 위쪽 레이어(마스크)의 불투명도(Opacity)가 100%
![layer_mode-lighten-01-lighten_only](https://github.com/wonder13662/gimp/assets/15767104/b3feb4cb-af62-4ab3-bb31-0393fa70baf1)

따라서 한 레이어가 검정색 이미지이면 최종 이미지에는 변화가 없고, 하얀색 이미지이면 최종 이미지는 하얀색 이미지가 됩니다. 

#### 영상 8.2.2.a2. 밝은 색만(Lighten only): 위쪽 레이어가 검정색 또는 하얀색
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/8ab044b7-7fb3-4a81-8996-51f698d5fa6a"></video>

`밝은 색만(Lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `밝은 색만(Lighten only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.2.a3. 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ba0c1475-7112-4a0b-a595-5feeac2eb4e1"></video>

## 2. 휘도가 밝은 색만(Luma/Luminance lighten only)
`휘도가 밝은 색만(Luma/Luminance lighten only)` 모드는 위 아래의 레이어의 각 픽셀의 휘도(luminance)를 비교합니다. 그리고 더 큰 값(더 밝은 픽셀)을 결과 이미지에 씁니다.

#### 그림 8.2.2.a11. 휘도가 밝은 색만(Luma/Luminance lighten only)
![layer_mode-lighten-02-luma_luminance_lighten_only](https://github.com/wonder13662/gimp/assets/15767104/dd263715-e508-42e1-a75f-3781b744faa7)

완전히 검은색 레이어는 결과 이미지에 영향을 주지 않습니다. 완전히 하얀색 이미지는 결과 이미지를 하얀색 이미지로 만들어 버립니다. 

#### 영상 8.2.2.a12. 휘도가 밝은 색만(Luma/Luminance lighten only): 위쪽 레이어가 검정색 또는 하얀색
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/79601a9a-5922-4e58-8d3a-d020fd08eefb"></video>

`휘도가 밝은 색만(Luma/Luminance lighten only)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `휘도가 밝은 색만(Luma/Luminance lighten only)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

#### 영상 8.2.2.a23. 밝은 색만(Lighten only): 레이어 순서를 바꿔도 결과는 같음 - 서로 바꿀 수 있는 레이어(Commutative Layer)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/61ae966e-78f3-4583-952f-4cc88238759a"></video>

`휘도(Luminance)`는 밝기(Brightness)와 색상(Color)이 함께 고려되는 값입니다. `Luma`는 사람이 인식할 수 있는 범위 안에서의 휘도입니다.

## 3. 화면(Screen)
`화면(Screen)` 모드는 이미지의 2개의 레이어의 보이는 각각의 픽셀의 값을 거꾸로 만듭니다. (밝기의 최대값에서 각각의 픽셀의 값을 뺍니다.) 그런 다음, 거꾸로 만든 픽셀 값들을 곱합니다. 그리고 이 값을 다시 거꾸로 만듭니다. 결과 이미지는 보통은 더 밝아집니다. 때때로 형체의 일부분이 사라지기도 합니다. 

```
픽셀의 최대 밝기 값이 255인 경우

픽셀의 `화면(Screen)` 모드 결과값 = (255 - 위쪽 레이어의 픽셀의 밝기) x (255 - 아래쪽 레이어의 픽셀의 밝기) / 255

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
```

예외적으로 검은색 레이어는 다른 레이어를 바꾸지 않습니다. 그리고 하얀색 레이어는 결과 이미지를 하얗게 만듭니다.

이미지의 어두운 색은 좀 더 투명하게 바뀝니다.

`화면(Screen)` 모드는 `서로 바꿀 수 있는 레이어(Commutative Layer)` 모드이므로 두 레이어 모두 `화면(Screen)` 모드이면 레이어의 순서를 바꿔도 두 레이어가 겹치는 부분에 대해서는 결과가 같습니다. 다만, 아래쪽 레이어의 투명 영역에 대해서는 이 레이어 모드의 효과가 적용되지 않으므로 주의하세요.

## 4. 닷지(Dodge)

## 5. 더하기(Addition)

***

## 다른 페이지로 가기
[➡️ 다음: 8.2.3. 레이어 모드-Darken](./08-02-03-darken-layer-modes.md)

[⬅️ 이전: 8.2.1. 레이어 모드-Normal](./08-02-01-normal-layer-mode.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-lighten.html)
