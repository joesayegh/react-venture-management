import React from "react";
import { Navbar } from "./components";
import { Hero, Intro, TrustedBy, Footer } from "./container";

import "./App.scss";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Intro />
			<TrustedBy />
			<Footer />
		</div>
	);
};

export default App;
