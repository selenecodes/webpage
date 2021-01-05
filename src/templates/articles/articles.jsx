import React from 'react';

import styles from './articles.module.scss';
import Card from './card/card';

const Articles = ({ articles }) => (
    <div className={styles.grid}>
        {articles.map((item) => {
            const article = item.node.article
            return <Card article={article} key={`article__${article.id}`} />;
        })}
    </div>
);

export default Articles;
