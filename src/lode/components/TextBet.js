import React from 'react';
import formatNumber from "../../hooks/formatNumber";

const TextBet = ({
	right = false,
	text
}) => {

	let style = {
		position: 'absolute',
		top: '103px',
		color: 'white',
		width: 105,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		fontSize: 12,
	}

	if(right) style.right = '26px'
	else style.left = '26px'

	return (
		<div style={style}>
			{formatNumber(text, ' ')}
		</div>
	);
};

export default TextBet;