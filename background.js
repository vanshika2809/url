chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'copyTabs') {
      const urls = message.tabs.map(tab => tab.url).join('\n');
      navigator.clipboard.writeText(urls);
    }
  });
  