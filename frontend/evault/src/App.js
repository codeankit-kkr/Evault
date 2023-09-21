import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sign from './components/Sign';
import Login from './components/Login';
import Metaconnect from './components/Metaconnect';
import HomeLayout from './components/HomeLayout';
import Profile from './components/Profile';
import FAQ from './components/FAQ';
import FileUpload from './components/FilesUpload';
import Folder from './components/Folder';


function App() {

  return (
    <div className='main_app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='/connectmeta' element={<Metaconnect />} />
          <Route path='/loggedin' element={<HomeLayout />} >
            <Route index element={<Profile />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='folder' element={<Folder />} />
            <Route path='fileupload' element={<FileUpload />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
