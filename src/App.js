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
			socket.on('message-to-user', (res)=>{
				if(res.user === user.username) toast(res.msg)
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
