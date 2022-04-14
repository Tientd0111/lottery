import React from 'react';

const InfoUserRow = ({name = '', value}) => {
	return (
		<div className="form-group">
			<div className="row">
				<div className="col-md-4">
					<label className="label-cus">{name}</label>
				</div>
				<div className="col-md-8">
					{/*<input type="text"*/}
					{/*	className="form-control form-custom" disabled*/}
					{/*	*/}
					{/*/>*/}
					<div className="form-control form-custom">{value}</div>
				</div>
			</div>
		</div>
	);
};

export default InfoUserRow;