import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { Thumbs, Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import { images } from "../../constants";

const WaltonCourt = () => {
	// store thumbs swiper instance
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
							<h1>Walton Court</h1>

							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dolores voluptate cupiditate maxime consequuntur nobis labore laboriosam eos hic enim? Neque perspiciatis placeat quidem eligendi beatae hic ut dolor voluptates, culpa ipsa natus distinctio maxime! Praesentium officia ipsam dignissimos suscipit?</p>

							<p>
								<Link to="/projects">Explore our projects</Link>
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
					>
						<Swiper
							className="swiper-project-thumbs"
							// INSTALL SWIPER MODULES
							modules={[Navigation, Thumbs, A11y]}
							navigation
							autoHeight={true}
							loop={true}
							spaceBetween={10}
							thumbs={{ swiper: thumbsSwiper }}
						>
							<SwiperSlide>
								<img src={images.walton_court_1} alt="Walton Court 1" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.walton_court_2} alt="Walton Court 2" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.walton_court_3} alt="Walton Court 3" />
							</SwiperSlide>
						</Swiper>
						<Swiper
							className="swiper-project"
							// INSTALL SWIPER MODULES
							modules={[Navigation, Thumbs, A11y]}
							autoHeight={true}
							loop={true}
							spaceBetween={18}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress
							onSwiper={setThumbsSwiper}
						>
							<SwiperSlide>
								<img src={images.walton_court_1} alt="Walton Court 1" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.walton_court_2} alt="Walton Court 2" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.walton_court_3} alt="Walton Court 3" />
							</SwiperSlide>
						</Swiper>
					</motion.div>
				</div>
				<hr />
			</div>
		</section>
	);
};

export default WaltonCourt;
