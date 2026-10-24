const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
if (!app.requestSingleInstanceLock()) app.quit();
let win, closing = false;
function create() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 1280, height: 800, minWidth: 640, minHeight: 420,
    backgroundColor: '#1c2629', title: 'Aymen Schoolboard',
    icon: path.join(__dirname, '../../public/icon.png'), autoHideMenuBar: true,
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, backgroundThrottling: false }
  });
  win.maximize();
  win.loadFile(path.join(__dirname, '../../dist/index.html'));
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
  win.on('close', async (e) => {            // save the board before closing
    if (closing) return;
    e.preventDefault(); closing = true;
    try { await win.webContents.executeJavaScript('window.sbFlush ? sbFlush() : 0'); } catch (err) {}
    win.destroy();
  });
}
ipcMain.handle('sb-fullscreen', () => { if (win) win.setFullScreen(!win.isFullScreen()); });
app.whenReady().then(create);
app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
app.on('window-all-closed', () => app.quit());
