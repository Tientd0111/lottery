import React from 'react';
import images from "../../assets/images/images";

const LiveChat = () => {
	return (
		<div className={"box-chat"} style={{marginTop:'100px'}}>
			<div className={"chat-title"}>
				Góc bàn đề
			</div>
			<div className={"chat-content"}>
				<div className={"line-chat"}>
					<span className={"user-name"}>user</span>
					<span className={"chat"}>web lừa đảo anh em đừng chơi</span>
				</div>
				<div className={"line-chat"}>
					<span className={"user-name"}>admin</span>
					<span className={"chat"}>lừa cmm không chơi thì cút</span>
				</div>
				<div className={"line-chat"}>
					<span className={"user-name"}>user2</span>
					<span className={"chat"}>Bình tĩnh nào anh trai</span>
				</div>
				<div className={"line-chat"}>
					<span className={"user-name"}>admin</span>
					<span className={"chat"}>Chơi ngu thua kêu lừa đảo</span>
				</div>
			</div>
			<div className={"box-send"} style={{marginBottom:'20px'}}>
				<input type="text" className={"txt-chat input-message"} style={{border:'none'}}/>
				<div className={"icon-emoji"}>
					<img src={images.icon_pick_emoji} alt=""/>
				</div>
				<button className={"btn-send send-message"}>
					<img src={images.icon_send} alt=""/>
				</button>
			</div>

		</div>
	);
};

export default LiveChat;