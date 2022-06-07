import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";
import {useUserStore} from "../../stores/useUserStore";
import useMounted from "../../hooks/useMounted";

const AnimateTextPlusCoin = () => {

	const {socket} = useSocket(state => ({socket: state.socket}))

	const {user} = useUserStore(state => ({user: state.user}))

	const [animate, setAnimate] = useState(true);

	const [coin, setCoin] = useState(0)

	const mounted = useMounted()

	useEffect(()=>{
		if(user === undefined || user == null) return;
		socket.on(`plus-coin`, (data)=>{
			if(mounted()) {
				setCoin(data.coin)
				setAnimate(true)
			}
			setTimeout(()=>{
				if(mounted) {
					setAnimate(false)
				}
			}, 2000)
		})
	},[])

	return (
		<div className={`wrapper_plus_coin ${animate&&('animate-plus-coin')}`}>+{coin}</div>
	);
};

export default React.memo(AnimateTextPlusCoin);
