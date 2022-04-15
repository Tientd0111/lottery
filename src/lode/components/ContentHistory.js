import React from 'react';

const ContentHistory = () => {
	return (
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
			</form>
		</div>
	);
};

export default ContentHistory;