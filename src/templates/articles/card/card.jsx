import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Tags from "src/components/tags/tags"
import styles from './card.module.scss'

const Card = ({ article }) => {
    const cover = article.cover.childImageSharp.fluid;
	return (
		<Link to={`/blog/${article.slug}`}>
			<div className={styles.card}>
				<div className={styles.cardMediaTop}>
                    <Img fluid={cover} title="The cover"></Img>
				</div>
				<div className={styles.paddedBody}>
					<Tags tags={article.tag_list}></Tags>    
					<p className={styles.textLarge}>
						{article.title}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
