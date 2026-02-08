console.log("content script injected");

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "PING") {
    console.log("PING received from popup");
  }
});
