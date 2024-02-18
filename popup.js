document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('copyButton').addEventListener('click', async () => {
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        const urls = tabs.map(tab => tab.url).join('\n');
        navigator.clipboard.writeText(urls);
      });
    });
  });
  