import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import Modal from 'react-modal';
import {callService} from "../../apis/baseRequest";
import apis from "../../apis/definesApi";
import AppLoading from "./AppLoading";
import formatNumber from "../../hooks/formatNumber";
import useMounted from "../../hooks/useMounted";
import getText from "../../hooks/getText";

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}


const DetailBillBet = forwardRef((props, ref) => {

	const [show, setShow] = useState(false);

	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useImperativeHandle(ref, () => ({
		open: ()=> setShow(true),
		close: ()=> setShow(false)
	}));

	const cancel = () => {
		setShow(false)
	}

	const {billId} = props

	const mounted = useMounted()

	useEffect(()=>{
		if(billId) {
			setIsLoading(true)
			callService(apis.historyWinner.uri, 'POST', {billId}, true)
				.then((res)=>{
					if(mounted()) {
						setIsLoading(false)
						setData(res)
					}
				}).catch((err)=>{if(mounted()) {setIsLoading(false)}})
		}
	},[billId, mounted])

	return (
		<Modal
			contentLabel={'Chi tiết'}
			isOpen={show}
			onRequestClose={cancel}
			style={customStyles}
			ariaHideApp={false}
		>
			{isLoading?<AppLoading/>:
				<div>
					<p>Danh sách các số trúng: {data?.winnerList?.toString()}</p>
					<p>Số tiền nhận được: {formatNumber(data?.balanceWinner)}</p>
					<p>Bằng chữ: {getText(data?.balanceWinner?data?.balanceWinner:0)} (vnđ)}</p>
					{/*<p>Duyệt lúc: {formatDate(data?.created_at, 'h [giờ] : m [phút] [ngày] DD/MM/YYYY')}</p>*/}
				</div>
			}
		</Modal>
	);
});

export default DetailBillBet;
