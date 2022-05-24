import React, {useCallback, useRef, useState} from 'react';
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
import WrapperCircle from "../components/WrapperCircle";
import CloseMiniGame from "../components/CloseMiniGame";
import AnimateTextPlusCoin from "../components/AnimateTextPlusCoin";
import FlowDrag from "../components/FlowDrag";
import IcOpenHistory from "../components/IcOpenHistory";
import CountTx from "../components/CountTx";
import CountUserBetTx from "../components/CountUserBetTx";

const money = [
	{val: 10000},
	{val: 50000},
	{val: 100000},
	{val: 500000},
	{val: 1000000},
	{val: 5000000},
]

const BigSmall = () => {

	const {timeOpen, strResult, draggable, setDraggable, flowDraggable, setBetT, setBetX, betT, betX, countDownDice, visitableTx} =
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
		countDownDice: state.countDownDice,
		visitableTx: state.visitableTx
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
			socket.emit('betDiceX', {bet: value, username: user.username, password: user.password})
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
			socket.emit('betDiceT', {bet: value, username: user.username, password: user.password})
		}
	}

	return (
		<Draggable disabled={draggable} nodeRef={dragRef}>
			<div ref={dragRef} style={{
				position: 'fixed',
				overflow: 'hidden',
				zIndex: 99,
				top: 'calc(50vh - (/* height */200px / 2))',
				left: 'calc(50vw - (/* width */400px / 2))',
				justifyContent: 'center',
				display: visitableTx?'flex':'none',
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
					<AnimateTextPlusCoin/>
					<CloseMiniGame/>
					<IcOpenHistory/>
					<WrapperCircle/>
					<CountTx/>
					<CountTx right={true}/>
					<TextPhien/>
					<FlowDrag/>
					<TextResultAnimation text={'Tài'} isWin={timeOpen>0&&!flowDraggable&&strResult=='Tài'}/>
					<TextResultAnimation isRight={true} text={'Xỉu'} isWin={timeOpen>0&&!flowDraggable&&strResult=='Xỉu'}/>
					<TextBet text={betT}/>
					<TextBet text={betX} right={true}/>
					<ServerBet/>
					<ServerBet right={true}/>
					<CountUserBetTx/>
					<CountUserBetTx right={true}/>
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