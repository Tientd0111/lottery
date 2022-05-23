import React, {useEffect, useRef, useState} from 'react';
import Draggable from "react-draggable";
import images from "../../assets/images/images";
import ClosePopupHistoryTx from "./ClosePopupHistoryTx";
import {useTxStore} from "../../stores/useTxStore";
import {callService} from "../../apis/baseRequest";
import useMounted from "../../hooks/useMounted";
import formatNumber from "../../hooks/formatNumber";

const HistoryTx = () => {

	const nodeRef = useRef()

	const {openHistory} = useTxStore(state => ({
		openHistory: state.openHistory
	}));

	const [histories, setHistories] = useState([])

	const mounted = useMounted()

	useEffect(()=>{
		if(openHistory) {
			fetchApi()
		}
	},[openHistory])

	const fetchApi = () => {
		callService('betSm/history', 'POST', {}, true)
			.then((res)=>{
				if(mounted()) {
					setHistories(res)
				}
			}).catch((err)=>{
		})
	}

	return (
		<Draggable nodeRef={nodeRef}>
			<div
				ref={nodeRef}
				style={{
					position: 'fixed',
					overflow: 'hidden',
					zIndex: 99,
					top: 'calc(50vh - (/* height */200px / 2))',
					left: 'calc(50vw - (/* width */400px / 2))',
					justifyContent: 'center',
					display: openHistory?'flex':'none',
					backgroundPosition: 'center',
					alignItems: 'center',
					backgroundRepeat: 'no-repeat',
					width: '400px',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '320px',
						backgroundImage: `url(${images.bg_history})`,
						backgroundSize: 'cover',
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<ClosePopupHistoryTx/>

					<table className={'table_history_tx'}>
						<thead>
							<tr>
								<th>{'Phiên'}</th>
								<th>{'Cửa'}</th>
								<th>{'Kết quả'}</th>
								<th>{'Nhận'}</th>
							</tr>
						</thead>
						<tbody>
							{
								histories.map((el)=>(
									<tr key={el?.phien}>
										<td>#{el?.phien}</td>
										<td>{el?.cua}</td>
										<td>{el?.isWin ? <a style={{color: 'yellow'}}>Thắng</a> : 'Thua'}</td>
										<td>+{formatNumber(el?.winCoin, ' vnđ')}</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>
		</Draggable>
	);
};

export default HistoryTx;