import React, {useEffect} from 'react';
import {useSocket} from "../../stores/useSocket";
import {useTxStore} from "../../stores/useTxStore";

const CountTx = ({
	right = false
}) => {

	let style = {
		position: 'absolute',
		top: '25px'
	}

	if(right) style.right = '120px'
	else style.left = '120px'

	const {socket} = useSocket(state => ({socket: state.socket}))

	const {countTaiXiu, setCountTaiXiu} = useTxStore(state => ({countTaiXiu: state.countTaiXiu, setCountTaiXiu: state.setCountTaiXiu}))

	useEffect(()=>{
		socket.on('countTaiXiu', (data)=>{
			setCountTaiXiu(data)
		})
	},[setCountTaiXiu, socket])

	return (
		<div style={style}>
			{right?countTaiXiu.x:countTaiXiu.t}
		</div>
	);
};

export default CountTx;