let color = '#3aa757';
let curURL = window.location.href;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
chrome.runtime.onMessage.addListener(() => {
  console.log('got milk?')
});