import React, {useCallback, useRef, useState} from 'react';
import Draggable from 'react-draggable'
import images from "../../assets/images/images";
import DiceServerCount from "../components/DiceServerCount";
import ResultDice from "../components/ResultDice";
import TextResultAnimation from "../components/TextResultAnimation";
import {useTxStore} from "../../stores/useTxStore";
import BtnBet from "../components/BtnBet";
import CoinBet from "../components/CoinBet";

const money = [
	{val: '10000'},
	{val: '50000'},
	{val: '500000'},
	{val: '1000000'},
	{val: '5000000'},
]

const BigSmall = () => {

	const {timeOpen, strResult, draggable, setDraggable} = useTxStore(state => ({
		timeOpen: state.timeOpen,
		strResult: state.strResult,
		draggable: state.draggable,
		setDraggable: state.setDraggable
	}));

	const [activeValue, setActiveValue] = useState(0)

	const onActiveValue = useCallback((index) => {
		setActiveValue(index)
	},[])

	const dragRef = useRef(null);

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
			}}>
				<div onMouseMove={()=>{
					if(draggable) setDraggable(false)
				}} style={{
					backgroundImage: `url(${images.bgTx})`,
					backgroundRepeat: "no-repeat",
					width: '400px',
					height: '200px',
					backgroundSize: 'cover',
					display: 'flex',
					justifyContent: 'center',
					position: 'relative',
				}}>
					<TextResultAnimation text={'Tài'} isWin={timeOpen>0&&strResult=='Tài'}/>
					<TextResultAnimation isRight={true} text={'Xỉu'} isWin={timeOpen>0&&strResult=='Xỉu'}/>
					<div style={{position: 'absolute', display: 'flex', gap: 10, bottom: 0}}>
						{money.map((el, index)=>(<CoinBet onClick={onActiveValue} isActive={activeValue===index} key={index} index={index}/>))}
					</div>
					<BtnBet/>
					<BtnBet right={true}/>
					<DiceServerCount/>
					<ResultDice/>
				</div>
			</div>
		</Draggable>
	);
};

export default BigSmall;