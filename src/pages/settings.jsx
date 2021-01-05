import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Settings = () => (
	<Layout>
		<SEO title="Settings" description="A page for changing preferences on this webpage." />
		<div className="wrapper">
			<div className="content wide">
				<h2>Settings</h2>
                <p>
                    On this page you can change preferences like dark and light mode,
                    justified or left-aligned text, options for colorblindness and more.
                </p>
                <p>
                    Did you know that you can change the color in the navigation bar?
                    Just click the little red circle.
                </p>
			</div>
		</div>
	</Layout>
);

export default Settings;
