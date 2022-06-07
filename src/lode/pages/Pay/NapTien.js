import React, {useEffect, useState} from 'react';
import CommonMain from "../../CommonMain";
import {useForm} from "react-hook-form";
import formatNumber from '../../../hooks/formatNumber'
import Support from "../../components/Support";
import {useUserStore} from "../../../stores/useUserStore";
import {toast} from "react-toastify";

import {useBankStore} from "../../../stores/useBankStore";
import {Link} from "react-router-dom";
import PATH from "../../../routes/path";
import ConfirmNap from "../../components/ConfirmNap";

const NapTien = () => {

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

	const {list,load,loadAdmin,listAd} = useBankStore(state => ({
		load: state.load,
		list: state.dataResult,
		loadAdmin: state.loadAdmin,
		listAd: state.dataBankAd
	}))
	const [des,setDes] = useState();
	useEffect(()=>{
		async function fetchData(){
			await loadAdmin()
			await load()
			setDes(Math.floor(Math.random()*(100-90000))+100000)
		}
		fetchData()
	},[load, loadAdmin])
	const {user} = useUserStore(state => ({
		user: state.user
	}))
	const [data,setData] = useState()
	const {handleSubmit, register, reset} = useForm();
	const onSubmit = async data => {
		if(user?.username !== undefined) {
			data.bank_id_to = listAd[bankId]?._id
			data.type = "plus"
			data.description = des
			// await tranf(data)
			// setDes(Math.floor(Math.random()*(100-90000))+100000)
			setData(data)
			reset()
			setDes(Math.floor(Math.random()*(100-90000))+100000)
		}
		else {
			toast('Vui lòng đăng nhập')
		}
	};
	const [bankId,setBank] = useState();
	const onchange = value =>{
		setBank(value)
	}
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
								<div>
									<h4 className="title-deposit">Nạp thủ công</h4>
									<p className="detail-deposit">An toàn, nhanh chóng, hiệu quả,
										bảo mật</p>
								</div>
								<div className="row">
										<div className="col-md-6 container" style={{padding:"6px",border:"1px solid #6b6b6b",borderRadius:'5px'}}>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_bank">Ngân hàng(<font
															color="red"><b>*</b></font>)</label>
													</div>
													<div className="col-md-8">
														<select
															className="form-control form-custom"
															placeholder={"Chọn mệnh giá"}
															onChange={(e)=>{
																onchange(e.target.value)
															}}
														>
															<option value="" disabled selected hidden>Chọn ngân hàng</option>
															{listAd.map((it,index)=>(
																<option  key={it._id} value={index}>{`${it.bank_name} - ${it.bank_account_name}`}</option>
															))}
														</select>
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_bank">Tên tài khoản</label>
													</div>
													<div className="col-md-8">
														<span>{listAd[bankId]?.bank_account_name}</span>
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_bank">Số tài khoản</label>
													</div>
													<div className="col-md-8">
														<span>{listAd[bankId]?.bank_number}</span>
													</div>
												</div>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-md-4">
														<label className="label-cus"
															   htmlFor="from_overview_naptien_bank">Nội dung chuyển khoản</label>
													</div>
													<div className="col-md-8">
														<span>{des}</span>
													</div>
												</div>
											</div>
											<small>LƯU Ý: Để Tránh Cập Nhật Tiền Chậm! Vui Lòng điền mã số "Nội Dung Chuyển
												Tiền" khi Chuyển Tiền Ngân Hàng tại Winclub24h</small>
										</div>
										<div className="col-md-6" style={{maxWidth:"100%"}}>
											<form>
												<div className="form-group">
													<div className="row">
														<div className="col-md-5">
															<label className="label-cus"
																   htmlFor="from_overview_naptien_customer">Tài khoản của bạn(<font
																	color="red"><b>*</b></font>)</label>
														</div>
														<div className="col-md-7">
															<select
																{...register("bank_id_from")}
																className="form-control form-custom"
															>
																<option value="" disabled selected hidden>Chọn tài khoản</option>
																{list.map((it)=>(
																	<option  key={it._id} value={it._id}>{`${it.bank_name} - ${user?.name}`}</option>
																))}
															</select>
															<small className={"m-bank"}><Link to={PATH.BANK}>Quản lý tài khoản ngân hàng</Link></small>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-5">
															<label className="label-cus"
																   htmlFor="from_overview_naptien_bank">Số tiền(<font
																color="red"><b>*</b></font>)</label>
														</div>
														<div className="col-md-7">
															<select
																{...register("money")}
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
															<a href="/#" onClick={handleSubmit(onSubmit)} data-toggle={`${user?.username !== undefined ? 'modal':''}`} data-target={`${user?.username !== undefined ? '#confirm':''}`} className={"mybtn1"}>Xác nhận</a>
														</div>
													</div>
												</div>
											</form>
										</div>
								</div>
								<div className="row mt-0-30" style={{marginTop:"20px"}}>
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
					<ConfirmNap data={data} bankId={bankId}/>
				</div>
			</section>
		</CommonMain>
	);
};

export default NapTien;
