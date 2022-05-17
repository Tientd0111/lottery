import React from 'react';

const TextResultAnimation = ({
	text = '',
	isWin = false,
	isRight = false
}) => {

	let style = {
		position: 'absolute',
		top: '60px',
	}

	if(isRight) style.right = '60px'
	else style.left = '60px'

	return (
		<div style={style}>
			<h3 className={isWin ? 'textOpacity' : ''} style={{
				margin: 0
			}}>{text}</h3>
		</div>
	);
};

export default TextResultAnimation;