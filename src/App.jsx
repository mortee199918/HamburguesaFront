import Router from "./app/Router";
import "./pages/App.css";
import { validateToken } from "./services/auth";
import { useEffect, useState } from "react";
import useToken from "./hooks/useToken";
import { setAuth } from "./services/auth";




const App = () => {
  const { token } = useToken();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(()=>{
    if (token && validateToken()) {
      setAuthenticated(true);
      setAuth();
    }}
    , [token]);

  return (
    <>
      <Router auth={authenticated} />
    </>
  )
}

export default App
