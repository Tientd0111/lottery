import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";
import TabKieuChoi from "../../../components/TabKieuChoi";
import Constant from "../../../../contants/constant";
import {useFormContext} from "react-hook-form";

const LoXien = () => {
	const [arrayPicker, setArrrayPicker] = React.useState([])
	React.useEffect(()=>{
		let update = [];
		for(let i = 0; i < 100; i++) {
			update.push(i)
		}
		setArrrayPicker(update);
	},[]);
	const {watch} = useFormContext()
	const [tabst, setTabst] = useState(1);
	return (
		<div className={"lo-xien"}>
			{watch().mien === 'MB'?
				<div id="tabBetType" className="bb-1">
					<TabKieuChoi name={'Xiên 2'} value={Constant.LO_XIEN_2}/>
					<TabKieuChoi name={'Xiên 3'} value={Constant.LO_XIEN_3}/>
					<TabKieuChoi name={'Xiên 4'} value={Constant.LO_XIEN_4}/>
				</div>:watch().mien === 'MT'?
				<div id="tabBetType" className="bb-1">
					<TabKieuChoi name={'Xiên 2'} value={Constant.XIEN_2}/>
					<TabKieuChoi name={'Xiên 3'} value={Constant.XIEN_3}/>
					<TabKieuChoi name={'Xiên 4'} value={Constant.XIEN_4}/>
				</div>:
				<div id="tabBetType" className="bb-1">
					<TabKieuChoi name={'Đá 2'} value={Constant.LO_DA_2}/>
					<TabKieuChoi name={'Đá 3'} value={Constant.LO_DA_3}/>
					<TabKieuChoi name={'Đá 4'} value={Constant.LO_DA_4}/>
				</div>
			}
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
				{watch().kieuChoi === 'LX2' ? <p>
					Xiên 2 của 2 chữ số cuối trong lô 27 giải. Thắng gấp 17 lần. Ví dụ : đánh 1k cho xiên 11+13, Tổng thanh toán: 1k. Nếu trong lô có "2 chữ số cuối là 11 và 2 chữ số cuối là 13" thì Tiền thắng: 1k x 17 = 17k
				</p>:watch().kieuChoi === 'LX3'?<p>
					Xiên 3 của 2 chữ số cuối trong lô 27 giải. Thắng gấp 65 lần. Ví dụ : đánh 1k cho xiên 11+13+15, Tổng thanh toán: 1k. Nếu trong lô có 2 chữ số cuối là 11,13,15 thì Tiền thắng: 1k x 65 = 65k
				</p>:<p>
					Xiên 4 của 2 chữ số cuối trong lô 27 giải. Thắng gấp 250 lần. Ví dụ : đánh 1k cho xiên 11+13+15+20, Tổng thanh toán: 1k. Nếu trong lô có 2 chữ số cuối là 11,13,15,20 thì Tiền thắng: 1k x 250 = 250k
				</p>}
			</div>
		</div>
	);
};

export default LoXien;