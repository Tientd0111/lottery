import React from 'react';
import CommonMain from "../../CommonMain";
import {useUserStore} from "../../../stores/useUserStore";
import InfoUserRow from "../../components/InfoUserRow";
import Path from "../../../routes/path";
import ButtonBase from "../../components/ButtonBase";
import { useHistory } from 'react-router-dom'
import Support from "../../components/Support";
import cookies from "../../../contants/cookie";

const InfoPage = () => {
	const {user, setUser , logout, loading} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser,
		logout: state.logout,
		loading: state.loading
	}))

	const history = useHistory()

	const logoutSection = async () => {
		await logout()
		setUser(undefined)
		cookies.remove('refreshToken')
		localStorage.removeItem('key')
		history.push(Path.HOME)
		window.location.reload()
	}

	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member member-tabs--content tab-pane col-md-9" id="deposit">
						<div className={"row"}>
							<div className={"col-md-6"}>
								<ul className="nav nav-tabs" id="myTab">
									<li className="nav-item ">
										<a className="nav-link active" data-toggle="tab" href="/#">Thông tin tài khoản</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="tab-content bg-content" id="myTabContent">
							<div className="form-deposit-bank ">
								<div className="row">
									<div className="col-md-10 p-20" style={{maxWidth:"100%"}}>
										<h4 className="title-deposit">Thông tin cá nhân</h4>
										<p className="detail-deposit">Thông tin cá nhân của bạn sẽ được bảo mật tối đa</p>
										<InfoUserRow name={'Họ tên'} value={user?.name}/>
										<InfoUserRow name={'Email'} value={user?.email}/>
										<InfoUserRow name={'Số điện thoại'} value={user?.phone_number}/>
										<InfoUserRow name={'Tên đăng nhập'} value={user?.username}/>
										{/*<InfoUserRow name={'Số dư'} value={formatNumber(user?.balance)}/>*/}
										<div className="form-group">
											<div className="row">
												<div className="col-md-4">
												</div>
												<div className="col-md-8">
													<ButtonBase onClick={logoutSection} isLoading={loading} text={'Đăng xuất'}/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={"col-md-3"}><Support/></div>
				</div>
			</section>
		</CommonMain>
	);
};

export default InfoPage;