import {HashRouter as Router} from "react-router-dom";
import React, {Fragment} from 'react';
import HomeRoutes from "./HomeRoutes";
import LotteryRoutes from "./LotteryRoutes";
import NapRoutes from "./NapRoutes";
import HistoryRoutes from "./HistoryRoutes";
import InfoRoutes from "./InfoRoutes";
import ScrollToTop from "../hooks/ScrollToTop";
import AboutRouter from "./AboutRouter";

const RootRoutes = () => {
	return (
		<Router>
			<Fragment>
				<ScrollToTop/>
				<HomeRoutes/>
				<AboutRouter/>
				<LotteryRoutes/>
				<NapRoutes/>
				<HistoryRoutes/>
				<InfoRoutes/>
			</Fragment>
		</Router>
	);
};

export default RootRoutes;
