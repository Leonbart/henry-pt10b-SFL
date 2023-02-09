import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es&appid=9ce514d104aef1f86b8886d0b2a8f026`;
  const urlIP = `https://ipapi.co/city/`;

  useEffect(() => {
    const city = axios.get(urlIP).then((response) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${response.data}&units=metric&lang=es&appid=9ce514d104aef1f86b8886d0b2a8f026`
        )
        .then((response) => {
          setData([response.data]);
        });
    });
  }, []);

  async function consulta() {
    axios.get(url).then((response) => {
      setData([response.data]);
    });
  }

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData([...data, response.data]);
      });

      setLocation("");
    }
  };

  const closeCard = (id) => {
    let newArray = data.filter((e) => {
      return e.name !== id;
    });
    setData(newArray);
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Ingrese la ciudad..."
          type="text"
        />
      </div>

      <div className="cards">
        {data.map((elem, index) => (
          <Card data={elem} key={index} closeCard={closeCard} />
        ))}
      </div>
    </div>
  );
}

export default App;
