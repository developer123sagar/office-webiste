import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useContext, createContext, useState } from "react";

const AppState = createContext();
export function useQuickLinks() {
  return useContext(AppState);
}

function App() {
  const [navLinks, setNavLinks] = useState([
    { name: "HOME", to: "/" },
    { name: "SERVICES", to: "/services" },
    { name: "ABOUT US", to: "/about" },
    { name: "CONTACT US", to: "/contact" },
    { name: "BLOG", to: "/blog" },
  ]);

  const QuickLinksProvider = ({ children }) => {
    return <AppState.Provider value={navLinks}>{children}</AppState.Provider>;
  };

  return (
    <QuickLinksProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </QuickLinksProvider>
  );
}

export default App;
