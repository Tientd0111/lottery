import React, {useState} from 'react';
import CommonMain from "../../CommonMain";
import {useForm} from "react-hook-form";
import {UsePayStores} from "../../../stores/usePayStores";
import formatNumber from '../../../hooks/formatNumber'
import Support from "../../components/Support";
import {useUserStore} from "../../../stores/useUserStore";
import {toast} from "react-toastify";
const NapTien = () => {

	const money=[
		{val:'10'},
		{val:'20'},
		{val:'50'},
		{val:'100'},
		{val:'200'},
		{val:'500'},
		{val:'1000'},
		{val:'3000'},
		{val:'5000'},
	]
	const {tranf, dataResult,confirmData} = UsePayStores(state => ({
		tranf: state.tranf,
		dataResult: state.dataResult,
		confirmData: state.confirmData,
	}))
	const {user} = useUserStore(state => ({
		user: state.user
	}))
	const {handleSubmit, register,formState: { errors }} = useForm();
	const onSubmit = async data => {
		if(user?.username !== undefined) {
			await tranf(data)
		}
		else {
			toast('Vui lòng đăng nhập')
		}
	};

	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member member-tabs--content tab-pane col-md-9" >
						<ul className="nav nav-tabs" id="myTab">
							<li className="nav-item ">
								<a className="nav-link active" data-toggle="tab" href="/#">Nạp thủ
									công</a>
							</li>

						</ul>
						<div className="tab-content bg-content" id="myTabContent">
							<div className="form-deposit-bank ">
								<div className="row">
									<form onSubmit={handleSubmit(onSubmit)}>
										<div className="col-md-10 p-20" style={{maxWidth:"100%"}}>
											<h4 className="title-deposit">Nạp thủ công</h4>
											<p className="detail-deposit">An toàn, nhanh chóng, hiệu quả,
												bảo mật</p>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_customer">Tên
															người gửi (<font
																color="red"><b>*</b></font>)</label>
													</div>
													<div className="col-md-8">
														<input {...register("bank_account_name_from",{required:true})}
															   type="text"
															   className="form-control form-custom"/>
														<span style={{color:"red",fontSize:"15px"}}>
															{errors.bank_account_name_from?.type === 'required'
																&& "Tên người gửi không được để trống"}
														</span>
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_customer">Tài khoản người gửi (<font
															color="red"><b>*</b></font>)</label>
													</div>
													<div className="col-md-8">
														<input {...register("bank_account_number_from",{required:true})}
															   type="text"
															   className="form-control form-custom"/>
														<span style={{color:"red",fontSize:"15px"}}>
															{errors.bank_account_number_from?.type === 'required'
																&& "Stk người gửi không được để trống"}
														</span>
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_bank">Số tiền(<font
															color="red"><b>*</b></font>)</label>
													</div>
													<div className="col-md-8">
														<select
															{...register("money_transfer")}
															className="form-control form-custom"
															placeholder={"Chọn mệnh giá"}>
															{money.map((item)=>(
																<option value={item.val} key={item.val}>
																	{formatNumber(parseInt(item.val))}
																</option>
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
														<input
															className="btn btn-signin form-control but"
															   type="submit" value="Nạp tiền"/>
													</div>
												</div>
											</div>
										</div>
									</form>
									{dataResult === undefined?'':
										<div className="col-md-4 container-fluid" style={{marginTop:"120px"}}>
											<h5 style={{color:"#383636"}}>Vui lòng chuyển khoản như sau</h5>
											<label style={{color:"#000"}}>
												Ngân hàng:
												<span style={{color:"red"}}> {dataResult.bank_name}</span>
											</label>
											<label style={{color:"#000"}}>
												Tên người nhận:
												<span style={{color:"red"}}> {dataResult.bank_account_name}</span>
											</label>
											<label style={{color:"#000"}}>
												Số tài khoản:
												<span style={{color:"red"}}> {dataResult.bank_number}</span>
											</label>
											<label style={{color:"#000"}}>
												Nội dung chuyển khoản:
												<span style={{color:"red"}}> {dataResult.description_bank}</span>
											</label>
											<button
												className="btn btn-signin form-control but"
												onClick={()=>{
													confirmData({id: dataResult.id})
												}
												}>Xác nhận đã chuyển</button>
										</div>
									}
								</div>
								<div className="row mt-0-30">
									<div className="col-md-12 box-border box_content">
										<p className="guide-deposit">Hướng dẫn nhập Mã giao dịch:</p>
										<p className="guide-help">
											<i className="icons-hand"></i> Nếu
											bạn <span>chuyển qua ATM</span> vui lòng
											điền <span>"Số Tài Khoản Ngân Hàng của bạn"</span>.</p>
										<p className="guide-help"><i className="icons-hand"></i> Nếu
											bạn <span>chuyển bằng hình thức Nộp Tiền mặt tại quầy</span> vui lòng điền
											<span>"Họ Và Tên người nộp tiền"</span>.</p>
										<p className="guide-help"><i className="icons-hand"></i> Nếu
											bạn <span>chuyển qua Internetbanking</span>
											thì tùy ngân hàng sẽ có <span>"Mã Giao Dịch"</span> khác
											nhau.</p>
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

export default NapTien;