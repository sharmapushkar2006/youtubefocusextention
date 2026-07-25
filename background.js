chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.sync.set({

        focusMode:true,

        blockShorts:true,

        hideRecommendations:true,

        blockInstagram:false,

        blockReddit:false

    });

});
