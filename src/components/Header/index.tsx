import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Header() {
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

  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles.navbar__links}>
          {routes.map(({ label, to }, index) => (
            <li key={index} className={styles.navbar__item}>
              <NavLink
                className={({ isActive }) =>
                  classNames(styles.navbar__item__link, {
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
