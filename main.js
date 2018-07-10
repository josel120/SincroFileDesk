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



resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

 //handle setupevents as quickly as possible
 const setupEvents = require('./installers/setupEvents')
 if (setupEvents.handleSquirrelEvent()) {
    // squirrel event handled and app will exit in 1000ms, so don't do anything else
    return;
 }

// lo puse alfinal
const electron = require('electron')
// Module to control application life.
const app = electron.app
const {ipcMain} = require('electron')
var path = require('path')