import api from "./api";

export const getUser = async(id) =>{
    
    
    const res = await api.get("/users/" + id);    
    return res.data;
    
}

export const updateUser = async(user)=>{
    console.log(user);
    const res = await api.put("/users/update", user);
    
    
    return res.data;
}

export const getUserFromToken = async()=>{
    const res = await api.get("/users/token");

    return res.data;
}