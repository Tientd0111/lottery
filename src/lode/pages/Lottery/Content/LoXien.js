import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";

const LoXien = () => {
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
		<div className={"lo-xien"}>
			<div id="tabBetType" className="bb-1">
				<div className={tabst === 1?"kd1 act":"kd1"} onClick={()=>toggleTab(1)}>Xiên 2
				</div>
				<div className={tabst === 2?"kd1 act":"kd1"}  onClick={()=>toggleTab(2)} >Xiên 3
				</div>
				<div className={tabst === 3?"kd1 act":"kd1"}  onClick={()=>toggleTab(3)} >Xiên 4
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
					Xiên 2 của 2 chữ số cuối trong lô 27 giải. Thắng gấp 17 lần. Ví dụ : đánh 1k cho xiên 11+13, Tổng thanh toán: 1k. Nếu trong lô có "2 chữ số cuối là 11 và 2 chữ số cuối là 13" thì Tiền thắng: 1k x 17 = 17k
				</p>:tabst===2?<p>
					Xiên 3 của 2 chữ số cuối trong lô 27 giải. Thắng gấp 65 lần. Ví dụ : đánh 1k cho xiên 11+13+15, Tổng thanh toán: 1k. Nếu trong lô có 2 chữ số cuối là 11,13,15 thì Tiền thắng: 1k x 65 = 65k
				</p>:<p>
					Xiên 4 của 2 chữ số cuối trong lô 27 giải. Thắng gấp 250 lần. Ví dụ : đánh 1k cho xiên 11+13+15+20, Tổng thanh toán: 1k. Nếu trong lô có 2 chữ số cuối là 11,13,15,20 thì Tiền thắng: 1k x 250 = 250k
				</p>}
			</div>
		</div>
	);
};

export default LoXien;