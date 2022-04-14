import './App.css';
import RootRoutes from "./routes";
import {toast, ToastContainer} from "react-toastify";
import BigSmall from "./lode/minigame/BigSmall";
import {useEffect} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";
import formatNumber from './hooks/formatNumber'

function App() {

	const {socket} = useSocket(state => ({
		socket: state.socket
	}));

	const {user} = useUserStore(state => ({
		user: state.user
	}))

	useEffect(()=> {
		if(user) {
			socket.on('nap-order-admin-confirm', (res) => {
				if(res.created_by === user.username) {
					if(res.status === 2) {
						toast.success(`Quản trị viên đã xác nhận đơn nạp ${formatNumber(res.money_transfer)} của bạn!`)
					}
					else {
						toast.error(`Quản trị viên đã từ chối đơn nạp ${formatNumber(res.money_transfer)} của bạn!`)
					}
				}
			})
		}
	},[user])

	return (
		<>
			{/*<BigSmall/>*/}
			<RootRoutes/>
			<ToastContainer
				autoClose={1500}
			/>
		</>
	);
}

export default App;
