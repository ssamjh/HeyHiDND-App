const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      partition: 'persist:heyhidnd'
    },
  });

  win.loadURL("https://heyhidnd.com");

  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);
