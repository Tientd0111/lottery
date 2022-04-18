import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useHistoryStores = create(set => ({
	transferNap: async (bodyParameters) => {
		set({loading: true})
		callService(apis.hisNap.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({loading: false})
				if(bodyParameters?.addItem) {
					set(state => ({dataHis: [...state.dataHis, ...response]}))
				} else {
					set({dataHis: response})
				}
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	transferRut: async (bodyParameters) => {
		set({loading: true})
		callService(apis.hisRut.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({loading: false})
				if(bodyParameters?.addItem) {
					set(state => ({dataHis: [...state.dataHis, ...response]}))
				} else {
					set({dataHis: response})
				}
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	hisBet: async (bodyParameters) => {
		set({loading: true})
		callService(apis.hisBet.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({loading: false})
				if(bodyParameters?.addItem) {
					set(state => ({dataHis: [...state.dataHis, ...response]}))
				} else {
					set({dataHis: response})
				}
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	dataHis: [],
	loading: false,
}))