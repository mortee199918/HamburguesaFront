import Router from "./app/Router";
import "./pages/App.css";
import { unsetToken, validateToken } from "./services/auth";
import { useEffect, useState } from "react";
import useToken from "./hooks/useToken";
import { setAuth } from "./services/auth";




const App = () => {
  const { token } = useToken();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(()=>{
    if (token) {
      setAuth();
      if (validateToken())
        setAuthenticated(true);
      else
        unsetToken()
    }}
    , [token]);

  return (
    <>
      <Router auth={authenticated} />
    </>
  )
}

export default App
