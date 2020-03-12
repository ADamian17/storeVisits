 // NOTE Get Code
export  const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/storeVisits/&scope=user_profile,user_media&response_type=code';


// This info needs to be in a .evn file 
export const code = 'AQAWZy01M1zYWOth7-SuJEGGlF2JIV_dRjP9wacq4rUL1jxsN4mtOHu_t2jxn7qvJgHJng3HyxPbaN_1aMNHZnZW-O0v15HhXvs0xRdN8B-ij1NTNfFIeqKoIc72_HhkxaNYab8rciIueQ8Un92E5mEDgtjAWxvpkb05AZ1N_QUAi6BsDpt64rPRozVfzEJKvzGtsHBhYEMS0AClcfKsj_dEwxGMET9va6rimccfVrwu6g'; //numeric str require // code only last 1 hour
 
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