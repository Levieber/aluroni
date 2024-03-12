import Logo from "@/assets/logo.svg?react";
import styles from "./footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Logo />
			<p>&copy; Copyright 2022 - Levi Eber</p>
		</footer>
	);
}
