import { useEffect, useState } from "react";
import { getUsers } from "../services/auth";
import UserInfo from "./UserInfo";

const Perfil = () => {
      const [user,setUser]=useState();
      const queryUser = ()=> getUsers().then(res=>setUser(res.data));

      useEffect(()=>{
        queryUser();
      },[]);

    return (
      
        <>
        <h1 style={{textAlign:"center",margin:"auto"}}>Perfil </h1>
        {
            user?.map((u)=>{return(<UserInfo u={u} queryUser={queryUser}   />)})
        }
        
           
        </>
    );
};

export default Perfil;