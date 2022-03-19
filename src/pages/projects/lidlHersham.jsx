import React from "react";

import { Navbar, Breadcrumbs } from "../../components";
import { LidlHersham, TrustedBy, Footer } from "../../container";

const lidlHersham = () => {
	return (
		<div>
			<Navbar />
			<Breadcrumbs />
			<LidlHersham />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default lidlHersham;
