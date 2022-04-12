import {
	HashRouter as Router,
} from "react-router-dom";
import React from 'react';
import HomeRoutes from "./HomeRoutes";
import LotteryRoutes from "./LotteryRoutes";
import PayRoutes from "./PayRoutes";

const RootRoutes = () => {
	return (
		<Router>
			<HomeRoutes/>
			<LotteryRoutes/>
			<PayRoutes/>

		</Router>
	);
};

export default RootRoutes;