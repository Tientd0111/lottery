import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import PATH from "../../routes/path";

library.add(fas, fab);

const Footer = () => {
	return (
		<footer>
			<div className="footer-dev ">
				<div className="row marg">
					<div className="col-md-3">
						<h3 className="about-title">Về Winclub24h</h3>
						<p className="about-detail">Winclub24h tự hào là nhà cái cung cấp các dịch vụ lô đề, số đề, soi cầu
							lô đề hàng đầu tại Việt Nam. Winclub24h đã đặt bước đi tiên phong trong lĩnh vực đánh đề trực
							tuyến. <span className={"read-more"}><Link to={PATH.ABOUT}>Xem thêm</Link></span></p>
					</div>
					<div className="col-md-3">
						<h3 className="about-title">Trách nhiệm</h3>
						<p className="about-detail">Winclub24h tự hào là nhà cái cung cấp các dịch vụ lô đề, số đề, soi cầu
							lô đề hàng đầu tại Việt Nam. Winclub24h đã đặt bước đi tiên phong trong lĩnh vực đánh đề trực
							tuyến.</p>
					</div>
					<div className="col-md-3">
						<h3 className="about-title">Trợ giúp</h3>
						<ul className="list-help">
							<li><a href="/#">Hướng dẫn đánh đề</a></li>
							<li><a href="/#">Soi cầu</a></li>
							<li><a href="/#">Giải mã giấc mơ</a></li>
							<li><a href="/#">Mẹo chơi game</a></li>
						</ul>
					</div>
					<div className="col-md-3">
						<a href="/#" className="btn-icons">
							<FontAwesomeIcon className="bg-red" icon={['fas','phone']}/>
							<span className="bg-red">0796191047</span>
						</a>
						<a href="https://web.telegram.org/z/#5136906405" className="btn-icons">
							<FontAwesomeIcon className="bg-orange" icon={['fas','paper-plane']}/>
							<span className="bg-orange">@taitienty1</span>
						</a>
					</div>
				</div>

			</div>
		</footer>

	)
}

export default Footer