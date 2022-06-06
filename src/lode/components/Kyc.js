import React, {useRef} from 'react';
import FormInput from "./FormInput";
import {useForm} from "react-hook-form";
import {callService} from "../../apis/baseRequest";
import {toast} from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useUserStore} from "../../stores/useUserStore";

const Kyc = () => {
	const { handleSubmit, control } = useForm({ shouldUseNativeValidation: true });
	const {kyc,reload,ok} = useUserStore(state => ({
		kyc: state.kyc,
		ok: state.ok,
		reload: state.reload
	}))
	const onSubmit = async data => {
		callService("user/kyc-finish",'POST',data,true).then((response)=>{
			toast.success(response?.msg)
			reload();
		}).catch(error=>{
			toast.error(error.response.data?.msg)
		})
	};
	const closeRef = useRef()

	return (
		<div className="modal fade login-modal sign-in" id="kyc" tabIndex="-1" role="dialog"
			 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header" style={{display:"flex",flexDirection:"column",borderBottom:"none",marginBottom:'23px'}}>
						<h5 style={{color:"#fff",display:"flex",flexDirection:'column'}} className="modal-title" id="exampleModalCenterTitle">Xác minh tài khoản
						</h5>
						<div style={{display:"flex",justifyContent:"space-between",color:"#d9d9d9",width:"100%"}}>
							<small>(phí gửi mã: 1000đ/lần) </small>
							<small>{ok === false?<a style={{color:"white",padding:"4px",backgroundColor:"#28a745",borderRadius:"6px"}} onClick={()=>kyc()} href="/#">Gửi mã</a>:
								<span>Đã gửi mã xác minh <FontAwesomeIcon icon={['fas','exclamation-circle']}/></span>}
							</small>
						</div>
							<button onClick={()=>closeRef.current?.click()} type="button" className="close" data-dismiss="modal" aria-label="Close" ref={closeRef} style={{padding:"4px 16px"}}>
								<span style={{color:"#fff"}} aria-hidden="true">&times;</span>
							</button>
					</div>

					<div className="modal-body">
						<div className="form-area">
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormInput name={'code'} rules={{required: "Vui lòng nhập mã xác nhận."}}
										   placeholder={'Nhập mã xác nhận...'} label={'Mã xác nhận'} control={control}/>
								<div className="modal-footer" style={{borderTop:'none'}}>
									<button type="submit" className="mybtn1" style={{padding:"10px",fontSize:'13px'}}>Xác nhận</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Kyc;
