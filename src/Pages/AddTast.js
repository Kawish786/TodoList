import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../Pages/AddTask.css'
import { addData } from '../REDUX/Action'



function AddTast() {
    const [task,setTask]=useState('')
    const [timef,setTimef]=useState('')
    const [timet,setTimet]=useState('')
    const [date,setDate]=useState('')
    const nav = useNavigate()
    const dispatch=useDispatch()
    const handleClick=()=>{
        nav('/data')
        const inputData={
            task:task,
            timef:timef,
            timet:timet,
            date:date
        }
        dispatch(addData(inputData))
    }
    
   
  return (
    <>
  
    <div className='head'>
        <h1>Todo List: Add Task</h1>
        <h5>Things to be done</h5>
    </div>
    <div className='form'>
        <form className='mar'>
            <label htmlFor="exampleFormControlInput1" className="form-label">Task</label>
            <input type={'text'} className="form-control" id="exampleFormControlInput1" placeholder="Task" onChange={(e)=>{setTask(e.target.value)}} value={task}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Time-From</label>
            <input type={'time'} className="form-control" id="exampleFormControlInput1" placeholder="Time" onChange={(e)=>{setTimef(e.target.value)}} value={timef}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Time-To</label>
            <input type={'time'} className="form-control" id="exampleFormControlInput1" placeholder="Time" onChange={(e)=>{setTimet(e.target.value)}} value={timet}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Due-Date</label>
            <input type={'date'} className="form-control" id="exampleFormControlInput1" placeholder="Date" onChange={(e)=>{setDate(e.target.value)}} value={date}/>
        </form>
    </div>
    <div className='button'>
    <button type="button" onClick={handleClick} className="btn btn-outline-dark btn-lg">Add</button>
    </div>
  
    
    </>
  )
}

export default AddTast