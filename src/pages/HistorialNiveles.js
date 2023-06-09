import { useParams } from "react-router-dom";
import { Line, LineChart } from "recharts";
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
    const { tanque, fecha } = useParams();
    //const dataTanques = [];
    //const [misdatos, setdata] = useState();
    const datos = [];

const data = () => {
    fetch('https://hydrowatchrest-production.up.railway.app/api/hydrowatch/Historial/' + tanque + '/' + fecha, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  }) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        /*
        for(let i=0; i<data.length; i++){
            console.log(data[i].nivel);
            datos[i].nivel = parseInt(data[i].nivel);
        }*/
        //console.log(data[0].nivel);
        //console.log(data[0].tiempo);
        //console.log({data});
        //dataTanques.push(data);
        //console.log(dataTanques[0]);
        //setdata(data?.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  //const dataTanques = [];
  //data( dataTanques => console.log({data}));
  //setInterval(data, 10000);
  data();
  //const datos = [];
  /*for(let i=0; i<dataTanques.length; i++){
    datos[i] = dataTanques[i];
  }*/
  //console.log(JSON.stringify(dataTanques));
  //datos = JSON.stringify(dataTanques);
 /* const datos = [
    {hola: "hola", nivel: 23},
    {hola: "hola", nivel: 30},
    {hola: "hola", nivel: 40}
  ];*/
  //const datos = [];
  //datos = dataTanques[0];
  console.log(datos);
    return (
        <>
        <h1>Historial</h1>
        <LineChart width={600} height={300} data={datos}>
            <Line type="monotone" dataKey="nivel" stroke="#2196F3" strokeWidth={3}></Line>
        </LineChart>
        </>
    );
}