import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./component/Home-component";
import LoginComponent from "./component/Login-component";
import NavComponent from "./component/Nav-component";
import RegisterComponent from "./component/Register-component";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} exact />
        <Route
          path="/api/user/register"
          element={<RegisterComponent />}
          exact
        />
        <Route path="/api/user/login" element={<LoginComponent />} exact />
      </Routes>
    </div>
  );
}

export default App;
