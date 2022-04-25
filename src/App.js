import './App.css';
import RootRoutes from "./routes";
import {toast, ToastContainer} from "react-toastify";
import React, {useEffect, useRef} from "react";
import {useSocket} from "./stores/useSocket";
import {useUserStore} from "./stores/useUserStore";
import {useCookies} from "react-cookie";
import Path from "./routes/path";
import {Toaster, toast as ts} from "react-hot-toast";

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
		const showToast = (msg) => ts(msg)

		if(user) {
			socket.on('message-to-user', (res)=>{
				if(res.user === user.username) {
					if(!toast.isActive(toastId.current)) {
						showToast(res.msg)
						console.log(res.msg)
					}
				}
			})
			socket.on('block-user', (res)=>{
				if(res.user === user.username) {
					logoutSection();
				}
			});
			return () => {
				socket.off('message-to-user', (res)=>{
					if(res.user === user.username) {
						if(!toast.isActive(toastId.current)) {
							showToast(res.msg)
						}
					}
				});
			}

		}
	},[user])

	return (
		<>
			{/*<BigSmall/>*/}
			<RootRoutes/>
			<Toaster/>
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
