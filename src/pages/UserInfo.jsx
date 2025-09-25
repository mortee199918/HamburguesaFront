import { useState } from "react";

const UserInfo = ({u,queryUser}) => {
    const [user,setUser]=useState(u);
    const [editable,setEditable]=useState(false);
    console.log(u);
    
        
        { return editable ? 
         <>
        
            <input type="text" placeholder="username" defaultValue={u.username} onChange={(e)=>setUser(e.target.value)}/>
            <input type="text" placeholder="age" defaultValue={u.age} onChange={(e)=>setUser(e.target.value)}/>
            <textarea  placeholder="interests" defaultValue={u.interests} onChange={(e)=>setUser(e.target.value)}/>
            
        </>
        : 
        <>
        <h1>{user.username}</h1><h2>{user.age}</h2><h3>{user.interests}</h3>
        </> 
}}

export default UserInfo;