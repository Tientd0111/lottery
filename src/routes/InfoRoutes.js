import {Route, Switch} from "react-router-dom";
import PATH from './path';
import InfoPage from "../lode/pages/Info/InfoPage";

const InfoRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.INFO}>
				<InfoPage/>
			</Route>
		</Switch>
	);
};

export default InfoRoutes;