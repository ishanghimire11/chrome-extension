chrome.runtime.onInstalled.addListener(() => {
    console.log("first");
  });

  chrome.bookmarks.onCreated.addListener(() => {
    console.log("bookmark created");
  });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.domDetails) {
      console.log("Received DOM details:", request.domDetails);
      sendResponse({ farewell: "Closing the port" });
    }
  }
);
