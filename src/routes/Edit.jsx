import React from 'react'
import { useEffect, useState } from "react";
import postContext from '../postcontext';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Options from '../components/Opcions';


const Edit = () => {
    
    const [data, setData] = useState([]); //datos de los post
    const [filter, setFilter] = useState(""); //datos filtrado de los post
    const formRef = React.useRef();
    useEffect(() => {
    fetch('https://apimercurio.herokuapp.com/')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

    function handleSubmit(evt) {
      evt.preventDefault();
      const formData = new FormData(formRef.current);
      const values = Object.fromEntries(formData);
      const id= values.id
      const obj ={
        titulo: values.titulo,
        subtitulo: values.subtitulo,
        creador: values.creador,
        categoria: values.categoria,
        colum_01: values.Parrafo01,
        colum_02: values.Parrafo02,
        colum_03: values.Parrafo03,
        colum_04: values.Parrafo04,
        colum_05: values.Parrafo05
    }
    console.log(values,obj)
    
      
      /*${parseInt(values.id)}*/
      
      fetch(`http://localhost:3030/edit/${id}`,{
          method:"PATCH",
          headers:{
              "Accept":"application/json",
              "Content-Type":"application/json",
              "Authorization": localStorage.getItem("Token_info")
          },
          body: JSON.stringify(obj)
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
            <h2>Edita el Post</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="input-field">
                    <select name="id" id="id">
                        <Options />
                    </select>
                </div>
                <div className="input-field">
                    <input type="text" name="titulo" placeholder="Ingrese el Titulo" required/>
                    
                </div>
                <div className="input-field">
                    <input type="text" name="subtitulo" placeholder="Ingrese el Subtitulo" required/>
                    
                </div>
                <div className="input-field">
                    <input type="text" name="creador" placeholder="Ingrese el Creador" required/>
                    
                </div>
                <div className="input-field">
                    <input type="text" name="categoria" placeholder="Ingrese Categoria" required/>
                    
                </div>
                <div className="input-field">
                <textarea name="Parrafo01" id="Parrafo01" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="Parrafo02" id="Parrafo02" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="Parrafo03" id="Parrafo03" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="Parrafo04" id="Parrafo04" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="Parrafo05" id="Parrafo05" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div class="input-field button">
                        <input type="submit"  value="Editar"/>
                </div>
            </form>
            <Footer />
            </postContext.Provider>
        </>
        
    )
}

export default Edit;