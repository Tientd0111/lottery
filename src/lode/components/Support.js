import React from 'react';
import images from "../../assets/images/images";

const Support = () => {
	return (
		<div className={"main-content-support"}>
			<div className={"sp-header"}>
				<img src={images.back} className={"img-bg img-fluid"} alt={"Logo"}/>
				<h4 style={{color:"#000"}}>Bạn Gặp khó khăn ?</h4>
			</div>
			<div className={"sp-content"}></div>
		</div>
	);
};

export default Support;