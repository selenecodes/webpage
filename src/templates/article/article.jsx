import React from 'react';
import { graphql } from 'gatsby';
import Moment from 'react-moment';
import Img from 'gatsby-image';

import Layout from 'src/components/layout/layout';
import SEO from 'src/components/seo';

import 'gatsby-remark-vscode/styles.css';
import styles from './article.module.scss';
import 'src/scss/vscode.scss';

export const query = graphql`
	query ArticleQuery($slug: String!) {
		allDevArticle(filter: { article: { slug: { eq: $slug } } }) {
			edges {
				node {
					article {
						id
						title
						body_markdown
						published_timestamp
						cover_image
						slug
						tag_list
						markdown {
							childMarkdownRemark {
								html
								timeToRead
							}
						}
						cover {
							childImageSharp {
								fluid(maxWidth: 680, quality: 100) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;

const Article = ({ data }) => {
	const article = data.allDevArticle.edges[0].node.article;
	const content = article.markdown.childMarkdownRemark;
    const cover = article.cover.childImageSharp.fluid;
    return(
		<Layout>
			<SEO 
				title={article.title}
				description={article.description || article.title}
				keywords={article.tag_list}
				type={`article`}
				image={article.cover_image}
			/>
			<div className="wrapper">
				<div className="content">
					<h1 className={styles.title}>{article.title}</h1>
					{article.subtitle && <h2 className={styles.subtitle}>{article.subtitle}</h2>}
					<p className={styles.date}>
						<Moment format="MMM Do YYYY">{article.published_at}</Moment>
                        <span className={styles.dateDivider}> · </span>
                        <span>{content.timeToRead} min read</span>
					</p>
					{cover && (
						<Img fluid={cover} title="The cover" />
					)}
					<div className={styles.markdown}>
						<div dangerouslySetInnerHTML={{ __html: content.html }} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Article;
