import React from 'react';

const CoinBet = ({
	index,
	isActive = false,
	onClick = () => {}
}) => {
	const style = {
		// position: 'absolute'
		fontSize: 14,
		backgroundColor: 'white',
		color: 'red',
		borderRadius: '50%',
		// padding: '5px',
		fontWeight: 700,
		cursor: 'pointer',
		width: '40px',
		height: '40px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}

	const mappingIndex = (index) => {
		switch (index) {
			case 0: return '10K'
			case 1: return '50K'
			case 2: return '100K'
			case 3: return '500K'
			case 4: return '1M'
			case 5: return '5M'
		}
	}

	return (
		<span onClick={(e)=> {
			e.preventDefault()
			onClick(index)
		}
		} style={style} className={isActive?'active_bet':''}>
			{mappingIndex(index)}
		</span>
	);
};

export default CoinBet;