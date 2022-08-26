import React, { useState, createContext } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export const AppContext = createContext(null);

function UseContext() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <AppContext.Provider
        value={{ username, password, setUsername, setPassword }}
      >
        <Login />
        <Dashboard />
      </AppContext.Provider>
    </>
  );
}

export default UseContext;
