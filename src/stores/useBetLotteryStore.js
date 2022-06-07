import create from 'zustand';
import {callService} from "../apis/baseRequest";
import apis from "../apis/definesApi";
import {toast} from "react-toastify";

export const useBetLotteryStore = create(set => ({
	bet: async (bodyParameters) => {
		set({loading: true})
		try {
			const response = await callService(apis.bet.uri, 'POST', bodyParameters, true)
			set({ loading: false});
			toast.success(response.msg)
		}catch (e) {
			set({loading: false})
			toast.error(e.response.data?.msg)
		}
	},
	loading: false,
}))
