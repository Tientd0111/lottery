import React from 'react';
import {useTxStore} from "../../stores/useTxStore";
import images from "../../assets/images/images";

export default React.memo(() => {
	const style = {
		position: 'absolute',
		width: '40px',
		right: 1,
		bottom: '40px'
	}

	const {setOpenCau} = useTxStore(state => ({
		setOpenCau: state.setOpenCau
	}));

	const open = () => {
		setOpenCau(true)
	}

	return (
		<div onClick={open} onTouchEnd={open} style={style}>
			<img alt={'ic_cau.png'} src={images.ic_cau}/>
		</div>
	);
});
