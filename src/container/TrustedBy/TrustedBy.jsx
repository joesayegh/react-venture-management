import React from "react";

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import { images } from "../../constants";

import "./TrustedBy.scss";

const TrustedBy = () => {
	return (
		<section id="trusted-by">
			<div className="trusted-by-wrapper">
				<h2 className="text-center">Trusted By</h2>
				<Swiper
					className="swiper-trusted-by"
					// install Swiper modules
					modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={60}
					slidesPerView={2}
					autoplay={{ delay: 1, disableOnInteraction: false }}
					// pagination={{ clickable: true }}
					// scrollbar={{ draggable: true }}
					// onSwiper={(swiper) => console.log(swiper)}
					// onSlideChange={() => console.log("slide change")}
					loop={true}
					speed={4000}
					breakpoints={{
						// when window width is >= 500px
						500: {
							slidesPerView: 3,
						},
						// when window width is >= 640px
						640: {
							slidesPerView: 4,
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 5,
						},
						// when window width is >= 960px
						960: {
							slidesPerView: 6,
						},
						// when window width is >= 1024px
						1024: {
							slidesPerView: 7,
						},
						// when window width is >= 1280px
						1280: {
							slidesPerView: 8,
						},
						// when window width is >= 1920px
						1920: {
							slidesPerView: 9,
						},
						// when window width is >= 2048px
						2048: {
							slidesPerView: 12,
						},
					}}
				>
					<SwiperSlide>
						<img src={images.logo_accor_wide} alt="Accor Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_birmingham_airport} alt="Birmingham Airport Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_crest_nicholson_wide} alt="Crest Nicholson Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_heathrow} alt="Heathrow Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_ihg} alt="IHG Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_ikea} alt="Ikea Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_john_lewis} alt="John Lewis Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_leonardo_hotels} alt="Leonardo Hotels Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_marks_and_spencer} alt="Marks & Spencer Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_redrow} alt="Redrow Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_taylor_wimpey} alt="Taylor Wimpey Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_unite_students} alt="Unite Students Logo" className="filter-color" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={images.logo_waitrose} alt="Waitrose Logo" className="filter-color" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default TrustedBy;
