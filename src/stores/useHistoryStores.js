import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useHistoryStores = create(set => ({
	transferRut: async (bodyParameters) => {
		set({loading: true})
		callService(apis.hisRut.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({dataHis: response, loading: false})
			})
			.catch(error=>{
				set({loading: false})
			})
	},

	dataHis:undefined,
	loading: false,
}))