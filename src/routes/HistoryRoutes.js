import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import LichSu from "../lode/pages/Pay/LichSu";

const HistoryRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.HISTORY}>
				<LichSu/>
			</Route>
		</Switch>
	);
};

export default HistoryRoutes;