import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function User() {
  const { username } = useContext(AppContext);
  const { password } = useContext(AppContext);
  return (
    <div>
      <h1>User: {username}</h1>
      <h1>User: {password}</h1>
    </div>
  );
}

export default User;
