import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

import cityNames from './cityNames.json'

function App() {
  const [inValue, inValueSet] = useState('')
  const [selectCity, setSelectCity] = useState('1283240')
  const [arrData, setArrData] = useState([])
  const [responseData, setResponseData] = useState({})
  const { cityData } = cityNames;

  const onChangehandle = (e) => {
    inValueSet(e.target.value);
  }
  const onSelecthandle = (e) => {
    setSelectCity(e.target.value);
    setArrData([]);
  }
  useEffect(() => {
    const ulId = document.getElementById('cityID');
    if (inValue.trim().length === 0) {
      ulId.style.display = "none";
    } else {
      ulId.style.display = "block";
    }
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${selectCity}&appid=ff5d084541aac5b27ef0f46c449da8ca`)
      .then(res => setResponseData(res.data));
    const dataList = cityData.map(data => ({ name: data.city.name, id: data.city.id }));
    setArrData(dataList);
  }, [cityData, inValue, selectCity])
  
  let _dataList = arrData;
  if (inValue.length > 0) {
    _dataList = _dataList.filter( data => {
      return data.name.toLowerCase().match(inValue);
    });
  }
  const { city, list } = responseData && responseData;
  // const { coord } = city;
  const main = list && list[0].main;
  return (
    <div className="App">
        <div className="inputWrapper">
          <input type="search" name="cityName" value={inValue} onChange={onChangehandle} placeholder="Search City Name"/>
        </div>
        <ul id="cityID">  
            {_dataList.map(city => {
              return (
                <li value={city.id} onClick={onSelecthandle}>
                  {city.name}
                </li>
              );
            })}
          </ul>
      <div className="details">
      <h4>City Details</h4>
        <div>City ID: {city && city.id} </div>
        <div>Name: {city && city.name}</div>
        <div>
          Coordinates:  {city && city.coord && city.coord.lat}, {city && city.coord && city.coord.lon}
        </div>
        <h4>Weather Details</h4>
        <span>Humidity:{main && main.humidity} Pressure:{main && main.pressure} Temperature: {main && main.temp}</span>
      </div>

        
    </div>
  );
}

export default App;
