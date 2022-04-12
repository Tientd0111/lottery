import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';

const CommonMain = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Login/>
			<Footer/>
		</>
	);
};

export default CommonMain;