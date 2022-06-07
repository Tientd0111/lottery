import React, {useEffect, useRef, useState} from 'react';
import images from "../../assets/images/images";
import Draggable from "react-draggable";
import {useTxStore} from "../../stores/useTxStore";
import CloseCauTx from "./CloseCauTx";
import Cricle from "./Cricle";
import CanvasJSReact from '../../assets/canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default () => {
	const nodeRef = useRef()

	const {openCau, arrResultDice} = useTxStore(state => ({openCau: state.openCau, arrResultDice: state.arrResultDice}));

	const [changeView, setChangeView] = useState(false)

	const [data, setData] = useState({
		animationEnabled: true,
		subtitles: [{
			text: "Phiên tài xỉu"
		}],
		axisY: {
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			titleFontColor: "#51CDA0",
			lineColor: "#51CDA0",
			labelFontColor: "#51CDA0",
			tickColor: "#51CDA0"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
		},
		data: [{
			type: "spline",
			showInLegend: true,
		}
		]
	})

	useEffect(()=>{
		let tai = []
		// let xiu = []
		arrResultDice.map((el, index) => {
			if((index+1) - (arrResultDice.length - 20) >= 0){
				tai.push({y: el, color: el > 10 ? 'black' : 'red', name: el > 10 ? 'Tài' : 'Xỉu'})
				// if(el > 10) tai.push({y: el})
				// else xiu.push({y: el})
			}

		})
		let data = [{type: "spline", showInLegend: true, dataPoints: tai}]
		//{type: "spline", name: "Xỉu", axisYType: "secondary", showInLegend: true, dataPoints: xiu}

		setData(prevState => ({
			...prevState,
			data: data
		}))
	},[arrResultDice])

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
					display: openCau ?'flex':'none',
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
						flexDirection: 'column',
						padding: '50px 15px 20px',
					}}
				>
					<CloseCauTx/>
					<div style={{
						position: 'absolute',
						top: 12
					}} onClick={()=>{
						setChangeView(!changeView)
					}}>
						{'Đổi'}
					</div>
					{changeView?
					<CanvasJSChart options={data}/>:
						<div style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: 5,
						}}>
							{arrResultDice.map((el, index)=>(
								<Cricle width={20} height={20} latest={index+1===arrResultDice.length} big={el>10} key={index}>{el}</Cricle>
							))}
						</div>
					}


				</div>
			</div>
		</Draggable>
	);
};
