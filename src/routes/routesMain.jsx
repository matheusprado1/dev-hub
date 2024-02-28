import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";


export const RoutesMain = () => {
  const [user, setUser] = useState();


  const handleLoginSuccess = (userData) => {
    setUser(userData);
  }

  const handleLogout = () => {
    setUser(null);
  };


  return (
    <Routes>
      <Route path="/"
        element={<Login onLoginSuccess={handleLoginSuccess} />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard"
        element={<Dashboard user={user} onLogout={handleLogout} />}

      />
    </Routes>
  )
}