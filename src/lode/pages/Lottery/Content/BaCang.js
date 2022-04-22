import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";
import TabKieuChoi from "../../../components/TabKieuChoi";
import Constant from "../../../../contants/constant";
import {useFormContext} from "react-hook-form";

const BaCang = () => {
	const load = [
		{
			name: '000-099'
		},
		{
			name: '100-199'
		},
		{
			name: '200-299'
		},
		{
			name: '300-399'
		},
		{
			name: '400-499'
		},
		{
			name: '500-599'
		},
		{
			name: '600-699'
		},
		{
			name: '700-799'
		},
		{
			name: '800-899'
		},
		{
			name: '900-999'
		}
	];
	const [arrayPicker, setArrrayPicker] = React.useState([])
	const [tabThreeNumber, setTabThreeNumber] = useState('0');


	React.useEffect(()=>{
		let update = [];
		for(let i = 0; i < 100; i++) {
			update.push(i)
		}
		setArrrayPicker(update);
	},[]);
	const {watch} = useFormContext()
	return (
		<>
			{watch('mien') === 'MB'?
				<div id="tabBetType" className="bb-1">
					<TabKieuChoi name={'3 Càng'} value={Constant.BA_CANG}/>
					<div className="clearfix"/>
				</div>:watch('mien') === 'MT'?
				<div id="tabBetType" className="bb-1">
					<TabKieuChoi name={'3 càng đầu'} value={Constant.BA_CANG_DAU}/>
					<TabKieuChoi name={'3 càng đuôi'} value={Constant.BA_CANG_DUOI}/>
					<TabKieuChoi name={'3 càng đầu - đuôi'} value={Constant.BA_CANG_DAU_DUOI}/>
					<div className="clearfix"/>
				</div>:
				<div id="tabBetType" className="bb-1">
					<TabKieuChoi name={'Xỉu chủ đầu'} value={Constant.XIU_CHU_DAU}/>
					<TabKieuChoi name={'Xỉu chủ đuôi'} value={Constant.XIU_CHU_DUOI}/>
					<TabKieuChoi name={'Xỉu chủ đầu - đuôi'} value={Constant.XIU_CHU_DAU_DUOI}/>
					<div className="clearfix"/>
				</div>
			}
			<div className={"tabs-main"} style={{marginTop:'20px'}}>
				<ul className="nav nav-tabs tab-bet">
					{load.map((item, index)=>(
						<li key={index} onClick={()=>{
							setTabThreeNumber(index.toString())
						}} className="nav-item card butt">
							<a href="/#" data-toggle="pill"
							   className={`btn btn-link card-nav tab-num-bet ${tabThreeNumber === index ? 'active': ''}`}>{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="table row">
				<div className="col-md-12">
					<div className="info-box">

						<table style={{width: '100%', height: '100%'}}>
							<tbody>
							<tr>
								<td colSpan="10" style={{border:'none'}}>
									<table style={{width: '100%', height: '100%',overflow:"hidden"}}>
										<tbody className="table_bet_pick">
										<ArrayNumberPicker arrays={arrayPicker} indexPlus={tabThreeNumber} t={true}/>
										</tbody>
									</table>
								</td>
							</tr>
							</tbody>
						</table>
						<div className={"role"}>
							<p>Đánh 3 chữ số cuối của giải ĐB. Thắng gấp 900 lần. Ví dụ: đánh 1k cho số 879, Tổng thanh toán: 1k. Nếu giải ĐB là xx879 thì Tiền thắng: 1k x 900 = 900K</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BaCang;