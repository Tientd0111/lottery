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
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
		}else {
			toast('Vui lòng đăng nhập')
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
								<p>Lô đề miền Bắc của nhà cái Lode88 có lô 2 số, lô 3 số. Có đầy đủ lô 3 càng, đề đầu,
									đề đặc biệt, đánh đề đầu đuôi, lô xiên 2, lô xiên 3, lô xiên 4, lô trượt xiên 4,
									lô trượt xiên 8, lô trược xiên 10. Tỷ lệ thắng lô đề miền Bắc cực kì cao, lô 2 số
									miền Bắc tỷ lệ ăn là 1 ăn 99.4 lần, lô 3 số miền Bắc tỷ lệ ăn là 1 ăn 900 lần,
									lô xiên 2 ăn gấp 17 lần, lô xiên 3 ăn gấp 65 lần, lô xiên 4 ăn gấp 250 lần
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