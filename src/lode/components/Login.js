import React, {useRef} from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {useUserStore} from "../../stores/useUserStore";
import 'react-toastify/dist/ReactToastify.css';
import FormInput from "./FormInput";
import ButtonBase from "./ButtonBase";
import {useForm} from "react-hook-form";
import {useSocket} from "../../stores/useSocket";

library.add(fas, fab);

const Login = () => {
	const { handleSubmit, control, reset } = useForm({ shouldUseNativeValidation: true });

	const {loading, login} = useUserStore(state => ({
		loading: state.loading,
		login: state.login
	}));

	const {socket} = useSocket(state => ({socket: state.socket}))

	const onSubmit = async data => {
		const {isAuth} = await login(data)
		if(isAuth) {
			socket.emit('login', data.username)
			reset({username: '', password: ''})
			closeRef.current?.click()
		}
	};

	const closeRef = useRef()

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
							<form onSubmit={handleSubmit(onSubmit)}>
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
