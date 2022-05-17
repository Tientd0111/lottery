import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";
import {useTxStore} from "../../stores/useTxStore";
import images from "../../assets/images/images";

const DiceServerCount = () => {

	const {socket} = useSocket(state => ({socket: state.socket}));

	const {countDownDice, setCountDownDice} = useTxStore(state => ({
		countDownDice: state.countDownDice,
		setCountDownDice: state.setCountDownDice
	}))

	useEffect(()=>{
		socket.on('countDownDiceServer', (count)=> {
			setCountDownDice(count)
		})
	},[])

	return (
		<div style={{
			// alignSelf: 'center',
			animation: 'ease-in-out',
			display: countDownDice === 0 ? 'none' : 'flex',
			position: 'relative',
			width: 160,
			justifyContent: 'center',
			alignItems: 'center'
		}}>

			<img className={'route_image'} draggable={"false"} alt={'ro'} src={images.loop_i}/>
			<p style={{
				fontSize: '80px',
				color: countDownDice> 5?'white':'red',
				animation: 'ease-in',
				margin: 0
			}}>
				{countDownDice>=10?countDownDice:"0"+countDownDice}
			</p>
		</div>
	);
};

export default React.memo(DiceServerCount);