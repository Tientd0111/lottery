import React, {useEffect, useState} from 'react';
import {useSocket} from "../../stores/useSocket";
import Dice from "./Dice";
import useMounted from "../../hooks/useMounted";
import images from "../../assets/images/images";

const ResultDice = () => {

	const {socket} = useSocket(state => ({socket: state.socket}));

	const [timeOpen, setTimeOpen] = useState(0);

	const [dices, setDices] = useState([]);

	const mounted = useMounted()

	useEffect(()=>{
		socket.on('timeOpen', (time)=>{
			setTimeOpen(time)
		});

		socket.on('diceResults', (res)=> {
			if(mounted()) setDices([res.taiXiuRs.xx1, res.taiXiuRs.xx2, res.taiXiuRs.xx3])
		})
	},[])

	return (
		<div
			style={{
				// display: timeOpen > 0 ? 'flex' : 'none',
				alignSelf: 'center'
			}}
		>
			{/*<div className={'dice_an'}/>*/}
			<img className={'route_image'} alt={'ro'} src={images.loop_i}/>
			<div style={styles.style_div_wrapper_dice}>
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
		width: '192px',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	}
}

export default ResultDice;