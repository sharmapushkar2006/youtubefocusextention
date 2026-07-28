<p align="center>"<span style="font-size: 2em; font-weight: bold;">Youtube Focus Mode is an extention that helps people from jumping from one video to another by focing them to full screen view </span></p>

**Features**
*One-Click Activation*: Click the extension action icon to enable focus mode on the current video.  

*Fullscreen Lock*: Forces the video into full-screen mode upon starting.  

*Distraction Prevention*: If you exit full-screen before the video ends, the video automatically pauses. A persistent overlay will appear, prompting you to return to full-screen to continue watching.  

*Automatic Reset*: Once the video finishes playing, focus mode disables and automatically exits full-screen.  

**File Structure**

*To use this extension, ensure your project directory contains the following three files exactly as you created them:*

>><u>manifest.json</u>: Uses Manifest V3 and defines the extension's name, description, and required activeTab and scripting permissions. It also configures the background service worker and content scripts.  

>><u>background.js</u>: Listens for when the user clicks the extension icon and sends an enable_focus message to the active tab.  

>><u>content.js</u>: Injects into all web pages. It listens for the enable_focus message, targets the <video> element, manages the full-screen requests, and controls the focus mode overlays.  

**Installation Instructions**

>>Since this is a custom extension, you will need to load it into Chrome in "Developer mode."

>>Create a new folder on your computer named YoutubeFocusMode(Or any other name of your choice).

>>Save the provided code snippets into three separate files (manifest.json, background.js, and content.js) inside this folder.

>>Open the Google Chrome browser.

>>Type chrome://extensions/ into the URL address bar and press Enter.

>>In the top right corner of the Extensions page, toggle the switch to turn on Developer mode.

>>Click the Load unpacked button that appears in the top left corner.

>>Select the Video Focus Mode folder you created in Step 1.

>>The extension should now appear in your list of installed extensions.

**How to Use**
Navigate to any video on **youtube.com**.   

Click the Extension icon in your Chrome toolbar.

If no video element is detected on the page, an alert will pop up notifying you.  

If a video is found, a black overlay will appear with the text "Focus Mode Ready".  

Click the red Start Video button. The video will request full-screen access and begin playing.  


If you try to press Esc or exit full-screen before the video is over, the video will pause and a red "Focus Mode Active" screen will block your view.  


Click the blue Return to Full Screen button to resume playback.  
JS
