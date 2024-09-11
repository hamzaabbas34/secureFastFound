import React from "react";
import "./home.css";
import { Icon } from "@iconify/react";

import Navbar from "../Navbar/Navbar";
import Abouts from "./abouts/Abouts";
import Sours from "./sours/Sours";
import OurLon from "./ourLoan/OurLon";
import Process from "./Proces/Process";
import Slider from "./slider/Silder";
import Footer from "./Footer/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="myhome  w-100">
				<div className="  px-3  md:px-20   lg:px-32  xl:px-40   2xl:px	-48    ">
					<div className=" lg:w-4/5  xl:w-4/5 2xl:w-2/3 ">
						<h2 className=" text-[2rem] leading-[40px]  md:text-[2.7rem] md:leading-[50px] font-poppins font-bold my-6 ">
							Lift Your Small Business Wings With Secure Fast Funding
						</h2>
						<p className="text-[22px] md:text-[25px] font-poppins font-normal">
							Get the Exact Loan Your Business Needs toÂ Succeed!
						</p>
					</div>
					<div className="btn flex align-center my-7 gap-4  flex-wrap ">
						<button className="px-10 py-3 bg-bgBlue rounded-md font-poppins font-medium w-[178px]">
							apply Now
						</button>
						<button className="flex items-center bg-bgGreen text-white py-2 px-3 rounded-md">
							<span>
								<Icon
									icon="prime:whatsapp"
									width="2rem"
									height="2rem"
									style={{ color: "white" }}
								/>
							</span>
							934534534534
						</button>
					</div>
				</div>
			</div>
			<Sours />
			<Abouts />
			<OurLon />
			<Process />
			<div className="relative ">
				<Slider />
			</div>
			<div className=" mb-[-85px]">
				<div className=" w-full lg:flex justify-center items-center  mt-[0px] mb-5  hidden ">
					<div className=" max-w-[600px] justify-center gap-10 items-center border-[#00000033] border-2  rounded-3xl   w-full  flex py-16 bg-[#83e0b3] flex-wrap  px-2">
						<button className="w-[175px] py-3 bg-bgBlue text-white rounded-md  ">
							Apply Now
						</button>
						<button className="flex items-center bg-bgGreen text-white py-2 px-3 rounded-md">
							<span>
								<Icon
									icon="prime:whatsapp"
									width="2rem"
									height="2rem"
									style={{ color: "white" }}
								/>
							</span>
							934534534534
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

// @media (max-width: 425px) {
//     .swiper-button-next,
// 	.swiper-rtl {
// 		left: 55%;
// 	}
//     .swiper-button-prev,
// 	.swiper-rtl {
// 		left: 37%;
// 	}

// }
