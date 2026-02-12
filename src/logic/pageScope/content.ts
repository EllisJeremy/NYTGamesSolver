import wordleSolver from "./wordle/wordle";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "PING") {
    console.log("ping");
    wordleSolver().then((res) => {
      console.log(res);
      sendResponse(res);
    });
    return true;
  }
});
