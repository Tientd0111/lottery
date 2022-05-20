import React from 'react';
import images from "../../assets/images/images";
import {useTxStore} from "../../stores/useTxStore";

const CloseMiniGame = () => {

	const {setVisitableTx} = useTxStore(state => ({
		setVisitableTx: state.setVisitableTx
	}))

	const onPress = () => {
		setVisitableTx(false)
	}

	let style = {
		position: 'absolute',
		right: '55px',
		width: '40px'
	}

	return (
		<div onClick={onPress} onTouchEnd={onPress} style={style}>
			<img src={images.ic_close} alt={'close.png'}/>
		</div>
	);
};

export default React.memo(CloseMiniGame);