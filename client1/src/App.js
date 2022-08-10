//App.js
import { Route, Link, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Auth from "./hoc/auth";
import BasicExample from "./components/views/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage2 from "./components/views/RegisterPage/reg";
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <div className="App">
      <div>
        <BasicExample />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage2 />} />
          <Route path="/video/upload" element={<VideoUploadPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
