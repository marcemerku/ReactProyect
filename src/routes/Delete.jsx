import React from 'react'
import { useEffect, useState } from "react";
import postContext from '../postcontext';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Options from '../components/Opcions';

const Delete = () => {
    const [data, setData] = useState([]); //datos de los post
    const [filter, setFilter] = useState(""); //datos filtrado de los post
    const formRef = React.useRef();
    useEffect(() => {
    fetch('http://localhost:3030/')
      .then((res) => res.json())
      .then((data) => setData(data));
    }, []);
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    let values = Object.fromEntries(formData);
    const id= values.id
    
    /*${parseInt(values.id)}*/
    
    fetch(`http://localhost:3030/edit/${id}`,{
        method:"DELETE",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization": localStorage.getItem("Token_info")
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
    return (
        <><postContext.Provider
        value={{data,setData, filter, setFilter}}>
            <Header />
            <Nav />
            <form onSubmit={handleSubmit} ref={formRef}>
            <div className="input-field">
                    <select name="id" id="id">
                        <Options />
                    </select>
                </div>
                <div class="input-field button">
                        <input type="submit"  value="Eliminar"/>
                </div>
            </form>
            <Footer />
            </postContext.Provider>
        </>
        
    )
}

export default Delete;