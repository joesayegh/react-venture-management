import React from "react";

import { Navbar, Breadcrumbs } from "../../components";
import { LeonardoManchesterPiccadilly, TrustedBy, Footer } from "../../container";

const leonardoManchesterPiccadilly = () => {
	return (
		<div>
			<Navbar />
			<Breadcrumbs />
			<LeonardoManchesterPiccadilly />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default leonardoManchesterPiccadilly;
