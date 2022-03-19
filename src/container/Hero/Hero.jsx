import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import "./Hero.scss";

const Hero = () => {
	// FIND THE FULL HEIGHT OF THE VIEWPORT
	const fullHeight = window.innerHeight;

	return (
		<section id="hero">
			<Swiper
				// APPLY THE FULL HEIGHT TO HERE MINUS HEIGHT OF HEADER (86px)
				style={{ height: fullHeight - 86 + "px" }}
				className="swiper-hero"
				// INSTALL SWIPER MODULES
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				navigation
				pagination={{ clickable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				// onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide className="bg-img1"></SwiperSlide>
				<SwiperSlide className="bg-img2"></SwiperSlide>
				<SwiperSlide className="bg-img3"></SwiperSlide>
				<SwiperSlide className="bg-img4"></SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
