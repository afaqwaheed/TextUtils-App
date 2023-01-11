import './App.css';
import React, { useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {Routes,Route} from "react-router-dom";

function App() {


  const [alert,setAlert]=useState(null);

  const showAlert=(messgae,type)=>{
    setAlert({
      msg:messgae,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark Mode is enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode is enabled','success');


    }
  }
  return (
  <>
<Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>
        <Route path="/about" element={  <About />}/>
        <Route path="/" element={   <TextForm heading="Enter text to analyze below" mode={mode}/> }/>
</Routes>
  </>  
  );
}

export default App;
