import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather'

const APIKEY = 'a371ff5e548780bb173b785f54f58a72';

const city1 = 6173331; // sjbvista
const city2 = 3448902; // vancouver
const app1 = document.querySelector('#temperature1');
const app2 = document.querySelector('#temperature2');

function App() {
  const [weather, setWeather] = useState([]);

  {/* async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    setWeather(
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
    .then(res => res.json())
    .then(data => data)
    setWeather ({
    data: apiData,
    city: apiData.name,
    country: apiData.sys.country,
    temperature: apiData.main.temp,
    description: apiData.weather[0].description,
    error: ''
    )
  } */}

  const getTemp = fetch(`https://api.openweathermap.org/data/2.5/group?id=${city1},${city2}&units=metric&APPID=${APIKEY}`).then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    const temp1 = data.list[0].main.temp;
    const temp2 = data.list[1].main.temp;                                                                                                                                                                    
    const template1 = `<span>${temp1.toFixed(0)} Degrees in Vancouver right now!</span>`;  
    const template2 = `<span>${temp2.toFixed(0)} Degrees in Sao Joao right now!</span>`;
    
    console.warn(`${temp1.toFixed(0)} 'Degrees in Vancouver right now!`);

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
          {/*<Form  getWeather={fetchData}  />*/}
          <Weather 
          city={weather.city}
          country={weather.country}
          temperature={weather.temperature}
          description={weather.description}
          error={weather.e}
          />
        </div>
    </div>
    );
  }


export default App;
