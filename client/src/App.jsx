import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home.jsx";
import { DashBoardPage } from "./pages/DashBoard.jsx";
import { AboutPage } from "./pages/About.jsx";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { HeaderSection } from "./components/header.jsx";
import { FooterSection } from "./components/footer.jsx";
import { ProjectPage} from "./pages/Project.jsx";
import { ContactPage } from "./pages/Contact.jsx";
import { BlogPage } from "./pages/blog.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <HeaderSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
};

export default App;
