import React, {useEffect, useState} from 'react';
import {useLoadTable} from "../../stores/useLoadTable";
import moment from 'moment-timezone';
const inDay = moment.tz(Date.now(), 'Asia/Ho_Chi_Minh')
const arrdai = [
	{id:'mb', name:'Miền Bắc'},
	{id:'mn', name:'Miền Nam'},
	{id:'mt', name:'Miền Trung'}
]
const giai = [
	{id:"db", name:"Giải Đặc Biệt"},
	{id:"1", name:"Giải Nhất"},
	{id:"2", name:"Giải Nhì"},
	{id:"3", name:"Giải Ba"},
	{id:"4", name:"Giải Tư"},
	{id:"5", name:"Giải Năm"},
	{id:"6", name:"Giải Sáu"},
	{id:"7", name:"Giải Bảy"},
	{id:"8", name:"Giải Tám"},
]
const BangKq = () => {

	const {load,data, loading} = useLoadTable(state => ({
		load: state.load,
		data: state.data,
		loading: state.loading,
		
	}));
	const [nameDai, setNameDai] = useState('')

	const mappingGiai = (id) => {
		return giai.find(x=>x.id === id).name
	}

	useEffect( ()=>{
		fetchData('mb')
	},[]);

	function fetchData(param) {
		load(param)
		switch (param) {
			case 'mb': setNameDai('Miền Bắc'); break;
			case 'mt':
				// eslint-disable-next-line default-case
				switch (inDay.weekday()) {
					case 0: case 1: setNameDai('Thừa Thiên Huế'); break;
					case 2: setNameDai('Đắk Lắk'); break;
					case 3: case 6: setNameDai('Đà Nẵng'); break;
					case 4: setNameDai('Bình Định'); break;
					case 5: setNameDai('Gia Lai'); break;
				}
				break;
			case 'mn':
				// eslint-disable-next-line default-case
				switch (inDay.weekday()) {
					case 0:  setNameDai('Đà Lạt'); break;
					case 1: case 6: setNameDai('Hồ Chí Minh'); break;
					case 2: setNameDai('Bến Tre'); break;
					case 3: setNameDai('Đồng Nai'); break;
					case 4: setNameDai('An Giang'); break;
					case 5: setNameDai('Bình Dương'); break;
				}
				break;
			default: setNameDai(''); break
		}
	}
	return (
		<div className="col-md-8">
			<div className={"head"}>
				<div className={"header-table"}>
					<div className={"row"}>
						<div className={"col-md-4"}/>
						<div className={"col-md-4"} >
							<div style={{paddingTop:'20px'}}>
								<label htmlFor="commission_rate" className="label-cus" style={{display:"none"}}>Đài</label>
								<select onChange={(e)=>{
									fetchData(e.target.value)
								}} id="commission_rate" style={{width:"100%"}}
										className="form-control form-option select-head"
										placeholder="Chọn đài">
									{arrdai.map((item)=>(
										<option key={item.id} value={item.id}>{item.name}</option>
									))}
								</select>
							</div>
						</div>
						<div className={"col-md-4"}/>
					</div>
				</div>
			</div>
			<div className={"clearfix"}/>
			<div className={"box-pink-result"}>
				<div className={'title-dai'}>Kết quả sổ xố đài
					<span className={"name-dai"}> {nameDai}</span>
					<span className={"dot"}/>
					<span className={"ngay"}>{data?.ngay}</span>
				</div>
			</div>
			<div>
				<table className={"table table-bordered bootstrap-datatable datatable"} style={{width:"100%",border:"none",marginTop:'auto'}}>
					<tbody className={"table-kq"}>
					{/* es.lint-disable-next-line array-callback-return */}
					{data?.giaiResult?.map((item, index) => {
						if(item.value !== '') return (
							<tr key={item.name} className={`${index % 2 && ('alt')}`}>
								<td className={"td|first"}>{mappingGiai(item.name)}</td>
								<td className={index === 0 ? 'forcus':''}>{item.value}</td>
							</tr>
						)
					})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BangKq;