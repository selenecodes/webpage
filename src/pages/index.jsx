import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Socials from "../components/socials/socials";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="wrapper">
			<div className="content">
                <noscript>Enable JavaScript to use all functionalities of this website.</noscript>
                <Socials></Socials>
                <p>Hey, I'm selene. I create data visualizations, web awesomeness and miscellaneous goodness.<br/></p>
			</div>
		</div>
    </Layout>
);

export default IndexPage;
