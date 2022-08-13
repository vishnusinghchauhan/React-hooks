import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function Login() {
  const { setUsername } = useContext(AppContext);
  const { setPassword } = useContext(AppContext);

  return (
    <div>
      <input
        placeholder="user name"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder="user pass"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;
