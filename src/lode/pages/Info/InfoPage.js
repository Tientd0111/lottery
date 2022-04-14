import React from 'react';
import CommonMain from "../../CommonMain";
import {useCookies} from "react-cookie";
import {useUserStore} from "../../../stores/useUserStore";
import InfoUserRow from "../../components/InfoUserRow";
import formatNumber from "../../../hooks/formatNumber";

const InfoPage = () => {

	const [cookies, removeCookie] = useCookies(['cookie-user']);
	const {user, setUser} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser
	}))
	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className="tabs-main main-content-member member-tabs--content tab-pane" id="deposit">
					<div className={"row"}>
						<div className={"col-md-6"}>
							<ul className="nav nav-tabs" id="myTab">
								<li className="nav-item ">
									<a className="nav-link active" data-toggle="tab" href="#deposit-bank">Thông tin tài khoản</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="tab-content bg-content" id="myTabContent">
						<div className="form-deposit-bank ">
							<div className="row">
								<form >
									<div className="col-md-10 p-20" style={{maxWidth:"100%"}}>
										<h4 className="title-deposit">Thông tin cá nhân</h4>
										<p className="detail-deposit">Thông tin cá nhân của bạn sẽ được bảo mật tối đa</p>
										<InfoUserRow name={'Họ tên'} value={user?.name}/>
										<InfoUserRow name={'Email'} value={user?.email}/>
										<InfoUserRow name={'Số điện thoại'} value={user?.phone_number}/>
										<InfoUserRow name={'Tên đăng nhập'} value={user?.username}/>
										<InfoUserRow name={'Số dư'} value={formatNumber(user?.balance)}/>
										<div className="form-group">
											<div className="row">
												<div className="col-md-4">
												</div>
												<div className="col-md-8">
													<button
														onClick={()=>{
															removeCookie("cookie-user")
															setUser(undefined)}}
															className="btn btn-signin form-control but"
														type="submit" >Đăng xuất</button>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</CommonMain>
	);
};

export default InfoPage;