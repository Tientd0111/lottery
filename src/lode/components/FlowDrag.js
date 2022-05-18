import React, {useRef} from 'react';
import Draggable from "react-draggable";
import {useTxStore} from "../../stores/useTxStore";
import images from "../../assets/images/images";

const FlowDrag = () => {

	const refDrag = useRef();

	const {setDraggable, draggable, flowDraggable, setFlowDraggable} = useTxStore(state => ({
		setDraggable: state.setDraggable,
		draggable: state.draggable,
		flowDraggable: state.flowDraggable,
		setFlowDraggable: state.setFlowDraggable
	}));

	const onDrag = (e, data) => {
		if(data.x >= 120 || data.x <= -120 || data.y >= 120 || data.y <= -120 ) {
			setFlowDraggable(false)
		}
	}

	const changeDraggable = (e) => {
		if(!draggable) setDraggable(true)
		e.preventDefault()
		e.stopPropagation()
	}

	return (
		<Draggable onDrag={onDrag} nodeRef={refDrag}>
			<div ref={refDrag}
				onTouchMove={changeDraggable}
				onMouseMove={changeDraggable}
				style={{
					zIndex: 999999999,
					position: 'absolute',
					backgroundImage: `url(${images.flowdraggable})`,
					width: '150px',
					height: '150px',
					visibility: !flowDraggable?"hidden":'visible'
				}}
			/>
		</Draggable>
	);
};

export default FlowDrag;