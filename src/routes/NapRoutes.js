import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import NapTien from "../lode/pages/Pay/NapTien";
import RutTien from "../lode/pages/Pay/RutTien";

const NapRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.NAP}>
				<NapTien/>
			</Route>
			<Route exact path={PATH.RUT}>
				<RutTien/>
			</Route>
		</Switch>
	);
};

export default NapRoutes;