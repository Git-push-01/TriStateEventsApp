const dotenv = require('dotenv');
dotenv.config();
module.exports = {
apiKey:  process.env.API_key,
clientSecret: process.env.Client_secret,

};
