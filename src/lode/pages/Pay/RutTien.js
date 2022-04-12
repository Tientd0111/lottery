import React from 'react';
import CommonMain from "../../CommonMain";

const RutTien = () => {
	return (
		<CommonMain>
			<section>
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
			</section>
		</CommonMain>
	);
};

export default RutTien;