import React from 'react';
import AppLoading from "./AppLoading";

const ButtonBase = ({isLoading = false, text = ''}) => {
	return (
		<div className="form-group">
			<button type="submit" style={{display: 'flex', justifyContent: 'center'}} className="mybtn1">{isLoading?<AppLoading/>:text}</button>
		</div>
	);
};

export default ButtonBase;