chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url: 'https://www.linuxdays.cz/2017/'});
});
