import './App.css';
import RootRoutes from "./routes";
import {toast, ToastContainer} from "react-toastify";
import React, {useEffect, useRef} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";
import {useCookies} from "react-cookie";
import Path from "./routes/path";

function App() {

	const {socket} = useSocket(state => ({
		socket: state.socket
	}));
	const toastId = useRef(null);

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
		if(user) {
			socket.on('message-to-user', (res)=>{
				if(res.user === user.username) {
					if(!toast.isActive(toastId.current)) {
						toastId.current = toast(res.msg)
					}
				}
			})
			socket.on('block-user', (res)=>{
				if(res.user === user.username) {
					logoutSection();
				}
			})
		}
	},[ user])

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
