const fetch = require("node-fetch");
const nodeBase64 = require('nodejs-base64-converter');


async function getToken() {
    const combo = 'hfh1i9uTS6uXOfJD12AxlxXyQD0x3sh8' + ':' + 'YrA4sUwMlD0GZ78F'
    const authToken =  nodeBase64.encode(combo)
  console.log(authToken);
   const response = await fetch(
    'https://api.stubhub.com/sellers/oauth/accesstoken?grant_type=client_credentials',
    {
      method: 'POST',
      body: {
        username:'hescandon6@gmail.com',
        password:'Colombia!$1357'
      },
      headers: {
        'Authorization':'Basic'+ authToken,
        'Content-Type':'application/json'
      },
    }).then((res) => res.json()).then(res => {
  console.log(res, "1");
})
.catch(error => console.log('what is this', error))

}
getToken();


// hfh1i9uTS6uXOfJD12AxlxXyQD0x3sh8:YrA4sUwMlD0GZ78F
//
