chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'capture') {
      const data = document.body.innerText;  // Captura o texto da página
      chrome.runtime.sendMessage({ action: 'display', data: data });
    }
  });
  