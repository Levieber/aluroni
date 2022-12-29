import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = lazy(() => import("components/Layout"));
const Home = lazy(() => import("pages/Home"));
const Menu = lazy(() => import("pages/Menu"));
const About = lazy(() => import("pages/About"));
const Dish = lazy(() => import("pages/Dish"));
const NotFound = lazy(() => import("pages/NotFound"));

export default function AppRouter() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <Suspense fallback={<p className="loading">Carregando...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="dish/:id" element={<Dish />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}
