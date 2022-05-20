import React from 'react';
import images from "../../assets/images/images";
import {useTxStore} from "../../stores/useTxStore";
import {useUserStore} from "../../stores/useUserStore";
import {toast} from "react-toastify";

const IcOpenHistory = () => {

	const style = {
		position: 'absolute',
		width: '40px',
		right: 0,
		top: '50px'
	}

	const {setOpenHistory} = useTxStore(state => ({
		setOpenHistory: state.setOpenHistory
	}));

	const {user} = useUserStore(state => ({
		user: state.user
	}))

	const open = () => {
		if(!!user?.username) setOpenHistory(true)
		else toast('Đăng nhập để xem lịch sử!')
	}

	return (
		<div onClick={open} onTouchEnd={open} style={style}>
			<img alt={'ic_history.png'} src={images.ic_history}/>
		</div>
	);
};

export default React.memo(IcOpenHistory);