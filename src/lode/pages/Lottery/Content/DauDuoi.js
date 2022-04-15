import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";

const DauDuoi = () => {
	const [tabst, setTabst] = useState(1);
	const  toggleTab=(index)=>{
		setTabst(index);
	}
	const [arrayPicker, setArrrayPicker] = React.useState([])
	React.useEffect(()=>{
		let update = [];
		for(let i = 0; i < 10; i++) {
			update.push(i)
		}
		setArrrayPicker(update);
	},[]);

	return (
		<div className={"dauduoi"}>
			<div id="tabBetType" className="bb-1">
				<div className={tabst === 1?"kd1 act":"kd1"}  onClick={()=>toggleTab(1)}>Đầu
				</div>
				<div className={tabst === 2?"kd1 act":"kd1"}  onClick={()=>toggleTab(2)} >Đuôi
				</div>
				<div className="clearfix"/>
			</div>
			<div className="table row">
				<div className="col-md-12">
					<div className="info-box">
						<div className={"tabs-main"} style={{float:"left"}}>
							<ul className="nav nav-tabs tab-bet">

									<li className="nav-item card butt">
										<a href="/#" data-toggle="pill"
										   className={"btn btn-link card-nav tab-num-bet active"} style={{color:"white"}}>0-9
										</a>
									</li>
							</ul>
						</div>
						<table style={{width: '100%', height: '100%'}}>
							<tbody>
							<tr>
								<td colSpan="10" style={{border:'none'}}>
									<table style={{width: '100%', height: '100%',overflow:"hidden"}}>
										<tbody className="table_bet_pick">
										<ArrayNumberPicker arrays={arrayPicker} />
										</tbody>
									</table>
								</td>
							</tr>
							</tbody>
						</table>
						<div className={"role"}>
							{tabst === 1? <p>
								Đánh 1 chữ số ở hàng chục của giải ĐB. Thắng gấp 9.5 lần. Ví dụ: đánh 1k cho số 7. Tổng thanh toán: 1K. Nếu giải ĐB là xxx7x thì Tiền thắng: 1k x 9.5 = 9.5k
							</p>:<p>
								Đánh 1 chữ số cuối của giải ĐB. Thắng gấp 9.5 lần. Ví dụ: đánh 1k cho số 7. Tổng thanh toán: 1K. Nếu giải ĐB là xxxx7 thì Tiền thắng: 1k x 9.5 = 9.5k
							</p>}
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default DauDuoi;