import React, { useEffect, useState } from 'react';
import './App.css';

import Tabletop from 'tabletop';


const GoogleSheet = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/11lCSjff0b0JdxR_F_Gx4otLcVi5TIsPwEyvOvgfaMT4/edit?usp=sharing',
      simpleSheet: true
    }).then(data => setData(data))
    .catch(err =>console.log("error",err))
  },[])
  const tableData = data && data;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React - Google Sheets Demo</h1>
          <table>
          <tbody>
            <tr>
              <th>Name</th>
                <th>Age</th>
                <th>Game</th>
                <th>City</th>
            </tr>
          </tbody>
          <tbody>
              {tableData && tableData.map((item, i) => {
              console.log("data",item)
                return (
                  <tr key={i}>
                    <td>{item.Name} </td>
                    <td>{item.Age} </td>
                    <td>{item.Game} </td>
                    <td>{item.City}</td>
                  </tr>
                )
            })}
          </tbody>
        </table>
        </header>
      </div>
    );
}

export default GoogleSheet;