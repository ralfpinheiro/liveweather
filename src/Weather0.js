import React from 'react';

const vanWeather = ({ city, country, temperature, description, error }) => {
    
    return (
        <div>    
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature.toFixed(0)}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default vanWeather;