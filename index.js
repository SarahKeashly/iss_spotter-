

const {
  // fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');

//////
// fetchMyIP((error, ip) => {
//   if (error) {

//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);


/////
//   fetchCoordsByIP(ip, (error, data) => {

//     if (error) {

//       console.log("It didn't work!", error);
//       return;
//     }

//     console.log(data);

//   })

// });

////


// for the fetchISSFlyOverTimes, you need to only export the fetchISSFlyOverTimes from iss.js file, and you need to comment out the fetchMyIP and fetchCoordbyIP to have this one work*/
// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(ip, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   };

//   console.log('It worked! Returned flyover times:', passTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});



