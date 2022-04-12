import React, {useEffect, useRef} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../stores/useUserStore";
import AppLoading from "./AppLoading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useCookies} from "react-cookie";

library.add(fas, fab);

const Login = () => {
	const { register, handleSubmit, formState } = useForm({ shouldUseNativeValidation: true });

	const [cookies, setCookie] = useCookies(['cookie-user']);

	const {loading, user, login} = useUserStore(state => ({
		loading: state.loading,
		user: state.user,
		login: state.login
	}))
	console.log(user)
	const onSubmit = async data => {
		await login(data)
	};

	useEffect(()=>{
		if(user) {
			closeRef.current?.click()
			let d = new Date();
			d.setTime(d.getTime() + (1440*60*1000));
			setCookie('cookie-user', user, {
				expires: d,
				path: "/",
			})
		}
	},[user])

	const closeRef = useRef()

	const invalidValue = () => {

	}


	return (
		<div className="modal fade login-modal" id="login" tabIndex={-1} role="dialog" aria-labelledby="login" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
					<button ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					<div className="modal-body">

						<div className="header-area">
							<h4 className="title">Chào mừng bạn trở lại</h4>
							<p className="sub-title">Nhập thông tin đăng nhập dưới đây.</p>
						</div>
						<div className="form-area">
							<form onSubmit={handleSubmit(onSubmit, invalidValue)}>
								<div className="form-group">
									<label htmlFor="login-input-email">Tên đăng nhập <span style={{color:'red'}}>*</span></label>
									<input
										{...register("username", { required: "Vui lòng nhập tên đăng nhập." })}
										type="text" className="input-field" placeholder="Nhập tên đăng nhập..."
									/>
								</div>
								<div className="form-group">
									<label htmlFor="login-input-password">Mật khẩu <span style={{color:'red'}}>*</span></label>
									<input {...register("password", { required: "Vui lòng nhập mật khẩu." })} type="password" className="input-field" placeholder="Nhập mật khẩu..." />
								</div>
								<div className="form-group">
									<div>
										<div className="left">
											<input type="checkbox" className="check-box-field" id="input-save-password" defaultChecked />
											<label htmlFor="input-save-password"> Ghi nhớ mật khẩu</label>
										</div>
										<div className="right">
											<a href="/#">
												Quên mật khẩu?
											</a>
										</div>
									</div>
								</div>
								<div className="form-group">
									<button type="submit" className="mybtn1">{loading?<AppLoading/>:'Đăng nhập'}</button>
									<ToastContainer/>
								</div>
							</form>
						</div>
						<div className="form-footer">
							<p>Không phải là thành viên?
								<a href="/#" className="register" data-toggle="modal" data-target="#register">Tạo tài khoản <FontAwesomeIcon icon={['fas','angle-double-right']} /></a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login