const fs = require('node:fs/promises');

// 1. 새로 만들 페이지 목록 정의
const pageFileNameTemplate = '90-01-10-windowsx-02-dockable_dialogsx-${page_no_two_digits}-${page_name_in_file}.md'
const pages = [
  {
    page_file_name: 'tool_options',
    page_name_ko: '도구 옵션',
    page_name_en: 'Tool Options',
  },
  {
    page_file_name: 'device_status',
    page_name_ko: '장치 상태',
    page_name_en: 'Device Status',
  },
  {
    page_file_name: 'layers',
    page_name_ko: '레이어',
    page_name_en: 'Layers',
  },
  {
    page_file_name: 'channels',
    page_name_ko: '채널',
    page_name_en: 'Channels',
  },
  {
    page_file_name: 'paths',
    page_name_ko: '경로',
    page_name_en: 'Paths',
  },
  {
    page_file_name: 'colormap',
    page_name_ko: '색상표',
    page_name_en: 'Colormap',
  },
  {
    page_file_name: 'histogram',
    page_name_ko: '히스토그램',
    page_name_en: 'Histogram',
  },
  {
    page_file_name: 'selection_editor',
    page_name_ko: '선택 영역 편집기',
    page_name_en: 'Selection editor',
  },
  {
    page_file_name: 'navigation',
    page_name_ko: '내비게이션',
    page_name_en: 'Navigation',
  },
  {
    page_file_name: 'undo_history',
    page_name_ko: '실행취소 이력',
    page_name_en: 'Undo History',
  },
  {
    page_file_name: 'pointer',
    page_name_ko: '포인터',
    page_name_en: 'Pointer',
  },
  {
    page_file_name: 'sample_points',
    page_name_ko: '표본점',
    page_name_en: 'Sample Points',
  },
  {
    page_file_name: 'symmetry_painting',
    page_name_ko: '대칭 페인팅',
    page_name_en: 'Symmetry Painting',
  },
  {
    page_file_name: 'colors',
    page_name_ko: '색',
    page_name_en: 'Colors',
  },
  {
    page_file_name: 'brushes',
    page_name_ko: '붓',
    page_name_en: 'Brushes',
  },
  {
    page_file_name: 'paint_dynamics',
    page_name_ko: '페인트 동적 요소',
    page_name_en: 'Paint Dynamics',
  },
  {
    page_file_name: 'mypaint_brushes',
    page_name_ko: '마이페인트 붓',
    page_name_en: 'Mypaint Brushes',
  },
  {
    page_file_name: 'patterns',
    page_name_ko: '무늬',
    page_name_en: 'Patterns',
  },
  {
    page_file_name: 'gradients',
    page_name_ko: '그라디언트',
    page_name_en: 'Gradients',
  },
  {
    page_file_name: 'palettes',
    page_name_ko: '팔레트',
    page_name_en: 'Palettes',
  },
  {
    page_file_name: 'fonts',
    page_name_ko: '글꼴',
    page_name_en: 'Fonts',
  },
  {
    page_file_name: 'tool_preset',
    page_name_ko: '도구 프리셋',
    page_name_en: 'Tool Preset',
  },
  {
    page_file_name: 'buffers',
    page_name_ko: '버퍼',
    page_name_en: 'Buffers',
  },
  {
    page_file_name: 'images',
    page_name_ko: '이미지',
    page_name_en: 'Images',
  },
  {
    page_file_name: 'document_history',
    page_name_ko: '문서 이력',
    page_name_en: 'Document History',
  },
  {
    page_file_name: 'templates',
    page_name_ko: '양식',
    page_name_en: 'Templates',
  },
  {
    page_file_name: 'error_console',
    page_name_ko: '오류콘솔',
    page_name_en: 'Error Console',
  },
  {
    page_file_name: 'dashboard',
    page_name_ko: '상황판',
    page_name_en: 'Dashboard',
  },  
]

const getPageNo = (idx) => `90.1.10.2.${idx + 1}.`
const getPageNo2Digits = (idx) => `${idx + 1}`.padStart(2, '0')
const getPageFileName = (idx) => idx > -1 ? pageFileNameTemplate.replace('${page_no_two_digits}', getPageNo2Digits(idx)).replace('${page_name_in_file}', pages[idx].page_file_name) : ''
const getPageFullName = (idx) => `${getPageNo(idx)} ${pages[idx].page_name_ko}(${pages[idx].page_name_en})`

const doAsyncJob = async () => {
  // 2. 샘플 페이지 정보 읽어오기
  const path = __dirname + '/output'

  try {
    // 2-1. 샘플 페이지 파일 정보 읽어오기
    let data = await fs.readFile('./page_template.md', 'utf8')
    
    // 2-2. 목록 아이템 별 페이지 작성하기
    for (let idx = 0; idx < pages.length; idx++) {
      // 2-2-1. 파일 이름 만들기
      const pageFileName = getPageFileName(idx)

      // 2-2-2. 파일 내용 바꾸기
      let content = data.replaceAll('${page_no}', getPageNo(idx)).replaceAll('${page_name_ko}', pages[idx].page_name_ko).replaceAll('${page_name_en}', pages[idx].page_name_en)

      // 2-2-3. 이전 페이지 추가하기
      const hasPrev = idx > 0
      const prevIdx = idx - 1
      // (예시) page_name_prev: 90.1.10.2.1. 도구 옵션
      const page_name_prev = hasPrev ? getPageFullName(prevIdx) : ''
      content = content.replace('${page_name_prev}', page_name_prev)
      // (예시) page_prev: ./90-01-10-windowsx-02-dockable_dialogsx-01-tool_options.md
      const page_prev = hasPrev ? `./${getPageFileName(prevIdx)}` : ''
      content = content.replace('${page_prev}', page_prev)

      // 2-2-4. 다음 페이지 추가하기
      const hasNext = idx < pages.length - 1
      const nextIdx = idx + 1
      // (예시) page_name_next: 90.1.10.2.3. 레이어
      const page_name_next = hasNext ? getPageFullName(nextIdx) : ''
      content = content.replace('${page_name_next}', page_name_next)
      // (예시) page_next: ./90-01-10-windowsx-02-dockable_dialogsx-03-layers.md
      const page_next = hasNext ? `./${getPageFileName(nextIdx)}` : ''
      content = content.replace('${page_next}', page_next)

      // 2-2-5. 새로운 페이지 파일 추가하기
      const targetPath = pageFileName
      await fs.writeFile(targetPath, content);
    }    

  } catch (err) {
    console.error(err);
  }
}
doAsyncJob()

