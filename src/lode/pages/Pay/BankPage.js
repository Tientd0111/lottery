import React, {useEffect} from 'react';
import ButtonBase from "../../components/ButtonBase";
import CommonMain from "../../CommonMain";
import {useForm} from "react-hook-form";
import constant from "../../../contants/constant";
import {toast} from "react-toastify";
import {useUserStore} from "../../../stores/useUserStore";
import {useBankStore} from "../../../stores/useBankStore";

const BankPage = () => {
	const {register, handleSubmit, formState: {errors}, reset} = useForm()
	const {user} = useUserStore()
	const bank_name = [
		{id: 'Agribank', name: 'Agribank'},
		{id: 'Ngân hàng Xây dựng', name: 'Ngân hàng Xây dựng'},
		{id: 'Oceanbank', name: 'Oceanbank'},
		{id: 'BIDV', name: 'BIDV'},
		{id: 'VietinBank', name: 'VietinBank'},
		{id: 'Vietcombank', name: 'Vietcombank'},
		{id: 'VPBank', name: 'VPBank'},
		{id: 'MB', name: 'MB'},
		{id: 'Techcombank', name: 'Techcombank'},
		{id: 'ACB', name: 'ACB'},
		{id: 'SHB', name: 'SHB'},
		{id: 'HDBank', name: 'HDBank'},
		{id: 'Sacombank', name: 'Sacombank'},
		{id: 'VIB', name: 'VIB'},
		{id: 'TPBank', name: 'TPBank'},
		{id: 'MSB', name: 'MSB'},
		{id: 'OCB', name: 'OCB'},
		{id: 'LienVietPostBank', name: 'LienVietPostBank'}
	]
	const {loading,addBank,load,list,del} = useBankStore(state => ({
		addBank: state.addBank,
		loading: state.loading,
		load: state.load,
		list: state.dataResult,
		del: state.delete
	}))
	useEffect(()=>{
		async function fetchData(){
			await load()
		}
		fetchData()
	},[load])
	const onSubmit = async data => {
		if (user?.username !== undefined) {
			await addBank(data)
			await load()
			reset()
		} else {
			toast("Vui lòng đăng nhập")
		}
	}
	const deleteItemBank = async (id) => {
		await del(id)
		load()
	}
	return (
		<CommonMain>
			<section style={{marginTop: "180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member withdraw-tabs--content tab-pane col-md-5"
						 id="withdraw" style={{marginBottom:"5px"}}>
						<div className={"col-md-12"}>
							<div className="member-tabs--content">
								<ul className="nav nav-tabs" id="myTab">
									<li className="nav-item ">
										<a className="nav-link active" data-toggle="tab" href="#nope">Ngân hàng</a>
									</li>
								</ul>
							</div>
							<form name="rut-tien" className="p-20" id="frm-withdraw-make"
								  onSubmit={handleSubmit(onSubmit)}>
								<div className="row">
									<div className="col-md-12 p-0-30">
										<h4 className="title-deposit">Tài khoản ngân hàng</h4>
										<p className="detail-deposit">Quản lý tài khoản Bank để được hỗ trợ Nạp/Rút
											nhanh chóng và nhận các chương trình khuyến mãi.</p>
										<div className="form-group">
											<div className="row rut">
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
														{bank_name.map((item) => (
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
														   className="label-cus">Số tài khoản (<font
														color="red">
														<b>*</b></font>)</label>
												</div>
												<div className="col-md-8">
													<input
														{...register("account_number", {required: true})}
														type="text"
														className="form-control form-custom"/>
													<span style={{color: "red", fontSize: "15px"}}>
															{errors.account_number?.type === 'required' && "Số tài khoản không được để trống"}
														</span>
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-md-4">
													<label htmlFor="from_overview_ruttien_bank"
														   className="label-cus">Chi nhánh (<font
														color="red">
														<b>*</b></font>)</label>
												</div>
												<div className="col-md-8">
													<input
														{...register("branch", {required: true})}
														type="text"
														className="form-control form-custom"/>
													<span style={{color: "red", fontSize: "15px"}}>
															{errors.branch?.type === 'required' && "Không được để trống mục này"}
														</span>
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-md-4">
													<label htmlFor="from_overview_ruttien_bank"
														   className="label-cus">Thành phố (<font
														color="red">
														<b>*</b></font>)</label>
												</div>
												<div className="col-md-8">
													<input
														{...register("city", {required: true})}
														type="text"
														className="form-control form-custom"/>
													<span style={{color: "red", fontSize: "15px"}}>
															{errors.city?.type === 'required' && "Không được để trống mục này"}
														</span>
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-md-4">
												</div>
												<div className="col-md-8">
													<div className="col-md-8" style={{maxWidth: "100%"}}>
														<ButtonBase text={"Xác nhận"} isLoading={loading}/>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className={"col-md-7"}>
						<div className={"main-content-member responsive-table"}>
							<table className="table table-borderless " style={{textAlign:"center"}}>
								<thead>
								<tr>
									<th scope="col">Ngân hàng</th>
									<th scope="col">Số tài khoản</th>
									<th scope="col">#</th>
								</tr>
								</thead>
								<tbody>
								{list.map((it)=>(
									<tr key={it._id}>
										<td>{it.bank_name}</td>
										<td>{it.account_number}</td>
										<td><span className={"btn-del"} onClick={()=>deleteItemBank(it._id)}>xóa</span></td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</CommonMain>
	);
};

export default BankPage;
