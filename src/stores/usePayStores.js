import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const UsePayStores = create(set => ({
	tranf: async (bodyParameters) => {
		set({loading: true})
		callService(apis.transfer.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({dataResult: response.result,loading: false});
				toast.success(response.msg)
			})
			.catch(error=>{
				toast.error(error.response?.data.msg)
				set({loading: false})
			})
	},
	withdraw: async (bodyParameters) => {
		set({loading: true})
		callService(apis.withdraw.uri, 'POST', bodyParameters, true)
			.then(response => {
				toast.success(response.msg)
			})
			.catch(error=>{
				toast.error(error.response?.data.msg)
				set({loading: false})
			})
	},
	confirmData:async (bodyParameters) => {
		set({loading: true})
		callService(apis.confirm.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({loading: false});
				toast.success(response.msg)
			})
			.catch(error=>{
				toast.error(error.response?.data.msg)
				set({loading: false})
			})
	},
	dataResult:undefined,
	loading: false,
}))