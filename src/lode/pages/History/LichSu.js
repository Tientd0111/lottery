import React, {useEffect, useRef, useState} from 'react';
import HeadHistory from "../../components/HeadHistory";
import Support from "../../components/Support";
import CommonMain from "../../CommonMain";
import {useHistoryStores} from "../../../stores/useHistoryStores";
import formatDate from "../../../hooks/formatDate";
import formatNumber from "../../../hooks/formatNumber";
import ButtonBase from "../../components/ButtonBase";
import DetailBillBet from "../../components/DetailBillBet";

const LichSu = () => {
	const {hisBet, histories, loading} = useHistoryStores(state => ({
		hisBet: state.hisBet,
		histories: state.dataHis,
		loading: state.loading
	}));

	useEffect( ()=>{
		async function fetchData() {
			await hisBet()
		}
		fetchData()
	},[hisBet]);

	const [pageNumber, setPageNumber] = useState(0);

	const loadMore = async () => {
		setPageNumber(pageNumber + 1)
		await hisBet({pageNumber: pageNumber + 1, addItem: true})
	}

	const [billId, setBillId] = useState(null);

	const detailRef = useRef()

	return (
		<CommonMain>
			<section id={'history'} style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member lsgd-tabs--content tab-pane col-md-9">
						<HeadHistory title={'Lịch sử cá cược'}/>
						<div className="table-responsive" style={{overflow:"auto"}}>
							<table className="table table-bordered table-striped"
								   style={{overflow:"auto"}}>
								<tbody>
								<tr style={{textAlign:'center'}}>
									<td>Ngày đánh</td>
									<td>Miền</td>
									<td>Đài</td>
									<td>Kiểu đánh</td>
									<td>kiểu chơi</td>
									<td>Số đánh</td>
									<td>Số tiền</td>
									<td>Trạng thái</td>
								</tr>
								{
									histories?.map((item, index)=>(
										<tr key={index} style={{textAlign:'center'}}>
											<td>{formatDate(item.created_at,"DD/MM/YYYY hh:mm:ss")}</td>
											<td>{item.mien}</td>
											<td>{item.city}</td>
											<td>{item.kieuDanh}</td>
											<td>{item.kieuChoi}</td>
											<td>{item.soDanh?.toString()}</td>
											<td>{formatNumber(item.soTienCuoc)}</td>
											<td>{item.daDuyet?
											<a style={{cursor: 'pointer', textDecoration: 'underline', color: 'blue'}} onClick={()=>{
												setBillId(item._id)
												detailRef.current?.open()
											}
											}>Đã trả điểm</a>: <p style={{color: 'red'}}>Chưa trả điểm</p>}</td>
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
					<DetailBillBet ref={detailRef} billId={billId}/>
				</div>
			</section>
		</CommonMain>
	);
};

export default LichSu;
