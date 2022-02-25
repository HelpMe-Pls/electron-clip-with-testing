# Electron Clip

Inspired by the instructions from [this course](https://frontendmasters.com/courses/electron-v2/)

## Usage
This project has its built version as a desktop app (only available on Windows, for now), which you can download and extract the [source code](https://github.com/HelpMe-Pls/electron-clip-with-testing/releases/tag/v1.0.0) then find the executable app in folder `electron-clip-with-testing-1.0.0/build/Electron Clip-win32-x64/Electron Clip.exe`.

The project functionality is to read from and write to the system's [clipboard](https://docs.microsoft.com/en-us/windows/win32/dataxchg/about-the-clipboard)

The project also serves as a server to log crash reports from [electron_markdown](https://github.com/HelpMe-Pls/electron_markdown#readme). 
## Installation

If you want to run the project in **dev mode**, make sure to have the same environment as I do to get it working properly. Please download and install these 2 softwares if you don't have them already:
1.  **nvm-setup.zip** from its [latest release](https://github.com/coreybutler/nvm-windows/releases)
2.  [Git](https://git-scm.com/downloads)

Then open up your terminal with Admin privilege and run:
1. `nvm install 14.15.0` 
2. `nvm use 14.15.0` 
3. `node -v` (the output should be `v14.15.0`)
4. Pick a folder of your choice *or* create an empty folder and then `cd path-to-that-folder`
5. `git clone https://github.com/HelpMe-Pls/electron-clip-with-testing.git`
6. `cd electron-clip-with-testing`
7. `npm i`
8. `npm start`
9. If you want to run the tests (which you can find in `test\spec.js`), hit `Ctrl+C` then `npm run test`
10. If you want to run this project as a server, you'll have to run the [electron_markdown](https://github.com/HelpMe-Pls/electron_markdown#readme) first, then from the same terminal that you've been using for **this** project, hit `Ctrl+C`, then `npm run report`
11. Within the running instance of Markdown Utils, hit `Ctrl+Shift+I` then switch to the **Console** tab from the Devtools, type in `process.crash()`
12. Then switch back to this project's folder, you should see your crash report in the `crashes` folder.
