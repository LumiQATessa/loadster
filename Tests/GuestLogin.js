if (!document.getElementById('meetingId')) {
    throw new Error("Failed to load Meeting ID Page!");
}

browser.type('#meetingId', meetingID);

browser.click('[type="submit"] > span', { timeout: 40000, silent: true });
browser.waitForElementToBeVisible('#registration-field-1', { timeout: 40000, silent: true });
if (!document.getElementById('registration-field-1')) {
    throw new Error("Failed to load Guest Registration page");
}

browser.type('#registration-field-1', 'First name -'+botID);
browser.type('#registration-field-2', 'Last name - '+botID);
browser.type('#registration-field-3', 'Company - '+botID);

browser.click('#btn-submit-guest-details', { timeout: 40000, silent: true });
browser.waitForElementToBeVisible('.home-page-panel', { timeout: 40000, silent: true });

if (!document.getElementsByClassName('.home-page-panel')) {
    throw new Error("Failed to load meeting home page");
}
