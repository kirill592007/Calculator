const {app, BrowserWindow} = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false,
        icon: path.join(__dirname, 'icon.png')
    })
    win.loadFile('src/index.html')
    win.setMenuBarVisibility(false)
    win.setTitle('Калькулятор')
}

app.whenReady().then(() => createWindow())
app.on('window-all-closed', () => app.quit())