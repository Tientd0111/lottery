import React, {useEffect, useRef, useState} from 'react';
import Draggable from "react-draggable";
import {useTxStore} from "../../stores/useTxStore";
import images from "../../assets/images/images";

const FlowDrag = () => {

	const refDrag = useRef();

	const {setDraggable, draggable, flowDraggable, setFlowDraggable, timeOpen} = useTxStore(state => ({
		setDraggable: state.setDraggable,
		draggable: state.draggable,
		flowDraggable: state.flowDraggable,
		setFlowDraggable: state.setFlowDraggable,
		timeOpen: state.timeOpen
	}));

	const [position, setPosition] = useState({x: 0, y: 0})

	useEffect(()=>{
		if(timeOpen == 5) {
			setPosition({x: 0, y: 0})
		}
	},[timeOpen])

	const onDrag = (e, data) => {
		setPosition({x: data.x, y: data.y})
		if(data.x >= 120 || data.x <= -120 || data.y >= 120 || data.y <= -120 ) {
			setFlowDraggable(false)
			setPosition({x: 0, y: 0})
		}
	}

	const changeDraggable = (e) => {
		if(!draggable) setDraggable(true)
		e.preventDefault()
		e.stopPropagation()
	}

	return (
		<Draggable position={position} onDrag={onDrag} nodeRef={refDrag}>
			<div ref={refDrag}
				onTouchMove={changeDraggable}
				onMouseMove={changeDraggable}
				style={{
					zIndex: 999999999,
					top: '30px',
					position: 'absolute',
					// backgroundImage: `url(${images.flowdraggable})`,
					width: '150px',
					height: '150px',
					visibility: !flowDraggable?"hidden":'visible'
					// display: !flowDraggable?'none':'block'
				}}
			>
				<img alt={'drag.png'} src={images.flowdraggable} style={{pointerEvents: 'none'}}/>
			</div>
		</Draggable>
	);
};

export default React.memo(FlowDrag);