import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../Pages/AddTask.css'
import { addData } from '../REDUX/Action'



function AddTast() {
    // const [task,setTask]=useState('')
    // const [timef,setTimef]=useState('')
    // const [timet,setTimet]=useState('')
    // const [date,setDate]=useState('')
    // const nav = useNavigate()
    // const dispatch=useDispatch()
    // const handleClick=()=>{
    //     nav('/data')
    //     const inputData={
    //         task:task,
    //         timef:timef,
    //         timet:timet,
    //         date:date
    //     }
    //     dispatch(addData(inputData))
    // }
    const [inputValues, setInputValues] = useState({
        task: '',
        timef: '',
        timet: '',
        date: '',
      });
    
      const [errorMessage, setErrorMessage] = useState('');
      const [timeerror, setTimeError] = useState('');
      const [equaltimeerror, setEqualTimeError] = useState('');

    
      const nav = useNavigate();
      const dispatch = useDispatch();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
      };
    
      const handleClick = () => {
        const { task, timef, timet, date } = inputValues;
        if (!task || !timef || !timet || !date) {
          setErrorMessage('Please fill all the input fields');
        }
        else if(timet<timef){
            setTimeError('Time-To cannot be less than Time-From');
        } 
        else if(timet===timef){
            setEqualTimeError('Time-To cannot be equal Time-From');
        } 
        else {
          nav('/data');
          const inputData = {
            task,
            timef,
            timet,
            date,
          };
          dispatch(addData(inputData));
        }
      };
    
   
  return (
    <>
  
    <div className='head'>
        <h1>Todo List: Add Task</h1>
        <h5>Things to be done</h5>
    </div>
    <div className='form'>
        <form className='mar'>
            <label htmlFor="exampleFormControlInput1" className="form-label">Task</label>
            <input type={'text'} className="form-control" id="exampleFormControlInput1" placeholder="Task" name='task' onChange={handleInputChange} value={inputValues.task}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Time-From</label>
            <input type={'time'} className="form-control" id="exampleFormControlInput1" placeholder="Time" name='timef' onChange={handleInputChange} value={inputValues.timef}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Time-To</label>
            <input type={'time'} className="form-control" id="exampleFormControlInput1" placeholder="Time" name='timet' onChange={handleInputChange} value={inputValues.timet}/>
            <label htmlFor="exampleFormControlInput1" className="form-label">Due-Date</label>
            <input type={'date'} className="form-control" id="exampleFormControlInput1" placeholder="Date" name='date' onChange={handleInputChange} value={inputValues.date}/>
        </form>
    </div>
    {errorMessage && <p style={{color:'red',textAlign:'center'}} className="error-message">{errorMessage}</p>}
    {timeerror && <p style={{color:'red',textAlign:'center'}} className="error-message">{timeerror}</p>}
    {equaltimeerror && <p style={{color:'red',textAlign:'center'}} className="error-message">{equaltimeerror}</p>}
    <div className='button'>
    <button type="button" onClick={handleClick} className="btn btn-outline-dark btn-lg">Add</button>
    </div>
  
    
    </>
  )
}

export default AddTast