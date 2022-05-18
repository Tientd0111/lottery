import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";
import cookies from "../contants/cookie";

export const useUserStore = create(set => ({
	login: async (bodyParameters) => {
		set({loading: true})
		callService(apis.login.uri, 'POST', bodyParameters)
			.then(response => {
				toast.success(response?.msg)
				set({user: response.user, loading: false});
				localStorage.setItem('key', response.accessToken)
				cookies.set('refreshToken', response.refreshToken, { path: '/' });
			})
			.catch(error=>{
				toast.error(error.response?.data.msg)
				set({loading: false})
			})
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
		set({loading:true})
		callService(apis.logout.uri,'POST', {}, true)
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