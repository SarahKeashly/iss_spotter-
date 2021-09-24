/*
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require("request");

//////IP
const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    //checks to see if there is even a body
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);

    //if no data, then callback
    if (!data) {
      callback(error, null);
      return;
    }


    callback(null, data['ip']);

  });
};



///////COORDINATES

const fetchCoordsByIP = function(ip, callback) {
  // use request to fetch coordinates from JSON API
  request('https://freegeoip.app/json/' + ip, (error, response, body) => {

    if (error) {
      callback(error, null);
    };

    //checks to see if there is even a body
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    };

    const data2 = JSON.parse(body);

    //if no data, then callback
    if (!data2) {
      callback("there was an error", null);
      return;
    };

    let lat = data2['latitude'];
    let long = data2['longitude'];

    let myCoordinates = {
      lat,
      long
    };


    callback(null, myCoordinates);



  });

};



module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};