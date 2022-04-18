import React, {useEffect} from 'react';
import CommonMain from "../../CommonMain";
import HeadHistory from "../../components/HeadHistory";
import ContentHistory from "../../components/ContentHistory";
import Support from "../../components/Support";
import {useHistoryStores} from "../../../stores/useHistoryStores";
import formatNumber from "../../../hooks/formatNumber";

const LichSuRut = () => {
	const {transferRut, histories} = useHistoryStores(state => ({
		transferRut: state.transferRut,
		histories: state.dataHis
	}))

	useEffect( ()=>{
		async function fetchData() {
			await transferRut()
		}
		fetchData()
	},[])

	console.log(histories)

	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member lsgd-tabs--content tab-pane col-md-9">
						<HeadHistory title={'Lịch sử rút tiền'}/>
						<ContentHistory/>
						<div className="table-responsive" style={{overflow:"auto"}}>
							<table className="table table-bordered table-striped"
								   style={{overflow:"auto"}}>
								<tbody>
								<tr style={{textAlign:'center'}}>
									<td>Ngày tạo</td>
									<td>Ngày GD</td>
									<td>Ngân hàng</td>
									<td>Số tiền</td>
									<td>Trạng thái</td>
								</tr>
								{histories?.map((item)=>(
									<tr style={{textAlign:'center'}}>
										<td>{item.created_at}</td>
										<td>{item.updated_at}</td>
										<td>{item.bank_name_to}</td>
										<td>{formatNumber(item.money_transfer)}</td>
										<td>{item.status}</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
					</div>
					<div className={"col-md-3"}><Support/></div>
				</div>
			</section>
		</CommonMain>
	);
};

export default LichSuRut;