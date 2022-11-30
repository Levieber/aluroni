import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Menu from "pages/Menu";
import Header from "components/Header";
import Layout from "components/Layout";
import About from "pages/About";
import Footer from "components/Footer";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
