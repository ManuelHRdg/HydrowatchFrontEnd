//import { useParams } from "react-router-dom";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
//import React, { useEffect, useState } from 'react';

/*const { tanque, fecha } = useParams();
const data = fetchData = () => {
    fetch('https://hydrowatchrest-production.up.railway.app/api/hydrowatch/Historial/' + tanque + '/' + fecha, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  }) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].nivel);
        console.log(data[0].tiempo);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };*/


export const HistorialNiveles = () => {
    //const { tanque, fecha } = useParams();
    //const dataTanques = [];
    //const [misdatos, setdata] = useState();
    const datos = [];
    
    /*function getData(url,cb){
      fetch(url)
      .then(response => response.json())
      .then(result => cb(result));
    }*/
  
    //getData('https://hydrowatchrest-production.up.railway.app/api/hydrowatch/Historial/' + tanque + '/' + fecha, (data) => console.log({data}));

/*const data = () => {
    fetch('https://hydrowatchrest-production.up.railway.app/api/hydrowatch/Historial/' + tanque + '/' + fecha, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  }) // Replace with your API endpoint
      .then((response) => {return response.json()})
      .then(response => {
        //json.map()
        
        //console.log(data[0].nivel);
        //console.log(data[0].tiempo);
        console.log(response);
        //dataTanques.push(data);
        //console.log(dataTanques[0]);
        //setdata(data?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };*/

  //const dataTanques = [];
  //data( dataTanques => console.log({data}));
  //setInterval(data, 10000);
  //data();

  
  //const datos = [];
  /*for(let i=0; i<dataTanques.length; i++){
    datos[i] = dataTanques[i];
  }*/
  //console.log(JSON.stringify(dataTanques));
  //datos = JSON.stringify(dataTanques);


  function recuperarDatos() {
    fetch('https://hydrowatchrest-production.up.railway.app/api/hydrowatch/Historial/ManuManito/2023-06-09')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  recuperarDatos();

  const estosdatos = [
    {tiempo: "05:22:31", nivel: 23},
    {tiempo: "05:23:31", nivel: 30},
    {tiempo: "05:24:31", nivel: 40},
    {tiempo: "05:25:31", nivel: 23},
    {tiempo: "05:26:31", nivel: 23},
    {tiempo: "05:27:31", nivel: 23}
  ];

  estosdatos.push({hola: "hola", nivel: 50});
  //const datos = [];
  //datos = dataTanques[0];
  console.log(datos);
  //console.log(losDatos);
    return (
        <>
        <h1>Historial</h1>
        <LineChart width={600} height={300} data={estosdatos}>
            <Line type="monotone" dataKey="nivel" stroke="#2196F3" strokeWidth={3}></Line>
            <CartesianGrid stroke="#ccc"></CartesianGrid>
            <XAxis dataKey="tiempo"></XAxis>
        </LineChart>
        </>
    );
}