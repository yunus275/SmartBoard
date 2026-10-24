const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('sbNative', { toggleFullscreen: () => ipcRenderer.invoke('sb-fullscreen') });
