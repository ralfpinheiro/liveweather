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

const Weather = ({ city, country, temperature, description, error }) => {

  let icon;

  if(description === "light rain") {
    icon = <div className="RainIcon"></div>;
  }

  if(city === "Sao Joao da Boa Vista" && country === "BR") {
    city = "São João da Boa Vista";
    country = "Brasil";
  }
    
    return (
        <div style={sjoaoStyle.container }>    
            <span className="city">{city && <p>{city}</p>}</span>
            <span className="country">{country && <p>{country}</p>}</span>
            {temperature && <p>{temperature.toFixed(0)} graus</p>}
            {icon}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;