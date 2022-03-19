import React from "react";

import { Navbar, Breadcrumbs } from "../components";
import { IntroProjects, TrustedBy, Footer } from "../container";

const Projects = () => {
	return (
		<div>
			<Navbar />
			<Breadcrumbs />
			<IntroProjects />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default Projects;
