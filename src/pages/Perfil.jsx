import { useEffect, useState } from "react";
import { getUserFromToken } from "../services/user";
import UserInfo from "./UserInfo";
import "./ListadoEventos.css";

const Perfil = () => {
  const [user, setUser] = useState();
  const queryUser = () => getUserFromToken().then(setUser);

  useEffect(() => {
    queryUser();
  }, []);

  return (

    <>
    <div className="text-center">
      <h1 className="title-box">
        {/* <i className="bi bi-person-circle me-2 text-center"></i> */}
        Perfil 
      </h1>
    </div>
      {user && <UserInfo u={user} queryUser={queryUser} />}
    </>
  );
};

export default Perfil;