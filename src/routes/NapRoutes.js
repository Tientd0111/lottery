import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from './path';
import NapTien from "../lode/pages/Pay/NapTien";
import RutTien from "../lode/pages/Pay/RutTien";
import BankPage from "../lode/pages/Pay/BankPage";

const NapRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.NAP}>
				<NapTien/>
			</Route>
			<Route exact path={PATH.RUT}>
				<RutTien/>
			</Route>
			<Route exact path={PATH.BANK}>
				<BankPage/>
			</Route>
		</Switch>
	);
};

export default NapRoutes;