import React from 'react'
import postContext from "../postcontext";
import { useContext } from "react";
import "./css/Card.css"

const Card = () => {
    
    const {data, filter} = useContext(postContext);
    
    return (
        <>
            {data.filter(( {titulo}) =>
              titulo.toLowerCase().startsWith(filter.toLowerCase())
            )
            .slice(0, 10)
          
            .map((post) => (
                <div key={post.id} className='conteinerCard'>
                <div className='boxlist'><b>id:</b>  {post.id}</div>
                <div className='boxlist'><b>Titulo:</b> {post.titulo}</div>
                <div className='boxlist'><b>Subtitulo:</b> {post.subtitulo}</div>
                <div className='boxlist'><b>Creador:</b> {post.creador}</div>
                <div className='boxlist'><b>Categoria:</b> {post.categoria}</div>
                <div className='boxlist'><b>Columna 01</b>: {post.colum_01}</div>
                <div className='boxlist'><b>Columna 02:</b> {post.colum_02}</div>
                <div className='boxlist'><b>Columna 03:</b> {post.colum_03}</div>
                <div className='boxlist'><b>Columna 04:</b> {post.colum_04}</div>
                <div className='boxlist'><b>Columna 05:</b> {post.colum_05}</div>
                </div> 
            ))} 
      
        </>
    )
}

export default Card;