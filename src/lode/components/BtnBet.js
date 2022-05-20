import React from 'react';

const BtnBet = ({
	onClick = () => {},
	right = false
}) => {

	let style = {
		position: 'absolute',
		bottom: '36px',
		cursor: 'pointer',
		backgroundColor: 'white',
		borderRadius: '22px',
		padding: '0 12px',
		fontSize: 14,
		color: 'black',
		fontWeight: 700,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0 0 74px rgb(10 10 10 / 7%)'
	}

	if(right) style.right = '48px'
	else style.left = '48px'

	return (
		<div
			style={style}
			onClick={onClick}
			onTouchEnd={onClick}
		>
			{'Cược'}
		</div>
	);
};

export default BtnBet;