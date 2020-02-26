import React from 'react';

const sjoaoStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: '50%',
    }
  }

const Weather = ({ city, country, temperature, description, icon, lon, lat, error }) => {

  if(city === "Sao Joao da Boa Vista" && country === "BR") {
    city = "São João da Boa Vista";
    country = "Brasil";
  }

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    return (
        <div style={sjoaoStyle.container }>    
            <span className="city">{city && <p>{city}</p>}</span>
            <span className="country">{country && <p>{country}</p>}</span>
            {temperature && <p>{temperature.toFixed(0)} graus</p>}
            <img className="Icon" src={img} alt="icon"/>
            {description && <p>{description}</p>}
            <span>{lon && <p>{lon}</p>}</span>
            <span>{lat && <p>{lat}</p>}</span>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;