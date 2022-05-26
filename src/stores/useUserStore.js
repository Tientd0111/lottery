import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";
import cookies from "../contants/cookie";
import axios from "axios";

export const useUserStore = create(set => ({
	login: async (bodyParameters) => {
		let param = bodyParameters
		try {
			set({loading: true})
			const ip = await axios.get('https://api.ipify.org/')
			param.ip = ip.data
			const response = await callService(apis.login.uri, 'POST', param)
			toast.success(response?.msg)
			set({user: response.user, loading: false});
			localStorage.setItem('key', response.accessToken)
			cookies.set('refreshToken', response.refreshToken, { path: '/' });
		} catch (e) {
			toast.error(e.response?.data.msg)
			set({loading: false})
		}
	},

	setUser: (data) => {set({user: data})},

	register: async (bodyParameter)=>{
		set({loading:true})
		callService(apis.register.uri,'POST', bodyParameter)
			.then(response => {
				toast.success(response?.msg)
				set({loading:false});
			})
			.catch(error => {
				toast.error(error.response?.data?.msg)
				set({loading:false})
			})
	},
	reload: async ()=>{
		callService(apis.reload.uri,'POST', {},true)
			.then(response => {
				set({user:response});
				set({loading:false});
			})
			.catch(error => {
				set({loading:false})
			})
	},

	logout: async ()=>{
		try {
			set({loading:true})
			const response = await callService(apis.logout.uri,'POST', {}, true)
			toast.success(response?.msg)
			set({loading:false});
		}catch (e) {
			toast.error(e)
			set({loading:false})
		}
	},
	kyc: async ()=>{
		set({loading:true})
		callService(apis.kyc.uri,'POST', {}, true)
			.then(response => {
				toast.success(response?.msg)
				set({loading:false});
			})
			.catch(error => {
				toast.error(error)
				set({loading:false})
			})
	},

	user: undefined,
	loading: false,
}))