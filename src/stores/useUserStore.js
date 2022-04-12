import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const useUserStore = create(set => ({
	login: async (bodyParameters) => {
		set({loading: true})
		callService(apis.login.uri, 'POST', bodyParameters)
			.then(response => {
				set({user: response.user, loading: false});
				localStorage.setItem('key', response.accessToken)
			})
			.catch(error=>{
				set({loading: false})
			})
	},

	setUser: (data) => {set({user: data})},

	register: async (bodyParameter)=>{
		set({loading:true})
		callService(apis.register.uri,'POST', bodyParameter)
			.then(response => {
				console.log("XXXXXXXX", response)
				set({loading:false});
			})
			.catch(error => {
				toast.error(error.response.data?.msg)
				set({loading:false})
			})
	},

	lotteryCreate:async (bodyParameter)=>{
		set ({loading:true})
		callService(apis.lotteryCreate.uri, 'POST', bodyParameter)
	},


	user: undefined,
	loading: false,
}))