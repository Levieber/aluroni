import Footer from "@/components/footer";
import Header from "@/components/header";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Layout = lazy(() => import("@/components/layout"));
const Home = lazy(() => import("@/pages/home"));
const Menu = lazy(() => import("@/pages/menu"));
const About = lazy(() => import("@/pages/about"));
const Dish = lazy(() => import("@/pages/dish"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
