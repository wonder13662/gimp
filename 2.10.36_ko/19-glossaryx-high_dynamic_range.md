# 19. 용어집 - 높은 동적 범위(High Dynamic Range, HDR)
[디스플레이 참조(Display-referred)](./19-glossaryx-display_referred.md) 데이터에서 대략 회색에서 어두워지는 쪽으로 두칸 반, 밝아지는 쪽으로 여섯 칸 반 정도의 범위를 갖습니다.

이 데이터의 색상 정보는 "검은색"과 회색 사이(두칸 반)의 적은 색조 단계에 밀집되어 저장되어 있습니다.

그러므로 최선의 결과로 9단계의 동적 범위를 가질 수 있습니다.

하지만 대체로 현실의 이미지의 동적 범위를 20단계 혹은 그 이상의 단계를 가질 수 있습니다.

[디스플레이 참조(Display-referred)](./19-glossaryx-display_referred.md) 데이터의 동적 범위 제한에 대한 일반적인 해결책은 장면 데이터를 인코딩하는데 필요한 높은 값만큼 채널 값을 허용하는 것입니다.

다시 말해, [디스플레이 참조 하얀색(Display-referred white)](./19-glossaryx-display_referred_white.md)보다 밝은 채널 값을 허용한다는 것입니다.

높은 동적 범위(HDR) 이미지를 불러오거나 내보내기를 할 수 있는 포맷 중에서 GIMP(김프) 2.10에서는 `tiffs`, `OpenEXR`, `FITS`을 포함한 여러 파일 포맷을 지원하고 있습니다.

GIMP(김프)에서 높은 동적 범위(HDR) 데이터로 작업할 때는 [채널 인코딩(Channel encoding)](./19-glossaryx-channel_encoding.md)을 `선형 조명(Linear Light)`으로 설정해야 `지각 범위 감마(sRGB)`를 사용했을 때의 부작용을 막을 수 있습니다.

[관련 정보: 16.6.7.2.2. 채널 인코딩 옵션(Channel Encoding Options)](./16-06-07-02-02-channel_encoding_options.md)

Editing high dynamic range data requires that there isn't any clamping code in editing operations and blend modes.
높은 동적 범위(HDR) 이미지를 수정할 때는 고정되지 않은 블렌드 모드와 명령들을 사용해야 합니다.

실수(부동소수점) 정밀도에서의 고정되지 않은 블렌드 모드와 명령, 그리고 고정된 블렌드 모드는 아래와 같습니다.

## 1. 고정되지 않은(Unclamped) 블렌드 모드
- [일반](./08-02-01-01-normal.md)
- [더하기](./08-02-02-05-00-addition.md)
- [빼기](./08-02-05-03-subtract.md)
- [곱하기](./08-02-03-03-00-multiply.md)
- [밝은 색만](./08-02-02-01-00-lighten_only.md)
- [어두운 색만](./08-02-03-01-00-darken_only.md)
- [차이점](./08-02-05-01-difference.md)
- [LCh](./08-02-07-00-lch-components-layer-modes.md)
- [휘도](./08-02-07-05-luminance.md)

## 2. 고정된(Clamped) 블렌드 모드
아래 블렌드 모드들은 [디스플레이 참조(Display-referred)](./19-glossaryx-display_referred.md) 데이터를 처리하도록 설계되었습니다.

- [화면](./08-02-02-03-00-screen.md)
- [부드러운 조명](./08-02-04-02-soft_light.md)
- [덧씌우기](./08-02-04-01-overlay.md)

## 3. 고정되지 않은(Unclamped) 명령들
- [레벨](./16-08-10-levels.md)
- [노출](./16-08-07-exposure.md)
- [변형 도구](./14-04-00-transform-tools.md)
- [필터](./17-00-filters.md)

***

## 관련 정보

[원문](https://docs.gimp.org/2.10/ko/glossary.html#glossary-high-dynamic-range)

[위키백과 - 하이 다이내믹 레인지](https://ko.wikipedia.org/wiki/%ED%95%98%EC%9D%B4_%EB%8B%A4%EC%9D%B4%EB%82%B4%EB%AF%B9_%EB%A0%88%EC%9D%B8%EC%A7%80)

[Models for image editing: Display-referred and scene-referred: Nine Degrees Below Photography](https://ninedegreesbelow.com/photography/display-referred-scene-referred.html)