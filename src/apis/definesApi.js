const apis = {
	login: {
		uri: 'auth/login'
	},
	register: {
		uri: 'auth/register'
	},
	bet: {
		uri:'billLottery/create'
	},
	transfer:{
		uri:'transfer/create'
	},
	confirm:{
		uri:'transfer/confirmOrder'
	},
	withdraw:{
		uri:'withdraw/create'
	},

	logout: {
		uri: 'auth/logout'
	},
	reload:{
		uri:'user/reload'
	},
	hisNap:{
		uri:'transfer/history'
	},
	hisRut:{
		uri:'withdraw/history'
	},
	hisBet:{
		uri:'billLottery/history'
	},
	kqxs:{
		uri:'billLottery/kqsx/'
	},
	historyWinner:{
		uri:'billLottery/history-winner'
	},
	refresh_token: {
		uri: 'auth/refresh'
	},
	kyc: {
		uri: 'user/kyc'
	}
}
export default apis