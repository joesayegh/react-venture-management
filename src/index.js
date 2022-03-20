import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
