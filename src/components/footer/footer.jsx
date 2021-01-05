import React from "react";

import styles from "./footer.module.scss";

const Footer = () => (
    <footer className={styles.footer}>
        <p>
            <span className={styles.copyright}>
                &copy; {new Date().getFullYear()}, Selene Blok 
            </span>
            <span className={styles.divider}>&nbsp;- &nbsp;</span>
            <span className={styles.twitterLink}>
                <a
                    href="https://twitter.com/selene_codes"
                    aria-label="Twitter"
                    className="red"
                    target="_blank"
                    title="My Twitter"
                    rel="noopener noreferrer"
                >
                    @selene_codes
                </a>
            </span>
        </p>
    </footer>
);

export default Footer;
