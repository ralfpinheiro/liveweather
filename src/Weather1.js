import React from 'react';

const sjoaoStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: '50%',
<<<<<<< HEAD
=======
      background: '#eaeaea'
>>>>>>> 7123783f9af9c996b614d3b6dae846704f55e1cb
    }
  }

const Weather = ({ city, country, temperature, description, error }) => {
    
    return (
        <div style={sjoaoStyle.container }>    
            <strong>{city && country && <p>{city}, {country}</p>}</strong>
            {temperature && <p>{temperature.toFixed(0)}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;