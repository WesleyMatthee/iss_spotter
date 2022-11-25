
const fetchMyIP = function(callback) {
  const request = require('request');
  request(`https://api.ipify.org?format=json'{ "ip": "24.141.61.149" }`, function(error, response, body) {

    if (error) {
      return callback(error, null);
      
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
     return callback(Error(msg), null);

    }
    
    callback(null, body);
  });
};

module.exports = { fetchMyIP };