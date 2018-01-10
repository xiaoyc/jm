
chrome.browserAction.onClicked.addListener(function (tab) {

    var w = 800;
    var h = 600;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);

  //  chrome.windows.create({ 'url': 'popup.html', 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top }, function (window) {

        chrome.tabs.query({}, function (tabs) {
            console.log(tabs.length);
            tabs.forEach(function (tab) {
                chrome.tabs.sendMessage(tab.id, {
                  
                    type: "openModal"
                }, function (response) {
                    // alert(response.status);
                });
            }, this);
        });

  //  });



});