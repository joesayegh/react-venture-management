import React from "react";
import { Navbar } from "./components";
import { Error, TrustedBy, Footer } from "./container";

const ErrorPage = () => {
	return (
		<div>
			<Navbar />
			<Error />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default ErrorPage;
