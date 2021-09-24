

const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {

    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
  fetchCoordsByIP(ip, (error, data) => {

    if (error) {

      console.log("It didn't work!", error);
      return;
    }

    console.log(data);

  })

});


// fetchCoordsByIP(() => {

//   // inside the request callback ...
//   // error can be set if invalid domain, user is offline, etc.
//   if (error) {
//     callback(error, null);
//     return;
//   }
//   // if non-200 status, assume server error
//   if (response.statusCode !== 200) {
//     const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
//     callback(Error(msg), null);
//     return;
//   }

//   // if we get here, all's well and we got the data

// })

