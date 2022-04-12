import React from 'react';
import {
	Route,
	Redirect,
} from "react-router-dom"

const AuthenticatedGuard = ({isAuthenticated, children, ...rest}) => {
	return (
		<Route {...rest} render={({ location }) =>
			isAuthenticated && localStorage.getItem('key') ? (
				children
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: location }
					}}
				/>
			)
		}>
		</Route>
	);
};

export default AuthenticatedGuard;