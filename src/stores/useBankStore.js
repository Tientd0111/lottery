import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const useBankStore = create(set => ({
	addBank: async (bodyParameters) => {
		set({loading: true})
		callService(apis.add_bank.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({loading: false})
				toast.success(response.msg)
			})
			.catch(error=>{
				set({loading: false})
				toast.error(error.response.data?.msg)
			})
	},
	load: async (bodyParameters) => {
		try {
			set({loading: true})
			const response = await callService(apis.load_bank.uri, 'GET', bodyParameters ,true)
			set({dataResult: response.banks,loading: false})
			return response.banks
		}catch (e) {
			toast.error(e.response?.data.msg)
			set({loading: false})
			return []
		}
	},
	delete:async (id)=> {
		set({loading: true})
		callService('user/' + id + apis.del_bank.uri, 'DELETE', {},true)
			.then(response => {
				toast.success(response?.msg)
			})
			.catch(error=>{
				toast.error(error.response?.data.msg)
				set({loading: false})
			})
	},
	loadAdmin: async (bodyParameters) => {
		set({loading: true})
		callService(apis.loadbankad.uri, 'GET', bodyParameters ,true)
			.then(response => {
				console.log(response.results)
				set({dataBankAd:response.results,loading: false})
			})
			.catch(error=>{
				toast.error(error.response?.data.msg)
				set({loading: false})
			})
	},
	dataBankAd: [],
	dataResult: [],
	loading: false
}))