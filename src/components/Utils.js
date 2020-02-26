import React, { useState, useEffect } from 'react';

function GetTime() {
    const [time, setTime] = useState([]);
  
     useEffect(() => {
        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=9CXUMVNJN604&format=json&by=zone&zone=America/Vancouver`)
        .then(function (response) {
      // The API call was successful!
      return response.json();
    }).then(function (data) {
        console.log(data.formatted);
      // This is the JSON from our response
       setTime ({
        time: data.formatted
      })
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
    },[]);


    return (
        <div>
          {time}
        </div>
        );
}

export default GetTime;