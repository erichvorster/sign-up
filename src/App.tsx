import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";

function App() {
  const location = useLocation();

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Landing />} />
          <Route path="/login" element={<SignUp />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
