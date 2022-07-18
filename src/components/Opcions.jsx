import React from 'react'
import postContext from "../postcontext";
import { useContext } from "react";



const Options = () => {
    const {data} = useContext(postContext);
    return (
        <>
        { 
        data.map((post) =>(<option value={post.id} key={post.id}>{post.id} </option>  )
            
          )}
              
        </>
        
    )
}

export default Options;