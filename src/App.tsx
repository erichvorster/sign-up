import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";

function App() {
  const location = useLocation();

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Nav />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Landing />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
