import React from 'react';
import CommonMain from "../../CommonMain";
import images from "../../../assets/images/images";

const HelpPage = () => {
	return (
		<CommonMain>
			<section className="container main-content">
				<div className="row">
					<div className={"col-md-3"}>
						<div className={"right-panel"}>
							<div className="head-panel">
								<p>Winclub24H</p>
							</div>
							<div className={"cate-about"}>
								<ul className="nav flex-column" >
									<li className="nav-item" >
										<a className="nav-link active" data-toggle="tab" href="#kyc">Hướng dẫn xác minh tài khoản</a>
									</li>
									<li className="nav-item" >
										<a className="nav-link " data-toggle="tab" href="#nap">Hướng dẫn nạp tiền</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#rut">Hướng dẫn rút tiền</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-9" >
						<div className="block right-content abo">
							<div className="tab-content">
								<div className="tab-pane container " id="nap">
									<h3>Các bước nạp tiền</h3>
									<div>
										<p>1/ Đăng nhập tài khoản vào Winclub24h, chọn mục Ví và chọn Nạp tiền</p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.nap_help} alt="" style={{width:"100%"}}/>
									</div>
									<br/>
									<div>
										<p>2/ Đăng nhập tài khoản vào Winclub24h, chọn mục Ví và chọn Nạp tiền</p>
									</div>
									<div style={{marginLeft:"20px"}}>
										<p>1. Chọn tài khoản chuyển đến</p>
										<p>2. Chọn tài khoản của bạn</p>
										<p>3. Chọn số tiền muốn giao dịch</p>
										<p>4. Xác nhận đã chuyển khoản</p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.nap2} alt="" style={{width:"100%"}}/>
									</div>
									<br/>
									<div>
										<p>Chú ý: nếu bạn chưa thêm tài khoản ngân hàng hãy nhấn vào chữ "Quản lý tài khoản ngân hàng
											để thêm tài khoản ngân hàng rồi quay lại tiếp tục thực hiện giao dịch"</p>
									</div>
								</div>
								<div className="tab-pane container " id="rut">
									<h3>Các bước rút tiền</h3>
									<div>
										<p>1/ Đăng nhập tài khoản vào Winclub24h, chọn mục Ví và chọn rút tiền</p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.nap_help} alt="" style={{width:"100%"}}/>
									</div>
									<br/>
									<div>
										<p>2/Các bước rút tiền</p>
									</div>
									<div style={{marginLeft:"20px"}}>
										<p>1. Chọn tài khoản bạn muốn nhận tiền</p>
										<p>2. Chọn số tiền muốn giao dịch</p>
										<p>3. Xác nhận </p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.rut} alt="" style={{width:"100%"}}/>
									</div>
									<br/>
									<div>
										<p>Chú ý: nếu bạn chưa thêm tài khoản ngân hàng hãy nhấn vào chữ "Quản lý tài khoản ngân hàng
											để thêm tài khoản ngân hàng rồi quay lại tiếp tục thực hiện giao dịch"</p>
									</div>
								</div>
								<div className="tab-pane container active" id="kyc">
									<h3>Các bước xác minh tài khoản</h3>
									<div>
										<p>1/ Đăng nhập tài khoản vào Winclub24h, chọn mục xác minh trên thanh menu</p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.kyc} alt="" style={{width:"100%"}}/>
									</div>
									<br/>
									<div>
										<p>2/ Các bước xác minh tài khoản</p>
									</div>
									<div style={{marginLeft:"20px"}}>
										<p>1. Nhấn nút gửi mã (mã sẽ được gửi đến số điện thoại mà bạn đăng ký tài khoản)</p>
										<p>2. Nhập mã bạn nhận được</p>
										<p>3. Nhấn xác nhận </p>
									</div>
									<div className={"image-ab container"} style={{textAlignLast:"center"}}>
										<img src={images.confirm} alt="" style={{width:"100%"}}/>
									</div>
									<br/>
									<div>
										<p>Chú ý: mỗi lần nhấn gửi mã sẽ mất 1000 vnđ</p>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
		</CommonMain>
	);
};

export default HelpPage;