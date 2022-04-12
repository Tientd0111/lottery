import React from 'react';
import {useForm, FormProvider} from "react-hook-form";
import FormInput from "../components/FormInput";
import {useUserStore} from "../../stores/useUserStore";
import AppLoading from "../components/AppLoading";

const Register = () => {
	const {handleSubmit, control } = useForm();
	const onSubmit = async data => {
		await register(data)
	};
	const {loading, register} = useUserStore(state => ({
		loading: state.loading,
		register: state.register,
	}))

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormInput control={control} name={'name'} placeholder={'Nhập họ tên...'} label={'Họ tên'}/>
			<FormInput control={control} name={'email'} placeholder={'Nhập email...'} label={'Email'}/>
			<FormInput control={control} name={'phone_number'} placeholder={'Nhập số điện thoại...'} label={'Số điện thoại'}/>
			<FormInput control={control} name={'username'} placeholder={'Nhập tên đăng nhập...'} label={'Tên đăng nhập'}/>
			<FormInput control={control} name={'password'} placeholder={'Nhập mật khẩu...'} label={'Mật khẩu'}/>
			{/*<div className="form-group">*/}
			{/*	<label htmlFor="login-input-password">Mật khẩu <span style={{color:'red'}}>*</span></label>*/}
			{/*	<input {...register("password", { required: "Vui lòng nhập mật khẩu." })} type="password" className="input-field" placeholder="Nhập mật khẩu..." />*/}
			{/*</div>*/}

			<div className="form-group">
				<button type="submit" className="mybtn1" >{loading?<AppLoading/>:"Đăng ký"}</button>
			</div>
		</form>
	);
};

export default Register;