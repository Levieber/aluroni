import Logo from "@/assets/logo.svg?react";
import { clsx } from 'clsx';
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const routes = [
	{
		label: "Início",
		to: "/",
	},
	{
		label: "Cardápio",
		to: "/menu",
	},
	{
		label: "Sobre",
		to: "/about",
	},
];

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<nav>
				<ul className={styles.navbar__links}>
					{routes.map(({ label, to }, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: this list is static
						<li key={index} className={styles.navbar__item}>
							<NavLink
								className={({ isActive }) =>
									clsx(styles.navbar__item__link, {
										[styles["navbar__item__link--active"]]: isActive,
									})
								}
								to={to}
							>
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
