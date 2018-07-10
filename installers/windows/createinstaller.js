const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'sincro-file-desk-win32-ia32/'),
    authors: 'Jose Luis Gomez',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'electron-mario-app.exe',
    setupExe: 'ElectronTutorialAppInstaller.exe',
    iconUrl: 'src/assets/images/icons.ico',
    //setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'icon.ico')
  })
}