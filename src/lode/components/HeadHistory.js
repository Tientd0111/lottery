import React from 'react';

const HeadHistory = ({title=''}) => {
	return (
		<div className="lich-su-danh gd member-tabs--content">
			<ul className="nav nav-tabs vergo-tab">
				<li className="nav-item ">
					<a href="/#" className="nav-link active" data-toggle="tab">{title}</a>
				</li>
			</ul>
		</div>

	);
};

export default HeadHistory;