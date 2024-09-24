# 19. 용어집 - 클립보드(Clipboard)

## 1. 정의
`클립보드(Clipboard)`는 어플리케이션과 [이미지](./19-glossaryx-image.md) 사이에 데이터를 주고 받는데 사용되는 임시 메모리 공간입니다.

GIMP(김프)에서는 [잘라내기(Cut)](./16-03-05-00-cut.md), [복사하기(Copy)](./16-03-06-00-copy.md), [붙여넣기(Paste)](./16-03-08-00-paste.md)를 할 때 사용합니다.

## 2. 운영체제별 차이점
`클립보드(Clipboard)`는 운영체제마다 조금씩 다르게 구현되어 있습니다.

### 2-1. Linux/XFree
`Linux/XFree`에서 GIMP(김프)는 텍스트를 저장하는 클립보드는 `XFree clipboard`를 사용합니다.

반면, 이미지를 저장하는 클립보드는 GIMP(김프)의 내부 이미지 클립보드를 사용합니다.

### 2-2. 그 외의 다른 운영체제들
다른 운영체제들은 조금씩 다르게 동작합니다.

이에 대한 내용은 추후 추가될 예정입니다.

<a comment="TODO 내용 추가 필요"></a>

## 3. 클립보드를 사용하는 명령들
[잘라내기(Cut)](./16-03-05-00-cut.md), [복사하기(Copy)](./16-03-06-00-copy.md), [붙여넣기(Paste)](./16-03-08-00-paste.md) 명령들이 클립보드를 사용합니다.

### 3-1. 잘라내기(Cut)
[잘라내기(Cut)](./16-03-05-00-cut.md)는 [이미지](./19-glossaryx-image.md)에서 대상을 제거해서 `클립보드(Clipboard)`에 저장합니다.

### 3-2. 복사하기(Copy)
[복사하기(Copy)](./16-03-06-00-copy.md)는 [이미지](./19-glossaryx-image.md)의 대상은 그대로 두고 `클립보드(Clipboard)`에 저장합니다.

### 3-3. 붙여넣기(Paste)
[붙여넣기(Paste)](./16-03-08-00-paste.md)는 `클립보드(Clipboard)`에 저장한 내용을 [이미지](./19-glossaryx-image.md)에 붙여 넣습니다.

## 4. 대상에 따라 사용하는 클립보드의 종료가 달라집니다
GIMP(김프)는 대상에 따라 사용하는 클립보드의 종료가 달라집니다

대상이 [캔버스](./19-glossaryx-canvas.md)라면, [붙여넣기(Paste)](./16-03-08-00-paste.md) 명령은 이미지 클립보드를 사용합니다.

대상이 [텍스트 박스](./09-01-01-text_area.md)라면, [붙여넣기(Paste)](./16-03-08-00-paste.md) 명령은 텍스트 클립보드를 사용합니다.

***

## 관련 정보

[원문](https://docs.gimp.org/2.10/ko/glossary.html#glossary-clipboard)

[15.3.4.4. 클립보드 무늬(The Clipboard pattern)](./15-03-04-04-the_clipboard_pattern.md)

[16.2.3.2. 클립보드에서 새 이미지 만들기(From Clipboard)](./16-02-03-02-from_clipboard.md)

[16.3.5. 잘라내기(Cut)](./16-03-05-00-cut.md)

[16.3.6. 복사(Copy)](./16-03-06-00-copy.md)

[16.3.8. 붙여넣기(Paste)](./16-03-08-00-paste.md)