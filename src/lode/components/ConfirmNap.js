import React, {forwardRef, useEffect, useRef, useState} from 'react';
import {useUserStore} from "../../stores/useUserStore";

const ConfirmNap = forwardRef((props, ref) => {
	const closeRef = useRef()
	const {data} = props
	const {user} = useUserStore()
	return (
		<div className="modal fade login-modal" id="confirm" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header" style={{borderBottom:"none"}}>
						<button onClick={()=>closeRef.current?.click()} ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="header-area">
							<h3>Xác nhận đơn nạp</h3>
						</div>
						<div className="form-area">

						</div>

					</div>
				</div>
			</div>
		</div>
	);
});

export default ConfirmNap;