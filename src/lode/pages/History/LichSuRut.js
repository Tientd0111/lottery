import React, {useEffect, useState} from 'react';
import CommonMain from "../../CommonMain";
import HeadHistory from "../../components/HeadHistory";
import Support from "../../components/Support";
import {useHistoryStores} from "../../../stores/useHistoryStores";
import AppLoading from "../../components/AppLoading";
import formatDate from "../../../hooks/formatDate";
import formatNumber from "../../../hooks/formatNumber";
import ButtonBase from "../../components/ButtonBase";

const LichSuRut = () => {
	const {transferRut, histories, loading} = useHistoryStores(state => ({
		transferRut: state.transferRut,
		histories: state.dataHis,
		loading: state.loading
	}));

	useEffect( ()=>{
		async function fetchData() {
			await transferRut()
		}
		fetchData()
	},[]);

	const [pageNumber, setPageNumber] = useState(0);

	const loadMore = async () => {
		setPageNumber(pageNumber + 1)
		await transferRut({pageNumber: pageNumber + 1, addItem: true})
	}
	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member lsgd-tabs--content tab-pane col-md-9">
						<HeadHistory title={'Lịch sử giao dịch'}/>
						<div className="table-responsive" style={{overflow:"auto"}}>
							<table className="table table-bordered table-striped"
								   style={{overflow:"auto"}}>
								<tbody>
								<tr style={{textAlign:'center'}}>
									<td>Ngày tạo</td>
									<td>Ngày GD</td>
									<td>Ngân hàng</td>
									<td>Tên người nhận</td>
									<td>Stk</td>
									<td>Số tiền</td>
									<td>Trạng thái</td>
								</tr>
								{
									histories?.map((item, index)=>(
										<tr key={index} style={{textAlign:'center'}}>
											<td>{formatDate(item.created_at,"DD/MM/YYYY")}</td>
											<td>{formatDate(item.updated_at,"DD/MM/YYYY")}</td>
											<td>{item.bank_name}</td>
											<td>{item.bank_account_name_to}</td>
											<td>{item.bank_account_number_to}</td>
											<td>{formatNumber(item.money_transfer)}</td>
											<td>{item.created_by}</td>
										</tr>
									))}
								</tbody>
							</table>
							<ButtonBase
								onClick={loadMore}
								isLoading={pageNumber>0?loading:false} text={'Xem thêm'} />
						</div>
					</div>
					<div className={"col-md-3"}><Support/></div>
				</div>
			</section>
		</CommonMain>
	);
};

export default LichSuRut;