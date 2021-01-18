module.exports = {
	siteMetadata: {
		title: `SeleneCodes`,
		description: `Want to have fun with Angular, Gatsby, D3.js and many more? Join now!`,
		author: `Selene Blok`,
		twitter: `@selene_codes`,
		siteUrl: `https://selene.codes`,
		type: `website`,
		keywords: [ 'Gatsby', 'D3', 'Data Science' ]
	},
	plugins: [
		'gatsby-plugin-root-import',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: [ 'Jost:300,400,500,600' ]
				}
			}
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				policy: [ { userAgent: '*', allow: '/' } ],
				sitemap: 'https://selene.codes/sitemap.xml',
				host: 'https://selene.codes'
			}
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: require.resolve('./plugins/gatsby-source-devto')
		},
		{
			resolve: require.resolve('./plugins/gatsby-medium-zoom')
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `SeleneCodes Blog`,
				short_name: `Selene's Blog`,
				categories: [ 'webdevelopment', 'data science', 'machine learning', 'programming tutorials' ],
				start_url: `/`,
				background_color: `#303030`,
				theme_color: `#393939`,
				display: `standalone`,
				lang: 'en-US',
				icon: `src/images/maskable-icon.png`, // This path is relative to the root of the site.
				icon_options: {
					// For all the options available,
					// please see the section "Additional Resources" below.
					purpose: `any maskable`
				},
				cache_busting_mode: `none`,
				include_favicon: false,
				shortcuts: [
					{
						name: 'Latest Articles',
						short_name: 'Blog',
						description: 'Have a look at my latest blogposts',
						url: '/blog',
						icons: [
							{
								src: './explore.png',
								type: 'image/png',
								sizes: '96x96'
							}
						]
					},
					{
						name: 'Contact Me',
						short_name: 'Contact',
						description: 'Want to contact me? Have a look here.',
						url: '/contact',
						icons: [
							{
								src: './contact.png',
								type: 'image/png',
								sizes: '96x96'
							}
						]
					},
				]
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-external-links`,
					`gatsby-remark-liquid-tags`,
					{
						resolve: `gatsby-remark-images-anywhere`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 880,
							linkImagesToOriginal: false
						}
					},
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							icon: `
								<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
									<path fill="var(--text-color)" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
									</path>
								</svg>
							`
						}
					},
					{
						resolve: `gatsby-remark-vscode`,
						options: {
							injectStyles: false,
							theme: 'One Dark Pro', // Or install your favorite theme from GitHub
							extensions: [ 'material-theme' ]
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images/ // See below to configure properly
				}
			}
		},
		{
			resolve: 'gatsby-plugin-zopfli',
			options: {
				extensions: [ 'css', 'html', 'js', 'svg' ]
			}
		},
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/'
			},
			__key: 'pages'
		}
	]
};
