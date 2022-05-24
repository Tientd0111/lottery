import React from 'react';
import {Route, Switch} from "react-router-dom";
import PATH from "./path";
import AboutUs from "../lode/pages/About/AboutUs";

const AboutRouter = () => {
	return (
		<Switch>
			<Route exact path={PATH.ABOUT}>
				<AboutUs/>
			</Route>
		</Switch>
	);
};

export default AboutRouter;