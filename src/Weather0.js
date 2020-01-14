import React from 'react';

const vanStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
<<<<<<< HEAD
      height: '50%'
=======
      height: '50%',
      background: '#ccc'
>>>>>>> 7123783f9af9c996b614d3b6dae846704f55e1cb
    }
  }

const vanWeather = ({ city, country, temperature, description, error }) => {
    
    return (
        <div style={vanStyle.container }>    
            <strong>{city && country && <p>{city}, {country}</p>}</strong>
            {temperature && <p>{temperature.toFixed(0)}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default vanWeather;