import { Link } from "gatsby";
import React from "react";

import styles from "./header.module.scss";

import { switchThemeColor } from "src/utils/theme";

function switchTheme() {
    switchThemeColor();
}

function switchThemeOnEnter(e) {
    if (e.key === 'Enter') {
        switchThemeColor();
    }
}

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
        <header className={styles.header}>
            <ul className="navigation">
                {routes.map(route => {
                    return (
                        <li className={styles.menuOption} key={route.id}>
                            <Link className={styles.menuLink} to={route.path}>{route.name}</Link>
                        </li>
                    );
                })}
                <li className={styles.menuOption}>
                    <div
                        title="Switch the webpage's theme between dark/light"
                        role="button"
                        aria-label="Switch the webpage between dark/light"
                        tabIndex={0}
                        className={styles.colorSwitcher}
                        onKeyPress={switchThemeOnEnter}
                        onClick={switchTheme}
                    ></div>
                </li>
            </ul>
        </header>
    );
};

export default Header;
