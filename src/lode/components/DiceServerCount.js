import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";

const DiceServerCount = () => {

	const {socket} = useSocket(state => ({socket: state.socket}));

	const [count, setCount] = useState(0);

	useEffect(()=>{
		socket.on('countDownDiceServer', (count)=> {
			setCount(count)
		})
	},[])

	return (
		<div style={{
			alignSelf: 'center',
			animation: 'ease-in-out',
			display: count === 0 ? 'none' : 'flex'
		}}>
			<p style={{
				fontSize: '110px',
				color: count> 5?'white':'red',
				animation: 'ease-in',
			}}>
				{count>=10?count:"0"+count}
			</p>
		</div>
	);
};

export default React.memo(DiceServerCount);