import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Intro.scss";

const Intro = () => {
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
						<div className="intro-flex-content"></div>
						<div className="intro-flex-content">
							<h1 className="home-content">Venture Management Consulting Ltd provide bespoke Project and Cost Management Solutions to Property Development and Construction organisations. We specialise in major mixed use projects, particularly residential, hotels and major commercial developments.</h1>

							<p>The Directors at Venture Management have over 40 years of combined experience providing Development Management, Project Management, Cost Management and Construction Management services to major organisations.</p>

							<p>Previous clients include Crest Nicholson, John Lewis Partnership, Taylor Wimpey, Leonardo Hotels, Unite Students, Waitrose, Intercontinental Hotels Group, Accor Group, IKEA, Heathrow Airport, Birmingham Airport, Marks & Spencer and Redrow Homes.</p>

							<p>
								<Link to="/services">View our services</Link>
							</p>
							<p>
								<Link to="/projects">Explore our projects</Link>
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Intro;
