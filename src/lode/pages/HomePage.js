import React from 'react';
import images from '../../assets/images/images';
import CommonMain from "../CommonMain";
import FeaturedGame from '../components/FeaturedGame';
import {Link} from "react-router-dom";
import PATH from '../../routes/path';
const HomePage = () => {
	return (
		<CommonMain>
			<div className="hero-area">
				<div>
					<div id="demo" className="carousel slide" data-ride="carousel">

						<ul className="carousel-indicators">
							<li data-target="#demo" data-slide-to="0" className="active"/>
							<li data-target="#demo" data-slide-to="1"/>
							<li data-target="#demo" data-slide-to="2"/>
						</ul>

						<div className="carousel-inner">
							<div className="carousel-item active" style={{backgroundImage: `url(${images.back_banner4})`}}>
								<div className="row banner_1" style={{marginTop:"80px"}}>
									<div className="col-lg-6 d-flex align-self-center" style={{justifyContent:'center'}}>
										<div className="left-content">
											<div className="content">
												<h5 className="subtitle">
													Lô đề 3 miền
												</h5>
												<p className="text">
													Chơi, trao đổi và tham gia
													Trả thưởng cao ...!
												</p>
												<div className="links">
													<Link to={PATH.LOTTERY} className="mybtn1 link1">Chơi ngay !</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hero-img2 d-block">
											<img src={images.banner_4} alt="HERO" />
										</div>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="row" style={{height:"511px"}}>
									<div className="col-lg-6 d-flex align-self-center" style={{paddingLeft:"50px",marginTop:"50px"}}>
										<div className="left-content">
											<div className="content">
												<h5 className="subtitle">
													Lô đề mới ra mắt
												</h5>
												<h1 className="title">
													Chơi là thắng
												</h1>
												<p className="text">
													Chơi, đầu tư, trao đổi và tham gia
													cuộc thi với phần thưởng cao tại ...!
												</p>
												<div className="links">
													<Link to={PATH.LOTTERY} className="mybtn1 link1">Bắt đầu ngay nào !</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="hero-img2 d-block">
											<img src={images.heroarea} alt="HERO" />
										</div>
									</div>
								</div>
							</div>

						</div>

					</div>

				</div>
			</div>
			<FeaturedGame/>
		</CommonMain>
	);
};

export default HomePage;