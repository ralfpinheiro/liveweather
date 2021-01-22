import React from 'react';

const sjoaoStyle = {
    container : {
      display : 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: 'calc(50% - 22px)'
    }
  }

const Weather = ({ city, country, temperature, description, icon, lon, lat, dt, time, error }) => {

  if(city === "Sao Joao da Boa Vista" && country === "BR") {
    city = "São João da Boa Vista";
    country = "Brasil";
  }

  const time1 = new Date(dt*1000-(time*1000));

  console.log(time1);

  const img = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    
    return (
        <div style={sjoaoStyle.container }>    
            <p className="city">{city && <span>{city}</span>} - <span className="country">{country && <span>{country}</span>}</span></p>
            {temperature && <span>{temperature.toFixed(0)} graus</span>}
            <img className="Icon" src={img} alt="icon"/>
            {description && <p>{description}</p>}
            {/* <span>{lon && <p>{lon}</p>}</span>
            <span>{lat && <p>{lat}</p>}</span> */}
            {error && <p>{error}</p>}
            {/* {time1} */}
        </div>
    )
}

export default Weather;