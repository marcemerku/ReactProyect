import React from 'react'
import { useEffect, useState } from "react";
import postContext from '../postcontext';
import Nav from '../components/Nav';
import Header from '../components/Header';

import Options from '../components/Opcions';

const DeleteLogin = () => {
    const [data, setData] = useState([]); //datos de los post
    const [filter, setFilter] = useState(""); //datos filtrado de los post
    const formRef = React.useRef();
    useEffect(() => {
    fetch('https://apimercurio.herokuapp.com/login')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(formRef.current);
    let values = Object.fromEntries(formData);
    const id= values.id
    
    
    
    fetch(`https://apimercurio.herokuapp.com/login/${id}`,{
        method:"DELETE",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
    return (
        <>
        <postContext.Provider
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
            {data.map((post) => (
                <div key={post.id} className='conteinerCard'>
                    <div className='boxlist'><b>ID:</b>  {post.id}</div>
                    <div className='boxlist'><b>Nick</b>  {post.nick}</div>
                    <div className='boxlist'><b>Email:</b> {post.email}</div>
                </div> 
            ))} 
            </postContext.Provider>
        </>
        
    )
}

export default DeleteLogin;