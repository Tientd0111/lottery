import React, {useCallback, useState} from 'react';
import CommonMain from '../../CommonMain';
import useQuery from '../../../hooks/useQuery';
import HeadLottery from "./HeadLottery";
import Constant from "../../../contants/constant";
import DanhLo from "./Content/DanhLo";
import DanhDe from "./Content/DanhDe";
import BaCang from "./Content/BaCang";
import DauDuoi from "./Content/DauDuoi";
import LoXien from "./Content/LoXien";
import {FormProvider, useForm} from "react-hook-form";
import ViewBetInputSubmit from "../../components/ViewBetInputSubmit";

const LotteryPage = () => {

	const pageHeaderCallback = useCallback((code)=>{
		switch (code) {
			case Constant.DANH_LO:
				form.reset({soDanh: [], kieuDanh: code, kieuLo: Constant.LO_2_SO})
				break
			case Constant.BA_CANG:
				form.reset({soDanh: [], kieuDanh: code, kieu3Cang: Constant.BA_CANG})
				break
		}
	}, [])

	const form = useForm({
		defaultValues: {
			kieuDanh: Constant.DANH_LO,
			mien: Constant.DAI_MB
		}
	});

	const handleSubmit = (data) => {
		console.log(data)
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
											contentPage === Constant.DAU_DUOI&&(
												<DauDuoi />
											)
										}
										{
											contentPage === Constant.LO_XIEN&&(
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