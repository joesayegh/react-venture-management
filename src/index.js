import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.scss";
import App from "./App";
import Services from "./pages/services";
import Projects from "./pages/projects";
import LeonardoManchesterPiccadilly from "./pages/projects/leonardoManchesterPiccadilly";
import LidlHersham from "./pages/projects/lidlHersham";
import LondonBoroughBarnetOffice from "./pages/projects/londonBoroughBarnetOffice";
import WaltonCourt from "./pages/projects/waltonCourt";
import ErrorPage from "./ErrorPage";

ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="services" element={<Services />} />
				<Route path="projects" element={<Projects />} />
				<Route path="projects/leonardo-hotel-manchester-piccadilly" element={<LeonardoManchesterPiccadilly />} />
				<Route path="projects/lidl-hersham" element={<LidlHersham />} />
				<Route path="projects/london-borough-of-barnet-office" element={<LondonBoroughBarnetOffice />} />
				<Route path="projects/walton-court" element={<WaltonCourt />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</ScrollToTop>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
