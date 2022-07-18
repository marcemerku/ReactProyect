import React from 'react'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Create = () => {
    const formRef = React.useRef();
    function handleSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData);
        
        fetch('https://apimercurio.herokuapp.com/create',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                "Authorization": localStorage.getItem("Token_info")
            },
            body: JSON.stringify(values)
        })
            .then(res => {if(res.status === 201) {
                alert("Publicado con exito")
                return res.json();
              }
              if(res.status === 403) {
                alert("No estas logeado o expiró")
                return res.json();
              }})
            .catch(err => console.log(err))
    }
    return (
        <>
            <Header />
            <Nav />
            <div className="formularios">
                
            <h2>Crear Post</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
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
                <textarea name="colum_01" id="colum_01" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="colum_02" id="colum_02" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="colum_03" id="colum_03" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="colum_04" id="colum_04" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div className="input-field">
                    <textarea name="colum_05" id="colum_05" cols="60" rows="10" maxlength="255" placeholder="Ingrese Parrafo" spellcheck="true"></textarea>
                    
                </div>
                <div class="input-field button">
                        <input type="submit"  value="Guardar"/>
                </div>
            </form>
            </div>
            <Footer />
        </>
        
    )
}

export default Create;