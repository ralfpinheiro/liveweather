import React from 'react';

const Weather = ({ city, country, temperature, description, icon, lon, lat, dt, time, error }) => {

  let options = {
    timeZone: 'America/Sao_Paulo',
    // year: 'numeric',
    // month: 'numeric',
    // day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
    // second: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    return (
        <div class="cityItem">  
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

export default Weather;