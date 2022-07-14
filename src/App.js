import React from 'react';
import { useEffect, useState } from "react";
import postContext from './postcontext';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [data, setData] = useState([]); //datos de los post
  const [filter, setFilter] = useState(""); //datos filtrado de los post
  useEffect(() => {
    fetch('http://localhost:3030/')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <>
    <postContext.Provider
      value={{data,setData, filter, setFilter}}>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </postContext.Provider>
    </>
  );
}

export default App;
