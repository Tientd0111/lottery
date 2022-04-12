import {
	HashRouter as Router,
} from "react-router-dom";
import React from 'react';
import HomeRoutes from "./HomeRoutes";
import LotteryRoutes from "./LotteryRoutes";
import PayRoutes from "./PayRoutes";
import RegisterRoute from "./RegisterRoute";
const RootRoutes = () => {
	return (
		<Router>
			<HomeRoutes/>
			<LotteryRoutes/>
			<PayRoutes/>
			<RegisterRoute/>
		</Router>
	);
};

export default RootRoutes;