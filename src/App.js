import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './Container';
import Weather0 from './Weather0';
import Weather1 from './Weather1';

const APIKEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const city1 = 6173331; // sjbvista
const city2 = 3448902; // vancouver

function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
   fetch(`https://api.openweathermap.org/data/2.5/group?id=${city1},${city2}&units=metric&APPID=${APIKEY}`)
  .then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    setWeather ({
      data: data,
      city0: data.list[0].name,
      country0: data.list[0].sys.country,
      temperature0: data.list[0].main.temp,
      description0: data.list[0].weather[0].description,
      error0: '',
      city1: data.list[1].name,
      country1: data.list[1].sys.country,
      temperature1: data.list[1].main.temp,
      description1: data.list[1].weather[0].description,
      error1: ''
    })
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
  },[]);
  

  const appStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '300px',
      margin: '0 auto',
      height: '100vh',
      background: '#f9f9f9',
      border: '1px solid #999'
    }
  }
  
  return (
    <div className="App">
      <div style={ appStyle.container }>
          <Weather0
          city={weather.city0}
          country={weather.country0}
          temperature={weather.temperature0}
          description={weather.description0}
          error={weather.error0}
          />
          <Weather1
          city={weather.city1}
          country={weather.country1}
          temperature={weather.temperature1}
          description={weather.description1}
          error={weather.error1}
          />
        </div>
    </div>
    
    );
  }


export default App;
