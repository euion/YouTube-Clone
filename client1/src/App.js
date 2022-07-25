//App.js
import { Route, Link, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Apple from "./apple";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">홈</Link>
        <Link to="/r1">Router1</Link>
        <Link to="/r2">Router2</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/apple" element={<Apple />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
