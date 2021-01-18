import React, { useState } from "react";

import LightMode from "../../images/lightmode.svg";
import DarkMode from "../../images/darkmode.svg";

import { switchThemeColor, getThemeColor } from "src/utils/theme";
import styles from "./colorswitch.module.scss";

const ColorSwitch = () => {
    const [mode, setMode] = useState(getThemeColor());

    function switchThemeOnEnter(e) {
        if (e.key === 'Enter') {
            switchTheme();
        }
    }

    function oppositeMode(color) {
        return color === 'light' ? 'dark' : 'light'
    }
    
    function switchTheme() {
        switchThemeColor();
        setMode(oppositeMode(mode))
    } 

    return (
        <div
            alt={`Switch to ${oppositeMode(mode)} mode`}
            aria-label={`Switch to ${oppositeMode(mode)} mode`}
            title={`Switch to ${oppositeMode(mode)} mode`}
            onKeyPress={switchThemeOnEnter}
            onClick={switchTheme}
            className={styles.colorSwitcher}
            role="button"
            tabIndex={0}
        >
            {
                mode === 'light' ?
                    <DarkMode fill="var(--red)" /> :
                    <LightMode fill="#f9e64f" />
            }
        </div>
    )
};

export default ColorSwitch;
