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

const LondonBoroughBarnetOffice = () => {
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
							<h1>London Borough of Barnet Office</h1>

							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sed voluptas tenetur accusamus commodi delectus temporibus ab possimus voluptates at rerum? Illum fugiat eum facilis nesciunt, at expedita impedit iusto libero, placeat asperiores obcaecati nisi modi, fuga atque totam. Doloremque!</p>

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
								<img src={images.london_borough_barnet_office_1} alt="Barnet 1" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_2} alt="Barnet 2" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_3} alt="Barnet 3" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_4} alt="Barnet 4" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_5} alt="Barnet 5" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_6} alt="Barnet 6" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_7} alt="Barnet 7" />
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
							// freeMode={true}
							watchSlidesProgress
							onSwiper={setThumbsSwiper}
						>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_1} alt="Barnet 1" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_2} alt="Barnet 2" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_3} alt="Barnet 3" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_4} alt="Barnet 4" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_5} alt="Barnet 5" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_6} alt="Barnet 6" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={images.london_borough_barnet_office_7} alt="Barnet 7" />
							</SwiperSlide>
						</Swiper>
					</motion.div>
				</div>
				<hr />
			</div>
		</section>
	);
};

export default LondonBoroughBarnetOffice;
