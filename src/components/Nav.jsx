import React from 'react'
import { Link} from "react-router-dom"


const Nav = () => {
    return (
        <>
        <nav>
            <ul className="menu"> 
                <li className='linav'><Link to="/" className="opcion">Inicio</Link></li>
                <li className='linav'><Link to="/Create" className="opcion">Create</Link></li>
                <li className='linav'><Link to="/Login" className="opcion">Login</Link></li>
                <li className='linav'><Link to="/Edit" className="opcion">Edit</Link></li>
                <li className='linav'><Link to="/Delete" className="opcion">Delete</Link></li>  
            </ul>
        </nav>
        
        </>
        
    )
}

export default Nav;