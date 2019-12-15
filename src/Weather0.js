import React from 'react';

const vanWeather = ({ city, country, temperature, description, error }) => {
    
    return (
        <div>    
            <strong>{city && country && <p>{city}, {country}</p>}</strong>
            {temperature && <p>{temperature.toFixed(0)}</p>}
            {description && <p>{description}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default vanWeather;