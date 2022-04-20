import React, {useEffect, useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";
import {useFormContext} from "react-hook-form";
import Constant from "../../../../contants/constant";

const DanhLo = () => {

	const load3so = [
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

	const {setValue, register, watch} = useFormContext()

	useEffect(()=>{
		register('kieuChoi',{value: Constant.LO_2_SO})
	},[])

	const watchKieuChoi = watch('kieuChoi')

	const [tabThreeNumber, setTabThreeNumber] = useState('0');

	const [arrayPicker, setArrrayPicker] = React.useState([])

	React.useEffect(()=>{
		let update = [];
		for(let i = 0; i < 100; i++) {
			update.push(i)
		}
		setArrrayPicker(update);
	},[]);

	const setTab = (code) => {
		if(watch('kieuChoi') !== code) {
			setValue('soDanh', [])
		}
		setValue('kieuChoi', code)
	}

	return (
		<div className={"danh-lo"}>
			{watch().mien === 'MN'?
				<div id="tabBetType" className="bb-1">
					<div className={`kd1 ${watchKieuChoi === Constant.BAO_LO_2 && 'act'}`} id="loto_type_info"
						 onClick={()=>setTab(Constant.BAO_LO_2)}>
						{'Lô 2 số'}
					</div>
					<div className={`kd1 ${watchKieuChoi === Constant.LO_3_SO && 'act'}`}
						 onClick={()=>setTab(Constant.BAO_LO_3)} id="loto_type_info">
						{'Lô 3 số'}
					</div>
					<div className="clearfix"/>
				</div>:
				<div id="tabBetType" className="bb-1">
					<div className={`kd1 ${watchKieuChoi === Constant.LO_2_SO && 'act'}`} id="loto_type_info"
						 onClick={()=>setTab(Constant.LO_2_SO)}>
						{'Lô 2 số'}
					</div>
					<div className={`kd1 ${watchKieuChoi === Constant.LO_3_SO && 'act'}`}
						 onClick={()=>setTab(Constant.LO_3_SO)} id="loto_type_info">
						{'Lô 3 số'}
					</div>
					<div className="clearfix"/>
				</div>
			}

			<div className="table row">
				<div className="col-md-12">
					<div className="info-box">
						<div className={"tabs-main"}>
							<ul className="nav nav-tabs tab-bet">
								{watchKieuChoi === Constant.LO_3_SO ? load3so.map((item, index)=>(
									<li key={index} onClick={()=>{
										setTabThreeNumber(index.toString())
									}} className="nav-item card butt">
										<a href="/#" data-toggle="pill"
										   className={`btn btn-link card-nav tab-num-bet ${tabThreeNumber == index ? 'active': ''}`}>{item.name}
										</a>
									</li>
								)): null}
							</ul>
						</div>
						<table style={{width: '100%', height: '100%'}}>
							<tbody>
							<tr>
								<td colSpan="10" style={{border:'none'}}>
									<table style={{width: '100%', height: '100%',overflow:"hidden"}}>
										<tbody className="table_bet_pick">
											<ArrayNumberPicker
												arrays={arrayPicker}
												indexPlus={tabThreeNumber}
												t={watchKieuChoi === Constant.LO_3_SO}/>
										</tbody>
									</table>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={"role"}>
					{watchKieuChoi===Constant.LO_2_SO?<p>
						Đánh 2 chữ số cuối trong lô 27 giải. Thắng gấp 99.4 lần, nếu số đó về N lần thì tính kết quả x N lần. Ví dụ: đánh lô 79 - 1 con 1k, Tổng thanh toán: 1k x 27 = 27k. Nếu trong lô có 2 chữ số cuối là 79 thì Tiền thắng: 1k x 99.4 = 99.4k, nếu có N lần 2 chữ số cuối là 79 thì Tiền thắng là: 1k x 99.4 x N
					</p>:<p>
						Đánh 3 chữ số cuối trong lô 23 giải. Thắng gấp 900 lần, nếu số đó về N lần thì tính kết quả x N lần. Ví dụ: đánh lô 789 - 1 con 1k, Tổng thanh toán: 1k x 23 = 23k. Nếu trong lô có 3 chữ số cuối là 789 thì Tiền thắng: 1k x 900 = 900k, nếu có N lần 3 chữ số cuối là 789 thì Tiền thắng là: 1k x 900 x N
					</p>}
				</div>
			</div>
		</div>
	);
};

export default DanhLo;