console.log('waiting for poll to open');
browser.waitFor('.poll-status-indicator--open', 'visible', { timeout: 30000000, silent: true });
console.log("poll open");