import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import Register from "../lode/pages/Register";

const HomeRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.RE}>
				<Register/>
			</Route>
		</Switch>
	);
};

export default HomeRoutes;