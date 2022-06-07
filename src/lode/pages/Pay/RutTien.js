import React, {useEffect} from 'react';
import CommonMain from "../../CommonMain";
import {useForm} from "react-hook-form";
import formatNumber from "../../../hooks/formatNumber";
import {UsePayStores} from "../../../stores/usePayStores";
import Support from "../../components/Support";
import {useUserStore} from "../../../stores/useUserStore";
import {toast} from "react-toastify";
import ButtonBase from "../../components/ButtonBase";
import {useBankStore} from "../../../stores/useBankStore";
import {Link} from "react-router-dom";
import PATH from "../../../routes/path";

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

const RutTien = () => {

	const {handleSubmit, register, setValue} = useForm();
	const {tranf, loading} = UsePayStores(state => ({
		loading: state.loading,
		tranf: state.tranf,
	}))
	const {load, list} = useBankStore(state => ({
		load: state.load,
		list: state.dataResult,
	}))
	useEffect(()=>{
		async function fetchData(){
			const res = await load()
			if(res.length > 0) setValue('bank_id_to', res[0]?._id)
		}
		fetchData()
	},[])
	const {user} = useUserStore(state =>({
		user:state.user
	}))
	const onSubmit = async data => {
		if(user?.username !== undefined){
			data.type = "minus"
			await tranf(data)
		}else {
			toast.error("Vui lòng đăng nhập")
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
																   className="label-cus">Chọn tài khoản nhận (<font
																color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<select
																{...register("bank_id_to")}
																className="form-control form-custom"
																placeholder={"Chọn ngân hàng"}
																defaultValue={list[0]?._id}
															>
																{list.map((it)=>(
																	<option  key={it._id} value={it._id}>{`${it.bank_name} - ${user?.name}`}</option>
																))}
															</select>
															<small className={"m-bank"} ><Link to={PATH.BANK}>Quản lý tài khoản ngân hàng</Link></small>
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
																{...register("money")}
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
