import React from 'react';
import AppLoading from "./AppLoading";

const ButtonBase = ({isLoading = false, text = '', onClick = () => {}}) => {
	return (
		<div className="form-group">
			<button onClick={onClick} type="submit" style={{display: 'flex', justifyContent: 'center'}} className="mybtn1">{isLoading?<AppLoading/>:text}</button>
		</div>
	);
};

export default ButtonBase;