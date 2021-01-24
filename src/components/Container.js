import React from 'react';

const Container = ({ city, country, temperature, description, error }) => {

    const style = {
        container : {
          display : 'flex',
          flexWrap: 'wrap',
          height: '100%',
          minHeight: '100vh'
        }
      }
    
    return (
        <div style={ style.container } city={city}>    
             <h3 style={{ fontSize: '34px'}} >LiveWeather</h3>
        </div>
    )
}

export default Container;