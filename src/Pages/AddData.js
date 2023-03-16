import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Pages/AddData.css'
import {  useSelector , useDispatch} from 'react-redux'
import { deleteData } from '../REDUX/Action'



function AddData() {
    const nav=useNavigate()
     const state = useSelector((data) => data);
     const dispatch = useDispatch();
     
 
    const handleTask=()=>{
         nav('/')
    }
    const handleDelete=(index)=>{
        dispatch(deleteData(index));
    };
    
  
  return (
    <>
    <div className='head'>
        <h1>Check List: Tasks</h1>
    </div>
    <div className='data'>
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tasks</th>
                    <th>Time From</th>
                    <th>Time To</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.UserReducer.user.map((i,index)=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{i.task}</td>
                        <td>{i.timef}</td>
                        <td>{i.timet}</td>
                        <td>{i.date}</td>
                        <td><button onClick={()=>handleDelete(i.task)} type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                    ))
                }
           </tbody>
        </table>
    </div>
    <div className='btn'>      
          <button type="button" onClick={handleTask} className="btn btn-outline-dark">Add More Task</button>
   </div>
    </>
    
  )
}

export default AddData