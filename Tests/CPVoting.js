var url = "https://meetings.scale.lumiglobaldev.com/r/participant/live-meeting/996-406-731-249"

var group = bot.getBotGroupNumber();
var botnr = bot.getBotNumber();
var botID = group + '-' + botnr;

browser.navigate(url);

//Accept cookies

//Turn off Maintenenance mode ***Evaluate Javascript block ***

// Enter some JavaScript to evaluate on the page
// Declare a function that sets a cookie
function setCookie(cookieName, cookieValue, days) {
  const date = new Date();
  const expiresInMillis = days * 86400000;

  date.setTime(date.getTime() + expiresInMillis);
  console.log("setting cookie");

  document.cookie = cookieName + '=' + cookieValue + ';expires=' + date.toUTCString() + ';path=/';
}

// Call the function to actually set a cookie
setCookie('qaTest', 'true', 1)
location.reload();


//Credentialed Participant Log-in
// Wait for poll open
//CP Voting
//Wait for poll closed