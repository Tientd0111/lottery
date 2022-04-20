import React, {useEffect} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import PATH from '../../routes/path';
import {useUserStore} from "../../stores/useUserStore";
import {useCookies} from "react-cookie";
import formatNumber from '../../hooks/formatNumber'

library.add(fas, fab);

const Header = () => {

	const lotterys = [
		{
			name: 'Miền bắc',
			link: '?name=mienbac'
		},
		{
			name: 'Miền trung',
			link: '?name=mientrung'
		},
		{
			name: 'Miền nam',
			link: '?name=miennam'
		},
		{
			name: 'Lô đề siêu tốc',
			link: '?name=sieutoc'
		}
	]
	const pays  =[
		{
			name: 'Nạp tiền',
			link:'?name=naptien'
		},
		{
			name: 'Rút tiền',
			link:'?name=ruttien'
		},
		{
			name: 'Lịch sử nạp',
			link:'?name=historyPay'
		},
	]

	const {user, setUser,reload} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser,
		reload:state.reload
	}))
	const [cookies, removeCookie] = useCookies(['cookie-user']);

	useEffect(()=>{
		setUser(cookies['cookie-user'])
	},[])
	return (
		<header className="header">
			{/* Top Header Area Start */}
			<section className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="left-content">
									<ul className="left-list">
										<li>
											<p>
												<FontAwesomeIcon icon={['fas','headset']} />{' Hỗ trợ'}
											</p>
										</li>
									</ul>
								</div>
								<div className="right-content">
									<ul className="right-list">
										<li>
											<div className="cart-icon tm-dropdown">
												<p>Ví :<span>{formatNumber(user?.balance)}</span></p>
											</div>
										</li>
										<li className={"nav-item dropdown li_cha"}>
											{/*{userCook?userCook.name*/}
											{/*	: <a href="/#" className={"sign-in"} data-toggle={"modal"} data-target={"#login"}>Đăng nhập</a>*/}
											{/*}*/}
											{user?.username === undefined?(<a href="/#" className={"sign-in"} data-toggle={"modal"} data-target={"#login"}>
												{'Đăng nhập'}
											</a>): user?.username}
											{user?.username !== undefined?<ul className={"ul1"}>
												<li className={"li1"} style={{display:""}}>
													<Link to={PATH.INFO}>Tài khoản</Link>
												</li>

											</ul>:''}
										</li>
										<li>
											{user?.username !== undefined?
												<a href="/#" onClick={()=>{reload()}}>
													<FontAwesomeIcon className={"icons-spin icn-sp"} icon={['fas','spinner']}/>
												</a>:''}

										</li>

									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Top Header Area End */}
			{/*Main-Menu Area Start*/}
			<div className="mainmenu-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<nav className="navbar navbar-expand-lg navbar-light">
								<a className="navbar-brand" href="/#"/>
								<a className="navbar-brand" href="#">
									{/* <img src="https://hqltech.vn/assets/images/logo.svg" alt="" /> */}
								</a>
								<button className="navbar-toggler" type="button"
										data-toggle="collapse" data-target="#main_menu"
										aria-controls="main_menu" aria-expanded="false"
										aria-label="Toggle navigation">
									<span className="navbar-toggler-icon" />
								</button>
								<div className="collapse navbar-collapse fixed-height" id="main_menu">
									<ul className="navbar-nav ml-auto">
										<li className="nav-item">
											<Link className="nav-link active" to={PATH.HOME}>
												{'Trang chủ'}
												<div className="mr-hover-effect"/>
											</Link>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle"
											   href="#" role="button"
											   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Lô đề'}
												<div className="mr-hover-effect" />
											</a>
											<ul className="dropdown-menu">
												{lotterys.map((item,index)=>(
													<li key={index}>
														<Link className="dropdown-item" to={`${PATH.LOTTERY}${item.link}`}>
															<FontAwesomeIcon icon={['fas','angle-double-right']} /> {item.name}
														</Link>
													</li>
												))}
											</ul>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle"
											   href="#" role="button"
											   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Ví'}
												<div className="mr-hover-effect" />
											</a>
											<ul className="dropdown-menu">
												<li>
													<Link className="dropdown-item" to={PATH.NAP}>
														<FontAwesomeIcon icon={['fas','angle-double-right']} />Nạp tiền
													</Link>
												</li>
												<li>
													<Link className="dropdown-item" to={PATH.RUT}>
														<FontAwesomeIcon icon={['fas','angle-double-right']} />Rút tiền
													</Link>
												</li>
											</ul>
										</li>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle"
											   href="#" role="button"
											   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												{'Lịch sử'}
												<div className="mr-hover-effect" />
											</a>
											<ul className="dropdown-menu">
												<li>
													<Link className="dropdown-item" to={PATH.HISTORYBET}>
														<FontAwesomeIcon icon={['fas','angle-double-right']} />Lịch sử cá cược
													</Link>
												</li>
												<li>
													<Link className="dropdown-item" to={PATH.HISTORYNAP}>
														<FontAwesomeIcon icon={['fas','angle-double-right']} />Lịch sử nạp tiền
													</Link>
												</li>
												<li>
													<Link className="dropdown-item" to={PATH.HISTORYRUT}>
														<FontAwesomeIcon icon={['fas','angle-double-right']} />Lịch sử rút tiền
													</Link>
												</li>
											</ul>
										</li>

										<li className="nav-item">
											<a className="nav-link" href="/#">Liên hệ
												<div className="mr-hover-effect" /></a>
										</li>
									</ul>
									<a href="/#" className="mybtn1" data-toggle="modal" data-target="#signin"> {'Tham gia ngay'}</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
			{/*Main-Menu Area Start*/}
		</header>
	)
}

export default Header

