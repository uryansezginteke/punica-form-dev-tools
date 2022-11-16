function handleMessages(params) {
  if (params && params.data) {
    chrome.runtime.sendMessage(
      "kcbllgafbfkcelbgoaamdohjiglcjckk",
      JSON.stringify(params.data)
    );
  }
}

window.addEventListener("message", handleMessages, false);
