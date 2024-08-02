document.getElementById('captureButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: captureData
      }, (injectionResults) => {
        for (const frameResult of injectionResults) {
          document.getElementById('data').innerText = frameResult.result;
        }
      });
    });
});
  
function captureData() {
    return document.body.innerText;  // Captura o texto da página
}
  