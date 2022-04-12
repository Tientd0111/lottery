import React from "react";

const HeadPay = () =>{
	const menu=[
		{name:'Nạp tiền'},
		{name:'Rút tiền'},
		{name:'Lịch sử'},
		{name:'Ngân hàng'}
	]
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
						{menu.map((item)=>(
							<li className="nav-item card" >
								<a href="/#" data-toggle="pill" className="btn btn-link card-nav" style={{padding:"39px 14px 37px 18px"}}>{item.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
export default HeadPay;