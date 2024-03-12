import theme from "@/styles/theme.module.scss";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

export default function Layout({ children }: { children?: React.ReactNode }) {
	return (
		<main>
			<div className={styles.banner}>
				<div className={styles.banner__text}>A casa do código e da massa.</div>
			</div>
			<div className={theme.container}>{children ? children : <Outlet />}</div>
		</main>
	);
}
