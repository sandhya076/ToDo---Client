import *as api from "../API/Api";

export const getList = () => async(dispatch) =>{
    try{
        const {data} = await api.fetchList();
        dispatch({type : "FETCH_ALL",payload:data});
    }catch(error){
        console.log(error.message);
    }
};
export const createList = (list) => async(dispatch) =>{
    try{
        const {data} =  await api.createList(list);
        dispatch({type: "CREATE",payload:data});
    }catch(error){
        console.log(error.message);
    }
};
export const updateList =(id,list) => async(dispatch) => {
    try{
        const {data} = await api.updateList(id,list);
        dispatch({type:"UPDATE",payload:data});

    }catch(error){
        console.log(error.message)
    }
};

export const deleteList = (id) => async(dispatch) =>{
    try{
        const {data} = await api.deleteList(id);
        dispatch({type:"DELETE",payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}