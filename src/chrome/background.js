chrome.runtime.onMessage.addListener(function (request) {
    if (request === "analyze") {
        console.log(request);
        chrome.tabs.create({ 'url': chrome.runtime.getURL("./build/index.html") });
    }
});

chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.create({ 'url': chrome.runtime.getURL("./build/index.html") });
});