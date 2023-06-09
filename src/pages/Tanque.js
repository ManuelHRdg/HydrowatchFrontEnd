import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './Tanque.css';

export const Tanque = () => {
    const [nivel, setNivel] = useState(0);
  //const agua = 0;

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = () => {
    fetch('https://hydrowatchrest-production.up.railway.app/api/hydrowatch/ManuManito', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  }) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].nivel);
        // Assuming your data has a waterLevel property
        setNivel((24 - data[0].nivel)*100/20);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  setInterval(fetchData, 10000);


  return (
    <div className="App">
      <div className="content">
      <h1 className="title">Bienvenidos al frontend del proyecto</h1>
      <h2 className="subtitle">Aqui se representa el nivel de agua</h2>
        <div className="tank">
          <div className="water" style={{ height: `${nivel}%` }}></div>
        </div>
        <div className="text">Nivel de agua:</div>
      <div className="percentage">{nivel}%</div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}