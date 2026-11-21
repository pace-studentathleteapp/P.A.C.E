P.A.C.E. - installable app (PWA)  -  GitHub Pages version
=========================================================

THE 4 FILES (all must sit in the MAIN folder of your GitHub repository, next to each other)
  index.html      the app
  manifest.json   app name, colours and the app icons (the icons are built into this file)
  sw.js           makes the app work offline - the browser only offers "Install" when this file loads
  install.html    a check page that tells you what is missing

HOW TO UPDATE GITHUB
  1. Unzip this folder on your computer.
  2. On your repository page click: Add file > Upload files.
  3. Select the 4 files (index.html, manifest.json, sw.js, install.html) and drag them in. Drag the FILES, not the folder.
  4. Click "Commit changes". Wait 1-2 minutes.
  5. On the repository's Code tab you must see all 4 files listed directly (not inside a folder).
     Old files such as icon-192.png, icon-512.png, manifest.webmanifest can stay or be deleted - they are no longer needed.

CHECK IT WORKS
  Open  https://YOUR-NAME.github.io/YOUR-REPO/install.html  in Chrome or Samsung Internet.
  Every line should show a green tick. A red cross names the file that is missing and where it should be.
  When everything is green, the install icon appears next to the address bar, and the big "Install app" button works.

INSTALL
  Chrome: install icon in the address bar, or menu (three dots) > "Install app" / "Add to Home screen".
  Samsung Internet: install icon in the address bar, or menu > "Add page to" > "Home screen".
  Delete the old app icon from your home screen first. If the option is still missing: clear this site's data in the
  browser settings, close the tab, open the link again and wait 10 seconds.

GOOD TO KNOW
  - Your events, tasks and recipes are stored on the device and web address you use; they are not synced.
  - Backups: Profile > Calendar sync & backup > "Back up all data" (restore on the new link).
  - To update the app later: replace index.html, change 'pace-v7' to 'pace-v8' in sw.js, and re-upload both.
