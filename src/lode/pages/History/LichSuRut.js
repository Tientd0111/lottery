import React, {useEffect, useState} from 'react';
import CommonMain from "../../CommonMain";
import HeadHistory from "../../components/HeadHistory";
import Support from "../../components/Support";
import {useHistoryStores} from "../../../stores/useHistoryStores";
import formatDate from "../../../hooks/formatDate";
import formatNumber from "../../../hooks/formatNumber";
import ButtonBase from "../../components/ButtonBase";
import Detail from "../../components/Detail";

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
	},[transferRut]);

	const [pageNumber, setPageNumber] = useState(0);

	const loadMore = async () => {
		setPageNumber(pageNumber + 1)
		await transferRut({pageNumber: pageNumber + 1, addItem: true})
	}
	const [id, setId] = useState(null);
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
									<td>Ngày GD</td>
									<td>Số tiền</td>
									<td>Lý do</td>
									<td>Trạng thái</td>
								</tr>
								{
									histories?.map((item, index)=>(
										<tr key={index} style={{textAlign:'center'}}>
											<td>{formatDate(item.created_at,"DD/MM/YYYY")}</td>
											<td>{formatNumber(item.money)}</td>
											<td>{item.reason}</td>
											<td>
												<a style={{color:"#6b6b6b",cursor: 'pointer', textDecoration: 'underline'}} href={"/#"} className={'nav-link'} data-toggle="modal" data-target="#detail" onClick={()=>{
													setId(item._id)
												}}>
													{item.status}
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>

						</div>
						<ButtonBase
							onClick={loadMore}
							isLoading={pageNumber>0?loading:false} text={'Xem thêm'} />
					</div>
					<div className={"col-md-3"}><Support/></div>
					<Detail billId={id}/>
				</div>
			</section>
		</CommonMain>
	);
};

export default LichSuRut;