import api from './api.js';
import { getToken } from '../providers/TokenProvider.js';


export const login = async (username, password) => {
    console.log(username, password)
    const token = btoa(username + ":" + password);
    const response = await api.post("/auth/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    console.log(response);
    
    if(response.status === 200){
       return response.data;
    
    }else{
       return Promise.reject("invalid auth");
    }
};


export const setAuth = () => {
    api.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
};


export const test = () => {
	api.get("/users");
}

export const register = async (username,password) =>{
 const  response = await api.post("/auth/register",{username,password})
   if (response.status === 200) {
    alert("Registro completo")
   }
}
export const unsetToken = () => {
    api.defaults.headers.common.Authorization = null;
    deleteToken();
};
export const validateToken = async () => {
   
    const res = await api.get("/auth/validate");
    return res.data;
};

