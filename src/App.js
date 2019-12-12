import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather'

const APIKEY = 'a371ff5e548780bb173b785f54f58a72';

function App() {
  const [weather, setWeather] = useState([]);

  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    setWeather(
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
    .then(res => res.json())
    .then(data => data)
    )
  }

  const appStyle = {
    container : {
      display : 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      height: '100vh'
    }
    // , here you can add lots of another styles for your component
  }

  return (
    <div className="App" style={ appStyle.container }>
      <div>
          <h3 style={{ 'font-size': '34px'}} >LiveWeather</h3>
          <Form getWeather={fetchData} />
          {console.log(weather)}
        </div>
    </div>
  );
}

export default App;
