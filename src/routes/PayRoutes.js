import React from 'react';
import {Route, Switch} from "react-router-dom";
import PayPage from '../lode/pages/Pay/PayPage';
import PATH from './path';

const HomeRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.PAY}>
				<PayPage/>
			</Route>
		</Switch>
	);
};

export default HomeRoutes;