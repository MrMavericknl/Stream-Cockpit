const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const os = require('os');
const fs = require('fs');

let mainWindow;
let obsDeckWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    backgroundColor: '#0e0e10',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      webSecurity: false
    },
    icon: path.join(__dirname, 'stream-cockpit.ico'),
    title: 'Stream Cockpit'
  });

  mainWindow.loadFile('index.html');
  mainWindow.setMenuBarVisibility(false);
}

function createObsDeck() {
  if (obsDeckWindow && !obsDeckWindow.isDestroyed()) {
    obsDeckWindow.focus();
    obsDeckWindow.setAlwaysOnTop(true, 'floating');
    return;
  }

  // Position next to the main window
  const [mx, my] = mainWindow.getPosition();
  const [mw, mh] = mainWindow.getSize();

  obsDeckWindow = new BrowserWindow({
    width: 480,
    height: 700,
    minWidth: 420,
    minHeight: 500,
    x: mx + 20,
    y: my + 20,
    frame: false,
    backgroundColor: '#08080a',
    alwaysOnTop: true,
    resizable: true,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    },
    title: 'OBS Deck — Stream Cockpit'
  });
  obsDeckWindow.loadFile('obs-deck.html');
  obsDeckWindow.setMenuBarVisibility(false);
  obsDeckWindow.setAlwaysOnTop(true, 'floating');
  obsDeckWindow.focus();
  obsDeckWindow.on('closed', () => { obsDeckWindow = null; });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// OBS Deck window
ipcMain.on('open-obs-deck', () => createObsDeck());
ipcMain.on('close-obs-deck', () => { if (obsDeckWindow && !obsDeckWindow.isDestroyed()) obsDeckWindow.close(); });

// ── LAUNCH APP ──
ipcMain.on('launch-app', (event, appPath) => {
  try {
    let resolved = appPath
      .replace(/%USERNAME%/gi, os.userInfo().username)
      .replace(/%APPDATA%/gi, process.env.APPDATA || '')
      .replace(/%LOCALAPPDATA%/gi, process.env.LOCALAPPDATA || '');

    // Microsoft Store / URI protocol: use explorer.exe to open
    // Supported formats:
    //   shell:AppsFolder\SpotifyAB.SpotifyMusic_zpdnekdrzrea0!Spotify
    //   spotify:
    //   ms-windows-store://...
    const isStoreOrUri = (
      /^shell:/i.test(resolved) ||
      /^spotify:/i.test(resolved) ||
      /^ms-/i.test(resolved) ||
      /^[a-z][a-z0-9+\-.]+:\/\//i.test(resolved)
    );

    if (isStoreOrUri) {
      spawn('explorer.exe', [resolved], { detached: true, stdio: 'ignore' }).unref();
      event.reply('launch-result', { success: true });
      return;
    }

    // Normal .exe — split path from arguments
    let exePath = resolved;
    let args = [];
    const exeMatch = resolved.match(/^(.*?\.exe)(.*)?$/i);
    if (exeMatch) {
      exePath = exeMatch[1].trim();
      const argStr = (exeMatch[2] || '').trim();
      args = argStr ? argStr.split(/\s+/) : [];
    }

    // If path is a directory, look for known exe inside
    if (fs.existsSync(exePath) && fs.statSync(exePath).isDirectory()) {
      const exeNames = ['obs64.exe', 'obs32.exe', 'obs.exe'];
      let found = null;
      for (const exe of exeNames) {
        const candidate = path.join(exePath, exe);
        if (fs.existsSync(candidate)) { found = candidate; break; }
      }
      if (found) {
        exePath = found;
      } else {
        event.reply('launch-result', { success: false, error: 'Geen .exe gevonden in map: ' + exePath });
        return;
      }
    }

    if (!fs.existsSync(exePath)) {
      event.reply('launch-result', { success: false, error: 'Bestand niet gevonden:\n' + exePath });
      return;
    }

    spawn(exePath, args, { detached: true, stdio: 'ignore', cwd: path.dirname(exePath) }).unref();
    event.reply('launch-result', { success: true });

  } catch (err) {
    event.reply('launch-result', { success: false, error: err.message });
  }
});

// Window controls
ipcMain.on('minimize-window', () => mainWindow.minimize());
ipcMain.on('maximize-window', () => {
  if (mainWindow.isMaximized()) mainWindow.unmaximize();
  else mainWindow.maximize();
});
ipcMain.on('close-window', () => mainWindow.close());
