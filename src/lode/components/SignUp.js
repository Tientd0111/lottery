import React, {useRef} from 'react';
import FormInput from "./FormInput";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../stores/useUserStore";
import ButtonBase from "./ButtonBase";

const SignUp = () => {
	const closeRef = useRef()
	const {handleSubmit, control } = useForm();
	const onSubmit = async data => {
		await register(data)
		closeRef.current?.click()
	};
	const {loading, register} = useUserStore(state => ({
		loading: state.loading,
		register: state.register,
	}))

	return (
		<div className="modal fade login-modal sign-in" id="signin" tabIndex={-1} role="dialog" aria-labelledby="signin" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered " role="document">
				<div className="modal-content">
					{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
					<div className="modal-header" style={{borderBottom:"none"}}>
						<button onClick={()=>closeRef.current?.click()} type="button" className="close" data-dismiss="modal" aria-label="Close" ref={closeRef} style={{padding:"4px 16px"}}>
							<span style={{color:"#fff"}} aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="header-area">
							<h4 className="title">{'Đăng ký ngay !'}</h4>
							<p className="sub-title">{'Điền thông tin của bạn.'}</p>
						</div>
						<div className="form-area">
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormInput control={control} name={'username'} placeholder={'Nhập tên đăng nhập...'} label={'Tên đăng nhập'}/>
								<FormInput control={control} name={'password'} placeholder={'Nhập mật khẩu...'} label={'Mật khẩu'} type={'password'}/>
								<FormInput control={control} name={'name'} placeholder={'Nhập họ tên... (vd: TRAN VAN A)'} label={'Họ tên'}/>
								{/*<FormInput control={control} name={'email'} placeholder={'Nhập email...'} label={'Email'}/>*/}
								<FormInput control={control} name={'phone_number'} placeholder={'Nhập số điện thoại...'} label={'Số điện thoại'}/>
								<small style={{color:"#fa324b"}}>Lưu ý: Nhập họ tên trùng với tên  in trên thẻ ngân hàng</small>
								<ButtonBase text={'Đăng ký'} isLoading={loading}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default SignUp;