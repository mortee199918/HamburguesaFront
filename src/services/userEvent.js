import api from "./api";


export const addAssistantToEvent = async (evento) => {
   const response = await api.post("/userEvent/assistants", evento);
   console.log(response.data);
   
   return response.data;
}
export const updateAssistant = async (userEvent) =>{
   const response = await api.put("/userEvent/assistants", userEvent);
   
   return response.data;
}