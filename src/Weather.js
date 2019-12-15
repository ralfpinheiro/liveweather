import React from 'react';

const Weather = ({ getWeather, city, country, temperature, description, error }) => {
    
    return (
        <div>
            
            {city && country && <p>{city}, " "{country}</p>}
            {temperature && <p>{temperature}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather;