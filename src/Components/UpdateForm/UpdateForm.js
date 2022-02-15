import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { updateList } from '../../Actions/Actions';
export default function UpdateForm({uList}) {
    const [list,setList] = useState(uList);
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(updateList(list._id, list));
        alert("Updated Successfully");
       
    }
  return (
    <>
     <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title<title>Title</title></label>
    <input  className="form-control" placeholder="Title for your work"
    onChange={(e)=>setList({...list,title:e.target.value})} 
    value={list.title}/>

  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">taskname</label>
    <input type="text" className="form-control" placeholder="your task name" value={list.taskname}
    onChange={(e)=>setList({...list,taskname:e.target.value})} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input type="text" className="form-control"  placeholder="Describe Your work" value={list.description}
    onChange={(e)=>setList({...list,description:e.target.value})}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
</form>

    </>
    
   
  )
}
