const { create } = require('domain')
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    //load the react app here, use loadURL instead of loadFile
    mainWindow.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
    createWindow()
    //Re-create windows in the app when the dock icon is clicked
    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

//Quit when all windows are closed
app.on('window-all-closed', function () {
    if (process.platform != 'darwin') app.quit()
})