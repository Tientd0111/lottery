import React, {useRef} from 'react';
import Draggable from "react-draggable";
import images from "../../assets/images/images";
import {useTxStore} from "../../stores/useTxStore";

const MiniGame = () => {

	const dragRef = useRef()

	const {setVisitableTx, visitableTx} = useTxStore(state => ({
		setVisitableTx: state.setVisitableTx,
		visitableTx: state.visitableTx
	}))

	const onSetVisitable = () => {
		setVisitableTx(true)
	}

	return (
		<Draggable nodeRef={dragRef}>
			<div ref={dragRef} onClick={onSetVisitable} onTouchEndCapture={onSetVisitable} style={{
				position: 'fixed',
				overflow: 'hidden',
				zIndex: 99,
				top: 'calc(50vh - (/* height */240px / 2))',
				// left: 'calc(50vw - (/* width */400px / 2))',
				justifyContent: 'center',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				width: '120px',
				height: '120px',
				cursor: 'pointer'
			}}>
				<img  style={{
					pointerEvents: 'none'
				}} src={images.minigame} alt={'minigame.png'}/>
			</div>
		</Draggable>
	);
};

export default MiniGame;