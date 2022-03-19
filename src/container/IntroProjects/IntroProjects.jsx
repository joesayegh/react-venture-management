import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./IntroProjects.scss";

import { images } from "../../constants";

const IntroProjects = () => {
	return (
		<section className="intro">
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
							<h1>Projects</h1>

							<p>We are privileged to work with some of the absolute leaders in their fields, both in the United Kingdom and on an international basis, and to have worked with them on projects around the globe.</p>

							<p>We maintain long-standing relationships with many of our clients, often spanning a period of years as their businesses grow and develop. This has led us to deliver many of the world's largest construction projects.</p>

							<p>
								<Link to="/services">View our services</Link>
							</p>
						</div>

						<div className="intro-flex-content"></div>
					</div>
				</motion.div>
			</div>

			<div className="container padding">
				<hr />
				<div className="project">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						// viewport={{ once: false }}
						viewport={{ once: true }}
						transition={{ delay: 0.1, duration: 1.2 }}
						className="project-flex"
					>
						<Link to="/projects/leonardo-hotel-manchester-piccadilly" className="project-flex-item">
							<img src={images.logo_leonardo_hotels} alt="Leonardo Hotels logo" />
						</Link>

						<Link to="/projects/london-borough-of-barnet-office" className="project-flex-item">
							<img src={images.logo_barnet} alt="Barnet Logo" />
						</Link>

						<Link to="/projects/walton-court" className="project-flex-item">
							<img src={images.logo_crest_nicholson_wide} alt="Crest Nicholson logo" />
						</Link>

						<Link to="/projects/lidl-hersham" className="project-flex-item">
							<img src={images.logo_lidl} alt="Lidl logo" />
						</Link>
					</motion.div>
				</div>
				<hr />
			</div>
		</section>
	);
};

export default IntroProjects;
