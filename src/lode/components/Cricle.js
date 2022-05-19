import React from 'react';

const Cricle = ({
	big = false,
	latest = false
}) => {

	let style = {
		backgroundColor: big?'black':'whitesmoke'
	}

	return (
		<span className={`cricle-span ${latest&&('jump')}`} style={style}/>
	);
};

export default Cricle;