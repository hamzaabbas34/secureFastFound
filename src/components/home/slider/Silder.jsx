import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "./swp.css";
export default function Slider() {
	return (
		<div className=" mb-10 relative w-full h-auto flex-col flex items-center justify-center px-3 md:px-20 lg:px-32 xl:px-40 2xl:px-48">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				spaceBetween={200}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 800,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation, Pagination, EffectCoverflow]}
				breakpoints={{
					// when window width is >= 320px (mobile)
					320: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					// when window width is >= 640px (tablet)
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// when window width is >= 768px (larger tablet/small laptop)
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					// when window width is >= 1024px (desktop)
					1024: {
						slidesPerView: 2,
						spaceBetween: 120,
					},
					1440: {
						slidesPerView: 2,
						spaceBetween: 180,
					},
				}}
				className="swiper-container w-full  h-auto">
				<SwiperSlide>
					<div className="overflow-hidden   swiper-slide flex items-center justify-center bg-white shadow-lg rounded-lg text-lg font-bold ">
						<div className=" bg-bgGreen flex flex-col gap-5 font-normal   px-8 py-4 ">
							<div className=" flex items-center gap-5">
								<Icon
									icon="fa:quote-left"
									width="2rem"
									height="2rem"
									style={{ color: "white" }}
								/>
								<div className="flex justify-center items-center gap-2 ">
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
								</div>
							</div>
							<p className="font-poppins text-white pb-6 ">
								Lorem ipsum dolor sit amet consectetur. Elit sociis consequat
								venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet
								consectetur. Elit sociis consequat venenatis justo.
							</p>
						</div>
						<div className="  flex justify-center items-center flex-col gap-10  h-auto  py-4">
							<div className="  left-[40%] top-[-20px]  w-28 h-28  rounded-full overflow-hidden  mt-[-30px] ">
								<img
									src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
									alt=""
									className="w-100 h-[100%] object-cover object-top  "
								/>
							</div>
							<h2 className="font-poppins  ">VENZONE</h2>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=" overflow-hidden swiper-slide flex items-center justify-center bg-white shadow-lg rounded-lg text-lg font-bold ">
						<div className=" bg-bgGreen flex flex-col gap-5 font-normal   px-8 py-4 ">
							<div className=" flex items-center gap-5">
								<Icon
									icon="fa:quote-left"
									width="2rem"
									height="2rem"
									style={{ color: "white" }}
								/>
								<div className="flex justify-center items-center gap-2 ">
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
								</div>
							</div>
							<p className="font-poppins text-white pb-6 ">
								Lorem ipsum dolor sit amet consectetur. Elit sociis consequat
								venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet
								consectetur. Elit sociis consequat venenatis justo.
							</p>
						</div>
						<div className="  flex justify-center items-center flex-col gap-10  h-auto  py-4">
							<div className="  left-[40%] top-[-20px]  w-28 h-28  rounded-full overflow-hidden  mt-[-30px] ">
								<img
									src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
									alt=""
									className="w-100 h-[100%] object-cover object-top  "
								/>
							</div>
							<h2 className="font-poppins  ">VENZONE</h2>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="overflow-hidden swiper-slide flex items-center justify-center bg-white shadow-lg rounded-lg text-lg font-bold ">
						<div className=" bg-bgGreen flex flex-col gap-5 font-normal   px-8 py-4 ">
							<div className=" flex items-center gap-5">
								<Icon
									icon="fa:quote-left"
									width="2rem"
									height="2rem"
									style={{ color: "white" }}
								/>
								<div className="flex justify-center items-center gap-2 ">
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
								</div>
							</div>
							<p className="font-poppins text-white pb-6 ">
								Lorem ipsum dolor sit amet consectetur. Elit sociis consequat
								venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet
								consectetur. Elit sociis consequat venenatis justo.
							</p>
						</div>
						<div className="  flex justify-center items-center flex-col gap-10  h-auto  py-4">
							<div className="  left-[40%] top-[-20px]  w-28 h-28  rounded-full overflow-hidden  mt-[-30px] ">
								<img
									src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
									alt=""
									className="w-100 h-[100%] object-cover object-top  "
								/>
							</div>
							<h2 className="font-poppins  ">VENZONE</h2>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className=" overflow-hidden swiper-slide flex items-center justify-center bg-white shadow-lg rounded-lg text-lg font-bold ">
						<div className=" bg-bgGreen flex flex-col gap-5 font-normal   px-8 py-4 ">
							<div className=" flex items-center gap-5">
								<Icon
									icon="fa:quote-left"
									width="2rem"
									height="2rem"
									style={{ color: "white" }}
								/>
								<div className="flex justify-center items-center gap-2 ">
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
									<img src="./images/star.png" alt="" width="20px" />
								</div>
							</div>
							<p className="font-poppins text-white pb-6 ">
								Lorem ipsum dolor sit amet consectetur. Elit sociis consequat
								venenatis justo sed aenean amet lacus.Lorem ipsum dolor sit amet
								consectetur. Elit sociis consequat venenatis justo.
							</p>
						</div>
						<div className="  flex justify-center items-center flex-col gap-10  h-auto  py-4">
							<div className="  left-[40%] top-[-20px]  w-28 h-28  rounded-full overflow-hidden  mt-[-30px] ">
								<img
									src="https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
									alt=""
									className="w-100 h-[100%] object-cover object-top  "
								/>
							</div>
							<h2 className="font-poppins  ">VENZONE</h2>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
