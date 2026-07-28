<p align="center">
  <span style="font-size: 2em; font-weight: bold;">YouTube Focus Mode</span><br>
  <span>An extension that stops you from jumping from one video to another by forcing a focused, full-screen view.</span>
</p>

---

## Features

* **One-Click Activation:** Click the extension action icon to enable focus mode on the current video.
* **Fullscreen Lock:** Forces the video into full-screen mode immediately upon starting.
* **Distraction Prevention:** If you attempt to exit full-screen before the video ends, playback automatically pauses and a persistent overlay blocks the screen, prompting you to return to full-screen.
* **Automatic Reset:** Once the video finishes playing, focus mode disables and automatically exits full-screen mode.

---

## File Structure

To use this extension, ensure your project directory contains the following three files:

* `manifest.json`: Uses Manifest V3 and defines the extension's name, description, and required `activeTab` and `scripting` permissions. It also configures the background service worker and content scripts.
* `background.js`: Listens for when you click the extension icon and sends an `enable_focus` message to the active tab.
* `content.js`: Injects into all web pages to target the `<video>` element, manage full-screen requests, and control the focus mode overlays.

---

## Installation Instructions

Since this is a custom extension, you will need to load it into Chrome using **Developer Mode**:

1. Create a new folder on your computer named `YouTubeFocusMode` (or any name of your choice).
2. Save the three required files (`manifest.json`, `background.js`, and `content.js`) inside this folder.
3. Open Google Chrome.
4. Navigate to `chrome://extensions/` in your address bar and press **Enter**.
5. In the top right corner, toggle on **Developer mode**.
6. Click the **Load unpacked** button in the top left corner.
7. Select the folder you created in **Step 1**.
8. The extension will now appear in your list of installed Chrome extensions.

---

## How to Use

1. Navigate to any video on [youtube.com](https://www.youtube.com).
2. Click the **Extension icon** in your Chrome toolbar.
3. If no video element is detected on the page, an alert will pop up notifying you.
4. If a video is found, a dark overlay will appear displaying **"Focus Mode Ready"**.
5. Click the red **Start Video** button. The video will enter full-screen mode and begin playing.
6. If you press `Esc` or exit full-screen before the video finishes, playback will pause and a red **"Focus Mode Active"** screen will block your view.
7. Click the blue **Return to Full Screen** button to resume playback.
