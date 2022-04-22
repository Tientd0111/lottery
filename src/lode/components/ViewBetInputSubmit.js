import React from 'react';
import {useFormContext} from "react-hook-form";
import Constant from "../../contants/constant";
import LiveChat from "./LiveChat";

const ViewBetInputSubmit = ({
	bigTitle = '',
	minBet = '',
	betInLength = '',
	winnerBet = ''
}) => {
	const {watch,register} = useFormContext()
	const loadbet = [
		{id: Constant.DAI_MB, name: 'Miền Bắc'},
		{id: Constant.DAI_MN, name: 'Miền Nam'},
		{id: Constant.DAI_MT, name: 'Miền Trung'},
		{id: Constant.DANH_LO, name: 'Đánh Lô'},
		{id: Constant.BA_CANG, name: '3 Càng'},
		{id: Constant.DANH_DE, name: 'Đánh Đề'},
		{id: Constant.DAU_DUOI, name: 'Đầu Đuôi'},
		{id: Constant.LO_XIEN, name: 'Lô Xiên'},
		{id:Constant.DE_DAU, name: 'Đề Đầu'},
		{id:Constant.DE_DAC_BIET, name: 'Đề Đặc Biệt'},
		{id:Constant.LO_2_SO, name: 'Lô 2 Số'},
		{id:Constant.LO_3_SO, name: 'Lô 3 Số'},
		{id:Constant.DAU_DUOI_DAU, name: 'Đầu'},
		{id:Constant.DAU_DUOI_DUOI, name: 'Đuôi'},
		{id:Constant.XIEN, name: 'Xiên'},
		{id:Constant.XIEN_2, name: 'Xiên 2'},
		{id:Constant.XIEN_3, name: 'Xiên 3'},
		{id:Constant.XIEN_4, name: 'Xiên 4'},
		{id:Constant.LO_XIEN_2, name: 'Xiên 2'},
		{id:Constant.LO_XIEN_3, name: 'Xiên 3'},
		{id:Constant.LO_XIEN_4, name: 'Xiên 4'},
		{id:Constant.BAO_LO, name: 'Bao Lô'},
		{id:Constant.LO_DA, name: 'Lô Đá'},
		{id:Constant.LO_DA_2, name: 'Đá 2'},
		{id:Constant.LO_DA_3, name: 'Đá 3'},
		{id:Constant.LO_DA_4, name: 'Đá 4'},
		{id:Constant.XIU_CHU, name: 'Xỉu Chủ'},
		{id:Constant.XIU_CHU_DAU, name: 'Xỉu Chủ Đầu'},
		{id:Constant.XIU_CHU_DUOI, name: 'Xỉu Chủ Đuôi'},
		{id:Constant.XIU_CHU_DAU_DUOI, name: 'Xỉu Chủ Đầu - Đuôi'},
		{id:Constant.BA_CANG_DAU, name: 'Ba Càng Đầu'},
		{id:Constant.BA_CANG_DUOI, name: 'Ba Càng Đuôi'},
		{id:Constant.BA_CANG_DAU_DUOI, name: 'Ba Càng Đầu Đuôi'},
	]
	let first,last,end = '';
	return (
		<div className="col-md-3">
			<div className="right-panel">
				<div className="head-panel">
					{/* eslint-disable-next-line array-callback-return */}
					{loadbet.map((item,index)=>{
						<p key={index} className={`${watch('kieuDanh') === item.id ? bigTitle = item.name : ''}`}/>
					})}
					<p>{bigTitle}</p>

				</div>

				<div className="content-panel">
					<div className={"cat-lode"}>
						{loadbet.map((item,index)=>(
							<p key={index} className={`
								${watch('mien') === item.id ? (first = item.name): ''} && 
								${watch('kieuDanh') === item.id ? (last = item.name): ''} && 
							 	${watch('kieuChoi') === item.id ? (end = item.name): ''}`}/>
						))}
						<p className={"subtitile"}>{first +'/'+ last+'/'+ end}</p>
					</div>


					<div id="sodanh"/>
					<div className="form-group">
						<div className="info-amount">Tổng tiền đánh(k)</div>
						<input {...register('soTienCuoc', {valueAsNumber: true})} type="number" placeholder="0"
							   className="format_currency tongtiendanh form-new-2"/>
					</div>

					<input type="submit" value="Đặt cược" className="btn-danhde"/>
				</div>
			</div>
			<LiveChat/>

		</div>

);
};

export default ViewBetInputSubmit;