import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Error.scss";

const Error = () => {
	return (
		<section id="about" className="intro bg-default">
			<div className="intro-wrapper">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					// viewport={{ once: false }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 1.2 }}
					className="container padding"
				>
					<div className="intro-flex">
						<div className="intro-flex-content">
							<h1>404</h1>

							<p>This is not the web page you are looking for.</p>

							<p>
								<Link to="/">Go to the homepage</Link>
							</p>

							<p>
								<Link to="/services">View our services</Link>
							</p>
							<p>
								<Link to="/projects">Explore our projects</Link>
							</p>
						</div>
						<div className="intro-flex-content"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Error;
