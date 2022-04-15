import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";

const DanhDe = () => {
	const [arrayPicker, setArrrayPicker] = React.useState([])
	React.useEffect(()=>{
		let update = [];
		for(let i = 0; i < 100; i++) {
			update.push(i)
		}
		setArrrayPicker(update);
	},[]);
	const [tabst, setTabst] = useState(1);
	const  toggleTab=(index)=>{
		setTabst(index);
	}
	return (
		<div className={"danh-de"}>
			<div id="tabBetType" className="bb-1">
				<div className={tabst === 1?"kd1 act":"kd1"}  onClick={()=>toggleTab(1)}>Đề đầu
				</div>
				<div className={tabst === 2?"kd1 act":"kd1"}  onClick={()=>toggleTab(2)}>Đề đặc biệt
				</div>
				<div className="clearfix"/>
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
										<ArrayNumberPicker arrays={arrayPicker} indexPlus={"0"} t={false}/>
										</tbody>
									</table>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className={"role"}>
				{tabst === 1 ? <p>
					Đánh lô giải 7 ( có 4 giải, thanh toán đủ ). Thắng gấp 95 lần. Ví dụ : đánh 1k cho số 79, Tổng thanh toán: 1k x 4 =4k. Nếu trong lô giải 7 có 1 số 79 thì Tiền thắng: 1k x 95 = 95k.
				</p>:<p>
					Đánh 2 chữ số cuối trong giải ĐB. Thắng gấp 95 lần. Ví dụ: đánh 1k cho số 79. Tổng thanh toán: 1k. Nếu giải ĐB là xxx79 thì Tiền thắng: 1k x 95 = 95k.
				</p>}
			</div>
		</div>
	);

};

export default DanhDe;