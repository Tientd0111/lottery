import React, {useEffect, useState} from 'react';
import {useLoadTable} from "../../stores/useLoadTable";
import useMounted from "../../hooks/useMounted";
import {callService} from "../../apis/baseRequest";

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

export default React.memo(() => {

	const {load,data} = useLoadTable(state => ({
		load: state.load,
		data: state.data,
	}));

	const mounted = useMounted()

	const [listDai, setListDai] = useState([]);

	useEffect(()=>{
		callService('daiLottery/find-all', 'GET')
			.then((res)=>{
				if(mounted()) {
					setListDai(res)
				}
			})
	},[])

	const [nameDai, setNameDai] = useState('')

	const mappingGiai = (id) => {
		return giai.find(x=>x.id === id).name
	}

	useEffect( ()=>{
		load('mien-bac')
		setNameDai('MIEN-BAC')
	},[]);

	return (
		<div className="col-md-8">
			<div className={"head"}>
				<div className={"header-table"}>
					<div className={"row"}>
						<div className={"col-md-4"}/>
						<div className={"col-md-4"} >
							<div style={{paddingTop:'20px'}}>
								<label htmlFor="commission_rate" className="label-cus" style={{display:"none"}}>Đài</label>
								{
									listDai.length > 0 &&
									(<select onChange={(e)=>{
										load(e.target.value)
										setNameDai(e.target.value)
									}} defaultValue={'mien-bac'} id="commission_rate" style={{width:"100%"}}
											 className="form-control form-option select-head"
											 placeholder="Chọn đài">
										{listDai.map((item)=>(
											<option key={item._id} value={item.code}>{item.name}</option>
										))}
									</select>)
								}
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
});
