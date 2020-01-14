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
    
    return (
        <div style={sjoaoStyle.container }>    
            <span className="city">{city && country && <p>{city}, {country}</p>}</span>
            {temperature && <p>{temperature.toFixed(0)}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;