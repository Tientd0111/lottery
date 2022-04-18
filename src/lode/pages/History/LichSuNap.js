import React, {useEffect, useState} from 'react';
import CommonMain from "../../CommonMain";
import HeadHistory from "../../components/HeadHistory";
import Support from "../../components/Support";
import {useHistoryStores} from "../../../stores/useHistoryStores";
import formatNumber from "../../../hooks/formatNumber";
import formatDate from "../../../hooks/formatDate";
import ButtonBase from "../../components/ButtonBase";
import AppLoading from "../../components/AppLoading";

const LichSuNap = () => {
	const {transferNap, histories, loading} = useHistoryStores(state => ({
		transferNap: state.transferNap,
		histories: state.dataHis,
		loading: state.loading
	}));

	useEffect( ()=>{
		async function fetchData() {
			await transferNap()
		}
		fetchData()
	},[]);

	const [pageNumber, setPageNumber] = useState(0);

	const loadMore = async () => {
		setPageNumber(pageNumber + 1)
		await transferNap({pageNumber: pageNumber + 1, addItem: true})
	}

	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member lsgd-tabs--content tab-pane col-md-9">
						<HeadHistory title={'Lịch sử nạp tiền'}/>
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
								{loading && pageNumber === 0?<AppLoading/>:
									histories?.map((item, index)=>(
									<tr key={index} style={{textAlign:'center'}}>
										<td>{formatDate(item.created_at,"DD/MM/YYYY")}</td>
										<td>{formatDate(item.updated_at,"DD/MM/YYYY")}</td>
										<td>{item.bank_name_to}</td>
										<td>{formatNumber(item.money_transfer)}</td>
										<td>{item.status}</td>
									</tr>
								))}
								<ButtonBase
									onClick={loadMore}
									isLoading={pageNumber>0?loading:false} text={'Xem thêm'} />
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

export default LichSuNap;