import React from "react";

import { Navbar, Breadcrumbs } from "../components";
import { IntroServices, TrustedBy, Footer } from "../container";

const Services = () => {
	return (
		<div>
			<Navbar />
			<Breadcrumbs />
			<IntroServices />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default Services;
