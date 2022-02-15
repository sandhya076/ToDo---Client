import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../../Actions/Actions';

export default function LoginForm() {
    const [list,setList] = useState({
        title : "",
        taskname : "",
        description : ""
    });
    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
       dispatch(createList(list));
    }
  return (
    <>
    <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title<title>Title</title></label>
    <input  className="form-control" placeholder="Title for your work"
    onChange={(e)=>setList({...list,title:e.target.value})} />
  
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">taskname</label>
    <input type="text" className="form-control" placeholder="your task name"
    onChange={(e)=>setList({...list,taskname:e.target.value})} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input type="text" className="form-control"  placeholder="Describe Your work" 
    onChange={(e)=>setList({...list,description:e.target.value})}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
</form>

    </>
  )
}
