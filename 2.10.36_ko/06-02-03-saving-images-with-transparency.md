# 6.2.3. 투명한 부분이 있는 이미지 저장하기
투명한 이미지를 만드는 두가지 방법이 있습니다. `단순 이진 투명(simple binary transparency)`과 `알파 투명(alpha transparency)` 입니다. `단순 이진 투명`은 [GIF](./06-01-02-01-export_image_as_gif.md) 이미지 파일 유형에서 지원합니다. 인덱스 색상 팔레트에서 투명으로 사용할 색상을 지정합니다. `알파 투명`은 [PNG](./06-01-02-04-export_image_as_png.md) 파일 유형에서 지원합니다. 투명 정보를 별도의 채널인 [알파 채널(Alpha channel)](./19-glossaryx-alpha.md)에 저장합니다.

> 🗒️ 참고
>
> `GIF` 파일 유형은 잘 쓰이지 않고 있습니다. 왜냐하면 `PNG` 파일 유형이 `GIF` 대부분의 기능을 지원하고 있고, 이에 더해 추가적인 기능(예: 알파채널)도 있기 때문입니다. 그럼에도 불구하고 `GIF`는 애니메이션을 위한 용도로 여전히 쓰고 있습니다.

## 알파 투명도를 가진 이미지 만들기

### 알파 채널 확인하기
이미지를 알파 투명도를 포함해서 내보내기 위해서, 이미지에 알파 채널이 있어야 합니다. 알파 채널이 이미지에 있는 것을 확인하기 위해서, [채널 대화상자](./15-02-02-00-channel-dialog.md)로 가서 "빨강(Red)", "초록(Green)", "파랑(Blue)" 외에 "알파(Alpha)" 항목이 있는지 확인합니다. 

#### [그림 90.4.4.a2. 채널 대화상자 - 알파 채널](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-04-channels.html#%EA%B7%B8%EB%A6%BC-9044a2-%EC%B1%84%EB%84%90-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%95%8C%ED%8C%8C-%EC%B1%84%EB%84%90)
[![90-04-04-channels-alpha_channels-focus](https://github.com/wonder13662/gimp/assets/15767104/6a94fd5e-24c4-407a-928c-9f43640ac45b)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-04-channels.html#%EA%B7%B8%EB%A6%BC-9044a2-%EC%B1%84%EB%84%90-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90---%EC%95%8C%ED%8C%8C-%EC%B1%84%EB%84%90)

만약 "알파(Alpha)" 항목이 없다면, 이미지 메뉴바의 `레어어(Layer)` → `투명도(Transparency)` → [`알파 채널 추가(Add Alpha Channel)`](./16-07-34-add-alpha-channel.md)를 선택해서 알파 채널을 추가합니다.

<a id="90-01-06-09-01-a101"></a>

#### [그림 90.1.6.9.1.a101. `레이어` → `투명` → `알파 채널 추가` (Windows)](./90-01-06-09-01-add_alpha_channel.md#90-01-06-09-01-a101)
![그림 90.1.6.9.1.a101. `레이어` → `투명` → `알파 채널 추가` (Windows)](https://github.com/wonder13662/gimp/assets/15767104/3fb3ad7c-4a41-492e-9797-bed56dc9d936)

[다른 운영체제와 언어의 `레이어` → `투명` → `알파 채널 추가` 대화상자 확인하기](./90-01-06-09-01-add_alpha_channel.md#90-01-06-09-01-a102)

`XCF` 파일의 배경 레이어는 지울 수 있습니다. 지운 이후에는 투명한 배경을 볼 수 있습니다.

(TODO 알파 채널을 이용한 좋은 예제와의 연결이 필요하다. 매뉴얼의 내용이 다소 부실하다고 생각됨)

***

## 다른 페이지로 가기

[➡️ 다음: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[⬅️ 이전: 6.2.2. 파일 크기를 조금 더 줄이기](./06-02-02-reducing-the-file-size-even-more.md)

[⬆️ 위: 6.2. 웹용 이미지 만들기](./06-02-00-preparing-your-images-for-the-web.md)

[⬆️ 위: 6. GIMP(김프)에서 이미지 내보내기](./06-00-getting-images-out-of-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-web-reducing-file-size.html)

***

## 관련 정보
[Gimp-Forum.net: Copying and pasting from the Internet](https://www.gimp-forum.net/Thread-Copying-and-pasting-from-the-Internet)
(TODO 위 내용 정리 필요)