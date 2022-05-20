import {
	matchPath,
	useLocation
} from "react-router-dom";

import path from '../routes/path';

export default function usePathPattern() {

	const { pathname } = useLocation();

	return matchPath( pathname, Object.assign(path));
}