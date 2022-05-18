import React, {useRef} from 'react';
import Draggable from "react-draggable";
import {useTxStore} from "../../stores/useTxStore";
import images from "../../assets/images/images";

const FlowDrag = () => {

	const refDrag = useRef();

	const {setDraggable, draggable} = useTxStore(state => ({
		setDraggable: state.setDraggable,
		draggable: state.draggable
	}));

	return (
		<Draggable nodeRef={refDrag}>
			<div ref={refDrag}
				onMouseMove={(e)=>{
					if(!draggable) setDraggable(true)
					e.preventDefault()
					e.stopPropagation()
				}}
				style={{
					zIndex: 999999999,
					position: 'absolute',
					backgroundImage: `url(${images.flowdraggable})`,
					width: '150px',
					height: '150px'
				}}
			>

			</div>
		</Draggable>
	);
};

export default FlowDrag;