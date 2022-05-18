import React, {useCallback, useEffect, useRef, useState} from 'react';
import Draggable from 'react-draggable'
import images from "../../assets/images/images";
import DiceServerCount from "../components/DiceServerCount";
import ResultDice from "../components/ResultDice";
import TextResultAnimation from "../components/TextResultAnimation";
import {useTxStore} from "../../stores/useTxStore";
import BtnBet from "../components/BtnBet";
import CoinBet from "../components/CoinBet";
import TextBet from "../components/TextBet";
import {toast} from "react-toastify";
import ServerBet from "../components/ServerBet";
import {useUserStore} from "../../stores/useUserStore";
import {useSocket} from "../../stores/useSocket";
import TextPhien from "../components/TextPhien";

const money = [
	{val: 10000},
	{val: 50000},
	{val: 100000},
	{val: 500000},
	{val: 1000000},
	{val: 5000000},
]

const BigSmall = () => {

	const {timeOpen, strResult, draggable, setDraggable, flowDraggable, setBetT, setBetX, betT, betX, countDownDice} =
	useTxStore(state => ({
		timeOpen: state.timeOpen,
		strResult: state.strResult,
		draggable: state.draggable,
		setDraggable: state.setDraggable,
		flowDraggable: state.flowDraggable,
		setBetT: state.setBetT,
		setBetX: state.setBetX,
		betX: state.betX,
		betT: state.betT,
		countDownDice: state.countDownDice
	}));

	const {socket} = useSocket(state => ({socket: state.socket}))

	const {user} = useUserStore(state => ({
		user: state.user
	}))

	const [activeValue, setActiveValue] = useState(0)

	const onActiveValue = useCallback((index) => {
		setActiveValue(index)
	},[])

	const dragRef = useRef(null);

	const changeDraggable = () => {
		if(draggable) setDraggable(false)
	}

	const betGame = (e) => {
		const value = money[activeValue].val
		if (user?.username === undefined) {
			toast.error('Vui lòng đăng nhập')
			return;
		}
		if(user.balance < value) {
			toast.error('K đủ tiền, vui lòng nạp thêm')
			return;
		}

		if(e) {
			if(betT > 0) {
				toast.error('Chỉ cược 1 bên!')
				return;
			}
			if(countDownDice <= 5) {
				toast.error('Hết thời gian cược!')
				return;
			}
			setBetX(betX+value)
			socket.emit('betDiceX', {bet: value, username: user.username})
		} else {
			if(betX > 0) {
				toast.error('Chỉ cược 1 bên!')
				return;
			}
			if(countDownDice <= 5) {
				toast.error('Hết thời gian cược!')
				return;
			}
			setBetT(betT+value)
			socket.emit('betDiceT', {bet: value, username: user.username})
		}
	}

	return (
		<Draggable disabled={draggable} nodeRef={dragRef}>
			<div ref={dragRef} style={{
				position: 'absolute',
				overflow: 'hidden',
				zIndex: 99,
				top: 200,
				left: 100,
				justifyContent: 'center',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column'
			}}>
				<div
					onTouchMove={changeDraggable}
					onMouseMove={changeDraggable}
				style={{
					backgroundImage: `url(${images.bgTx})`,
					backgroundRepeat: "no-repeat",
					width: '400px',
					height: '200px',
					backgroundSize: 'cover',
					display: 'flex',
					justifyContent: 'center',
					position: 'relative',
				}}>
					<TextPhien/>
					<TextResultAnimation text={'Tài'} isWin={timeOpen>0&&!flowDraggable&&strResult=='Tài'}/>
					<TextResultAnimation isRight={true} text={'Xỉu'} isWin={timeOpen>0&&!flowDraggable&&strResult=='Xỉu'}/>
					<TextBet text={betT}/>
					<TextBet text={betX} right={true}/>
					<ServerBet/>
					<ServerBet right={true}/>
					<BtnBet onClick={()=>betGame()}/>
					<BtnBet onClick={()=>betGame(true)} right={true}/>
					<DiceServerCount/>
					<ResultDice/>
				</div>
				<div style={{display: 'flex', gap: 10, bottom: 0}}>
					{money.map((el, index)=>(<CoinBet onClick={onActiveValue} isActive={activeValue===index} key={index} index={index}/>))}
				</div>
			</div>
		</Draggable>
	);
};

export default BigSmall;