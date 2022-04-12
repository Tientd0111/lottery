import React from 'react';
import images from '../../assets/images/images';
import CommonMain from "../CommonMain";
import FeaturedGame from '../components/FeaturedGame';
const HomePage = () => {
	return (
		<CommonMain>
			<div className="hero-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 d-flex align-self-center">
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
										<a href="/#" className="mybtn1 link1">Bắt đầu ngay nào !</a>
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
			<FeaturedGame/>
		</CommonMain>
	);
};

export default HomePage;