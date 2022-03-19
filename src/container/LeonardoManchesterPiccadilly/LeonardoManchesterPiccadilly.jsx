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

const LeonardoManchestPicadilly = () => {
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
							<h1>Leonardo Hotel Manchester Piccadilly</h1>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem laborum debitis optio sunt quas aliquam ex maxime quidem dignissimos, neque sit distinctio magni tempore illo odio. In nobis aperiam dicta. Dolore asperiores facilis vel facere ipsum possimus placeat. Ex.</p>

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
								<img src={images.leonardo_manchester_piccadilly_01_lobby} alt="Hotel Lobby" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_02_lobby_to_bar} alt="Hotel Lobby to Bar" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_03_bar} alt="Hotel Bar" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_04_restaurant_to_bar} alt="Hotel Restaurant to Bar" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_05_restaurant} alt="Hotel Restaurant" />
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
								<img src={images.leonardo_manchester_piccadilly_01_lobby} alt="Hotel Lobby" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_02_lobby_to_bar} alt="Hotel Lobby to Bar" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_03_bar} alt="Hotel Bar" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_04_restaurant_to_bar} alt="Hotel Restaurant to Bar" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.leonardo_manchester_piccadilly_05_restaurant} alt="Hotel Restaurant" />
							</SwiperSlide>
						</Swiper>
					</motion.div>
				</div>
				<hr />
			</div>
		</section>
	);
};

export default LeonardoManchestPicadilly;
