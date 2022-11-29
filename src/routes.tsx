import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Menu from "pages/Menu";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
