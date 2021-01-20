import React from 'react';
import GetTime from './Time0';

const vanStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: '50%'
    }
  }

const vanWeather = ({ city, country, temperature, description, icon, lon, lat, error }) => {

  GetTime();

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  if(country === "CA"){
    country = "Canadá";
  }
    
    return (
        <div style={vanStyle.container }>    
            <p className="city">{city && <span>{city}</span>} - <span className="country">{country && <span>{country}</span>}</span></p>
            {temperature && <span>{temperature.toFixed(0)} graus</span>}
            <img className="Icon" src={img} alt="icon"/>
            {description && <p>{description}</p>}
            {/* <span>{lon && <p>{lon}</p>}</span>
            <span>{lat && <p>{lat}</p>}</span> */}
            {error && <p>{error}</p>}
            <span>{GetTime()}</span>
        </div>
    )
}

export default vanWeather;