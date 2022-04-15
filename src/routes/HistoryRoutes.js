import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import LichSu from "../lode/pages/Pay/LichSu";

const HistoryRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.HISTORYTRANSFER}>
				<LichSu/>
			</Route>
		</Switch>
	);
};

export default HistoryRoutes;