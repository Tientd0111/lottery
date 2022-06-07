import React, {useEffect, useState} from "react";
import Constant from "../../../contants/constant";
import { useFormContext} from "react-hook-form";
import {callService} from "../../../apis/baseRequest";
import useMounted from "../../../hooks/useMounted";

const HeadLottery = ({pageCallback = () => {}}) =>{

	const {watch, register, reset} = useFormContext()
	const loadbet = [
		{id: Constant.DANH_LO, name: 'Đánh Lô'},
		{id: Constant.BA_CANG, name: '3 Càng'},
		{id: Constant.DANH_DE, name: 'Đánh Đề'},
		{id: Constant.DAU_DUOI, name: 'Đầu Đuôi'},
		{id: Constant.LO_XIEN, name: 'Lô Xiên'},
	]
	const loadbetMT = [
		{id: Constant.DANH_LO, name: 'Đánh Lô'},
		{id: Constant.BA_CANG, name: '3 Càng'},
		{id: Constant.DANH_DE, name: 'Đánh Đề'},
		{id: Constant.DAU_DUOI, name: 'Đầu Đuôi'},
		{id: Constant.XIEN, name: 'Xiên'},
	]
	const loadbetMN = [
		{id: Constant.BAO_LO, name: 'Bao Lô'},
		{id: Constant.XIU_CHU, name: 'Xỉu Chủ'},
		{id: Constant.DANH_DE, name: 'Đánh Đề'},
		{id: Constant.DAU_DUOI, name: 'Đầu Đuôi'},
		{id: Constant.LO_DA, name: 'Lô Đá'},
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

	const mounted = useMounted()

	const resetValue = (mien, city) => {
		let kieuDanh = mien === Constant.DAI_MN ? Constant.BAO_LO : Constant.DANH_LO
		return {soDanh: [], mien, kieuChoi: Constant.LO_2_SO, kieuDanh, city}
	}
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			if(name === 'mien') {
				// eslint-disable-next-line default-case
				switch (watch('mien')) {
					case Constant.DAI_MB:
						reset(resetValue(Constant.DAI_MB, ''))
						break
					case Constant.DAI_MN:
						callService('daiLottery/find-dai-daily/'+ Constant.DAI_MN, 'GET')
							.then((res)=> {
								if(mounted()) {
									setData(res)
								}
								reset(resetValue(Constant.DAI_MN, res[0].code))
							})
						break
					case Constant.DAI_MT:
						callService('daiLottery/find-dai-daily/'+ Constant.DAI_MT, 'GET')
							.then((res)=> {
								if(mounted()) {
									setData(res)
								}
								reset(resetValue(Constant.DAI_MT, res[0].code))
							})
						break
				}
			}
		})
		return () => subscription.unsubscribe();
	}, []);

	const [data, setData] = useState([])
	return(
		<section>
			<div className="row callback">
				<div className="col-md-4">
					<div>
						<label htmlFor="commission_rate" className="label-cus">Miền</label>
						<select {...register('mien')} id="commission_rate"
								className="form-control form-option"
								placeholder="Chọn đài">
							{arrDai.map((item)=>(
								<option key={item.id} value={item.id}>{item.name}</option>
							))}
						</select>
					</div>
				</div>
				{watch("mien") !== Constant.DAI_MB &&(
					<div className="col-md-4">
						{data.length > 0 &&(
							<>
								<label htmlFor="commission_rate" className="label-cus">Đài</label>
								<select {...register('city')} id="commission_rate"
										className="form-control form-option"
										placeholder="Chọn đài">
									{data.map((item)=>(
										<option key={item._id}  value={item.code}>{item.name}</option>
									))}
								</select>
							</>
						)}
					</div>
				)}
			</div>
			{watch('mien') === 'MN'?
				<div className="kieu-danh row">
					{loadbetMN.map((item,index)=>(
						<div key={index} className={`col-md-2 kd ${watch('kieuDanh') === item.id ? 'act': ''}`}
							 onClick={()=>setTabHeader(item.id)}>
							<div className="btn-checkbox">
						 <span className="circle">
							<span className="circle-dots"/>
						 </span>
								{item.name}
							</div>
						</div>
					))}
				</div>:watch('mien') === 'MB'?
				<div className="kieu-danh row">
					{loadbet.map((item,index)=>(
						<div key={index} className={`col-md-2 kd ${watch('kieuDanh') === item.id ? 'act': ''}`}
							 onClick={()=>setTabHeader(item.id)}>
							<div className="btn-checkbox">
						 <span className="circle">
							<span className="circle-dots"/>
						 </span>
								{item.name}
							</div>
						</div>
					))}
				</div>:
				<div className="kieu-danh row">
					{loadbetMT.map((item,index)=>(
						<div key={index} className={`col-md-2 kd ${watch('kieuDanh') === item.id ? 'act': ''}`}
							 onClick={()=>setTabHeader(item.id)}>
							<div className="btn-checkbox">
					 <span className="circle">
						<span className="circle-dots"/>
					 </span>
								{item.name}
							</div>
						</div>
					))}
				</div>
			}
		</section>
	);
}
export default HeadLottery;
