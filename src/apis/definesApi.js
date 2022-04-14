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
	}

}
export default apis