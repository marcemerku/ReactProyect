import React from 'react'
import { Link} from "react-router-dom";
import Nav from '../components/Nav';
import Header from '../components/Header';



const Login = () => {
    const formRef = React.useRef();
    function  handleSubmit (evt) {
        evt.preventDefault();
        const formData = new FormData(formRef.current);
        const values = Object.fromEntries(formData);
        fetch('https://apimercurio.herokuapp.com/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(values)
        })
            .then(res =>  {
                if(res.status === 200) {
                alert("Estas Logeado")
                return res.json();
              }
              if(res.status === 401) {
                alert("Contraseña incorrecta")
                return res.json();
              }
              if(res.status === 404) {
                alert("Usuario incorrecto")
                return res.json();
              }
                })       
            .then(json => localStorage.setItem("Token_info", json.Token_info.token)) 
            .catch(err => console.log(err))
    }
    
    
    return (
        <>
            <Header />
            <Nav />
            <div className="formularios">
            <h2>Login</h2>
            <form onSubmit={ handleSubmit} ref={formRef}>
                <label for="email">Email</label>
                <input id="email" name="email" type="email" />
                <label for="password">Password</label>
                <input id="password" name="password" type="password" />
                <button type="submit">Sign Up</button>
            </form>
            </div>
            <div className='botoneslogin'>
                <div className='botonslog'>
                    <Link to="/Login/createLogin" className='botonlog'>createLogin</Link>
                    <Link to="/Login/deleteLogin" className='botonlog'>deleteLogin</Link>
                </div>
            </div>
            
            
            
            
        </>
        
    )
}

export default Login;