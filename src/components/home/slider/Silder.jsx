import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";
import card1 from "../../../assets/images/card1.jpg";
import card2 from "../../../assets/images/swiper_imgCard2_psl3t2.jpg";
import card3 from "../../../assets/images/card3.png";
import card4 from "../../../assets/images/card4.jpg";
import stars from "../../../assets/images/star.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./swp.css";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
const data = [
	{
		name: "SUZANA",
		review: `"I am extremely satisfied with the team's professionalism and their assistance in securing our loan. We highly recommend them."`,
		image: card1,
		stars: 0,
	},
	{
		name: "Mark D",
		review: `"I wasn't sure about getting a loan, but Secure Fast Funding made it a breeze. Fast, friendly, and they really get small businesses. I'm a fan!"`,
		image: card4,
		stars: 1,
	},
	{
		name: "Sam P",
		review: `"Secure Fast Funding saved our business! We needed cash fast, and they came through with a simple process and no headaches. We're back on our feet, thanks to them"`,
		image: card2,
		stars: 2,
	},
	{
		name: "Kelly R",
		review: `"These folks are amazing. They got us the funding we needed to open a new location, and it was so easy. No stress, just results. Highly recommend!" `,
		image: card3,
		stars: 4,
	},
];

export default function Silder() {
	return (
		<div
			className="swiper-container  w-full   my-8"
			style={{ padding: "20px" }}>
			<Swiper
				breakpoints={{
					// When window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					// When window width is >= 640px
					640: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					786: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					// When window width is >= 1024px
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
				freeMode={true}
				loop={true}
				centeredSlides={true}
				pagination={{ clickable: true }}
				autoplay={{
					delay: 1000, // Slide changes every 3 seconds
					disableOnInteraction: false, // Allows interaction and keeps autoplay running
				}}
				slidesPerGroup={1} // Move one slide at a time
				modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
				className="mySwiper">
				{data.map((dt, index) => (
					<SwiperSlide key={index}>
						<div className=" myhei relative swiper-slide flex items-center justify-center bg-white shadow-lg text-lg font-bold">
							<div className="bg-bgGreen flex flex-col gap-5 font-normal px-8 py-4">
								<div className="flex items-center gap-5">
									<Icon
										icon="fa:quote-left"
										width="2rem"
										height="2rem"
										style={{ color: "white" }}
									/>
									<div className="flex justify-center items-center gap-2">
										<img src={stars} alt="star" width="20px" />
										<img src={stars} alt="star" width="20px" />
										<img src={stars} alt="star" width="20px" />
										<img src={stars} alt="star" width="20px" />
									</div>
								</div>
								<p className="font-poppins text-[16px] text-white pb-6">
									{dt.review}
								</p>
							</div>
							<div className="flex justify-center items-center flex-col gap-10 py-4">
								<div className="w-28 h-28 rounded-full overflow-hidden mt-[-30px]">
									<img
										src={dt.image}
										alt="Profile"
										className="w-full h-full object-cover object-top"
									/>
								</div>
								<h2 className="font-poppins">{dt.name}</h2>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
