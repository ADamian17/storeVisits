 // NOTE Get Code
export  const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/storeVisits/&scope=user_profile,user_media&response_type=code';


// This info needs to be in a .evn file 
export const code = 'AQDKBjMfKYT7boB4JvkMJ-38JT8i3zRxNG9csXkcSKrWQMqGnMIRD14aiRu4ULCSwiK_gPg7Evd5gmYXbXqmQW-piLnZLVdnqtkErOMz-DQmDJPU1M9PPwMCF7JlGpbynnF7js5_cZ0DvbWEXQhPawnT1YFlTSM7eaHFnA_phNuActwC1Y8C1mxYOzt2xuky5iLybJ8mp2C3SdMX77Sn8yzR9YyoGMRVEP63er0MFiz69A'; //numeric str require // code only last 1 hour
 
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