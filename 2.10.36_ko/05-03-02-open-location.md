# 5.3.2. 위치 열기(Open Location)

<a id="05-03-02-s1"></a>

## 1. `위치 열기` 대화상자 열기

파일 이름 대신 이미지의 URI(예시: 웹 주소)를 알고 있다면, 이미지 메뉴 바의 `파일` → `위치 열기`를 이용해 이미지를 열 수 있습니다. 

<a id="90-01-01-05-a101"></a>

#### [그림 90.1.1.5.a101. `이미지 메뉴 바` → `파일` → `위치 열기`](./90-01-01-05-open_location.md#90-01-01-05-a101)
<img width="980" height="605" alt="90-01-01-05-a101" src="https://github.com/user-attachments/assets/ae9dfbb7-cd78-42d5-b5cf-a25c482caf2c" />

이 메뉴를 선택하면 URI를 입력할 수 있는 작은 대화 상자가 뜹니다. 

<a id="90-04-41-a101"></a>

#### [그림 90.4.41.a101. `위치 열기` 대화상자 (Windows) (우리말)](./90-04-0041-open_location.md#90-04-41-a101)
<img width="458" height="154" alt="90-04-41-a101" src="https://github.com/wonder13662/gimp/assets/15767104/606fa2a9-9f74-4bb8-a475-2e78623584ee" />

[다른 운영체제와 언어의 `위치 열기` 대화상자 확인하기](./90-04-0041-open_location.md#90-04-41-a102)

<a id="05-03-02-s2"></a>

## 2. `위치 열기` 대화상자 사용하기

이 대화상자의 입력창에 이미지의 URI 주소를 입력하고 Open 버튼을 누르면 원격에 있는 이미지를 GIMP(김프)로 불러올 수 있습니다. 아래 영상에서 전체 과정을 확인해보세요.

<a id="90-04-41-a105"></a>

#### [영상 90.4.41.a105. `위치 열기` 대화상자에서 이미지 로딩 성공 (Windows) (우리말)](./90-04-0041-open_location.md#90-04-41-a105)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/c870f3e0-9c7e-49ee-959e-9362f900a663"></video>

<br/>
⚠️ 주의: Mac에서는 위치 열기 기능이 제대로 동작하지 않습니다. 아래 영상을 확인해보세요.

<a id="90-04-41-a106"></a>

#### [영상 90.4.41.a106. `위치 열기` 대화상자에서 이미지 로딩 실패 (Mac) (우리말)](./90-04-0041-open_location.md#90-04-41-a106)
<video controls="controls" width="640" height="360" src="https://github.com/wonder13662/gimp/assets/15767104/34240b4a-ac31-4302-91f9-35e0b1ab5e18"></video>

<a id="05-03-02-s3"></a>

## 3. `위치 열기` 대화상자에서 사용가능한 URI 형식(Scheme)
이미지를 가져오기 위해 사용하는 URI 형식(Scheme)은 아래와 같습니다.

### 3-1. `file://`
이미지를 사용자의 컴퓨터의 저장장치에서 가져옵니다.

URI에서 접두사(Prefix) `file://`을 빼고 이미지 파일의 절대 경로 혹은 상대경로를 넣어도 됩니다.

상대 경로는 운영체제에 따라 아래처럼 달라집니다.

|운영체제|상대 경로|
|---|---|
|Linux|/home/<username>/|
|Windows|C:\Documents 또는 Settings\<username>\My Documents\My Images\|
|Mac|/Users/<username>/|

### 3-2. `ftp://`
이미지를 ftp 서버에서 가져옵니다.

### 3-3. `http://`
이미지를 웹 사이트에서 가져옵니다.

***

## 관련 정보

[16.2.6. 위치 열기(Open Location)](./16-02-06-00-open-location.md)

***

## 다른 페이지로 가기

[➡️ 다음: 5.3.3. 최근 연 파일](./05-03-03-open-recent.md)

[⬅️ 이전: 5.3.1.2. 포스트스크립트(PostScript) 불러오기](./05-03-01-02-import_from_postscript.md)

[⬆️ 위: 5.3. 파열 열기](./05-03-00-opening-files.md)

[⬆️ 위: 5. GIMP(김프)로 이미지 불러오기](./05-00-getting-images-into-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-open-location.html)

