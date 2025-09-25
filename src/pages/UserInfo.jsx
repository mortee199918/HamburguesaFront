import { useState } from "react";
import { updateUser } from "../services/user";

const UserInfo = ({u,queryUser}) => {
    const [user,setUser]=useState(u);
    const [editable,setEditable]=useState(false);
    console.log(editable);
    
        
       return editable ? (
         <>
        <div className="text-center">
            <input type="text" className="justify-content-center" placeholder="username" defaultValue={u.username} onChange={(e)=>setUser({...user, username: e.target.value})}/>
            <input type="text" placeholder="age" defaultValue={u.age} onChange={(e)=>setUser({...user, age: e.target.value})}/>  <br/>
            <textarea  placeholder="interests" defaultValue={u.interests} onChange={(e)=>setUser({...user, interests: e.target.value})}/>  <br/>
            <button className="btn btn-light" onClick={async()=>{
                updateUser(user).then(()=>{setEditable(false)});
            }}>Guardar</button></div>
        </>)
        
        : (
        <>
        <h1 className="text-white text-center">{user.username}</h1><br/><h2 className="text-white text-center">{user.age}</h2><br/><h3 className="text-white text-center">{user.interests}</h3>
        <button className="btn btn-success col-2 offset-5" onClick={()=>{
            setEditable(true);
        }}>Editar</button>
        </> )
}

export default UserInfo;