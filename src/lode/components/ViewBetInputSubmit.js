import React from 'react';
import {useFormContext} from "react-hook-form";
import Constant from "../../contants/constant";

const ViewBetInputSubmit = ({
	bigTitle = '',
	minBet = '',
	betInLength = '',
	winnerBet = ''
}) => {
	const {watch,register} = useFormContext()
	console.log(watch)
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
		{id:Constant.XIEN_2, name: 'Xiên 2'},
		{id:Constant.XIEN_3, name: 'Xiên 3'},
		{id:Constant.XIEN_4, name: 'Xiên 4'},
	]
	let first,last,end = '';
	const watchKieuLo = watch('kieuLo')
	console.log(watch())
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
						{loadbet.map((item,index)=>{

							<p key={index}
							   className={`${watch('mien') === item.id ? (first = item.name): ''} && 
							   ${watch('kieuDanh') === item.id ? (last = item.name): ''} && 
							   ${watch('kieulo') === item.id ? (end = item.name): ''}`}/>
								console.log(end)
						})}
						<p className={"subtitile"}>{first +'/'+ last+'/'+ end}</p>
					</div>


					<div id="sodanh"/>
					<div className="form-group">
						<div className="info-amount">Tổng tiền đánh(k)</div>
						<input {...register('soTienCuoc')} type="text" placeholder="0"
							   className="format_currency tongtiendanh form-new-2"/>
					</div>
					<div className="block-win-bet">
						<div className="form-group">
							<div className="bet-one-money">
								<span className="bet-one-money-text">Cược tối thiểu</span>
								<span className="bet-one-money-num format_currency">{minBet}</span>
							</div>
						</div>
						<div className="form-group">
							<div className="bet-one-money">
								<span className="bet-one-money-text">Tiền đánh / 1 con</span>
								<span className="bet-one-money-num format_currency">{betInLength}</span>
							</div>
						</div>
						<div className="form-group">
							<div className="bet-one-money">
								<span className="bet-one-money-text">Tiền thắng / 1 con</span>
								<span className="bet-one-money-num format_currency">{winnerBet}</span>
							</div>
						</div>
					</div>
					<input type="submit" value="Đặt cược" className="btn-danhde"/>
				</div>
			</div>
		</div>
	);
};

export default ViewBetInputSubmit;