import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const useBetLotteryStore = create(set => ({
	bet: async (bodyParameters) => {
		set({loading: true})
		callService(apis.bet.uri, 'POST', bodyParameters, true)
			.then(response => {
				set({ loading: false});
				toast.success(response.msg)
			})
			.catch(error=>{
				set({loading: false})
				toast.error(error.response.data.msg)
			})
	},
	loading: false,
}))