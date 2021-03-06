import './App.css';
import RootRoutes from "./routes";
import {ToastContainer} from "react-toastify";
import React, {useCallback, useEffect} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";
import BigSmall from "./lode/minigame/BigSmall";
import cookies from "./contants/cookie";
import MiniGame from "./lode/components/MiniGame";
import HistoryTx from "./lode/components/HistoryTx";
import Cau from "./lode/components/Cau";

function App() {

	const {socket} = useSocket(state => ({
		socket: state.socket
	}));

	const {user, setUser , logout, reload} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser,
		logout: state.logout,
		reload: state.reload
	}))

	const logoutSection = async () => {
		await logout();
		setUser(undefined)
		cookies.remove('refreshToken')
		window.location.reload()
		localStorage.removeItem('key')
	}

	const keyDisable = useCallback((event) => {
		if (event.key === 'F12' || event.ctrlKey || event === 'Shift') {
			event.preventDefault()
		}
	}, []);

	const mouseDisable = useCallback((event) => {
		event.preventDefault()
	}, []);

	useEffect(()=> {
		document.addEventListener("keydown", keyDisable, false);
		document.addEventListener("contextmenu", mouseDisable, false);

		if(user === undefined || user == null) return;
		socket.emit('login', user.username)
		// socket.on(`message-to-user-${user.username}`, reload)
		socket.on('updating-user', (data)=>setUser(data))
		socket.on(`block-user-${user.username}`, logoutSection);
		return () => {
			document.removeEventListener("keydown", keyDisable, false);
			document.addEventListener("contextmenu", mouseDisable, false);
		};
	},[user])

	return (
		<div style={{position: 'relative'}}>
			<BigSmall/>
			<HistoryTx/>
			<Cau/>
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
