import React from 'react';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import images from '../../assets/images/images';

library.add(fas, fab);

const FeaturedGame = () => {
    return (
        <section>
			<div className="container-fluid">
				<div className="main main-home">
					<div className="list-lode containers-custom pb-120">
						<div className="row">
							<div className="col-xs-12 mtb-40">
								<h2 className="lode-title">Đánh Đề <span>Trực Tuyến</span></h2>
								<p className="lode-des">Chúng tôi là nhà cái uy tín nhất, với nguồn vốn từ Macau. Tỉ lệ trả
									thưởng cực cao , rút &
									nạp tiền nhanh, an toàn.</p>
							</div>

						</div>
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="box photo-1">
									<div className="bg-box mb" style={{backgroundImage:`url(${images.mienbac})`}}/>
									<div className="info-box">
										<div className="bg-blur mb" style={{backgroundImage:`url(${images.mienbac})`}}/>
										<p>Tổng cược trong ngày</p>
										<h3>
											<span>$</span>
											<span>3,000,000,000</span>
											<p>18:05 - <span>Thứ 4, 16/03/2022</span></p>
										</h3>
									</div>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a className="cta-box">
										<span className="text">Đánh đề miền bắc</span>
										<span className="btn-box">
                  						<span className="bg-white"><i className="glyphicon glyphicon-play"/></span>
                					</span>
									</a>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="box photo-1">
									<div className="bg-box mt" style={{backgroundImage:`url(${images.mientrung})`}}/>
									<div className="info-box">
										<div className="bg-blur mt" style={{backgroundImage:`url(${images.mientrung})`}}/>
										<p>Tổng cược trong ngày</p>
										<h3>
											<span>$</span>
											<span>3,000,000,000</span>
										</h3>
									</div>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a href="" className="cta-box">
										<span className="text">Đánh đề miền trung</span>
										<span className="btn-box">
										<span className="bg-white"><i className="glyphicon glyphicon-play"/></span>
                					</span>
									</a>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="box photo-1">
									<div className="bg-box mn" style={{backgroundImage:`url(${images.miennam})`}}/>
									<div className="info-box">
										<div className="bg-blur mn" style={{backgroundImage:`url(${images.miennam})`}}/>
										<p>Tổng cược trong ngày</p>
										<h3>
											<span>$</span>
											<span>3,000,000,000</span>
										</h3>
									</div>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a href="" className="cta-box">
										<span className="text">Đánh đề miền nam</span>
										<span className="btn-box">
									  <span className="bg-white"><i className="glyphicon glyphicon-play"/></span>
									</span>
									</a>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="box photo-1">
									<div className="bg-box" style={{backgroundImage:`url(${images.mienbac})`}}/>
									<div className="info-box">
										<div className="bg-blur" style={{backgroundImage:`url(${images.mienbac})`}}/>
										<p>Tổng cược trong ngày</p>
										<h3>
											<span>$</span>
											<span>3,000,000,000</span>
										</h3>
									</div>
									{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
									<a href="" className="cta-box">
										<span className="text">Lô tô siêu tốc</span>
										<span className="btn-box">
									  <span className="bg-white"><i className="glyphicon glyphicon-play"/></span>
									</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div>
						<div className="row">
							<div className="col-md3">
								<img className="img-header" src={images.doso} width="100%" alt=""/>
							</div>
							<div className="col-md-9">
								<div className="box-title-header">
									<p className="title-box-number">
										Dò số
									</p>
									<p className="des-box-number">Dò số nhanh, chính xác và cùng tán gẫu với các thánh đề
										khác</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2">
							<div>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a href=""><img src={"assets/images/lode/l1.png"} alt="" width="100%"/></a>
							</div>
						</div>
						<div className="col-md-8">
							{/*<script language="javascript" src="https://www.minhngoc.net.vn/jquery/jquery-1.7.2.js"></script>*/}

							{/*<div id="box_kqxs_minhngoc">*/}
							{/*	<script*/}
							{/*		language="javascript"> bgcolor = "#9c0303"; titlecolor = "#ffffff"; dbcolor = "#0000c2";*/}
							{/*		fsize = "14px"; kqwidth = "500px";*/}
							{/*	</script>*/}
							{/*	<script language="javascript" src="https://www.minhngoc.net.vn/getkqxs/mien-bac.js"></script>*/}
							{/*</div>*/}
						</div>
						<div className="col-md-2">
							<div>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a href=""><img src={"assets/images/lode/l1.png"} alt="" width="100%"/></a>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a href=""><img src={"assets/images/lode/l1.png"} alt="" width="100%"/></a>
							</div>
						</div>
					</div>
				</div>
				<div className="nap" id="nap">
					<div className="container">
						<div className="row h-100">
							<div className="col-md-4 content-center">
								<div className="row ">
									<div className="col-md-5">
										<img src={images.naptien} width="100%" alt=""/>
									</div>
									<div className="col-md-7 block-title-center">
										<p className="txt-title-about">Hướng dẫn</p>
										<p className="txt-highlight-about">Nạp tiền</p>
									</div>
								</div>
								<div className="row w-100">
									<div className="col-md-5"/>
									<div className="col-md-7 text-left">
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href="" className="info_icon" >
											<span className="text-hover">Xem ngay</span>
											<span><i className="fas fa-arrow-right"/></span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 content-center">
								<div className="row ">
									<div className="col-md-5">
										<img src={images.ruttien} width="100%" alt=""/>
									</div>
									<div className="col-md-7 block-title-center">
										<p className="txt-title-about">Hướng dẫn</p>
										<p className="txt-highlight-about">Rút tiền</p>
									</div>
								</div>
								<div className="row w-100">
									<div className="col-md-5"/>
									<div className="col-md-7 text-left">
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href="" className="info_icon" >
											<span className="text-hover">Xem ngay</span>
											<span><i className="fas fa-arrow-right"/></span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-md-4 content-center">
								<div className="row ">
									<div className="col-md-5">
										<img src={images.danhde} width="100%" alt=""/>
									</div>
									<div className="col-md-7 block-title-center">
										<p className="txt-title-about">Kinh nghiệm</p>
										<p className="txt-highlight-about">Đánh đề</p>
									</div>
								</div>
								<div className="row w-100">
									<div className="col-md-5"/>
									<div className="col-md-7 text-left">
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a href="" className="info_icon" >
											<span className="text-hover">Xem ngay</span>
											<span><i className="fas fa-arrow-right"/></span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default FeaturedGame