let focusModeEnabled = false;
let currentVideo = null;
let overlay = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "enable_focus") {
        const video = document.querySelector('video');
        if (video) {
            currentVideo = video;
            createOverlay(true);
        } else {
            alert("No video element found on this page.");
        }
    }
});

function createOverlay(isStarting) {
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        overlay.style.color = 'white';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '2147483647'; 
        overlay.style.fontFamily = 'Arial, sans-serif';
        document.body.appendChild(overlay);
    }
    
    overlay.style.display = 'flex';
    
    if (isStarting) {
        overlay.innerHTML = `
            <h2 style="margin-bottom: 10px; font-size: 32px;">Focus Mode Ready</h2>
            <p style="margin-bottom: 30px; font-size: 18px;">Once started, you cannot exit full-screen until the video finishes.</p>
            <button id="focus-btn" style="padding: 15px 40px; font-size: 20px; cursor: pointer; border: none; border-radius: 8px; background: #E50914; color: white; font-weight: bold;">Start Video</button>
        `;
    } else {
        overlay.innerHTML = `
            <h2 style="margin-bottom: 10px; font-size: 32px; color: #ff4444;">Focus Mode Active</h2>
            <p style="margin-bottom: 30px; font-size: 18px;">The video hasn't finished yet. You are required to watch it in full-screen.</p>
            <button id="focus-btn" style="padding: 15px 40px; font-size: 20px; cursor: pointer; border: none; border-radius: 8px; background: #0078D7; color: white; font-weight: bold;">Return to Full Screen</button>
        `;
    }

    document.getElementById('focus-btn').addEventListener('click', () => {
        if (currentVideo) {
            currentVideo.requestFullscreen().then(() => {
                focusModeEnabled = true;
                overlay.style.display = 'none';
                currentVideo.play(); 
            }).catch(err => {
                console.error("Fullscreen blocked:", err);
                alert("Please allow full-screen permissions in your browser.");
            });
        }
    });
}

document.addEventListener('fullscreenchange', () => {
    if (!focusModeEnabled || !currentVideo) return;

    if (!document.fullscreenElement) {
        if (!currentVideo.ended) {
            currentVideo.pause(); 
            createOverlay(false); 
        } else {
            focusModeEnabled = false;
        }
    }
});


document.addEventListener('play', () => {
    if (currentVideo) {
       currentVideo.addEventListener('ended', () => {
           if (focusModeEnabled) {
               focusModeEnabled = false;
               if (document.fullscreenElement) {
                   document.exitFullscreen().catch(e => console.log(e));
               }
           }
       }, {once: true});
    }
}, true);
