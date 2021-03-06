import React, {forwardRef, useRef} from 'react';
import {useUserStore} from "../../stores/useUserStore";
import {useBankStore} from "../../stores/useBankStore";
import formatNumber from "../../hooks/formatNumber";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {UsePayStores} from "../../stores/usePayStores";

const ConfirmNap = forwardRef((props, ref) => {
	const closeRef = useRef()
	const {data,bankId} = props
	const {user} = useUserStore()
	const {listAd} = useBankStore(state => ({
		listAd: state.dataBankAd
	}))
	const {tranf} = UsePayStores(state => ({
		tranf: state.tranf,
		loading: state.loading,
	}))
	const {handleSubmit} = useForm();

	const onSub = () => {
		if(user?.username !== undefined){
			tranf(data)
			closeRef.current?.click()
		}else {
			toast.error('Vui lòng đăng nhập')
		}
	};
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
							<h3>Xác nhận đã chuyển khoản</h3>
							<small style={{color:"#ff8282"}}>vui lòng kiểm tra thông tin và chuyển khoản đúng nội dung bên dưới trước khi nhấn xác nhận </small>
						</div>
						<div className="form-area">
							<p>Đến tài khoản: {listAd[bankId]?.bank_name} - {listAd[bankId]?.bank_account_name}</p>
							<p>Số tiền: {formatNumber(data?.money)}</p>
							<p>Nội dung chuyển khoản: {data?.description}</p>
						</div>
							<div style={{display:'flex',justifyContent:"center"}}><a  href="/#" className={"mybtn1"} onClick={handleSubmit(onSub)}>xác nhận</a></div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default ConfirmNap;
