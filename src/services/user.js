import api from "./api";

export const getUser = async(id) =>{
    
    
    const res = await api.get("/users/" + id);    
    return res.data;
    
}