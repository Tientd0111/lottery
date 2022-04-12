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

						<div className="tabs-main main-content-member member-tabs--content tab-pane" id="deposit">
							<ul className="nav nav-tabs" id="myTab">
								<li className="nav-item ">
									<a className="nav-link active" data-toggle="tab" href="#deposit-bank">Nạp thủ
										công</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#deposit-fast">Nạp siêu tốc</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#deposit-card">Nạp thẻ cào</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-toggle="tab" href="#deposit-momo">Nạp Momo</a>
								</li>
							</ul>
							<div className="tab-content bg-content" id="myTabContent">
								<div className="tab-pane active" id="deposit-bank">
									<form name="nap-tien" action="" id="frm-deposit-make">
										<div className="form-deposit-bank row">
											<div className="col-md-12 p-0-30">
												<div className="row">
													<div className="col-md-8 p-20">
														<h4 className="title-deposit">Nạp thủ công</h4>
														<p className="detail-deposit">An toàn, nhanh chóng, hiệu quả,
															bảo mật</p>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_bank">Chọn
																		ngân hàng (<font
																			color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<select name="bank" id="from_overview_naptien_bank"
																			className="form-control form-custom">
																		<option value="VietinBank">Ngân hàng
																			VietinBank
																		</option>
																		<option value="DongA">Ngân hàng Đông Á</option>
																		<option value="VPbank">VPBank</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_account">Chọn
																		Tk nhận (<font
																			color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<div id="bank_account_loading_deposite"
																		 style={{display:"none"}}><img
																		src="https://lode88.online/public/img/loader.gif"/>
																	</div>
																	<select id="from_overview_naptien_account"
																			name="bank_number"
																			className="form-control form-custom">
																	</select>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_customer">Tên
																		người gửi (<font
																			color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<input id="from_overview_naptien_customer"
																		   name="sender" type="text"
																		   className="form-control form-custom"/>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_tien">Số tiền
																		(<font color="red">
																			<b>*</b>
																		</font>)</label>
																</div>
																<div className="col-md-8">
																	<input type="text" name="amount" maxLength="15"
																		   className="form-control format_currency form-custom"
																		   id="from_overview_naptien_tien"/>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_magiaodich">Mã
																		giao dịch</label>
																</div>
																<div className="col-md-8">
																	<input name="user_bank_content"
																		   id="from_overview_naptien_magiaodich"
																		   type="text"
																		   className="form-control form-custom"/>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																</div>
																<div className="col-md-8">
																	<input className="btn btn-signin form-control but"
																		   id="btn-form-submit-deposite"
																		   type="submit" value="Nạp tiền"/>
																	<input type="hidden" name="_submit"/>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="row mt-0-30">
													<div className="col-md-12 box-border">
														<p className="guide-deposit">Hướng dẫn nhập Mã giao dịch:</p>
														<p className="guide-help"><i className="icons-hand"></i> Nếu
															bạn <span>chuyển qua ATM</span> vui lòng
															điền <span>"Số Tài Khoản Ngân Hàng của bạn"</span>.</p>
														<p className="guide-help"><i className="icons-hand"></i> Nếu
															bạn <span>chuyển bằng hình thức Nộp Tiền
                              mặt tại quầy</span> vui lòng điền <span>"Họ Và Tên người nộp tiền"</span>.</p>
														<p className="guide-help"><i className="icons-hand"></i> Nếu
															bạn <span>chuyển qua
                              Internetbanking</span>
															thì tùy ngân hàng sẽ có <span>"Mã Giao Dịch"</span> khác
															nhau.</p>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
								<div className="tab-pane" id="deposit-card">
									<form name="nap-tien-the-cao" action="" id="frm-card-deposit-make" className="">
										<div className="form-deposit-bank row">
											<div className="col-md-12 p-0-30">
												<div className="row">
													<div className="col-md-8 p-20">
														<h4 className="title-deposit">Nạp thẻ cào</h4>
														<p className="detail-deposit">An toàn, nhanh chóng, hiệu quả,
															bảo mật</p>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_bank">Chọn
																		loại thẻ(<font
																			color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<select name="namecard"
																			className="form-control form-custom"
																			id="select-name-card">
																		<option value="">Vui lòng chọn nhà mạng</option>
																		<option value="VIETTEL"
																				data-text="10000,20000,30000,50000,100000,200000,300000,500000,1000000">VIETTEL
																		</option>
																		<option value="MOBIFONE"
																				data-text="10000,20000,30000,50000,100000,200000,300000,500000">MOBIFONE
																		</option>
																		<option value="VINAPHONE"
																				data-text="10000,20000,30000,50000,100000,200000,300000,500000">VINAPHONE
																		</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus"
																		   htmlFor="from_overview_naptien_account"> Số
																		series thẻ(<font
																			color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<input type="text" name="seriescard"
																		   className="form-control form-custom"
																		   id="from_overview_series_card"/>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus">Mệnh giá (<font
																		color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<select name="valuecard"
																			className="form-control form-custom"
																			id="select-menhgia">
																		<option value="">Vui lòng chọn mệnh giá</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																	<label className="label-cus">Mã thẻ (<font
																		color="red"><b>*</b></font>)</label>
																</div>
																<div className="col-md-8">
																	<input name="pincard" id="from_overview_pin_card"
																		   type="text"
																		   className="form-control form-custom"/>
																</div>
															</div>
														</div>
														<div className="form-group">
															<div className="row">
																<div className="col-md-4">
																</div>
																<div className="col-md-8">
																	<input className="btn btn-signin form-control but"
																		   id="btn-form-submit-deposite"
																		   type="submit" value="Nạp tiền"/>
																	<input type="hidden" name="_submit"/>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="row mt-0-30">
													<div className="col-md-12 box-border">
														<p className="guide-deposit">Hướng dẫn nhập Mã giao dịch:</p>
														<p className="guide-help"><i className="icons-hand"></i> Nếu
															bạn <span>chuyển qua ATM</span> vui lòng
															điền <span>"Số Tài Khoản Ngân Hàng của bạn"</span>.</p>
														<p className="guide-help"><i className="icons-hand"></i> Nếu
															bạn <span>chuyển bằng hình thức Nộp Tiền
                              mặt tại quầy</span> vui lòng điền <span>"Họ Và Tên người nộp tiền"</span>.</p>
														<p className="guide-help"><i className="icons-hand"></i> Nếu
															bạn <span>chuyển qua
                              Internetbanking</span>
															thì tùy ngân hàng sẽ có <span>"Mã Giao Dịch"</span> khác
															nhau.</p>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="tabs-main main-content-member withdraw-tabs--content tab-pane" id="withdraw">
							<div className="member-tabs--content">
								<ul className="nav nav-tabs" id="myTab">
									<li className="nav-item ">
										<a className="nav-link active" data-toggle="tab" href="#nope">Rút tiền</a>
									</li>
								</ul>
							</div>
							<form name="rut-tien" className="p-20" id="frm-withdraw-make">
								<div className="row">
									<div className="col-md-12 p-0-30">
										<div className="row">
											<div className="col-md-8">
												<h4 className="title-deposit">Rút tiền siêu nhanh</h4>
												<p className="detail-deposit">An toàn, nhanh chóng, hiệu quả, bảo
													mật</p>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_bank"
																   className="label-cus">Chọn ngân hàng (<font
																color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<select name="bank" id="from_overview_ruttien_bank"
																	className="form-control form-custom">
																<option></option>
																<option value="ACB">Ngân hàng ACB</option>
																<option value="BIDV">Ngân hàng Đầu Tư & Phát triển Việt
																	Nam (BIDV)
																</option>
																<option value="DongA">Ngân hàng Đông Á</option>
																<option value="Sacombank">Ngân hàng Sacombank</option>
																<option value="Techcombank">Ngân hàng Techcombank
																</option>
																<option value="VCB">Ngân hàng Vietcombank</option>
																<option value="VietinBank">Ngân hàng VietinBank</option>
																<option value="VietCapital">Viet Capital Bank</option>
																<option value="VPbank">VPBank</option>
															</select>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_bank"
																   className="label-cus">Tên người nhận (<font
																color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<input name="bank_account"
																   id="from_overview_ruttien_customer" type="text"
																   className="form-control form-custom"/>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_bank"
																   className="label-cus">Số tài khoản (<font
																color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<input name="bank_numbers"
																   id="from_overview_ruttien_accountnumber" type="text"
																   onKeyUp="numberonly(this)"
																   className="form-control form-custom"/>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_tien"
																   className="label-cus">Số tiền (<font color="red">
																<b>*</b></font>)</label>
														</div>
														<div className="col-md-8">
															<input name="amount" id="from_overview_ruttien_tien"
																   type="text"
																   className="form-control format_currency_withdraw form-custom"/>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
															<label htmlFor="from_overview_ruttien_sdt"
																   className="label-cus">Nhập mã (<font
																color="red"><b>*</b>
															</font>)</label>
														</div>
														<div className="col-md-8">
															<input name="security_code" autoComplete="off"
																   id="from_overview_ruttien_sdt" type="text"
																   className="form-control form-custom"
																   placeholder="Nhập 5 số cuối của số điện thoại."/>
														</div>
													</div>
												</div>
												<div className="form-group">
													<div className="row">
														<div className="col-md-4">
														</div>
														<div className="col-md-8">
															<input id="btn-form-submit-withdraw" type="submit"
																   className="btn btn-signin pull-right form-control but"
																   value="Rút tiền"/>
																<input type="hidden" value="2" name="_submit" />
														</div>

													</div>
												</div>
											</div>
										</div>

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
										<table className="table table-striped table-inverse table-responsive"
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


									</form>

								</div>

								<div className="bcontent" id="payment_history">
								</div>

								<div className="bcontent" id="game_history">
								</div>

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