import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const HistoryStores = create(set => ({
	TransferNap: async (bodyParameters) => {
		set({loading: true})
		callService(apis.HisNap.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({dataResult: response.result,loading: false});
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	dataResult:undefined,
	loading: false,
}))