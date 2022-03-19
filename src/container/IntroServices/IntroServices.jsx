import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./IntroServices.scss";

const IntroServices = () => {
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
							<h1>Services</h1>

							<p>Venture Management offer bespoke Project Management strategies and services with a highly experienced team at the core of our delivery model, we provide a key advisor role for our clients managing large multi-discipline consultant teams, managing change and advising on the programme and construction delivery impact of these changes on your project from inception to completion.</p>

							<p>Our PM Team have extensive experience managing project strategy, planning and scheduling, contract administration, commercial management, risk management, document control, approvals, change control and project team communication, we assess and monitor project challenges and deliver across all RIBA stages, including feasibility, design procurement, construction and handover.</p>

							<p>Since our Venture Management have been at the forefront of a wide range of both public and private sector major projects, we recognise that different sectors and different clients have varying needs of resource and input and have the skill set to provide bespoke services supporting our clients' needs by utilising our expertise and skills we often provide tailored services to meet individual needs of the projects by implementing best practice solutions.</p>

							<p>Venture Management have a unique DNA which creates a collaborative team approach for every project, we work closely with project stakeholders to identify the key project drivers and success factors. We aim to meet our client's requirements to produce a bespoke project delivery solution that will be completed on time, to budget and built to the required quality standards.</p>

							<p>Our project managers use QA best practice systems and processes often aided by the use of project collaboration tools and advanced technologies managing project monitoring with online digital reporting.</p>
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

export default IntroServices;
