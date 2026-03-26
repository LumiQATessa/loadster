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