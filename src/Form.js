import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input style={{border: "1px solid #ccc", height: "40px", background: "#f1f1f1", padding: "12px"}}
            type='text'
            name='city' 
            placeholder='city'
            />
            <input style={{border: "1px solid #ccc", height: "40px", background: "#f1f1f1", padding: "12px"}}
            type='text'
            name='country'
            placeholder='country'
            />
            <button style={{border: "1px solid #000", height: "66px", background: "#000", color:"#fff", width: "100px"}}>Submit</button>
        </form>
    )
}

export default Form; 