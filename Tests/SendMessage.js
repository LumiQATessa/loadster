browser.WaitForElementToBeVisible('.messaging-icon');

var timeleft = 30000;

//if (botnr % 5 == 0){
 
    for (var i = 0; i<10; ++i)
    {
         var time = Math.random() * timeleft;
         timeleft = timeleft - time;
     
         browser.type('#msg-compose-text', 'message '+ i + ' from ' + botID + ' another 300 characters: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet pellentesque dictum. Donec luctus, dui et molestie sagittis, orci nisi commodo tortor, sit amet convallis augue risus id erat. Fusce in consectetur nisi, non dapibus diam. Nam id erat tristique, fringilla enim non, aliquam tortor.  ');
         browser.click('#btn-msg-submit');
         bot.wait(time);
    }