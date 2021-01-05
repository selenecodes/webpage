import React from 'react';

import styles from './tags.module.scss';

const Tags = ({ tags }) => (
	<div>
		{tags.map((tag, index) => {
			return (
				<div className={styles.tag} key={index}>
					{tag}
				</div>
			);
		})}
	</div>
);

export default Tags;
