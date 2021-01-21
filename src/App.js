import React, { useState, useEffect } from 'react';
import './App.css';
import Weather0 from './components/Weather0';
import Weather1 from './components/Weather1';

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
    // console.log(data);
     setWeather ({
      data: data,
      city0: data.list[0].name,
      lon0: data.list[0].coord.lon,
      lat0: data.list[0].coord.lat,
      country0: data.list[0].sys.country,
      temperature0: data.list[0].main.temp,
      description0: data.list[0].weather[0].description,
      icon0: data.list[0].weather[0].icon,
      time0: data.list[0].timezone,
      error0: '',
      city1: data.list[1].name,
      country1: data.list[1].sys.country,
      temperature1: data.list[1].main.temp,
      description1: data.list[1].weather[0].description,
      icon1: data.list[1].weather[0].icon,
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
      width: '100%',
      margin: '0 auto',
      height: '100vh',
      background: '#4a59ed',
      color: '#fff'
      // backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(242,106,81,1) 99.3%, rgba(187,187,187,1) 100.2% )'
  }
}

const logoStyle = {
  container : {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    paddingTop: '6px',
    background: 'rgba(255,255,255,0.1)'
  }
}

const svgStyle = {
  container : {
    width: '170px',
    fill: '#96ff4d'
  }
}
  
  return (
    <div className="App">
      <div style={logoStyle.container}>
        <svg style={svgStyle.container} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 54.92"><path d="M24.86 12.38h5.99v20.99h12.97v4.88H24.86V12.38zM46.08 12.38c0-1.81 1.44-3.22 3.58-3.22s3.58 1.33 3.58 3.1c0 1.92-1.44 3.33-3.58 3.33s-3.58-1.4-3.58-3.21zm.7 5.99h5.77v19.88h-5.77V18.37zM77.64 18.37l-8.39 19.88H63.3l-8.35-19.88h5.95l5.51 13.53 5.69-13.53h5.54zM98.82 29.94H83.78c.55 2.48 2.66 3.99 5.69 3.99 2.11 0 3.62-.63 4.99-1.92l3.07 3.33c-1.85 2.11-4.62 3.22-8.2 3.22-6.87 0-11.35-4.32-11.35-10.24 0-5.95 4.55-10.24 10.61-10.24 5.84 0 10.35 3.92 10.35 10.31-.01.44-.08 1.07-.12 1.55zm-15.11-3.37h9.79c-.41-2.51-2.29-4.14-4.88-4.14-2.62 0-4.51 1.59-4.91 4.14zM152.75 12.38l-8.46 25.87h-6.43l-5.69-17.52-5.88 17.52h-6.39l-8.5-25.87h6.21l5.84 18.18 6.1-18.18h5.54L141 30.71l6.02-18.33h5.73zM173.56 29.94h-15.04c.55 2.48 2.66 3.99 5.69 3.99 2.11 0 3.62-.63 4.99-1.92l3.07 3.33c-1.85 2.11-4.62 3.22-8.2 3.22-6.88 0-11.35-4.32-11.35-10.24 0-5.95 4.54-10.24 10.61-10.24 5.84 0 10.35 3.92 10.35 10.31-.01.44-.08 1.07-.12 1.55zm-15.11-3.37h9.79c-.41-2.51-2.29-4.14-4.88-4.14-2.62 0-4.51 1.59-4.91 4.14zM194.55 26.91v11.35h-5.4v-2.48c-1.07 1.81-3.14 2.77-6.06 2.77-4.66 0-7.43-2.59-7.43-6.02 0-3.51 2.48-5.95 8.54-5.95h4.58c0-2.48-1.48-3.92-4.58-3.92-2.11 0-4.29.7-5.73 1.85l-2.07-4.03c2.18-1.55 5.4-2.4 8.57-2.4 6.07-.01 9.58 2.8 9.58 8.83zm-5.76 5.06v-2.03h-3.95c-2.7 0-3.55 1-3.55 2.33 0 1.44 1.22 2.4 3.25 2.4 1.92 0 3.58-.89 4.25-2.7zM212.59 37.29c-1.18.85-2.92 1.26-4.69 1.26-4.69 0-7.43-2.4-7.43-7.13v-8.17h-3.07v-4.44h3.07v-4.84h5.76v4.84h4.95v4.44h-4.95v8.09c0 1.7.92 2.62 2.48 2.62.85 0 1.7-.26 2.33-.74l1.55 4.07zM236.17 26.87v11.38h-5.77v-10.5c0-3.22-1.48-4.69-4.03-4.69-2.77 0-4.77 1.7-4.77 5.36v9.83h-5.76V10.83h5.76v9.61c1.55-1.55 3.77-2.37 6.32-2.37 4.71 0 8.25 2.74 8.25 8.8zM260.98 29.94h-15.04c.55 2.48 2.66 3.99 5.69 3.99 2.11 0 3.62-.63 4.99-1.92l3.07 3.33c-1.85 2.11-4.62 3.22-8.2 3.22-6.87 0-11.35-4.32-11.35-10.24 0-5.95 4.55-10.24 10.61-10.24 5.84 0 10.35 3.92 10.35 10.31-.01.44-.09 1.07-.12 1.55zm-15.12-3.37h9.79c-.41-2.51-2.29-4.14-4.88-4.14-2.62 0-4.5 1.59-4.91 4.14zM277.28 18.07v5.32c-.48-.04-.85-.07-1.29-.07-3.18 0-5.29 1.74-5.29 5.54v9.39h-5.76V18.37h5.51v2.62c1.39-1.92 3.76-2.92 6.83-2.92z"/></svg>
      </div>
      <div style={ appStyle.container }>
          <Weather0
          city={weather.city0}
          country={weather.country0}
          temperature={weather.temperature0}
          description={weather.description0}
          icon={weather.icon0}
          lon={weather.lon0}
          lat={weather.lat0}
          error={weather.error0}
          />
          <Weather1
          city={weather.city1}
          country={weather.country1}
          temperature={weather.temperature1}
          description={weather.description1}
          icon={weather.icon1}
          error={weather.error1}
          />
        </div>
    </div>
    
    );
  }


export default App;
