import React, {useEffect, useRef, useState} from 'react';
import images from "../../assets/images/images";
import {useSocket} from "../../stores/useSocket";
import {callService} from "../../apis/baseRequest";
import {useUserStore} from "../../stores/useUserStore";
import {toast} from "react-toastify";

const LiveChat = () => {

	const [messages, setMessages] = useState([]);

	const {socket} = useSocket(state => ({socket: state.socket}));
	const {user} = useUserStore(state => ({user: state.user}));

	const msgRef = useRef()

	useEffect(()=>{
		callService('messages', 'GET', {}).then((res)=>{setMessages(res)})
		const addMessage = (msg) => setMessages(prevMessages => [...prevMessages, msg]);
		socket.on('message', addMessage)
		return () => {
			socket.off('message', addMessage);
		}
	},[])

	const sendMessage = async () => {
		if(user?.username === undefined) {
			toast('Vui lòng đăng nhập!')
		} else {
			const message = msgRef.current.value
			if(message) {
				await callService('messages/send', 'POST', {message: message}, true)
				msgRef.current.value = ''
			}
		}
	}

	return (
		<div className={"box-chat"} style={{marginTop:'100px'}}>
			<div className={"chat-title"}>
				Góc bàn đề
			</div>
			<div className={"chat-content"}>
				{messages.map((it)=>(
					<div className={"line-chat"}>
						<span className={"user-name"}>{it?.display_name}</span>
						<span className={"chat"}>{it?.message}</span>
					</div>
				))}
			</div>
			<div className={"box-send"} style={{marginBottom:'20px'}}>
				<input ref={msgRef} type="text" className={"txt-chat input-message"} style={{border:'none'}}/>
				<div className={"icon-emoji"}>
					<img src={images.icon_pick_emoji} alt=""/>
				</div>
				<div onClick={sendMessage} className={"btn-send send-message"}>
					<img src={images.icon_send} alt=""/>
				</div>
			</div>

		</div>
	);
};

export default LiveChat;