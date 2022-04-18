import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const HistoryStores = create(set => ({
	historyTranf: async (bodyParameters) => {
		set({loading: true})
		callService(apis.historytransfer.uri, 'POST', bodyParameters, true)
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