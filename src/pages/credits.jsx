import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const Credits = () => (
	<Layout>
		<SEO title="Credits" description="A page containing credits and information about this webpage." />
		<div className="wrapper">
			<div className="content">
				<h1>Credits & Resources</h1>
				<h2 className="red">Fonts</h2>
				<p>
					The fonts that are used on this webpage are provided by Google Fonts.
					<br />
					The font I use is <code>Jost</code>, made by Owen Earl, see his&nbsp;
                    <a className="red" target="_blank" rel="noopener noreferrer" href="https://indestructibletype.com/Jost.html" aria-label="Jost* Indestructible Type Project">
                        webpage
                    </a>.
				</p>
				<h2 className="red">Icons</h2>
				<p>
					The icons you see on this webpage are from&nbsp;
					<a className="red" target="_blank" rel="noopener noreferrer" href="https://devicon.dev/" aria-label="DevIcons">DevIcons</a>
					&nbsp;and&nbsp; 
					<a className="red" target="_blank" rel="noopener noreferrer" href="https://icons8.com/" aria-label="Icons8">Icons8</a>.
				</p>
				<h2 className="red">Framework</h2>
				<p>
					I use&nbsp;
					<a className="red" target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/" aria-label="Gatsby">Gatsby</a> 
                    &nbsp;to generate static webpages. You can find this whole webpage's SourceCode on my Github profile.
				</p>
				<p>
					I use the&nbsp;
					<a className="red" target="_blank" rel="noopener noreferrer" href="https://docs.dev.to/api/" aria-label="Dev.to API">dev.to api</a>
                    &nbsp;to pull in articles that are compiled ahead-of-time by Gatsby when building the app.
				</p>
			</div>
		</div>
	</Layout>
);

export default Credits;
