import React, { useState, useEffect } from 'react';

export default function GetTime() {
    const [time, setTime] = useState({ });

    async function fetchData() {
      const res = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=9CXUMVNJN604&format=json&by=zone&zone=America/Vancouver`)
      const data = await res.json()
      setTime(data)
    }
  
     useEffect(() => {

      const interval = setInterval(() => {
        console.log("API Called")
        fetchData()
      }, 3000);
      return () => clearInterval(interval);

    },[])

    return (
        <div>
          {time.formatted}
        </div>
        );
}