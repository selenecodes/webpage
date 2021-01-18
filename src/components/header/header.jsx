import { Link } from "gatsby";
import React from "react";

import styles from "./header.module.scss";
import ColorSwitch from "../colorswitch/colorswitch";

const Header = () => {
    const routes = [
        { path: "/", name: "home", id: "home-route" },
        { path: "/blog/", name: "blog", id: "blog-route" },
        { path: "/credits/", name: "credits", id: "credits-route" },
        // { path: "/portfolio/", name: "portfolio", id: "portfolio-route" },
        // { path: "/settings/", name: "settings", id: "settings-route" },
        { path: "/contact/", name: "contact", id: "contact-route" },
    ];

    return (
        <nav className={styles.header}>
            <ul className="navigation">
                {routes.map(route => {
                    return (
                        <li className={styles.menuOption} key={route.id}>
                            <Link className={styles.menuLink} to={route.path}>{route.name}</Link>
                        </li>
                    );
                })}
                <li className={`${styles.menuOption} ${styles.colorSwitch}`}>
                    <ColorSwitch />
                </li>
            </ul>
        </nav>
    );
};

export default Header;
