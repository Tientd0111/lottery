import React from 'react';
import {NavLink} from "react-router-dom";

const CsLink = ({children, to, ...props}) => {

	return (
		<li className="nav-item">
			{to == null?
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			<a className={'nav-link'} {...props}>
				{children}
				<div className="mr-hover-effect"/>
			</a>:
				<NavLink className={isActive => `nav-link ${isActive&&('active')}`} to={to} {...props}>
					{children}
					<div className="mr-hover-effect"/>
				</NavLink>
			}
		</li>
	);
};

export default CsLink;