import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";

export const useLoadTable = create(set => ({
	load: async (params = 'mb') => {
		set({loading: true})
		callService(apis.kqxs.uri + params, 'GET')
			.then(response => {
				set({loading: false, data: response})
			})
			.catch(error=>{
				set({loading: false})
			})
	},
	data: [],
	loading: false,
}))