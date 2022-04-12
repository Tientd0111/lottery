import React from 'react';
import FormInput from "./FormInput";
import AppLoading from "./AppLoading";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../stores/useUserStore";

const SignUp = () => {

	const {handleSubmit, control } = useForm();
	const onSubmit = async data => {
		await register(data)
	};
	const {loading, register} = useUserStore(state => ({
		loading: state.loading,
		register: state.register,
	}))

	return (
		<div className="modal fade login-modal sign-in" id="signin" tabIndex={-1} role="dialog" aria-labelledby="signin" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered " role="document">
				<div className="modal-content">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					<div className="modal-body">
						<div className="header-area">
							<h4 className="title">{'Đăng ký ngay !'}</h4>
							<p className="sub-title">{'Điền thông tin của bạn.'}</p>
						</div>
						<div className="form-area">
							<form onSubmit={handleSubmit(onSubmit)}>
<FormInput control={control} name={'username'} placeholder={'Nhập tên đăng nhập...'} label={'Tên đăng nhập'}/>
								<FormInput control={control} name={'password'} placeholder={'Nhập mật khẩu...'} label={'Mật khẩu'}/>
								<FormInput control={control} name={'name'} placeholder={'Nhập họ tên...'} label={'Họ tên'}/>
								<FormInput control={control} name={'email'} placeholder={'Nhập email...'} label={'Email'}/>
								<FormInput control={control} name={'phone_number'} placeholder={'Nhập số điện thoại...'} label={'Số điện thoại'}/>
								<div className="form-group">
									<button type="submit" className="mybtn1" >{loading?<AppLoading/>:"Đăng ký"}</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default SignUp;