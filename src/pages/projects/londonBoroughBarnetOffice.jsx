import React from "react";

import { Navbar, Breadcrumbs } from "../../components";
import { LondonBoroughBarnetOffice, TrustedBy, Footer } from "../../container";

const londonBoroughBarnetOffice = () => {
	return (
		<div>
			<Navbar />
			<Breadcrumbs />
			<LondonBoroughBarnetOffice />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default londonBoroughBarnetOffice;
