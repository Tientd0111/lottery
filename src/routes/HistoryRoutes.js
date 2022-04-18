import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import LichSu from "../lode/pages/History/LichSu";
import LichSuCuoc from "../lode/pages/History/LichSuCuoc";

const HistoryRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.HISTORYTRANSFER}>
				<LichSu/>
			</Route>
			<Route exact path={PATH.HISTORYBET}>
				<LichSuCuoc/>
			</Route>
		</Switch>
	);
};

export default HistoryRoutes;