import React, {useEffect, useState} from 'react';
import Cricle from "./Cricle";
import {useSocket} from "../../stores/useSocket";
import {useTxStore} from "../../stores/useTxStore";

const WrapperCircle = () => {

	const {socket} = useSocket(state => ({socket: state.socket}))

	const {arrResultDice, setArrResultDice} = useTxStore(state => ({
		arrResultDice: state.arrResultDice,
		setArrResultDice: state.setArrResultDice
	}))

	useEffect(()=>{
		socket.on('arrResultDice', (rs)=>{
			setArrResultDice(rs)
		})
	},[])

	return (
		<div className={'wrapper-circle-span'}>
			{arrResultDice.map((el, index)=>{
				if((index+1) - (arrResultDice.length - 20) >= 0){
					return(
						<Cricle latest={index+1===arrResultDice.length} big={el>10} key={index}/>
					)
				}return null
			})}
		</div>
	);
};

export default React.memo(WrapperCircle);