import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {callService} from "../../apis/baseRequest";
import {useUserStore} from "../../stores/useUserStore";
import formatNumber from "../../hooks/formatNumber";

const Detail = forwardRef((props, ref) => {
	const closeRef = useRef()
	const [dataResult, setDataResult] = useState(null)
	const {billId} = props
	useEffect(()=>{
		if(billId)
		callService( 'transfer/' + billId + '/detail', 'GET', {}, true)
			.then((res)=>{
				setDataResult(res)
			}).catch()
	},[billId])
	console.log(dataResult)
	const {user} = useUserStore()
	return (
		<div className="modal fade login-modal" id="detail" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header" style={{borderBottom:"none"}}>
						<button onClick={()=>closeRef.current?.click()} ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="header-area">
							<h3>Chi tiết {dataResult?.type === 'plus'? "đơn nạp":"đơn rút"}</h3>
						</div>
						<div className="form-area">
							{dataResult?.type === "plus"?
								<span>Tài khoản gửi: {dataResult?.bank_from?.bank_name} - {user?.name}</span>:
								''
							}
							<br/>
							{dataResult?.type === "plus"?
								<span>Tài khoản nhận: {dataResult?.bank_to?.bank_name} - {dataResult?.bank_to?.bank_account_name}</span>:
								<span>Tài khoản nhận: {dataResult?.bank_to?.bank_name} - {user?.name}</span>
							}
							<br/>
							<span>số tiền: {formatNumber(dataResult?.money)}</span>
							<br/>
							<span>Nội dung chuyển khoản: {dataResult?.description}</span>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
});

export default Detail;