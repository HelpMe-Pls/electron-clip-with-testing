const { app, BrowserWindow, globalShortcut } = require('electron');

console.log('main process', process.type);

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		height: 600,
		width: 900,
		show: false,
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	const createClipping = globalShortcut.register('CommandOrControl+`', () => {
		mainWindow.webContents.send('create-new-clipping');
	});

	const writeClipping = globalShortcut.register('CmdOrCtrl+1', () => {
		mainWindow.webContents.send('write-to-clipboard');
	});

	if (!createClipping) {
		console.error('Registration failed', 'createClipping');
	}
	if (!writeClipping) {
		console.error('Registration failed', 'writeClipping');
	}
});
