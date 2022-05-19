import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";
import {useUserStore} from "../../stores/useUserStore";

const AnimateTextPlusCoin = () => {

	const {socket} = useSocket(state => ({socket: state.socket}))

	const {user} = useUserStore(state => ({user: state.user}))

	const [animate, setAnimate] = useState(false);

	const [coin, setCoin] = useState(0)

	useEffect(()=>{
		if(user === undefined || user == null) return;
		socket.on(`plus-coin-to-${user.username}`, (data)=>{
			setCoin(data.coin)
			setAnimate(true)
			setTimeout(()=>{
				setAnimate(false)
			}, 2000)
		})
	},[])

	return (
		<div className={`wrapper_plus_coin ${animate&&('animate-plus-coin')}`}>+{coin}</div>
	);
};

export default AnimateTextPlusCoin;