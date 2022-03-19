import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import "./Breadcrumbs.scss";

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();

	return (
		<>
			<div className="container padding">
				<nav aria-label="Breadcrumb" className="breadcrumb">
					<ol>
						{breadcrumbs.map(({ match, breadcrumb }) => (
							<li key={match.pathname}>
								<Link to={match.pathname}>{breadcrumb}</Link>
							</li>
						))}
					</ol>
				</nav>
			</div>
		</>
	);
};

export default Breadcrumbs;
