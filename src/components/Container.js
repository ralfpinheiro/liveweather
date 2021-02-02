import React from 'react';

const Container = ({ city, country, temperature, description, error }) => {
    
    return (
        <div className="container" city={city}>    
             <h3 style={{ fontSize: '34px'}} >LiveWeather</h3>
        </div>
    )
}

export default Container;