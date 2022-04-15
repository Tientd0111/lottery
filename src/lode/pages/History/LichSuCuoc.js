import React from 'react';
import CommonMain from "../../CommonMain";
import HeadHistory from "../../components/HeadHistory";
import ContentHistory from "../../components/ContentHistory";
import Support from "../../components/Support";

const LichSuCuoc = () => {
	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className={"row"}>
					<div className="tabs-main main-content-member lsgd-tabs--content tab-pane col-md-9">
						<HeadHistory title={'Lịch sử giao dịch'}/>
						<ContentHistory/>
						<div className="table-responsive" style={{overflow:"auto"}}>
							<table className="table table-bordered table-striped"
								   style={{overflow:"auto"}}>
								<tbody>
								<tr>
									<td>Ngày tạo</td>
									<td>Ngày GD</td>
									<td>Kiểu GD</td>
									<td>Ngân hàng</td>
									<td>Số tiền</td>
									<td>Tiền sau GD</td>
									<td>Trạng thái</td>
									<td>Ghi chú</td>
								</tr>
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

export default LichSuCuoc;