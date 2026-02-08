import wordleSolver from "./wordle/wordle";

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "PING") {
    console.log("PING received from popup");
    wordleSolver();
  }
});
