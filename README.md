<p align="center">
   <span style="font-size: 2em; font-weight: bold;">YouTube Focus Mode</span>
</p>

Video Focus Mode is a small Chrome/Chromium extension (Manifest V3) that helps you concentrate by forcing a video to play in fullscreen until it finishes. When enabled, the extension shows a full-page overlay and prevents leaving fullscreen until the current video ends.

## Features
- Enable focus mode for the current page via the toolbar button.
- Fullscreen enforcement: prevents leaving fullscreen until the video ends.
- Minimal and dependency-free: plain JavaScript using the Chrome extension and DOM APIs.

## Quick install (developer / local)
To try the extension locally:
1. Fork this repository on GitHub (optional but recommended).
2. Clone your fork or the original repo:
   - git clone https://github.com/<your-username>/youtubefocusextention.git
   - cd youtubefocusextention
3. Open Chrome (or another Chromium-based browser) and navigate to chrome://extensions
4. Enable "Developer mode"
5. Click "Load unpacked" and select the repository folder (the folder that contains `manifest.json`)

No build step is required — the files run directly as a content script and a service worker.

## Usage
1. Open a webpage that contains a `<video>` element (for example, a YouTube video page).
2. Click the extension toolbar button (in the browser toolbar) to enable Focus Mode for that tab.
3. Follow the overlay instructions to enter fullscreen and start watching.
4. The extension prevents leaving fullscreen until the selected video ends. If no `<video>` element is found, an in-page message will be shown.

## Files of interest
- `manifest.json` — extension manifest (Manifest V3): permissions, content scripts and background service worker.
- `background.js` — service worker: listens for toolbar clicks and sends messages to the content script.
- `content.js` — content script: creates the overlay, requests fullscreen, and enforces playback until the video ends.

## Permissions
Current manifest requests:
- `activeTab` — interact with the active tab when the toolbar button is clicked.
- `scripting` — used for script injection if future features require it.

Tip: avoid broad host matches like `"<all_urls>"` when possible. Prefer a whitelist of origins or make host scope configurable.

## Development notes
- The content script currently selects the first `video` element; that can be improved (e.g., prefer the currently playing video or the element under the pointer).
- UI strings are inline in `content.js`. Consider extracting strings for localization if adding languages.
- The background script currently swallows some errors — improve logging and promise handling when sending messages.

## Contributing
Thanks for contributing! Please follow these steps:

1. Open an issue first for non-trivial changes to discuss design and scope.
2. Create a branch from your fork:
   - git checkout -b <your-branch-name>
3. Make small, focused commits with clear messages.
4. Load the extension locally (see Quick install) and verify behavior.
5. Push your branch and open a pull request against the upstream repository.

Suggested commit/PR workflow:
- git add .
- git commit -m "Short, descriptive message"
- git push origin <your-branch-name>
- Open a Pull Request on GitHub describing what you changed and why.

PR checklist (recommended)
- [ ] The change is explained and motivated in the PR description.
- [ ] Code is formatted and readable.
- [ ] No unnecessary permissions were added to `manifest.json`.
- [ ] If the UI changed, include screenshots or a short GIF.
- [ ] If behavior changed, document it in README.

## Suggested repository layout for new files
- README.md
- manifest.json
- background.js
- content.js
- icons/
  - 16.png, 48.png, 128.png
- options/
  - options.html
  - options.js
  - options.css
- .github/workflows/
  - lint.yml (optional CI for linting)

## License
Please add a LICENSE file to indicate the project's license (MIT is a common choice for small extensions).

## Contact
If you'd like me to draft a PR (for example: this README, replacing `alert()`, or an options page), tell me which item and I can prepare the changes ready for you to paste or commit.
