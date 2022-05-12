import React from 'react';
import CommonMain from "../../CommonMain";
import constant from "../../../contants/constant";
import {useForm} from "react-hook-form";
import formatNumber from "../../../hooks/formatNumber";
import {UsePayStores} from "../../../stores/usePayStores";
import Support from "../../components/Support";
import {useUserStore} from "../../../stores/useUserStore";
import {toast} from "react-toastify";
import ButtonBase from "../../components/ButtonBase";

const RutTien = () => {
	const bank_name  = [
		{id: constant.MB_BANK,name:constant.MB_BANK,stk:'1234123131'},
		{id: constant.TECH,name:constant.TECH,stk:'123412323'},
		{id: constant.VIET,name:constant.VIET,stk:'1234122341'},
		{id: constant.BIDV,name:constant.BIDV,stk:'1234313123'},
		{id: constant.TP,name:constant.TP,stk:'1234123656'}
	]
	const money=[
		{val:'10000'},
		{val:'20000'},
		{val:'50000'},
		{val:'100000'},
		{val:'200000'},
		{val:'500000'},
		{val:'1000000'},
		{val:'3000000'},
		{val:'5000000'},
	]
	const {handleSubmit, register,formState: { errors }} = useForm();
	const {withdraw, loading} = UsePayStores(state => ({
		loading: state.loading,
		withdraw: state.withdraw,
	}))

	const {user} = useUserStore(state =>({
		user:state.user
	}))
	const onSubmit = async data => {
		if(user?.username !== undefined){
			await withdraw(data)
		}else {
			toast("Vui lòng đăng nhập")
		}
	};

	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member withdraw-tabs--content tab-pane col-md-9" id="withdraw">
						<div className={"col-md-12"}>
							<div className="member-tabs--content">
								<ul className="nav nav-tabs" id="myTab">
									<li className="nav-item ">
										<a className="nav-link active" data-toggle="tab" href="#nope">Rút tiền</a>
									</li>
								</ul>
							</div>
							<form name="rut-tien" className="p-20" id="frm-withdraw-make" onSubmit={handleSubmit(onSubmit)}>
								<div className="row">
									<div className="col-md-12 p-0-30">
										<div className="row">
											<div className="col-md-8">
												<h4 className="title-deposit">Rút tiền siêu nhanh</h4>
												<p className="detail-deposit">An toàn, nhanh chóng, hiệu quả, bảo
													mật</p>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_bank"
																   className="label-cus">Chọn ngân hàng (<font
																color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<select
																{...register("bank_name")}
																className="form-control form-custom"
																placeholder={"Chọn ngân hàng"}>
																{bank_name.map((item,index)=>(
																	<option value={item.id} key={item.id}>{item.name}</option>
																))}
															</select>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_bank"
																   className="label-cus">Tên người nhận (<font
																color="red" >
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<input
																{...register("bank_account_name_to",{required:true})}
																type="text"
																className="form-control form-custom" />
																<span style={{color:"red",fontSize:"15px"}}>
																	{errors.bank_account_name_to?.type === 'required' && "Tên người nhận không được để trống"}
																</span>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_bank"
																   className="label-cus">Số tài khoản nhận(<font
																color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<input
																{...register("bank_account_number_to",{required:true})}
																type="text"
																className="form-control form-custom"/>
															<span style={{color:"red",fontSize:"15px"}}>
																{errors.bank_account_number_to?.type === 'required' && "Số tài khoản không được để trống"}
															</span>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_tien"
																   className="label-cus">Số tiền (<font color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<select
																{...register("money_transfer")}
																className="form-control form-custom"
																placeholder={"Chọn mệnh giá"}>
																{money.map((item,index)=>(
																	<option value={item.val} key={item.val}>{formatNumber(parseInt(item.val))}</option>
																))}
															</select>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
														</div>
														<div className="col-md-8">
															<div className="col-md-8" style={{maxWidth:"100%"}}>
																<ButtonBase text={"Rút tiền"} isLoading={loading}/>
															</div>
														</div>

													</div>
												</div>
											</div>
										</div>

									</div>
								</div>
							</form>
						</div>
					</div>
					<div className={"col-md-3"}><Support/></div>
				</div>
			</section>
		</CommonMain>
	);
};

export default RutTien;