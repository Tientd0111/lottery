import React from 'react';
import {useTxStore} from "../../stores/useTxStore";
import images from "../../assets/images/images";

export default React.memo(() => {
	const {setOpenCau} = useTxStore(state => ({
		setOpenCau: state.setOpenCau
	}))

	let style = {
		position: 'absolute',
		right: '10px',
		width: '40px',
		top: '10px',
		zIndex: 999999
	}

	const onClose = () => {
		setOpenCau(false)
	}

	return (
		<div style={style} onTouchEnd={onClose} onClick={onClose}>
			<img style={{pointerEvents: 'none'}} alt={'close_bg.png'} src={images.ic_close_popup}/>
		</div>
	);
});
