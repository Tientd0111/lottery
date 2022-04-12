import {Route, Switch} from "react-router-dom";
import HomePage from "../lode/pages/HomePage";
import PATH from './path';

const HomeRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.HOME}>
				<HomePage/>
			</Route>
		</Switch>
	);
};

export default HomeRoutes;