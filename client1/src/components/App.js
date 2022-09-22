import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../hoc/auth";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage2 from "./views/RegisterPage/reg";
import VideoUploadPage from "./views/VideoUploadPage/VideoUploadPage";
import NavBar from "./views/NavBar/NavBar";

function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage2, false);
  const AuthUploadPage = Auth(VideoUploadPage, false);

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<AuthLandingPage />} />
          <Route path="/login" element={<AuthLoginPage />} />
          <Route path="/register" element={<AuthRegisterPage />} />
          <Route path="/video/upload" element={<AuthUploadPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
