
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Mainbody from './Components/Mainbody';

function App() {

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(URL);
      const fdata =await res.json();
      setData(fdata.drinks);
    }
    fetchdata();
  },[])
 
  return (
    <div>
      <Header />

      <Mainbody data={data}/>

    </div>
  );
}

export default App;
