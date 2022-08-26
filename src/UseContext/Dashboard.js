import React, { useContext } from "react";
import { AppContext } from "./UseContext";

function Dashboard() {
  const { username } = useContext(AppContext);
  const { password } = useContext(AppContext);
  return (
    <div>
      <h1>Dashboard Component</h1>
      <h1>User: {username}</h1>
      <h1>password: {password}</h1>
    </div>
  );
}

export default Dashboard;
