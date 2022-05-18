import React, {useEffect} from 'react';
import {useTxStore} from "../../stores/useTxStore";
import {useSocket} from "../../stores/useSocket";

const TextPhien = () => {

	const {phien, setPhien} = useTxStore(state => ({
		phien: state.phien,
		setPhien: state.setPhien
	}));

	const {socket} = useSocket(state => ({socket: state.socket}))

	useEffect(()=>{
		socket.on('phien',(id)=>setPhien(id))
	},[])

	return (
		<div style={{
			position: 'absolute',
			top: '-2px',
			fontSize: '12px',
			fontWeight: 700
		}}>
			#{phien}
		</div>
	);
};

export default TextPhien;