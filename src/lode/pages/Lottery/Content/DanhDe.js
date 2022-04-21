import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";
import {useFormContext} from "react-hook-form";
import Constant from "../../../../contants/constant";
import TabKieuChoi from "../../../components/TabKieuChoi";

const DanhDe = () => {
	const [arrayPicker, setArrrayPicker] = React.useState([])
	React.useEffect(()=>{
		let update = [];
		for(let i = 0; i < 100; i++) {
			update.push(i)
		}
		setArrrayPicker(update);
	},[]);
	const {watch} = useFormContext()

	return (
		<div className={"danh-de"}>
			{watch('mien') === 'MN'?
				<div className="bb-1">
					<TabKieuChoi name={'Đề đầu'} value={Constant.DE_DAU}/>
					<TabKieuChoi name={'Đề đặc biệt'} value={Constant.DE_DAC_BIET}/>
					<TabKieuChoi name={'Đánh đầu đuôi'} value={Constant.DE_DAU_DUOI}/>
					<div className="clearfix"/>
				</div>:
				<div className="bb-1">
					<TabKieuChoi name={'Đề đầu'} value={Constant.DE_DAU}/>
					<TabKieuChoi name={'Đề đặc biệt'} value={Constant.DE_DAC_BIET}/>
					<div className="clearfix"/>
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
				{watch('kieuChoi') === 'DE_DAU' ? <p>
					Đánh lô giải 7 ( có 4 giải, thanh toán đủ ). Thắng gấp 95 lần. Ví dụ : đánh 1k cho số 79, Tổng thanh toán: 1k x 4 =4k. Nếu trong lô giải 7 có 1 số 79 thì Tiền thắng: 1k x 95 = 95k.
				</p>:<p>
					Đánh 2 chữ số cuối trong giải ĐB. Thắng gấp 95 lần. Ví dụ: đánh 1k cho số 79. Tổng thanh toán: 1k. Nếu giải ĐB là xxx79 thì Tiền thắng: 1k x 95 = 95k.
				</p>}
			</div>
		</div>
	);

};

export default DanhDe;