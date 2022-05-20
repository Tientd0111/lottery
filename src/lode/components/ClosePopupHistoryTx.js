import React from 'react';
import images from "../../assets/images/images";
import {useTxStore} from "../../stores/useTxStore";

const ClosePopupHistoryTx = () => {

	const {setOpenHistory} = useTxStore(state => ({
		setOpenHistory: state.setOpenHistory
	}))

	let style = {
		position: 'absolute',
		right: '10px',
		width: '40px',
		top: '10px',
		zIndex: 999999
	}

	const onClose = () => {
		setOpenHistory(false)
	}

	return (
		<div style={style} onTouchEnd={onClose} onClick={onClose}>
			<img alt={'close_bg.png'} src={images.ic_close_popup}/>
		</div>
	);
};

export default React.memo(ClosePopupHistoryTx);