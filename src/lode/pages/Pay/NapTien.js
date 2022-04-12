import React from 'react';
import CommonMain from "../../CommonMain";

const NapTien = () => {
	return (
		<CommonMain>
			<section style={{marginTop:"180px"}}>
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
			</section>
		</CommonMain>
	);
};

export default NapTien;