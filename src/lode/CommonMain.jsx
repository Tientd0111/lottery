import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Kyc from "./components/Kyc";
const CommonMain = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Login/>
			<Kyc/>
			<SignUp/>
			<Footer/>
		</>
	);
};

export default CommonMain;