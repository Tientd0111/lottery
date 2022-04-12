import React from "react";

const HeadPay = () =>{
	return(
		<section style={{marginTop:"150px"}}>
			<div className="row header-member nav nav-pills">
				<div className="col-md-2">
					<p>Xin chào, <span>min</span></p>
				</div>
				<div className="col-md-2">
					<p>Số điện thoại: <span>09781*****</span></p>
					<p><a className="edit-info span-changepass" href="https://lode88.online/memberinfoedit.html">Thay
						đổi mật khẩu</a>
					</p>
				</div>
				<div className="col-md-8">
					<ul className="nav nav-tabs" style={{justifyContent:"center"}}>
						<li className="nav-item card ">
							<a href="#cashback" data-toggle="pill" className="btn btn-link card-nav active">Hoàn Trả</a>
						</li>
						<li className="nav-item card ">
							<a href="#deposit" data-toggle="pill" className="btn btn-link card-nav">Nạp tiền</a>
						</li>
						<li className="nav-item card ">
							<a href="#withdraw" data-toggle="pill" className="btn btn-link card-nav">Rút tiền</a>
						</li>
						<li className="nav-item card ">
							<a href="#history" data-toggle="pill" className="btn btn-link card-nav">Lịch sử</a>
						</li>
						<li className="nav-item card ">
							<a href="#bank" data-toggle="pill" className="btn btn-link card-nav">Ngân hàng</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
export default HeadPay;