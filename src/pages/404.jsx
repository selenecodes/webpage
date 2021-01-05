import React from 'react';

import Layout from 'src/components/layout/layout';
import SEO from 'src/components/seo';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" description="Oh oh, you seem to have found a page that I haven't created yet. For now try the home page or come back later if you're sure something will turn up." />
		<div className="wrapper">
			<div className="content">
				<h1>NOT FOUND</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</div>
		</div>
	</Layout>
);

export default NotFoundPage;
