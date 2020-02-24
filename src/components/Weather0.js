import React from 'react';

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


const vanWeather = ({ city, country, temperature, description, icon, error }) => {

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  if(country === "CA"){
    country = "Canadá";
  }
    
    return (
        <div style={vanStyle.container }>    
            <span className="city">{city && <p>{city}</p>}</span>
            <span className="country">{country && <p>{country}</p>}</span>
            {temperature && <p>{temperature.toFixed(0)} graus</p>}
            <img className="Icon" src={img} alt="icon"/>
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default vanWeather;