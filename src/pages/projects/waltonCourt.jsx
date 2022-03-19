import React from "react";

import { Navbar, Breadcrumbs } from "../../components";
import { WaltonCourt, TrustedBy, Footer } from "../../container";

const waltonCourt = () => {
	return (
		<div>
			<Navbar />
			<Breadcrumbs />
			<WaltonCourt />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default waltonCourt;
