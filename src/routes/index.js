import {
	HashRouter as Router,
} from "react-router-dom";
import React from 'react';
import HomeRoutes from "./HomeRoutes";
import LotteryRoutes from "./LotteryRoutes";
import NapRoutes from "./NapRoutes";
import HistoryRoutes from "./HistoryRoutes";

const RootRoutes = () => {
	return (
		<Router>
			<HomeRoutes/>
			<LotteryRoutes/>
			<NapRoutes/>
			<HistoryRoutes/>

		</Router>
	);
};

export default RootRoutes;