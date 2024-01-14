const fs = require('node:fs/promises');

let title = '20.4. Conclusion'

// NOTE: 배열에 포함된 파일 이름을 지정된 경로의 파일로 만듭니다.
// const files 

const path = __dirname + '/../../2023-en'
const files = [
  [
    '12-01-11-theme.md', 
    '12.1.11. Theme'
  ],
  [
    '12-01-12-icon-theme.md', 
    '12.1.12. Icon Theme'
  ],
  [
    '12-01-13-toolbox.md', 
    '12.1.13. Toolbox'
  ],
  [
    '12-01-14-dialog-defaults.md', 
    '12.1.14. Dialog Defaults'
  ],
  [
    '12-01-15-help-system.md', 
    '12.1.15. Help System'
  ],
  [
    '12-01-16-display.md', 
    '12.1.16. Display'
  ],
  [
    '12-01-17-window-management.md', 
    '12.1.17. Window Management'
  ],
  [
    '12-01-18-image-window.md', 
    '12.1.18. Image Window'
  ],
  [
    '12-01-19-image-window-appearance.md', 
    '12.1.19. Image Window Appearance'
  ],
  [
    '12-01-20-image-window-title-and-statusbar.md', 
    '12.1.20. Image Window Title and Statusbar'
  ],
  [
    '12-01-21-image-window-snapping-behavior.md', 
    '12.1.21. Image Window Snapping Behavior'
  ],
  [
    '12-01-22-input-devices.md', 
    '12.1.22. Input Devices'
  ],
  [
    '12-01-23-input-controllers.md', 
    '12.1.23. Input Controllers'
  ],
  [
    '12-01-24-folders.md', 
    '12.1.24. Folders'
  ],
  [
    '12-01-25-data-folders.md', 
    '12.1.25. DataFolders'
  ],   
]

const doAsyncJob = async () => {
  for (let idx = 0; idx < files.length; idx++) {
    const fileName = files[idx][0]
    try {
      await fs.writeFile(`${path}/${fileName}`, '');
    } catch (err) {
      console.error(err);
    }
  }
}
doAsyncJob()
