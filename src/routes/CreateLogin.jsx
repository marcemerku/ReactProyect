import React from 'react'
//import { Outlet} from "react-router-dom";
import Nav from '../components/Nav';
import Header from '../components/Header';

const CreateLogin = () => {
    const formRef = React.useRef();
    function handleSubmit(evt) {
        evt.preventDefault();
        const formData = new FormData(formRef.current);
        fetch('https://apimercurio.herokuapp.com/login/register',{
            method:"POST",
            headers:{
                "Accept":"application/json",
            },
            body: formData
        })
            .then(res => res.json())
            .then(json => {
                alert("Cuenta Creada")
            })
            .catch(err => console.log(err))  
    }
    return (
        <>
            <Header />
            <Nav />
            <div className="formularios">
            <h2>Create Login</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
                <label htmlFor="nick">Nick</label>
                <input id="nick" name="nick" type="text" />
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
                <label htmlFor="level_usu">Nivel de usuario</label>
                <input id="level_usu" name="level_usu" type="text" />
                <label htmlFor="file">Imagen de tu cuenta</label>
                <input id="file" name="file" type="file" />
                <button type="submit">Crear cuenta</button>
            </form>
            </div>
            
            
        </>
        
    )
}

export default CreateLogin;