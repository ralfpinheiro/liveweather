import React from 'react';

const Container = ({ city, country, temperature, description, error }) => {

    const style = {
        container : {
          display : 'flex',
          height: '100%',
        }
      }
    
    return (
        <div style={ style.container } city={city}>    
             <h3 style={{ fontSize: '34px'}} >LiveWeather</h3>
        </div>
    )
}

export default Container;