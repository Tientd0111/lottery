import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
<<<<<<< HEAD
import SignUp from "./components/SignUp";
=======
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168

const CommonMain = ({children}) => {
	return (
		<>
			<Header/>
			<main>
				{children}
			</main>
			<Login/>
<<<<<<< HEAD
			<SignUp/>
=======
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
			<Footer/>
		</>
	);
};

export default CommonMain;