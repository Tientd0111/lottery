import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const useUserStore = create(set => ({
	login: async (bodyParameters) => {
		set({loading: true})
		callService(apis.login.uri, 'POST', bodyParameters)
			.then(response => {
				toast.success(response?.msg)
				set({user: response.user, loading: false});
				localStorage.setItem('key', response.accessToken)
			})
			.catch(error=>{
				toast.error(error.response.data?.msg)
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
				toast.error(error.response.data?.msg)
				set({loading:false})
			})
	},

	user: undefined,
	loading: false,
}))