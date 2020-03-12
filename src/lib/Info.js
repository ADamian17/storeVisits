 // NOTE Get Code
export  const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/storeVisits/&scope=user_profile,user_media&response_type=code';


// This info needs to be in a .evn file 
export const code = 'AQCapLBAwMdvh4uqsFLgvKq4PYgtJFch4keOSKaOaSjIFrScIp6a2Ne33kD4BX896aEWu7bP9bFaRHsKXt1WS5FsZvnOLOnTkqEGAkBDs8HL5zWa-IGr1IUY9txndNlNnEXYFKAs2ez1dltlaRcQHCPjcHKAZomEsfsVeHPH9qW6taTCjxkdKpGQy5Xmew3-b9Ucni7vGNvLapo6GR0f-ZGCSE9V6H6BQloynoRJ6JKZ9A'; //numeric str require // code only last 1 hour
 
//#######################################################################################################//

// NOTE - F form data in curl
export const formData = new FormData();
formData.set('client_id', 141784087094952);
formData.set('client_secret', 'ba2cb2daefe423edf39ff89248e40f82');
formData.set('grant_type', 'authorization_code');
formData.set('redirect_uri', 'https://adamian17.github.io/storeVisits/');
formData.set('code', code);

 // ########################################################################//


// NOTE Url Access
export const url = 'https://api.instagram.com/oauth/access_token'; 