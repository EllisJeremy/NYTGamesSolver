import wordleSolver from "./wordle/wordle";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "PING") {
    wordleSolver().then((res) => {
      sendResponse(res);
    });
    return true;
  }
});
