import React from 'react';
import CommonMain from "../../CommonMain";

const LichSu = () => {
	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
				<div className="tabs-main main-content-member lsgd-tabs--content tab-pane" id="history">
					<div className="lich-su-danh gd member-tabs--content">
						<ul className="nav nav-tabs vergo-tab">
							<li className="nav-item ">
								<a className="nav-link active" data-toggle="tab" href="#lode_history">Lịch sử
									đánh đề</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#game_history">Lịch sử cá
									cược</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#payment_history">Lịch sử giao
									dịch</a>
							</li>
						</ul>
						<div className="bcontent" id="lode_history" style={{display:"block"}}>
							<form action="" id="frm-form-loto" method="get">
								<div className="row chon-ngay">
									<div className="col-md-12">
										<label htmlFor="">Từ ngày:</label>
										<input type="datetime" name="" id="" className="form-cus"/>
										<label htmlFor="">Đến ngày:</label>
										<input type="datetime" name="" id="" className="form-cus"/>
										<input id="submit-btn-loto" type="submit" value="Xem"
											   className="btn btn-signin"/>
									</div>
								</div>
								<div className="table-responsive" style={{overflow:"auto"}}>
									<table className="table table-bordered table-striped"
										   style={{overflow:"auto"}}>
										<thead className="thead-inverse" hidden>
										<tr>
											<th></th>
											<th></th>
											<th></th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<tr>
												<td>Ngày tạo</td>
												<td>Ngày đánh</td>
												<td>Đài</td>
												<td>Loại đề</td>
												<td>Số</td>
												<td>Tiền 1 con</td>
												<td>Tổng tiền</td>
												<td>Trúng</td>
												<td>Tiền hoàn trả</td>
												<td>Tỷ lệ hoàn trả</td>
												<td>Kết quả</td>
												<td>Ghi chú</td>
											</tr>
										</tr>
										</tbody>
									</table>
								</div>


							</form>

						</div>

						<div className="bcontent" id="payment_history">
						</div>

						<div className="bcontent" id="game_history">
						</div>

					</div>
				</div>
			</section>
		</CommonMain>
	);
};

export default LichSu;