import { useState } from "react";
import { updateAssistant } from "../services/userEvent";

const UserEvents = ({assistantIn}) => {
const [assistant,setAssistant] = useState(assistantIn);
const [editable,setEditable] = useState(false);
    return editable ?(
        <>
            <h1>Hola 1</h1>
             <div key={assistant.id} className="participant-item d-flex justify-content-between">
              <span>{assistant.user?.username}</span>
             <input type="text" defaultValue={assistant.contribution} onChange={(e)=>{ setAssistant({...assistant,contribution:e.target.value})}} />
             <button className="btn btn-success" onClick={()=>{updateAssistant(assistant).then(setEditable(false))}}>+</button>
            </div>
        </>
    ):(
     <>
     <h1>Hola2</h1>
    <div key={assistant.id} className="participant-item d-flex justify-content-between">
    <span>Trae: {assistant.contribution}</span>
    <button onClick={setEditable(true)}></button>

    </div>
    </>)
};

export default UserEvents;