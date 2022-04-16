import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login'
import Upload from './components/upload'
import Fetch from './components/fetch'
import Add from './components/add'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
        <Route path = "/" element={<App />}  />
        <Route path = "/login" element={<Login />}  />
        <Route path = "/upload" element={<Upload />}  />
        <Route path = "/fetch" element={<Fetch />}  />
        <Route path = "/add" element={<Add />}  />
      </Routes>
  </Router>
)

