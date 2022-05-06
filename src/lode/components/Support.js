import React from 'react';
import images from "../../assets/images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Support = () => {
	return (
		<div className={"main-content-support"}>
			<div className={"sp-header"}>
				<img src={images.back} className={"img-bg img-fluid"} alt={"Logo"}/>
				<h4 style={{color:"#000"}} className={"title-box"}>Bạn Gặp khó khăn ?</h4>
			</div>
			<div className={"sp-content"}>
				<div className={"row mb-16"}>
					<div className={"col-md-3"}>
						<p className={"bg-font-ico ico-bottom bg-red"}>
							<FontAwesomeIcon icon={['fas','phone']}/>
						</p>
					</div>
					<div className={"col-md-9 block-center"}>
						<p className={"txt-top clr-red"}>Gọi ngay</p>
						<p className={"txt-bottom clr-red"}>
							<a href="/#">0796191047</a>
						</p>
					</div>
				</div>
				<div className={"row mb-16"}>
					<div className={"col-md-3"}>
						<p className={"bg-font-ico ico-bottom bg-red"}>
							<FontAwesomeIcon icon={['fas','paper-plane']}/>
						</p>
					</div>
					<div className={"col-md-9 block-center"}>
						<p className={"txt-top clr-red"}>Gửi ngay</p>
						<p className={"txt-bottom clr-red"}>
							<a href="https://web.telegram.org/z/#5136906405">@taitienty</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Support;