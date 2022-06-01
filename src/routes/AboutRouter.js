import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from "./path";
import AboutUs from "../lode/pages/About/AboutUs";
import HelpPage from "../lode/pages/Help/HelpPage";

const AboutRouter = () => {
	return (
		<Switch>
			<Route exact path={PATH.ABOUT}>
				<AboutUs/>
			</Route>
			<Route exact path={PATH.HELP}>
				<HelpPage/>
			</Route>
		</Switch>
	);
};

export default AboutRouter;