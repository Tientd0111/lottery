import React, {useCallback} from 'react';
import CommonMain from '../../CommonMain';
import HeadLottery from "./HeadLottery";
import Constant from "../../../contants/constant";
import DanhLo from "./Content/DanhLo";
import DanhDe from "./Content/DanhDe";
import BaCang from "./Content/BaCang";
import DauDuoi from "./Content/DauDuoi";
import LoXien from "./Content/LoXien";
import {FormProvider, useForm} from "react-hook-form";
import ViewBetInputSubmit from "../../components/ViewBetInputSubmit";
import {useBetLotteryStore} from "../../../stores/useBetLotteryStore";
import {useUserStore} from "../../../stores/useUserStore";
import {toast} from "react-toastify";

const LotteryPage = () => {
	const form = useForm({
		defaultValues: {
			kieuDanh: Constant.DANH_LO,
			mien: Constant.DAI_MB,
			kieuChoi: Constant.LO_2_SO
		}
	});
	const initValue = (kieuDanh, kieuChoi) => {
		return {soDanh: [], kieuDanh , kieuChoi,mien: form.getValues('mien')}
	}
	const pageHeaderCallback = useCallback((code)=>{
		// eslint-disable-next-line default-case
		switch (code) {
			case Constant.DANH_LO:
				form.reset(initValue(code, Constant.LO_2_SO))
				break
			case Constant.BAO_LO:
				form.reset(initValue(code, Constant.LO_2_SO))
				break
			case Constant.BA_CANG:
				form.reset(initValue(code, form.watch('mien') === 'MB' ? Constant.BA_CANG : Constant.BA_CANG_DAU))
				break
			case Constant.XIU_CHU:
				form.reset(initValue(code, Constant.XIU_CHU_DAU))
				break
			case Constant.DANH_DE:
				form.reset(initValue(code, Constant.DE_DAU))
				break
			case Constant.DAU_DUOI:
				form.reset(initValue(code, Constant.DAU_DUOI_DAU))
				break
			case Constant.LO_XIEN:
				form.reset(initValue(code, Constant.LO_XIEN_2))
				break
			case Constant.XIEN:
				form.reset(initValue(code, Constant.XIEN_2))
				break
			case Constant.LO_DA:
				form.reset(initValue(code, Constant.LO_DA_2))
				break
		}
	}, [form, initValue])
	const { bet} = useBetLotteryStore(state => ({
		bet: state.bet
	}))
	const {user} = useUserStore(state => ({
		user: state.user
	}))
	const handleSubmit = async (data) => {
		if(user?.username !== undefined){
			 if(Array.isArray(data.soDanh)){
				let number = []
				data.soDanh.map((item) => (
					number.push(item.so)
				))
				data.soDanh = number
			}
			await bet(data)
			data.soDanh = []
			data.soTienCuoc = 0
			form.reset(data)
		}else {
			toast('Vui l??ng ????ng nh???p')
		}
	}

	const invalidSubmit = (err) => {

	}

	const contentPage = form.watch('kieuDanh')

	return (
		<CommonMain>
			<FormProvider {...form}><form onSubmit={form.handleSubmit(handleSubmit, invalidSubmit)}>
				<section className="container main-content">
					<div className="row">
						<ViewBetInputSubmit/>
						<div className="col-md-9">
							<div className="block">
								<div className="bcontent">
									<HeadLottery pageCallback={pageHeaderCallback}/>
									<div className="chon-so">
										{
											contentPage === Constant.DANH_LO&&(
												<DanhLo />
											)
										}
										{
											contentPage === Constant.BAO_LO&&(
												<DanhLo />
											)
										}
										{
											contentPage === Constant.DANH_DE&&(
												<DanhDe />
											)
										}
										{
											contentPage === Constant.BA_CANG&&(
												<BaCang />
											)
										}
										{
											contentPage === Constant.XIU_CHU&&(
												<BaCang />
											)
										}
										{
											contentPage === Constant.DAU_DUOI&&(
												<DauDuoi />
											)
										}
										{
											contentPage === Constant.LO_XIEN&&(
												<LoXien />
											)
										}
										{
											contentPage === Constant.XIEN&&(
												<LoXien />
											)
										}
										{
											contentPage === Constant.LO_DA&&(
												<LoXien />
											)
										}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={"row footer_content"}>
						<div className={"col-12"}>
							<div className={"header-title block"}>
								<p>L?? ????? c???a nh?? c??i Winclub24h c?? l?? 2 s???, l?? 3 s???. C?? ?????y ????? l?? 3 c??ng, ????? ?????u,
									????? ?????c bi???t, ????nh ????? ?????u ??u??i, l?? xi??n 2, l?? xi??n 3, l?? xi??n 4. T??? l??? th???ng l?? ????? c???c k?? cao, l?? 2 s???
									 t??? l??? ??n l?? 1 ??n 99.4 l???n, l?? 3 s??? t??? l??? ??n l?? 1 ??n 900 l???n,
									l?? xi??n 2 ??n g???p 17 l???n, l?? xi??n 3 ??n g???p 65 l???n, l?? xi??n 4 ??n g???p 250 l???n
								</p>
							</div>
						</div>
					</div>
				</section>
			</form></FormProvider>
		</CommonMain>
	)
}

export default LotteryPage
