import React from 'react';
import {Route, Switch} from "react-router-dom";
import LotteryPage from '../lode/pages/Lottery/LotteryPage';
import PATH from './path';

const HomeRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.LOTTERY}>
				<LotteryPage/>
			</Route>
		</Switch>
	);
};

export default HomeRoutes;