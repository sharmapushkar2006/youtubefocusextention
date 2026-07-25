// popup window ka code
const focus=document.getElementById("focus");

const shorts=document.getElementById("shorts");

const recommendations=document.getElementById("recommendations");

const instagram=document.getElementById("instagram");

const reddit=document.getElementById("reddit");

chrome.storage.sync.get(null,data=>{

focus.checked=data.focusMode;

shorts.checked=data.blockShorts;

recommendations.checked=data.hideRecommendations;

instagram.checked=data.blockInstagram;

reddit.checked=data.blockReddit;

});

document.getElementById("save").onclick=()=>{

chrome.storage.sync.set({

focusMode:focus.checked,

blockShorts:shorts.checked,

hideRecommendations:recommendations.checked,

blockInstagram:instagram.checked,

blockReddit:reddit.checked

});

window.close();

};
