# 8.2.5.4. 질감 드러내기(Grain extract)
#### 그림 8.2.5.4.a40. 질감 드러내기(Grain extract)
![08-02-05-layer_mode-inversion-04-grain_extract](https://github.com/wonder13662/gimp/assets/15767104/6563b3f3-64c4-45da-b179-ec3059cc7cdb)

#### 8.2.5.4.a41. 질감 드러내기(Grain extract) 모드의 방정식
```
RGB 결과값 = max((위쪽 레이어 RGB 값 - 아래쪽 레이어 RGB 값 + 128), 0)
```

`질감 드러내기(Grain extract)` 모드는 "필름 질감(flim grain)"을 레이어로부터 뽑아내 새로운 레이어를 만듭니다. 이미지에 엠보싱 형태의 효과를 줄 때도 유용합니다. 아래 영상에서 이미지에 엠보싱 효과를 주는 과정을 확인할 수 있습니다.

#### 영상 8.2.5.4.a42. 질감 드러내기(Grain extract) 모드: 같은 이미지로 비교
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/88275728-6630-40a9-8b7f-c8d718d5f200"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 8.2.5.5. 질감 합치기(Grain merge)](./08-02-05-05-grain_merge.md)

[⬅️ 이전: 8.2.5.3. 빼기(Subtract)](./08-02-05-03-subtract.md)

[⬆️ 위: 8.2.5. 레이어 모드-반전(Inversion)](./08-02-05-00-inversion-layer-modes.md)

[⬆️ 위: 8.2. 레이어 모드](./08-02-00-layer-modes.md)

[⬆️ 위: 8. 이미지 합치기(Combining Images)](./08-00-combining-images.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/layer-mode-group-inversion.html)