# 4.4.2. gif 이미지로 내보냈더니 색상이 바뀌었습니다

gif 이미지 형식은 최대 256개의 색상까지만 사용할 수 있습니다. 

gif 애니메이션을 만들 때, 1 프레임 당 256개의 색상을 씁니다. 

하지만, GIMP(김프)는 비슷한 색상끼리 합쳐서 256개의 색상으로 줄입니다. 

그 결과로써 [이미지](./19-glossaryx-image.md)의 색상은 눈에 띄는 차이를 보입니다.

<a id="90-01-05-02-a101"></a>

#### [그림 90.1.5.2.a101. Format: PNG와 Format: GIF의 결과물 비교](./90-01-05-02-00-mode.md#90-01-05-02-a101)
![90-01-05-02-a101](https://github.com/wonder13662/gimp/assets/15767104/a1224063-b554-4861-8502-eccc67dd703d)

이 문제를 고치기 위해서는 더 많은 색상을 지원하는 다른 이미지 형식을 선택해야 합니다. 

또는 gif로 내보내기 전에 작업중인 이미지를 [16.6.6. 인덱스 모드(Indexed mode)](./16-06-06-00-indexed-mode.md)로 바꾸고 색상을 직접 조정해야 합니다.

## 다른 페이지로 가기

[➡️ 다음: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[⬅️ 이전: 4.4.1. jpeg 이미지로 내보냈더니 투명 부분이 흰색 또는 검은색으로 바뀌었습니다](./04-04-01-i-am-exporting-to-a-jpeg-image-and-my-transparent-area-turned-white-or-black.md)

[⬆️ 위: 4.4. 이미지 내보내기 할 때의 문제 해결하기](./04-04-00-how-to-fix-problems-exporting-images.md)

[⬆️ 위: 4. 문제 해결하기](./04-00-what-to-do-if-you-are-stuck.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-stuck-export-gif-colors-changed.html)