import React, { useState } from "react";
import axios from "axios"

function App() {

  const [data,setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es&appid=9ce514d104aef1f86b8886d0b2a8f026`

  const searchLocation = (e) => {
    if(e.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyDown={searchLocation}
        placeholder='Ingrese la ciudad...'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}, {data.sys.country}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °c</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

      {data.name !== undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p> : null}
            <p>Sensación</p>
            <p>Térmica</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity} %</p> : null}
            <p>Humedad</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{((data.wind.speed)*3.6).toFixed()} KM/H</p> : null}
            <p>Viento</p>
          </div>
        </div>
      } 


      </div>
    </div>
  );
}

export default App;
