// ./main.js
const {app, BrowserWindow} = require('electron')

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({
    width: 1000, 
    height: 600,
    webPreferences: {webSecurity: false}
  });

  // Specify entry point
  win.loadURL('http://localhost:4200');
  //win.loadURL(`file://${__dirname}/dist/index.html`);

  // Show dev tools
  // Remove this line before distributing
  //win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

  //Quitar menu por Default
  win.setMenu(null);

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});