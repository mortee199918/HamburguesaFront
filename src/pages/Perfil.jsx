import { useEffect, useState } from "react";
import { getUser } from "../services/user";
import UserInfo from "./UserInfo";

const Perfil = () => {
      const [user,setUser]=useState();
      const queryUser = ()=> getUser(3).then(res=>setUser(res.data));

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