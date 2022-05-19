import './App.css';
import RootRoutes from "./routes";
import {toast, ToastContainer} from "react-toastify";
import React, {useEffect} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";
import BigSmall from "./lode/minigame/BigSmall";
import cookies from "./contants/cookie";
import MiniGame from "./lode/components/MiniGame";

function App() {

	const {socket} = useSocket(state => ({
		socket: state.socket
	}));

	const {user, setUser , logout} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser,
		logout: state.logout,
		reload: state.reload
	}))

	const logoutSection = async () => {
		await logout();
		await logout()
		setUser(undefined)
		cookies.remove('refreshToken')
		localStorage.removeItem('key')
	}
	useEffect(()=> {
		if(user === undefined || user == null) return;
		const showToast = (response) => {
			if(response?.msg) toast(response.msg)
			if(response?.user) setUser(response.user)
		}

		socket.on(`message-to-user-${user.username}`, showToast)
		socket.on(`block-user-${user.username}`, ()=>{
			logoutSection();
		});
		return () => {
			socket.off(`message-to-user-${user.username}`, showToast);
		}

	},[user])

	return (
		<div style={{position: 'relative'}}>
			<BigSmall/>
			<MiniGame/>
			<RootRoutes/>
			<ToastContainer
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				draggable
				autoClose={1500}
			/>
		</div>
	);
}

export default App;
