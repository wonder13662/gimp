# 7.12.1. 색상표(Colormap)
## 1. 두 가지 유형의 팔레트
Confusingly, GIMP makes use of two types of palettes. 
### 1-1. 팔레트 대화상자의 팔레트
The more noticeable are the type shown in the Palettes dialog: palettes that exist independently of any image. 

### 1-2. 인덱스 모드 이미지의 인덱스 팔레트
The secone type, indexed palettes, form the colormaps of indexed images. Each indexed image has its own private indexed palette, defining the set of colors available in the image: the maximum number of colors allowed in an indexed palette is 256. These palettes are called "indexed" because each color is associated with an index number. (Actually, the colors in ordinary palettes are numbered as well. but the numbers have no functional significance.)

(TODO 색상표 이미지 추가)

## 2. 색상표(Colormap)
The colormap of an indexed image is shown in the [Indexed Palette dialog](./15-02-04-colormap-dialog.md), which should not be confused with the Palette dialog. The Palettes dialog shows a list of all of the palettes available; the Colormap dialog shows the colormap of the currently active image, if it is an indexed image - otherwise it shows nothing.

(TODO 색상표 이미지 - 인덱스 모드 이미지 아닌 경우 아무것도 보여주지 않는 그림 추가)

## 3. 인덱스 모드 이미지에서 팔레트 만들기
You can, however, create an ordinary palette from the colors in an indexed image-actually from the colors in any image. To do this, choose `Import Palette` from the right-click popup menu in the Palettes dialog: this pops up a dialog that gives you several options, including the option to import the palette from an image. (You can also import any of GIMP's gradients as a palette.) This possibility becomes important if you want to create a set of indexed images that all use the same set of colors.

(TODO Import Palette 이미지 추가하기)

## 4. 인덱스 색상표 만들기
이미지를 인덱스 모드로 바꿀 때, 가장 주된 작업은 이미지에 대한 인덱스 색상표를 만드는 것입니다. 이에 대한 자세한 설명은 [인덱스 모드](./16-06-06-indexed-mode.md)을 참고해주세요. 간단히 말하자면, 팔레트 대화상자에 있는 특정 팔레트를 이용하는 것입니다.

## 5. 정리
정리하자면, 일반적인 팔레트는 이미지를 인덱스 모드로 바꿀때 인덱스 색상표로 바꾸게 되며, 인덱스 색상표는 팔레트 대화상자에서 가져오기를 통해 일반적인 팔레트로 만들 수 있습니다.

(TODO 이미지를 인덱스 모드로 바꿔 인덱스 색상표 만들기 영상 추가)

(TODO 인덱스 색상표를 팔레트 대화상자에서 가져와서 일반 팔레트로 바꾸기 영상 추가)

***

## 다른 페이지로 가기
[➡️ 다음: 7.13. 프리셋](./07-13-presets.md)

[⬅️ 이전: 7.11. 무늬(Pattern)](./07-11-patterns.md)

[⬆️ 위: 7.12. 팔레트](./07-12-00-palettes.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-concepts-palettes.html#idm5092)