import Router from "./app/Router";
import "./pages/App.css";
import { getToken } from "./providers/TokenProvider";
import { setAuth } from "./services/auth";
import { useEffect, useState } from "react";




const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const token = getToken();
  useEffect(()=>
  {if (token){
    setAuth(token)
    setAuthenticated(true);
  }}, [])

  return (
    <>

      <Router auth={authenticated}/>
    </>
  )
}

export default App
