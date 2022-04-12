import React from 'react';
import ReactLoading from "react-loading";

const AppLoading = ({type = 'spin', color = '#fff'}) => {
	return (
		<ReactLoading type={type} color={color} height={30} width={30}/>
	);
};

export default AppLoading;