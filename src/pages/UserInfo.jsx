import { useState } from "react";

const UserInfo = (u,queryUser) => {
    const [user,setUser]=useState(u);
    const [editable,setEditable]=useState(false);
        
        { return editable ? 
         <>
        
            <input type="text" placeholder="username" defaultValue={u.username} onChange={(e)=>setUser(e.target.value)}/>
            <input type="text" placeholder="age" defaultValue={u.age} onChange={(e)=>setUser(e.target.value)}/>
            <textarea  placeholder="interests" defaultValue={u.interests} onChange={(e)=>setUser(e.target.value)}/>
            
        </>
        : 
        <>
        <h1>{u.username}</h1><h2>{u.age}</h2><h3>{u.interests}</h3>
        </> 
}}

export default UserInfo;