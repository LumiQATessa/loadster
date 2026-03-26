console.log('waiting for poll to close');
browser.waitFor('.poll-status-indicator--open', 'detached', { timeout: 3000000, silent: true });
console.log("poll closed");
