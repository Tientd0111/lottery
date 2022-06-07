import React from 'react';

export default React.memo(({big = false, latest = false, width = 10, height = 10, children}) => {

	let style = {
		backgroundColor: big ? 'black':'whitesmoke',
		color: big ? 'whitesmoke' : 'black',
		fontSize: '12px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width,
		height
	}
	return (
		<span className={`cricle-span ${latest&&('jump')}`} style={style}>{children}</span>
	);
});
