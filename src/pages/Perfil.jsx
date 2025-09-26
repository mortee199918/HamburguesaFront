import { useEffect, useState } from "react";
import {  getUserFromToken } from "../services/user";
import UserInfo from "./UserInfo";

const Perfil = () => {
      const [user,setUser]=useState();
      const queryUser = ()=> getUserFromToken().then(setUser);

      useEffect(()=>{
        queryUser();
      },[]);

    return (
      
        <>
        <h1 className="text-center text-white bg-success border-right">Perfil </h1>
           { user && <UserInfo u={user} queryUser={queryUser} />}
           
        
        
           
        </>
    );
};

export default Perfil;