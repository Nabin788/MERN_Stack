import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home.jsx";
import { DashBoardPage } from "./pages/DashBoard.jsx";
import { AboutPage } from "./pages/About.jsx";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
