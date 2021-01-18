import React from "react";

import styles from "./socials.module.scss";
import Dribbble from "../../images/dribbble.svg";
import Linkedin from "../../images/linkedin.svg";
import DevTo from "../../images/dev-dot-to.svg";
import Twitter from "../../images/twitter.svg";
import Github from "../../images/github.svg";
import Observable from "../../images/observable.svg";

const Socials = () => {
    return (
    <div>
        <div className={styles.socialIcons}>
            <a href="https://dev.to/selenecodes" rel="noopener noreferrer" target="blank" aria-label="Dev.to">
                <DevTo height="30" width="30" alt="dev.to/selenecodes"/>
            </a>  
            <a href="https://twitter.com/selene_codes" rel="noopener noreferrer" target="blank" aria-label="Twitter">
                <Twitter height="30" width="30" alt="twitter.com/selene_codes"/>
            </a>  
            <a href="https://linkedin.com/in/selene-blok" rel="noopener noreferrer" target="blank" aria-label="LinkedIn">
                <Linkedin height="30" width="30" alt="linkedin/selene-blok" />
            </a>  
            <a href="https://github.com/selenecodes" rel="noopener noreferrer" target="blank">
                <Github height="30" width="30" alt="github.com/selenecodes"/>
            </a>  
            <a href="https://dribbble.com/selenecodes" rel="noopener noreferrer" target="blank" aria-label="Dribbble">
                <Dribbble height="30" width="30" alt="dribbble.com/selenecodes"/>
            </a>  
            <a href="https://observablehq.com/@selenecodes" rel="noopener noreferrer" target="blank" aria-label="ObservableHQ">
                <Observable height="30" width="30" alt="observablehq.com/@selenecodes"/>
            </a>
        </div>
    </div>
    );
};

export default Socials;
