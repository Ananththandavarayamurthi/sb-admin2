import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Inputs(props) {
  let navigate=useNavigate()
    let [earningMonthly,setearningMonthly]=useState("");
    let [earningAnnualy,setearningAnnualy]=useState("");
    let [tasks,settasks]=useState("");
    let [pendingRequst,setpendingRequst]=useState("");
    let handlesubmit=()=>{
    let newdata={earningMonthly,earningAnnualy,tasks,pendingRequst}
    
    props.data.setData(newdata)
    navigate('/dashboard')
    }
  return (
    <div><div>
        <h1>earningMonthly</h1>
    <input type="text" onChange={(e)=>props.data.setearningMonthly(e.target.value)}>
       </input>
        </div>
        <div>
        <h1>Annualy income</h1>
    <input type="text" onChange={(e)=>props.data.setearningAnnualy(e.target.value)}>
       </input>
        </div><div>
        <h1>tasks</h1>
    <input type="text" onChange={(e)=>props.data.settasks(e.target.value)}>
       </input>
        </div><div>
        <h1>pendingRequst</h1>
    <input type="text" onChange={(e)=>props.data.setpendingRequst(e.target.value)}>
       </input>
        </div>
        <button variant="primary" type="submit" onClick={()=>handlesubmit()}>
          Submit
        </button> </div>
  )
}

export default Inputs