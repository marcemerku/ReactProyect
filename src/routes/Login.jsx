import React from 'react'
import { Link} from "react-router-dom";
import Nav from '../components/Nav';
import Header from '../components/Header';



const Login = () => {
    const formRef = React.useRef();
    function handleSubmit(evt) {
        //evt.preventDefault();
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
            .then(res => res.json())
            .then(json => {
                alert("Estas Logeado")
                localStorage.setItem("Token_info", json.Token_info.token)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Header />
            <Nav />
            <div className="formularios">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
                <button type="submit">Sign Up</button>
            </form>
            </div>
            <Link to="/Login/createLogin">createLogin</Link> |{" "}
            <Link to="/Login/deleteLogin">deleteLogin</Link>
            
            
            
        </>
        
    )
}

export default Login;