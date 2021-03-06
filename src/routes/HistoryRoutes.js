import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import LichSuRut from "../lode/pages/History/LichSuRut";
import LichSuNap from "../lode/pages/History/LichSuNap";
import LichSu from "../lode/pages/History/LichSu";

const HistoryRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.HISTORYRUT}>
				<LichSuRut/>
			</Route>
			<Route exact path={PATH.HISTORYNAP}>
				<LichSuNap/>
			</Route>
			<Route exact path={PATH.HISTORYBET}>
				<LichSu/>
			</Route>
		</Switch>
	);
};

export default HistoryRoutes;