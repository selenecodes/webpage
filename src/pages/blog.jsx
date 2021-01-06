/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'src/components/layout/layout';
import SEO from 'src/components/seo';
import Articles from 'src/templates/articles/articles';

function Blog() {
	const blog = useStaticQuery(
		graphql`
			query {
				allDevArticle {
					edges {
						node {
							article {
								id
								title
								description
								tag_list
								slug
								cover {
									childImageSharp {
										fluid(maxWidth: 1000, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`
	);

	return (
		<Layout>
			<SEO
				title="blog"
				description="My blog. Here you can find writings about web development, data visualization and more."
			/>
			<div className="wrapper">
				<div className="content wide">
					<h1 className="title">Blog</h1>
					<Articles articles={blog.allDevArticle.edges} />
				</div>
			</div>
		</Layout>
	);
}

export default Blog;
