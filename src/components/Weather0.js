import React from 'react';
import '../App.css';


const vanStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center'      // height: 'calc(33.33% - 22px)'
    }
  }

const vanWeather = ({ city, country, temperature, description, icon, lon, lat, error }) => {

  let options = {
    timeZone: 'America/Vancouver',
    // year: 'numeric',
    // month: 'numeric',
    // day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
    // second: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  if(country === "CA"){
    country = "Canadá";
  }
    
    return (
        <div style={vanStyle.container } class="cityItem">  
            <img className="Icon" src={img} alt="icon"/> 
            {temperature && <span>{temperature.toFixed(0)} graus</span>} 
            <p className="city">{city && <span>{city}</span>} - <span className="country">{country && <span>{country}</span>}</span></p>
            {formatter.format(new Date())}
            {/* {description && <p>{description}</p>} */}
            {/* <span>{lon && <p>{lon}</p>}</span>
            <span>{lat && <p>{lat}</p>}</span> */}
            {error && <p>{error}</p>}
        </div>
    )
}

export default vanWeather;