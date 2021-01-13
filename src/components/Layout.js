import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './layout.css';

function Layout({ children }) {
	return (
		<React.Fragment>
			<Navbar/>
			<main>
				{children}
			</main>
			<Footer/>
		</React.Fragment>
	);
}

export default Layout;
