import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";

const CountUserBetTx = ({
	right = false,
}) => {

	let style = {
		position: 'absolute',
		bottom: '30px',
		color: '#ffffff',
		width: 30,
		display: 'flex',
		alignItems: 'center',
		overflow: 'hidden',
		fontSize: 12,
		fontWeight: 700,
	}

	if(right) {
		style.right = '103px';
		style.justifyContent = 'flex-start';
	}
	else {
		style.left = '105px';
		style.justifyContent = 'flex-end';
	}

	const {socket} = useSocket(state => ({socket: state.socket}))

	const [count, setCount] = useState(0)

	useEffect(()=>{
		socket.on(`countBet${right?'X':'T'}`, (data)=>{
			setCount(data)
		})
	},[])

	return (
		<div style={style}>
			{count}
		</div>
	);
};

export default CountUserBetTx;