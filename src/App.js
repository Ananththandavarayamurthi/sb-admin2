import Navbar from './component/Navbar';
import Inputs from './component/Inputs'
import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './App.css';


function App() {
  let [data,setData] = useState({
    earningMonthly:"30000",
    earningAnnualy:"480000",
    tasks:70,
    pendingRequst:22
  })
  let[earningMonthly,setearningMonthly]=useState("40000")
  let[earningAnnualy,setearningAnnualy]=useState("480000")
  let[tasks,settasks]=useState(70)
  let[pendingRequst,setpendingRequst]=useState(70)

  
  const [Value,setValue] = useState("hi")
  return (
    <div id="wrapper">
        
  <BrowserRouter>
        <Sidebar />
        <Routes>
        
          <Route path='/dashboard'  element={<Navbar data={{earningMonthly,setearningMonthly,earningAnnualy,setearningAnnualy,tasks,settasks,pendingRequst,setpendingRequst,setValue,Value}}/>}/>
          <Route path='/inputs' element={<Inputs data={{earningMonthly,setearningMonthly,earningAnnualy,setearningAnnualy,tasks,settasks,pendingRequst,setpendingRequst,setValue,Value,data,setData}}/>}/>
          <Route path='*' element={<Navigate to='./dashboard'/>}/>
        </Routes>
  
  </BrowserRouter>
    </div>
  );
}

export default App;
