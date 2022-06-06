import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";
import Dice from "./Dice";
import useMounted from "../../hooks/useMounted";
import {useTxStore} from "../../stores/useTxStore";
import {useUserStore} from "../../stores/useUserStore";
import cookies from "../../contants/cookie";

const ResultDice = () => {

	const {socket} = useSocket(state => ({socket: state.socket}));

	const { timeOpen, setTimeOpen, setStrResult, setFlowDraggable, setBetT, setBetX, setArrResultDice, setCountTaiXiu} = useTxStore(state => ({
		timeOpen: state.timeOpen,
		setTimeOpen: state.setTimeOpen,
		strResult: state.strResult,
		setStrResult: state.setStrResult,
		setFlowDraggable: state.setFlowDraggable,
		setBetT: state.setBetT,
		setBetX: state.setBetX,
		setArrResultDice: state.setArrResultDice,
		setCountTaiXiu: state.setCountTaiXiu
	}));

	const {reload, user} = useUserStore(state => ({
		reload: state.reload,
		user: state.user
	}))

	const [dices, setDices] = useState([]);

	const mounted = useMounted()

	useEffect(()=>{
		socket.on('timeOpen', (time)=>{
			setTimeOpen(time)
			if(time === 5) {
				setFlowDraggable(false)
				setBetT(0)
				setBetX(0)
			}
			if(time == 1) {
				if(user !== undefined && localStorage.getItem('key') !== null && cookies.get('refreshToken') !== null)
					reload()
			}
		});

		socket.on('diceResults', (res)=> {
			setStrResult(res.taiXiuRs.resultStr)
			setFlowDraggable(true)
			if(mounted()) setDices([res.taiXiuRs.xx1, res.taiXiuRs.xx2, res.taiXiuRs.xx3])

			setTimeout(()=>{
				setArrResultDice(res.arrResultDice)
				setCountTaiXiu(res.countTaiXiu)
			}, 10000)
		})
	},[])

	if(timeOpen <= 0) {
		return (<div/>)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative'
			}}
		>
			{/*<div className={'dice_an'}/>*/}
			{/*<div className={'dice_an'}/>*/}
			<div className={'fade-in-image'} style={styles.style_div_wrapper_dice}>
				{dices.map((it, index)=>(
					<Dice num={it} key={index}/>
				))}
			</div>
			<div style={{
				position: 'relative',
				justifyContent: 'center',
				display: 'flex'
			}}>
				<p style={styles.style_time_open}>{timeOpen > 9 ? timeOpen : "0" +timeOpen}</p>
			</div>
		</div>
	);
};

const styles = {
	style_time_open: {
		fontSize: 16,
		margin: 0,
		position: 'absolute',
		top: 0
	},
	style_div_wrapper_dice: {
		flexWrap: 'wrap',
		width: '96px',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	}
}

export default ResultDice;
