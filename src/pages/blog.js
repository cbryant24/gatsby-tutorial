import React from 'react';
import Layout from '../components/Layout';
import styles from '../components/blog.module.css';


const blog = () => {
	return (
		<Layout>
			<div className={styles.page}>
				<h1>this is our blogs page</h1>
				<p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Esse adipisci dolore quasi recusandae quo, dolorum beatae
        quam dolor iure quia eveniet fugit facilis quidem!
				</p>
			</div>
		</Layout>
	);
};

blog.propTypes = {

};

export default blog;
