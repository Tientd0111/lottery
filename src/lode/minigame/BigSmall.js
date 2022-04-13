import React, {useEffect} from 'react';
import Draggable from 'react-draggable'
import images from "../../assets/images/images";
import {useSocket} from "../../stores/useSocket";
import DiceServerCount from "../components/DiceServerCount";
import ResultDice from "../components/ResultDice";
const BigSmall = () => {

	const {socket} = useSocket(state => ({socket: state.socket}));

	useEffect(()=>{

	},[])

	return (
		<Draggable>
			<div style={{
				position: 'absolute',
				overflow: 'hidden',
				zIndex: 99999,
				top: 200,
				left: 100,
				justifyContent: 'center',
				display: 'flex',
				alignItems: 'center',
			}}>
				<div style={{
					backgroundImage: `url(${images.bgTx})`,
					backgroundRepeat: "no-repeat",
					width: '800px',
					height: '400px',
					backgroundSize: 'cover',
					display: 'flex',
					justifyContent: 'center',
				}}>
					{/*<DiceServerCount/>*/}
					<ResultDice/>
				</div>
			</div>
		</Draggable>
	);
};

export default BigSmall;