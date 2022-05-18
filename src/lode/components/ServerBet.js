import React, {useEffect, useState} from 'react';
import formatNumber from "../../hooks/formatNumber";
import {useSocket} from "../../stores/useSocket";

const ServerBet = ({
	right = false,
}) => {
	let style = {
		position: 'absolute',
		top: '76px',
		color: '#f39c12',
		width: 105,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		fontSize: 12,
		fontWeight: 700
	}

	if(right) style.right = '26px'
	else style.left = '26px'

	const {socket} = useSocket(state => ({socket: state.socket}))

	const [bet, setBet] = useState(0)

	useEffect(()=>{
		socket.on(`betDice${right?'X':'T'}`, (data)=>{
			setBet(data)
		})
	},[])

	return (
		<div style={style}>
			{formatNumber(bet, '')}
		</div>
	);
};

export default React.memo(ServerBet);