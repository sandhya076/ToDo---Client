import axios from "axios";

const url = "http://localhost:5000/list";
export const fetchList = () => axios.get(url)
export const createList = (newlist)=> axios.post(url,newlist);
export const updateList =(id,updatelist)=>axios.patch(`${url}/${id}`,updatelist);
export const deleteList = (id)=> axios.delete(`${url}/${id}`);