import React, {useState} from 'react';
import images from '../../assets/images/images';
import CommonMain from '../CommonMain';
import ContentHeader from '../components/ContentHeader';
import useQuery from '../../hooks/useQuery';

const LotteryPage = () => {
	let query = useQuery();

	const RealName = (name) => {
		switch (name) {
			case 'mienbac':
				return 'Miền bắc'
			case 'mientrung':
				return 'Miền trung'
			case 'miennam':
				return 'Miền nam'
			case 'sieutoc':
				return 'Lô đề siêu tốc'
			default:
				return 'Miền bắc'
		}
	};

	const [lotteryType, setLotteryType] = React.useState(' Đánh lô');

	const [amoutK, setAmoutK] = React.useState(0);

	const [arrayPicker, setArrrayPicker] = React.useState([])

	React.useEffect(()=>{
		let i = 0;
		let update = [];
		Array.from(Array(100)).map((e)=>{
			update.push(i)
			i++;
		})
		setArrrayPicker(update);
	},[]);

	const [activeChecked, setActiveChecked] = useState([]);

	const onCheckValue = (value) => {
		console.log('1|'+value)
		let fil = activeChecked.filter(e=>e !== value);
		console.log('2|'+activeChecked)
		if(fil.length === activeChecked.length) {
			setActiveChecked([...activeChecked, value])
		}
		else {
			setActiveChecked(fil)
		}
	};

	const outStyle = (value) => {
		console.log(value)
		let fil = activeChecked.filter(e=>e !== value);
		if(fil.length === activeChecked.length) {
			return "activeS"
		}
		else {
			return ""
		}
	}

	const ItemArrayPicker = ({arrays = []}) => {
		let i = -1
		return Array.from(Array(arrays.length / 10)).map((e,index)=>{
			return(
				<tr key={index}>
					{Array.from(Array(arrays.length / 10)).map((e,index)=>{
						i++;
						return(
							<td onClick={()=>onCheckValue(index)} key={index}>
								<span className={`so ${outStyle(index)}`}>
							    	<span className="so-item">{i}</span>
								</span>
							</td>
						)
					})}
				</tr>
			)
		});
	};

	return (
		<CommonMain>
			<ContentHeader bannerUrl={images.breadcrumb_lottery} namePage={RealName(query.get("name"))} />
			<section className="lottery-area">
				<div className="buy-tickets">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="buy-tickets-box">
									<div className="heading">
										<h4 className="title">
											{lotteryType}
										</h4>
										<div className="right-area">
											{RealName(query.get("name"))} &#92; {lotteryType}
										</div>
									</div>
									<div className="content">
										<form>
											<div className="row">
												<div className="col-xs-3">
														<p>{'Tổng tiền cược (K)'}</p>
														<input type={'number'} min={0}/>
												</div>
												<div className="col-xs-9">
													<div className="info-box">
														<table style={{width: '100%', height: '100%'}}>
															<tbody>
																<tr>
																	<td colSpan="10">
																		<table style={{width: '100%', height: '100%'}}>
																			<tbody>
																				 <ItemArrayPicker arrays={arrayPicker}/>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</CommonMain>
	)
}

export default LotteryPage