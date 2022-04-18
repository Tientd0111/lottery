import './App.css';
import RootRoutes from "./routes";
import {toast, ToastContainer} from "react-toastify";
import BigSmall from "./lode/minigame/BigSmall";
import React, {useEffect, useRef} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";

function App() {

	const {socket} = useSocket(state => ({
		socket: state.socket
	}));
	const toastId = useRef(null);

	const {user} = useUserStore(state => ({
		user: state.user
	}))

	useEffect(()=> {
		if(user) {
			socket.on('message-to-user', (res)=>{
				if(res.user === user.username) {
					if(!toast.isActive(toastId.current)) {
						toastId.current = toast(res.msg)
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
