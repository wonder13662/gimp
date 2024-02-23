# 7.5.7. 경로와 SVG 파일
`SVG`는 "Scalable Vector Graphics"의 약자로 백터 그래픽 파일 포맷입니다. 벡터 그래픽 포맷은 픽셀의 배열로 표현되는 래스터 그래픽과 달리 해상도와 무관하게 표현되는 포맷입니다. GIMP(김프)는 래스터 그래픽 프로그램이지만, 경로는 벡터로 구현합니다.

다행히도 `SVG` 파일 안의 경로는 GIMP(김프)에서 표현하는 경로와 같은 방식입니다. 이런 호환성 덕분에 GIMP(김프)의 경로를 SVG 파일로 정보의 손실없이 저장할 수 있습니다. [경로 대화상자](./15-02-03-paths-dialog.md)의 `Export Path`는 작업한 경로를 `SVG`로 저장할 수 있고, `Import Path`는 `SVG` 파일에서 경로 정보를 가져올 수 있습니다.

#### [그림 90.4.5.a2210. 경로 대화상자의 오른쪽 클릭시 팝업 메뉴 - `경로 내보내기`, `경로 가져오기`](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EA%B7%B8%EB%A6%BC-9045a2210-%EA%B2%BD%EB%A1%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%98%A4%EB%A5%B8%EC%AA%BD-%ED%81%B4%EB%A6%AD%EC%8B%9C-%ED%8C%9D%EC%97%85-%EB%A9%94%EB%89%B4---%EA%B2%BD%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EA%B2%BD%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0)
[![90-04-05-paths-right_click_popup-focus-export_path-import_path](https://github.com/wonder13662/gimp/assets/15767104/ed9738ee-0adc-4a08-a67f-21a8d4fc1962)](https://wonder13662.github.io/gimp/2.10.36_ko/90-04-05-paths.html#%EA%B7%B8%EB%A6%BC-9045a2210-%EA%B2%BD%EB%A1%9C-%EB%8C%80%ED%99%94%EC%83%81%EC%9E%90%EC%9D%98-%EC%98%A4%EB%A5%B8%EC%AA%BD-%ED%81%B4%EB%A6%AD%EC%8B%9C-%ED%8C%9D%EC%97%85-%EB%A9%94%EB%89%B4---%EA%B2%BD%EB%A1%9C-%EB%82%B4%EB%B3%B4%EB%82%B4%EA%B8%B0-%EA%B2%BD%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0)

GIMP(김프)가 다른 프로그램(예:[잉크스케이프](https://inkscape.org/))에서 만든 SVG 파일에서 `경로(Path)`를 불러올 수 있다는 뜻입니다.
벡터 편집 프로그램들은 GIMP(김프)보다 경로를 잘 다룰수 있습니다. 위에서 말한 바와 같이 [경로 대화상자](./15-02-03-paths-dialog.md)를 통해 SVG 파일을 불러올 수 있습니다.

SVG 포맷은 `경로(Path)` 외에 사각형, 다각형, 원, 타원, 정다각형 등 다양한 모양을 다룹니다. 하지만 GIMP(김프)에서는 각 항목의 속성을 무시한 `경로(Path)`로만 불러올 수 있습니다.

***

## 다른 페이지로 가기
[➡️ 다음: 7.6. 붓](./07-06-brushes.md)

[⬅️ 이전: 7.5.6. 경로와 텍스트](./07-05-06-paths-and-text.md)

[⬆️ 위: 7.5. 경로](./07-05-00-paths.md)

[⬆️ 위: 7. GIMP(김프)로 그리기](./07-00-painting-with-gimp.md)

[🏠 홈](./00-home.md)

[원문](https://docs.gimp.org/2.10/ko/gimp-using-paths-and-svg.html)