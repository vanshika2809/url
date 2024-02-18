// This file is not needed unless you want to interact with the page content
chrome.runtime.sendMessage({ action: 'copyTabs', tabs: [...document.querySelectorAll('a')].map(a => a.href) });
