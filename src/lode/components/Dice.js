import React, {useEffect} from 'react';
import images from "../../assets/images/images";

const Dice = ({num}) => {

	const resultImage = (num) => {
		switch (num) {
			case "1": return images.d_1
			case "2": return images.d_2
			case "3": return images.d_3
			case "4": return images.d_4
			case "5": return images.d_5
			case "6": return images.d_6
		}
	}

	useEffect(()=>{

	}, [num])

	return (
		<div>
			<img style={{
				pointerEvents: 'none',
				width: '48px',
				height: '48px'
			}} alt={'num'+num} src={resultImage(num)}/>
		</div>
	);
};

export default Dice;