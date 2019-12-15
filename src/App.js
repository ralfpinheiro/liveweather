import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather0 from './Weather0'
import Weather1 from './Weather1'


const APIKEY = 'a371ff5e548780bb173b785f54f58a72';
const city1 = 6173331; // sjbvista
const city2 = 3448902; // vancouver


function App() {
  const [weather, setWeather] = useState([]);
  const getTemp = fetch(`https://api.openweathermap.org/data/2.5/group?id=${city1},${city2}&units=metric&APPID=${APIKEY}`).then(function (response) {
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

  const appStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f9f9f9'
    }
    // , here you can add lots of another styles for your component
  }

  return (
    <div className="App" style={ appStyle.container }>
      <div>
          <h3 style={{ fontSize: '34px'}} >LiveWeather</h3>
          <div id=""></div>
          <div id="temperature1"></div>
          <div id="temperature2"></div>
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
