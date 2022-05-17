import './App.css';
import RootRoutes from "./routes";
import {toast, ToastContainer} from "react-toastify";
import React, {useEffect} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";
import {useCookies} from "react-cookie";
import BigSmall from "./lode/minigame/BigSmall";

function App() {

	const {socket} = useSocket(state => ({
		socket: state.socket
	}));

	const {user, setUser , logout} = useUserStore(state =>({
		user: state.user,
		setUser: state.setUser,
		logout: state.logout,
	}))
	const [cookies, removeCookie] = useCookies(['cookie-user']);
	const logoutSection = async () => {
		await logout();
		removeCookie("cookie-user");
		localStorage.removeItem("key");
		setUser(undefined);
	}
	useEffect(()=> {
		if(user === undefined || user == null) return;
		const showToast = (msg) => {
			if(msg.user === user.username) toast(msg.msg)
		}
		socket.on('message-to-user', showToast)
		socket.on('block-user', (res)=>{
			if(res.user === user.username) {
				logoutSection();
			}
		});
		return () => {
			socket.off('message-to-user', showToast);
		}
	},[user])

	return (
		<>
			<BigSmall/>
			<RootRoutes/>
			<ToastContainer
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				draggable
				autoClose={1500}
			/>
		</>
	);
}

export default App;
