//adds my chrome to context menu
chrome.contextMenus.create({
    "title": "Look up and save!",
    "id": "save_me",
    "contexts": ["all"]
});

//sends out message "SaveMe" when my extension is clicked in context menu
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "save_me") {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {"message": "save_me"});
        });
    }
});

chrome.browserAction.setPopup({
  popup: "popup.html"
})
