import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Privacy = () => (
	<Layout>
		<SEO title="Privacy"
             description="Worried about your privacy? Have a look on this page for the full rundown."
        />
		<div className="wrapper">
			<div className="content">
				<h1>Privacy Policy</h1>
                <p>
                    My privacy policy is kind of short, I don't store cookies, and there are no analytics.<br/>
                    Want to check out the
                    <a
						className="red"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/selenecodes/webpage"
					> Source Code</a>?
                </p>
				<h2 className="red">So what do you store?</h2>
                <p>
                    The only data that's stored are your preferences which are configured under settings. <br/>
                    These settings are saved in LocalStorage which is located on your device.
                    If you ever want to delete your preferences you can do so using the inspector in your favorite browser and selecting "clear localstorage".
                </p>
			</div>
		</div>
	</Layout>
);

export default Privacy;
