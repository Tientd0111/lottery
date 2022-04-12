import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const ContentHeader = ({
	bannerUrl,
	namePage=''
}) => {
    return (
		<section className="breadcrumb-area bc-lottery">
		<img className="bc-img" src={bannerUrl} alt="" />
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<h4 className="title">
						{namePage}
					</h4>
					<ul className="breadcrumb-list">
					<li>
						<a href="index.html">
						<FontAwesomeIcon icon={['fas','home']} />
							{' Trang chủ'}
						</a>
					</li>
					<li>
						<span><FontAwesomeIcon icon={['fas','chevron-right']} /></span>
					</li>
					<li>
						<a href="#">{namePage}</a>
					</li>
					</ul>
				</div>
				</div>
			</div>
		</section>	  
    )
}

export default ContentHeader