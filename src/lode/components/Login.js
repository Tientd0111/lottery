import React, {useEffect, useRef} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {useUserStore} from "../../stores/useUserStore";
import 'react-toastify/dist/ReactToastify.css';
import FormInput from "./FormInput";
import ButtonBase from "./ButtonBase";
import {useForm} from "react-hook-form";

library.add(fas, fab);

const Login = () => {
	const { handleSubmit, control } = useForm({ shouldUseNativeValidation: true });

	const {loading, user, login} = useUserStore(state => ({
		loading: state.loading,
		user: state.user,
		login: state.login
	}))
	const onSubmit = async data => {
		await login(data)
	};

	useEffect(()=>{
		if(user) {
			closeRef.current?.click()
			let d = new Date();
		}
	},[user])

	const closeRef = useRef()

	const invalidValue = () => {

	}


	return (
		<div className="modal fade login-modal" id="login" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<div className="modal-header" style={{borderBottom:"none"}}>
						<button onClick={()=>closeRef.current?.click()} ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="header-area">
							<h4 className="title">Chào mừng bạn trở lại</h4>
							<p className="sub-title">Nhập thông tin đăng nhập dưới đây.</p>
						</div>
						<div className="form-area">
							<form onSubmit={handleSubmit(onSubmit, invalidValue)}>
								<FormInput name={'username'} rules={{required: "Vui lòng nhập tên đăng nhập."}}
										   placeholder={'Nhập tên đăng nhập...'} label={'Tên đăng nhập'} control={control}/>
								<FormInput name={'password'} rules={{required: "Vui lòng nhập mật khẩu."}}
										   placeholder={'Nhập tên đăng nhập...'} label={'Mật khẩu'} control={control}
										   type={'password'}/>
								<div className="form-group">
									<div className="right">
										<a href="/#">Quên mật khẩu?</a>
									</div>
								</div>
								<ButtonBase text={'Đăng nhập'} isLoading={loading}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login