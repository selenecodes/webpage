import React from "react";
import PropTypes from "prop-types";

import Header from "../header/header";
import Footer from "../footer/footer";

import styles from "./layout.module.scss";
import { setThemeColor, getThemeColor } from "src/utils/theme";

// Set the theme color on page load
setThemeColor(getThemeColor());

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.layoutContent}>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
