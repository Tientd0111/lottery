import React, {useLayoutEffect} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import PATH from '../../routes/path';
import {useUserStore} from "../../stores/useUserStore";
import formatNumber from '../../hooks/formatNumber'
import cookies from "../../contants/cookie";
import {useTxStore} from "../../stores/useTxStore";
import CsLink from "./CsLink";
import FormInput from "./FormInput";
import {useForm} from "react-hook-form";
import {callService} from "../../apis/baseRequest";
import {toast} from "react-toastify";

library.add(fas, fab);

const Header = () => {

	const {user, reload} = useUserStore(state =>({
		user: state.user,
		reload:state.reload,
	}))
	const {setVisitableTx} = useTxStore(state => ({
		setVisitableTx: state.setVisitableTx,
	}))

	useLayoutEffect(()=>{
		if(localStorage.getItem('key') && cookies.get('refreshToken'))
			reload()
	},[]);
	const {control,handleSubmit, getValues, reset} = useForm()

	const claimCode = () => {
		callService('gift-code/claim-code', 'POST', {code: getValues('code')},true)
			.then((res)=> {
				toast.success(res.msg)
				reset({code: ''})
			})
			.catch((err)=> {
				toast.error(err.response.data?.msg)
				reset({code: ''})
			})
	}

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
											{user&&(
												<form onSubmit={handleSubmit()}>
													<div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
														<FormInput name={'code'} placeholder={'Nhập gift code...'} control={control}/>
														<FontAwesomeIcon
															onClick={claimCode}
															style={{cursor: 'pointer', position: 'absolute', top: '8px', right: '6px'}}
															icon={['fas','gift']}
														/>
													</div>
												</form>
											)}
										</li>
									</ul>
								</div>
								<div className="right-content">
									<ul className="right-list">
										<li>
											<div className="cart-icon tm-dropdown">
												<p>{user?<span>Số dư: {formatNumber(user.balance)}</span>:<span style={{opacity: 0}}>a</span>}</p>
											</div>
										</li>
										<li className={"nav-item dropdown li_cha"}>
											{user?.username === undefined?(
											<a href="/#" className={"sign-in"} data-toggle={"modal"} data-target={"#login"}>
												{'Đăng nhập'}
											</a>): user?.username}
											{user&&(
											<ul className={"ul1"}>
												<li className={"li1"} style={{display:""}}>
													<Link to={PATH.INFO}>Tài khoản</Link>
												</li>
											</ul>)}
										</li>
										<li>
											{user&&(
												<FontAwesomeIcon
													onClick={reload}
													style={{cursor: 'pointer'}}
													className={"icons-spin icn-sp"}
													icon={['fas','spinner']}
												/>)}
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
								<button className="navbar-toggler" type="button"
										data-toggle="collapse" data-target="#main_menu"
										aria-controls="main_menu" aria-expanded="false"
										aria-label="Toggle navigation">
									<span className="navbar-toggler-icon" />
								</button>
								<div className="collapse navbar-collapse fixed-height" id="main_menu">
									<ul className="navbar-nav ml-auto">
										<CsLink to={PATH.HOME}>{'Trang chủ'}</CsLink>
										{user?.kyc === false ?
											<li className="nav-item">
												<a href={"/#"} className={'nav-link'} data-toggle="modal" data-target="#kyc">
													Xác minh
													<div className="mr-hover-effect"/>
												</a>
											</li>:''
										}
										<CsLink to={null}>{'Thể thao'}</CsLink>
										<CsLink onClick={()=>{setVisitableTx(true)}} to={null}>{'Game'}</CsLink>
										<CsLink to={PATH.LOTTERY}>{'Lô đề'}</CsLink>
										<li className="nav-item dropdown">
											<a className="nav-link dropdown-toggle"
											   href="/#" role="button"
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
											   href="/#" role="button"
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

