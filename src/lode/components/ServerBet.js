import React from 'react';
import formatNumber from "../../hooks/formatNumber";

const ServerBet = ({
	right = false,
	text
}) => {
	let style = {
		position: 'absolute',
		top: '76px',
		color: '#f39c12',
		width: 105,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		fontSize: 12,
		fontWeight: 700
	}

	if(right) style.right = '26px'
	else style.left = '26px'

	return (
		<div style={style}>
			{formatNumber(text, '')}
		</div>
	);
};

export default ServerBet;