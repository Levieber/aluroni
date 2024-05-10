import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="app-container">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
