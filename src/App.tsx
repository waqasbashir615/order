import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page";
import TestPage from "./components/main-pages/test";
import HelpCenter from "./pages/help-center";
import MXDriveSignup from "./pages/signup-section";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/signup-section" element={<MXDriveSignup/>} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
    </div>
  );
};

export default App;