import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Socials from "../components/socials/socials";

const Contact = () => (
	<Layout>
		<SEO title="Contact Me" description="Want to contact me? Great! You'll find my contact information on this page." />
		<div className="wrapper">
			<div className="content">
				<h1>Contact Me:</h1>
				<p>
					<span>Email: </span>
					<a className="red" href="mailto:selene.blok@gmail.com">selene.blok@gmail.com</a>
				</p>
				<Socials></Socials>
			</div>
		</div>
	</Layout>
);

export default Contact;
