import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from "./components/SignUp";

const CommonMain = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Login/>
			<SignUp/>
			<Footer/>
		</>
	);
};

export default CommonMain;