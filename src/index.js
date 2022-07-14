import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

import Create from './routes/Create';
import Login from './routes/Login';
import Edit from './routes/Edit';
import Delete from './routes/Delete';
import CreateLogin from './routes/CreateLogin'
import DeleteLogin from './routes/DeleteLogin'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Login' element={<Login />} /> 
        <Route path='/Login/createLogin' element={<CreateLogin />}/>
        <Route path='/Login/deleteLogin' element={<DeleteLogin />}/>      
        <Route path='/Edit' element={<Edit />} />
        <Route path='/Delete' element={<Delete />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



