import wordleSolver from "./wordle/wordle";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "PING") {
    wordleSolver().then((count) => {
      sendResponse({ count });
    });
    return true;
  }
});
