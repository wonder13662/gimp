# 12.6. 초기 화면 변경하기(Customize splash-screen)
GIMP(김프)를 시작할 때, 스플래쉬 이미지가 모든 컴포넌트를 로딩하는 상태 메시지와 함께 보여집니다.

물론 이 스플래쉬 이미지도 바꿀 수 있습니다. GIMP(김프)의 사용자 폴더 안에 `splashes` 폴더를 만듭니다. 이 위치는 운영체제에 따라 다릅니다.

`splashes` 폴더에 이미지를 추가합니다. 이제 시작할 때마다, GIMP(김프)는 이 디렉토리에서 이미지 하나를 무작위로 골라 스플래쉬 이미지로 사용합니다.

## 1. Linux의 스플래시 이미지 폴더 위치
```
/home/user_name/.config/GIMP/2.10/
```

## 2. Max OSX의 스플래시 이미지 폴더 위치
```
/Users/user_name/Library/Application Support/GIMP/2.10/
```

아래 영상에서 랜덤으로 사용자가 추가한 스플래쉬 이미지가 로딩되는 것을 확인할 수 있습니다.

#### 그림 12.6.s2.a1. 스플래쉬 폴더 위치 (Mac) (우리말)
![12-06-02-a1(50%)](https://github.com/wonder13662/gimp/assets/15767104/2d3704c5-190c-40ba-8cf7-f492c0652d16)

#### 영상 12.6.s2.a1. 랜덤으로 로딩되는 스플래쉬 이미지 (Mac) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/ec8a8e65-160a-45d3-8a0b-f2bcc5d4c79a"></video>

## 3. Windows의 스플래시 이미지 폴더 위치
```
C:\Users\user_name\AppData\Roaming\GIMP\2.10\
```

아래 영상에서 랜덤으로 사용자가 추가한 스플래쉬 이미지가 로딩되는 것을 확인할 수 있습니다.

#### 그림 12.6.s3.a1. 스플래쉬 폴더 위치 (Windows) (우리말)
![12-06-03-a1](https://github.com/wonder13662/gimp/assets/15767104/f002a2fb-0b87-4f08-947f-e8aed5984d4a)

#### 영상 12.6.s3.a2. 랜덤으로 로딩되는 스플래쉬 이미지 (Windows) (우리말)
<video controls="controls" width="720" src="https://github.com/wonder13662/gimp/assets/15767104/84d813bf-22a8-4c08-a4fb-a3b85be5cb60"></video>

***

## 다른 페이지로 가기

[➡️ 다음: 13. Scripting](./13-00-scripting.md)

[⬅️ 이전: 12.5. 메뉴 단축키 설정하기(Creating shortcuts to menu commands)](./12-05-creating-shortcuts-to-menu-commands.md)

[⬆️ 위: 12. 나만의 GIMP(김프) 만들기](./12-00-enrich-my-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/customize-splashscreen.html)
