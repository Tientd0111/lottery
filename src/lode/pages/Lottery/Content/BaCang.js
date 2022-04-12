import React, {useState} from 'react';
import ArrayNumberPicker from "../../../components/ArrayNumberPicker";

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
	return (
		<div className="table">
			<div className="col-xs-9">
				<div className="info-box">
					<div className={"tabs-main"}>
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
	);
};

export default BaCang;