import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page";
import TestPage from "./components/main-pages/test";
import HelpCenter from "./pages/help-center";
import MXDriveSignup from "./pages/signup-section";
import ContactPage from "./pages/contact-page";
import ServicesPage from "./pages/services-page";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/signup-section" element={<MXDriveSignup/>} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/services-page" element={<ServicesPage />} />
      </Routes>
    </div>
  );
};

export default App;