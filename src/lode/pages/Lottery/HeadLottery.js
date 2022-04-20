import React, {useEffect, useState} from "react";
import Constant from "../../../contants/constant";
import {useFormContext} from "react-hook-form";
import moment from "moment";
import constant from "../../../contants/constant";

const HeadLottery = ({pageCallback = () => {}}) =>{

	const {watch, register} = useFormContext()

	const loadbet = [
		{id: Constant.DANH_LO, name: 'Đánh Lô'},
		{id: Constant.BA_CANG, name: '3 Càng'},
		{id: Constant.DANH_DE, name: 'Đánh Đề'},
		{id: Constant.DAU_DUOI, name: 'Đầu Đuôi'},
		{id: Constant.LO_XIEN, name: 'Lô Xiên'},
	]

	const arrDai = [
		{id: Constant.DAI_MB, name: 'Miền Bắc'},
		{id: Constant.DAI_MN, name: 'Miền Nam'},
		{id: Constant.DAI_MT, name: 'Miền Trung'},
	]

	useEffect(()=>{
		pageCallback(loadbet[0].id)
	},[])

	const setTabHeader = (code) => {
		pageCallback(code)
	}

	return(
		<section>
			<div className="row callback">
				<div className="col-md-4">
					<div>
						<label htmlFor="commission_rate" className="label-cus">Đài</label>
						<select {...register('mien')} id="commission_rate"
								className="form-control form-option"
								placeholder="Chọn đài">
							{arrDai.map((item)=>(
								<option key={item.id} value={item.id}>{item.name}</option>
							))}
						</select>
					</div>
				</div>
				<div className="col-md-4 form-day">
					<label htmlFor="commission_rate" className="label-cus">Ngày</label>
					<input {...register('ngayDanh', {value: moment().format('YYYY-MM-DD')})} type="date" className="form-control form-option"/>
				</div>
			</div>
			<div className="kieu-danh row">
				{loadbet.map((item,index)=>(
					<div key={index} className={`col-md-2 kd ${watch('kieuDanh') === item.id ? 'act': ''}`} onClick={()=>setTabHeader(item.id)}>
						<div className="btn-checkbox">
						 <span className="circle">
							<span className="circle-dots"/>
						 </span>
							{item.name}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
export default HeadLottery;