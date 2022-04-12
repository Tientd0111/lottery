import React from 'react';
import CommonMain from '../../CommonMain';
import HeadPay from "./HeadPay";

const PayPage = () => {


	return (
		<CommonMain>
			<HeadPay/>
			<section>
				<div className="row justify-content-center  reset-mr-20">
					<div className="col-md-9 tab-content ">
						<div className="tabs-main main-content-member withdraw-tabs--content tab-pane active"
							 id="cashback">
							<div className="member-tabs--content">
								<ul className="nav-tabs">
									<li className="nav-item">
										<a href="" className="nav-link " data-toggle="tab">Lịch sử hoàn trả</a>
									</li>
								</ul>
							</div>
							<form name="rut-tien" className="p-20" id="frm-cashback">
								<div className="row row-no-wrap">
									<div className="list-date col-auto act" data-type="23/03/2022">
										<p className="date_time">23/03/2022</p>
										<p className="date_count">Hôm nay</p>
									</div>
									<div className="list-date col-auto " data-type="22/03/2022">
										<p className="date_time">22/03/2022</p>
										<p className="date_count">Hôm qua</p>
									</div>
									<div className="list-date col-auto ">
										<p className="date_time">21/03/2022</p>
										<p className="date_count">Thứ hai</p>
									</div>
									<div className="list-date col-auto ">
										<p className="date_time">20/03/2022</p>
										<p className="date_count">Chủ nhật</p>
									</div>
									<div className="list-date col-auto ">
										<p className="date_time">19/03/2022</p>
										<p className="date_count">Thứ bảy</p>
									</div>
								</div>
								<div className="row row-no-wrap">
									<div className="block-no-cashback" data-active="23/03/2022">
										<h3>Không có tiền hoàn trả</h3>
										<p>Hãy đặt cược Lô Đề 3 Miền để nhận hoàn trả mỗi ngày</p>
									</div>
									<div className="block-no-cashback" data-active="22/03/2022">
										<h3>Hoàn trả</h3>
										<p>Hãy đặt cược Lô Đề 3 Miền để nhận hoàn trả mỗi ngày</p>
									</div>
								</div>


							</form>
						</div>



						<div className="tabs- main-content-member withdraw-tabs--content tab-pane" id="bank">
							<div className="member-tabs--content">
								<ul className="nav-tabs">
									<li className="nav-item">
										<a href="" className="nav-link " data-toggle="tab">Danh sách ngân hàng</a>
									</li>
								</ul>
							</div>
							<div className="block-list-bank">
								<table className="table">
									<tbody>
									<tr>
										<td>Ngân hàng</td>
										<td>Chủ tài khoản</td>
										<td>Số tài khoản</td>
										<td>Chi nhánh</td>
										<td>Copy số tk</td>
									</tr>
									<tr>
										<td>Techcombank</td>
										<td>Trần Duy Tiến</td>
										<td id="account_no_poupdx">08234736347</td>
										<td>Hà Nội</td>
										<td>
											<div className="contentBank">
												<button className="clicktocopy but" data-text="9023190129894">Copy
												</button>
											</div>
										</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>

					</div>
					<div className="col-md-3">

					</div>
				</div>
			</section>
		</CommonMain>
	)
}

export default PayPage