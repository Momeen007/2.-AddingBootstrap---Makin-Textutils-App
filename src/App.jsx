import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'; 
import About from './components/AboutUs';
import Alert from "./components/Alert";
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




export default function App() {

  const [Mode, setMode] = useState("light"); //weather dark mode enabler not

 const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
setAlert(null);
      
    }, 1000 );
  }
  
  const toggleMode = ()=>{
    if (Mode === 'light'){ 
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled" , "success")

        // setInterval(()=>{
      //   document.title = 'TextUtills Dark mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'TextUtills light mode';
      // }, 1500);

          
    }
       else{  
      
      setMode ('light')
      document.body.style.backgroundColor = 'white';
       showAlert("Light mode is enabled" , "success")
    }
    
    
  }
  
  return (
          <>
    <Router>
      

      <Navbar title="TextUtils" aboutText= "About" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={Mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>
    
  )
}


 // <AboutUs mode={Mode}/>