import React from "react";
import { Login } from "../pages/LogIn";
import { Dashboard } from "../pages/Admin";
import { CheckPage } from "../pages/CheckPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Navigation() {
  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Admin" element={<Dashboard />} />
            <Route path="/CheckPage" element={<CheckPage />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export { Navigation };
