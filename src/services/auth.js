import api from './api.js';
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
        await setAuth(token);
        alert("Login exitoso!!")
    }
};


export const setAuth = async (token) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const test = () => {
	api.get("/users");
}

export const register = async (username,password) =>{
   response = await api.post("/auth/register",{username,password})
   if (response.status === 200) {
    alert("Registro completo")
   }
}